# Fluidez de rolagem e modais + revelação por etapas

Referência para **corrigir travamentos** (rolagem, modais, gavetas) e **fazer as animações acontecerem por etapa**, quando a pessoa chega em cada parte. Nasceu do projeto `loja-roupa-landing` (Aura Atelier), onde foi medido antes e depois. Vale para landings em React + Motion (com ou sem GSAP); os princípios valem para qualquer stack.

Kit de apoio em [`fluidez-kit/`](fluidez-kit/):

| Arquivo | Para quê |
|---|---|
| `perf-scroll.mjs` | Rola a página inteira com a CPU mais lenta e mostra, por seção, quadros longos do thread principal e quem os causou (Long Animation Frames) |
| `perf-frames.mjs` | Trace do navegador: quadros **descartados** por seção, incluindo GPU/compositor, que o `requestAnimationFrame` não enxerga; aceita `INJECT_CSS` para teste A/B |
| `perf-modal.mjs` | Abre e fecha um modal/gaveta e mostra o custo do clique, layout forçado e se o deslize roda nativo |
| `Reveal.tsx` | `RevealGroup`, `RevealItem`, `Reveal`, `MaskTitle`: revelação por etapas, só no compositor |

Os scripts usam o `playwright-core` do projeto alvo e o Edge/Chrome instalados. Rode da raiz do projeto, com o build servido (`npm run build && npm run preview`):

```bash
npm i -D playwright-core          # se o projeto ainda não tiver
node F:/Skills/skills/frontend-figma-playwright/references/fluidez-kit/perf-scroll.mjs http://localhost:4173/
HEADED=1 node F:/Skills/skills/frontend-figma-playwright/references/fluidez-kit/perf-frames.mjs http://localhost:4173/
OPEN="Abrir sacola|Menu" node F:/Skills/skills/frontend-figma-playwright/references/fluidez-kit/perf-modal.mjs http://localhost:4173/
```

---

## Método (não pule a medição)

1. **Medir antes de mexer.** Rode os três scripts com CPU 4x (`CPU=4`, padrão), no desktop e no celular (`WIDTH=390`), com `HEADED=1` para usar a GPU real. Guarde os números.
2. **Ler direito:**
   - *Quadro longo (LoAF)*: trabalho no thread principal. A atribuição diz o script e quanto foi layout forçado.
   - *Descartado* (`perf-frames`): solavanco visível.
   - *Parcial* com rolagem nativa: a rolagem andou no compositor e o conteúdo chegou um quadro depois. Não trava, então não persiga.
   - Descarte sem nenhuma tarefa longa no mesmo instante, só `WaitForVSync`, é ruído da automação.
3. **Isolar por A/B.** `INJECT_CSS='seletor{display:none!important}'` esconde suspeitos; um build com o recurso desligado confirma. Mude uma coisa por vez.
4. **Corrigir a causa medida**, usando a tabela abaixo.
5. **Medir de novo** com os mesmos parâmetros e registrar antes/depois no relatório. Depois rodar typecheck, testes, E2E e larguras (360–1920) nos dois modos de movimento.

Critérios de aceite usados:

- **Modal/gaveta:** clique com script curto e layout forçado ≈ 0 ms; fechar sem quadros > 25 ms; deslize aparecendo como animação nativa.
- **Página:** 0 Long Animation Frames na rolagem com CPU 4x; descartes perto de zero por seção.

## Sintoma → causa → correção

### Modais e gavetas

| Sintoma medido | Causa | Correção |
|---|---|---|
| Clique de abrir gasta dezenas de ms de script | Contexto único: abrir o painel re-renderiza a página toda (cards, vitrine) | Separar o contexto em partes: ações estáveis (`useMemo` com deps `[]`), dados, UI aberta, filtros. Componentes repetidos consomem só as ações |
| Deslize começa atrasado ou com tranco | Animação de `x`/`y` no Motion roda em JS no thread principal | Animar `transform` em string (`'translateX(100%)'` → `'translateX(0%)'`): o Motion entrega ao WAAPI e roda no compositor |
| Layout forçado no clique | `layout` do Motion em listas que montam junto com o painel; ler `clientWidth` logo após montar; `lenis.stop()` no mesmo quadro | Sem `layout` nessas listas (remoção recolhe altura com `exit`); medir a barra de rolagem com o painel fechado e no `resize`; adiar `lenis.stop()` e o foco para o `requestAnimationFrame` seguinte |
| Faixa vazia ao lado do painel | `scrollbar-gutter: stable` + `overflow: hidden` | Não usar gutter; compensar com `padding-right` medido antes |
| Fundo pesado | `backdrop-filter` no overlay | Overlay sólido com opacidade |

