# Sistema Visual para Criação e Redesign de Telas e Sistemas (`/frontend`)

Este guia traz para aplicações web, sistemas, painéis, CRMs e fluxos internos a mesma exigência de direção criativa, tokens, ergonomia e revisão crítica de [landing-page.md](landing-page.md), consolidada a partir da evolução de produtos reais (como sistemas financeiros e diários de treino).

Serve tanto para **criar telas novas** quanto para **redesenhar, ajustar ou elevar o nível visual de um sistema existente**.

---

## 1. Skills Complementares de Design e Motion (Recomendadas)

Quando o ambiente permitir instalar skills no projeto (`.claude/skills` ou `.agents/skills`), estes pacotes reforçam a direção visual, padrões de UI e microinterações:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
npx skills add https://github.com/kylezantos/design-motion-principles
npx skills@latest add emilkowalski/skills
npx impeccable install
```

*(Confira [catalog.md](../../project-workflow/references/catalog.md) para detalhes de origem. Se já estiverem no `skills-lock.json` do projeto, carregue-as diretamente.)*

---

## 2. Direção Criativa do Produto ("Creative North Star")

Nenhuma tela de sistema deve parecer um template genérico de dashboard. Antes de criar ou redesenhar telas, defina em `DESIGN.md` a **Metáfora Funcional do Domínio**:

- **Exemplos reais de metáfora funcional:**
  - *Sistema Financeiro ("Livro-razão vivo"):* separar em 1 segundo o dinheiro **realizado** (tinta sólida, peso maior) do **previsto/projetado** (traço pontilhado, borda tracejada).
  - *App de Treino ("Caderno de treino contemporâneo"):* feito para usar com uma mão entre séries; **a próxima ação vem sempre antes do histórico e das métricas**.
  - *CRM / Atendimento / Clínica:* fila de trabalho onde urgência, horário e próximo passo estão visíveis sem abrir modais desnecessários.

### Princípios Obrigatórios de Interface de Produto
1. **A próxima ação vem antes do histórico:** o que o usuário precisa fazer agora tem hierarquia superior aos gráficos passados.
2. **Um único acento de ação (`action` / `primary`):** marca botões primários, links e seleção ativa. Verde, âmbar e vermelho são exclusivos de **estado semântico**, nunca decoração ou botão secundário.
3. **Estado = Forma + Texto + Cor:** nenhum status depende apenas de cor. Combine sempre ícone geométrico distinto + rótulo + cor:
   - *Confirmado / Realizado:* círculo com check (`CircleCheck`) + traço sólido.
   - *Parcial / Previsto / Pendente:* triângulo (`Triangle`) ou círculo tracejado (`CircleDashed`) + borda/linha pontilhada.
   - *Falha / Vencido / Cancelado:* quadrado com X (`SquareX`).
4. **Densidade honesta:** telas operacionais podem ser densas e diretas; páginas de apresentação respiram.

---

## 3. Sistema de Tokens (`tokens.css`) e Contraste WCAG AA Calculado

- **Proibido usar hex solto ou classes de paleta padrão do Tailwind (`blue-500`, `emerald-500`, `gray-100`, `slate-800`) nos componentes.**
- Todos os valores vivem em `src/styles/tokens.css` (expostos ao Tailwind via `@theme` ou `tailwind.config`), com suporte real a **Tema Claro e Tema Escuro**:
  - Superfícies: `bg` (página), `surface` (painéis/cards/sheets), `subtle` (agrupamento leve/chips inativos), `selected` (linha/item selecionado), `night` (objetos escuros fixos como tooltips).
  - Texto e linhas: `ink` / `foreground`, `muted`, `line` (`ink` a 10–12%).
  - Ação e foco: `action` / `primary`, `on-action`, `focus` / `ring`.
- **Cálculo obrigatório de contraste AA (≥ 4,5:1 para texto, ≥ 3:1 para marcas gráficas):**
  - Calcule e documente em tabela no `DESIGN.md` o contraste de cada token de texto (`ink`, `muted`, `action`, `success`, `warning`, `destructive`) sobre **cada superfície em que ele aparece** (`bg`, `surface`, `subtle` e `selected`), tanto no tema claro quanto no escuro.
  - Se uma cor reprovar (ex.: um coral ou verde que dá `3,4:1` no claro), ajuste a luminosidade do token antes de codar.
- **Sombras tingidas:** use o tom de `ink` em baixa opacidade no tema claro; no tema escuro, a elevação vem da borda clara sutil (`1px`) e não de sombra preta.

---

## 4. Tipografia Tripla e Dados (`font-data`)

1. **Display:** para títulos de página, cabeçalhos de painel e valores-âncora.
2. **Interface / Leitura:** sans limpa (ex.: Manrope, Plus Jakarta Sans, Figtree) de alta legibilidade em `14px–16px`.
3. **Dados (`font-data`):** fonte monoespaçada (ex.: JetBrains Mono) ou `tabular-nums` obrigatório em tabelas, saldos, contadores, datas, séries e códigos.
   - **Números nunca ficam mudos:** acompanhe sempre de **unidade e janela de tempo** (ex.: *"3 sessões nesta semana"*, *"R$ 1.420,00 previstos até dia 30"*).
   - **Gráficos honestos e acessíveis:** linha de série validada com contraste ≥ 3:1 contra a superfície, eixo Y com passos redondos, leitura de valor no hover/toque **e por setas do teclado com `aria-live`**.

---

## 5. Ergonomia, Formulários e Responsividade ("Recompor, não encolher")

- **Recompor por largura (`360px` a `2560px`):**
  - Telas estreitas (`< 640px`) ganham layout próprio: tabelas largas viram listas estruturadas; grafos viram pilhas; navegação principal usa barra inferior (`Bottom Nav` de até 5 itens) no mobile e `Sidebar` (`240px`) a partir de `lg`.
  - Trilhos horizontais de filtros no mobile usam `.no-scrollbar` + máscara de fade lateral e quebram em linha a partir de `sm`.
- **Campos e Formulários:**
  - Fonte de `input`/`select`/`textarea` **nunca menor que `16px` no mobile** (evita zoom automático no iOS).
  - Alvos de toque sempre `≥ 44px` (`48px` padrão em botões e linhas clicáveis).
  - Estrutura fixa: `label` acima → campo → texto de ajuda abaixo → erro inline abaixo com `role="alert"` e `aria-invalid` (placeholder nunca substitui `label`; erro de formulário nunca aparece só em toast).
- **Estados Completos em Toda Tela:**
  - `Loading`: skeleton com a forma exata do conteúdo final; botão em envio mantém a largura e troca apenas o rótulo.
  - `Empty State`: ícone + explicação clara do que aparecerá ali + botão de ação imediata.
  - `Error State`: contexto claro do erro + botão `"Tentar novamente"`.

---

## 6. Motion de Produto e Microinterações

- Tokens padrão: `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`, `--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)`, durações `120 / 180 / 280 / 560 ms`.
- **Seleção troca na hora (Regra Anti-Flick):** itens de menu, abas, chips de filtro, dias de calendário e seletores de status mudam de estado ativo **instantaneamente**, sem transição lenta de cor de fundo (que causa efeito visual de "piscar" entre o item antigo e o novo). Transição de cor ocorre apenas no `hover` (`@media (hover: hover)`).
- **Pressão tátil:** botões e cards interativos respondem ao clique ativo com `scale(0.97)` em `120ms`.
- **Saídas mais rápidas que entradas:** modais, gavetas (`Sheet`) e menus entram em `240–280ms` (`ease-out`) e saem em `160–180ms`.
- Respeite `prefers-reduced-motion: reduce` reduzindo transições a `0.01ms` e desativando animações contínuas.

---

## 7. Regras Anti-Slop (Revisão Crítica Obrigatória)

Procure e elimine antes de entregar:
- Gradientes roxo-azul, blobs de fundo, glassmorphism decorativo ou neon sem função;
- Cores default do Tailwind (`blue-500`, `green-500`, `red-500`, `gray-200`) fora de `tokens.css`;
- Emojis usados como ícone de interface (use Lucide ou Phosphor consistentes);
- Cartões dentro de cartões sem hierarquia real;
- Travessão longo (`—`) em textos visíveis e jargões vazios (*"revolucionário"*, *"potencialize"*, *"sem atrito"*);
- Botões que quebram linha entre `lg` e `xl` por causa do comprimento maior de textos em português;
- Perda de foco ao fechar um `Dialog`/`Sheet` com `Esc` ou ao trocar o estado de um botão.