Curva de gaveta que funcionou: entrar `0.5s cubic-bezier(0.32,0.72,0,1)`, sair `0.3s` mais rápida.

### Rolagem da página

| Sintoma medido | Causa | Correção |
|---|---|---|
| ~50% de quadros ruins em todas as seções com CPU 4x | Rolagem suave por JS (Lenis e afins) amarra cada quadro ao thread principal | Remover e voltar à rolagem nativa. Cenas GSAP continuam suaves com `scrub`. Reavaliar só se a medição em aparelho modesto aprovar |
| Custo de GPU constante ao rolar | `backdrop-filter` em header fixo ou em elementos repetidos (mesmo invisíveis, como barras com `opacity: 0`) | Fundo sólido |
| Quadros parciais nas seções com revelação | `clip-path` animado em foto (repinta a cada quadro) | Capa da cor do fundo que encolhe via `transform: scaleY/scaleX`; a foto aproxima com `scale` |
| Quadro longo em `IMG.onload` / `drawImage` | Canvas desenhando imagem só "carregada" (decodifica no thread principal) e criando dezenas de `Image` de uma vez | `await img.decode()` antes de desenhar; criar em lotes de ~8 com `requestIdleCallback`; começar a carregar ~1,5 tela antes da cena |
| Rasterização de 30–40 ms na GPU ao entrar uma foto | Foto grande (1000–2000 px) exibida pequena | Versões menores (ex.: 640 px) + `srcset`/`sizes` corretos em cada uso |
| Quadros perdidos em seções com muitas animações | Animações em `x`/`y`/`scale` como props do Motion | Sempre `transform` em string e `opacity` |

## Revelação por etapas

Problema típico: as animações disparam no **primeiro pixel visível** (`whileInView` com margem pequena) e terminam antes de a pessoa chegar. A foto "já carregou" quando ela olha.

Regras:

1. **Gatilho por posição, não por fração.** Disparar quando o topo do bloco sobe até ~78–88% da altura da tela: `viewport={{ once: true, margin: '0px 0px -22% 0px' }}`. Nunca `amount: 0.5` em blocos altos: se o bloco for maior que a tela, a fração nunca é atingida e ele **nunca aparece** no celular.
2. **Sequência dentro do bloco.** O grupo dispara uma vez e os itens entram com `staggerChildren`: título → texto → foto → lista → selo.
3. **Um gesto por tipo, não o mesmo fade em tudo:**
   - título sobe por trás de uma máscara (`MaskTitle`);
   - texto `rise`;
   - foto `curtain` (cortina vertical) ou `wipe` (lateral), com capa da cor do fundo da seção (`cover="bg-..."`);
   - listas e linhas de tabela `slide`;
   - selos `pop` por último.
4. **Só compositor:** `opacity` e `transform` em string. Nada de `x`, `y`, `scale` como props, nem `clip-path` animado em foto.
5. **Movimento reduzido:** `initial={false}`, tudo aparece no estado final. Cenas de scroll ganham versão estática.
6. **Fotos centralizadas em grid** começam mais baixo que o texto ao lado: antecipe o gatilho da foto (`at` menor) para os dois entrarem juntos.
7. **Listas longas (vitrine):** gatilho próprio por card com atraso curto por coluna (`delay={(i % 4) * 0.07}`), não um grupo único para a lista inteira.

Uso do `Reveal.tsx` do kit:

```tsx
<RevealGroup at={0.22} stagger={0.12} className="grid lg:grid-cols-2 gap-12">
  <RevealItem variant="curtain" cover="bg-ivory" className="rounded-[28px]">
    <img ... />
  </RevealItem>
  <div>
    <MaskTitle id="sobre-titulo" className="h2">Poucas peças, feitas para <em>durar</em></MaskTitle>
    <RevealItem as="p">Parágrafo…</RevealItem>
  </div>
</RevealGroup>

<RevealGroup as="tbody" at={0.2} stagger={0.09}>
  {linhas.map((l) => <RevealItem as="tr" variant="slide" key={l.id}>…</RevealItem>)}
</RevealGroup>

<Reveal at={0.08} delay={(i % 4) * 0.07}><Card /></Reveal>
```

## Armadilhas que já aconteceram

- **`transform` cria bloco de contenção.** Filho `absolute inset-0` dentro de um wrapper animado passa a se posicionar pelo wrapper: dê `h-full w-full` a ele (o `RevealItem` de foto já faz isso).
- **`clip-path: inset(0)` deixado ao fim** corta a sombra da moldura. Se precisar de `clip-path`, use `transitionEnd: { clipPath: 'none' }`.
- **`amount` do `whileInView` em bloco alto** nunca dispara no celular (ver regra 1).
- **Variantes atravessam elementos comuns.** Um `RevealItem` dentro de um `<span>` posicionado continua herdando o disparo do grupo. Útil para pontos sobre foto.
- **Captura de tela "quebrada"** logo após rolar pode ser só a foto ainda carregando. Espere `networkidle` + ~1,5 s antes de concluir que é bug.
- **Asserções de E2E com texto parcial:** "12 peças" contém "2 peças". Use regex ancorada (`/^2 peças/`).
- **Contadores com `AnimatePresence mode="popLayout"`** deixam cópias saindo no DOM. Asserte pelo `aria-label` do botão, não pelo texto.
- **Checagem de overflow** que aceita qualquer ancestral com `overflow: hidden|clip` deixa passar conteúdo cortado pelo `overflow-x: clip` do `<main>`. Não conte o `main` como recorte válido.
- **Reference `scroll-motion.md`** recomenda Lenis para páginas contadas pelo scroll. Mantenha Lenis só se a medição com CPU 4x em janela real mostrar que ele não piora os quadros; na Aura Atelier, com Lenis ~50% dos quadros saíam ruins; sem ele, de 4% a 24% por seção, quase sem descartes.

---

## Prompt para colar em outro chat

```text
Leia F:/Skills/skills/frontend-figma-playwright/references/fluidez-e-revelacao.md e aplique neste projeto.

Objetivo: tirar os travamentos da rolagem e dos modais/gavetas e fazer as animações acontecerem por etapa (quando eu chego em cada parte, não antes).

Como trabalhar:
1. Inspecione a stack e como as animações, modais e rolagem estão feitos (Motion, GSAP, Lenis, CSS). Não troque de biblioteca sem medição que justifique.
2. Faça o build e sirva (npm run build && npm run preview). Meça ANTES com os scripts do kit (CPU 4x, desktop 1440 e celular 390, HEADED=1):
   - perf-scroll.mjs e perf-frames.mjs para a página inteira;
   - perf-modal.mjs para cada modal/gaveta/menu (OPEN="nome do botão").
   Me mostre a tabela por seção e o que está causando cada problema (atribuição dos Long Animation Frames, A/B com INJECT_CSS quando precisar).
3. Corrija pelas causas medidas, seguindo a tabela "Sintoma → causa → correção" da referência.
4. Animações por etapa: copie fluidez-kit/Reveal.tsx para src/components/ui/Reveal.tsx, ajuste a cor da capa ao fundo de cada seção e aplique em todas as seções com gestos variados (título com máscara, texto rise, foto curtain/wipe, listas slide, selos pop). Gatilho por posição (at), nunca por fração visível. Movimento reduzido: tudo aparece pronto.
5. Meça DEPOIS com os mesmos parâmetros e me mostre antes/depois. Rode typecheck, testes, E2E e as larguras 360–1920 nos dois modos de movimento, sem erros de console nem overflow.
6. Confira visualmente com screenshots o comportamento por etapa (seção entrando pela borda: ainda fechada; ao chegar: abre em sequência).
7. Registre as decisões no AGENTS.md do projeto (seção Desempenho) e não faça commit/push sem eu pedir.
```
