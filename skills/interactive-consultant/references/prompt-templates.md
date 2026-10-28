# Moldes Oficiais para Geração Dinâmica de Prompts (Criar, Editar e Ajustar)

Quando o usuário escolher a opção **"Gerar Prompt(s) Pronto(s)"** durante o atendimento consultivo, **nunca** entregue um prompt curto ou genérico. Preencha os moldes abaixo com todas as decisões tomadas na conversa e com os caminhos reais das skills.

---

## 1. Molde para `/landingpage` — CRIAR Nova Landing Page (2 Prompts Já Preenchidos: Mídia + Aplicação)

Sempre que for **criação de landing page**, entregue **2 blocos Markdown completos e já preenchidos para o nicho do usuário** (não coloque questionários dentro do Prompt 1, pois você mesmo já alinhou o escopo com o usuário):

### Bloco 1: PASSO 1 — Prompt para Gerar as Imagens e Vídeos (Enviar ao ChatGPT / Codex)

```markdown
Você vai gerar o pacote completo de mídia otimizada (AVIF + WebP + MP4 + 120 quadros de `<canvas>`) para a landing page de **[NOME E NICHO DO PROJETO]** seguindo o arquétipo **[ARQ-A | ARQ-B | ARQ-D]**.

## 1. DIREÇÃO DE ARTE E FOTOGRAFIA
- **Estética e Iluminação:** [Descrever iluminação, atmosfera e referências visuais do arquétipo]
- **Paleta dominante nas fotos:** [Listar cores hex do arquétipo]
- **PROIBIÇÕES:** Nunca use vídeos de banco baixados às cegas por URL, marcas d'água, textos sobrepostos ou iluminação neon artificial.

## 2. LISTA DE ARQUIVOS OBRIGATÓRIOS EM `./media/` (TODOS EM `.avif` E `.webp`)
[Preencher conforme o arquétipo escolhido:]
- **Se `ARQ-A` (Grade Estrutural Noturna — ex.: Advocacia / Consultoria):**
  - `hero-main.{avif,webp}` (`1920x1200`), `section-editorial.{avif,webp}` (`1400x1050`), `bento-01-architecture.{avif,webp}`, `bento-02-detail.{avif,webp}`, `bento-03-library.{avif,webp}`, `team-01..03.{avif,webp}` (`960x1200`), `contact-space.{avif,webp}` (`1600x1000`).
  - `hero-ambient.mp4` (`1280x720`, 4.5s loop contínuo com `xfade` de `0.5s`, `CRF 24`, `-movflags +faststart`, `-an`).
  - `frames/frame_0001.{avif,webp}`..`frame_0120.{avif,webp}` (`1024x576`, 24 fps): travessia cinematográfica em chiaroscuro conectando as cenas autorais com varredura de feixe de luz lateral.
- **Se `ARQ-B` (Editorial Orgânico & Tátil — ex.: Arquitetura / Design):**
  - Mesmas fotos editoriais em atmosfera clara de linho/travertino `#F2EFE9` + **`sketch-before.{avif,webp}` (`1024x576`)** com croqui arquitetônico traçado à mão perfeitamente alinhado ao ângulo de `hero-main`.
  - `hero-ambient.mp4` (`1280x720`, 4.5s loop com `xfade` de `0.5s`, brisa na vegetação e reflexo d'água).
  - `frames/frame_0001.{avif,webp}`..`frame_0120.{avif,webp}` (`1024x576`, 24 fps): Quadros 001–035 (croqui em papel linho ganhando linhas de construção) ➔ Quadros 036–085 (varredura diagonal dourada revelando a obra construída) ➔ Quadros 086–120 (obra iluminada com reflexo vivo).
- **Se `ARQ-D` (Boutique Editorial & Catálogo com Sacola WhatsApp — ex.: Loja de Roupa Feminina / Ateliê):**
  - Editoriais: `hero-main.{avif,webp}` (`1920x1200`), `hero-ambient.mp4` (`1280x720`, 4.5s loop `xfade`), `lookbook-full.{avif,webp}` (`1200x1500`, `4:5` para *Compre o Look*), `atelier-process.{avif,webp}` (`1400x1050`), `founder-portrait.{avif,webp}` (`1200x1500`, `4:5`), `sketch-before.{avif,webp}` (`1024x576`) e `frames/frame_0001..0120.{avif,webp}` (`1024x576`, evolução do molde/croqui para a peça pronta).
  - **Catálogo `4:5` (`1000x1250`, 8 pares com Frente `-a` + Hover/Detalhe `-b` em `.avif` e `.webp`):** `prod-01-a.{avif,webp}` e `prod-01-b.{avif,webp}` até `prod-08-a/b` (descrever cada uma das 8 peças do nicho).
- **Se `ARQ-E` (Precisão Clínica & Cuidado Humano — ex.: Odontologia / Fisioterapia / Estética Avançada):**
  - Clínicos e Anatômicos: `hero-specialist.{avif,webp}` (`1200x1400` sobre fundo `#F2F5F9`), `hero-ambient.mp4` (`1280x720`, 4.5s loop `xfade`), `anatomy-top.{avif,webp}` + `anatomy-base.{avif,webp}` (`900x900`, para a montagem que se encaixa no scroll) + `anatomy-assembled.{avif,webp}` (`1200x1000`), `specialist-hands.{avif,webp}` (`1000x1200`), `clinic-reception.{avif,webp}` (`1600x1000`).
  - **Leque de 5 Queixas/Casos (`4:5`, `800x1000`):** `case-01..05.{avif,webp}`.
  - **Timeline Fixada de 4 Etapas (`4:5`, `1000x1250`):** `step-01-avaliacao.{avif,webp}`, `step-02-planejamento.{avif,webp}`, `step-03-procedimento.{avif,webp}`, `step-04-acompanhamento.{avif,webp}`.
  - **Sequência `<canvas>` (`frames/frame_0001..0120.{avif,webp}`, `1024x576`):** escaneamento/planejamento 3D encaixando os eixos de precisão com pulso luminoso azul `#5B8DEF`.

## 3. REGRAS CRÍTICAS DE CODIFICAÇÃO E VALIDAÇÃO
1. **Proibido usar `-f image2 frame_%04d.avif` em lote com `-still-picture 1`** (grava header `av1C` vazio que falha no Chrome/Edge). Codifique cada `.avif` individualmente num laço `for` com `-frames:v 1`.
2. **Loop sem salto em `hero-ambient.mp4`:** use `xfade=transition=fade:duration=0.5:offset=4.5`.
3. Inspecione visualmente os quadros `0010`, `0060` e `0110` e gere `MEDIA_MANIFEST.json` com `"status": "ready"`.
```

### Bloco 2: PASSO 2 — Prompt para Implementar a Aplicação Completa (Enviar ao Claude Code)
- Preencha integralmente o preset correspondente de [04-prompt-implementar-codigo.md](../../frontend-figma-playwright/pipeline-midia/04-prompt-implementar-codigo.md) (`ARQ-A`, `ARQ-B`, `ARQ-D` ou `Mix & Match`), adaptado com o nome, paleta, seções, produtos/serviços e regras de validação do projeto.

---

## 2. Molde para `/landingpage` ou `/frontend` — EDITAR / AJUSTAR Projeto Existente

Quando o usuário quiser **editar, ajustar, corrigir ou evoluir** uma página ou aplicação front-end existente, gere o prompt com esta estrutura:

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md e [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/SKILL.md (e [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/scroll-motion.md se envolver animação de scroll).

## CONTEXTO DO PROJETO ATUAL
- Pasta do projeto: `[CAMINHO_DO_PROJETO]`
- Stack e padrões identificados: [ex.: React 19 + Vite + Tailwind v4 + Motion/GSAP]
- Arquivos diretamente afetados: `[lista de arquivos identificados na inspeção]`
- O que DEVE ser preservado intacto: [rotas, outras seções, tokens de marca, contratos existentes]

## OBJETIVO DA EDIÇÃO / AJUSTE
1. [Mudança 1 detalhada com estados visuais: default, hover, focus, loading, empty, error]
2. [Mudança 2 detalhada — ex.: adicionar seleção de tamanho na sacola e atualizar `whatsapp.ts`]
3. [Melhorias recomendadas aprovadas pelo usuário]

## REGRAS DE IMPLEMENTAÇÃO E VALIDAÇÃO
- Atualize `AGENTS.md` / `DESIGN.md` apenas nos pontos afetados pela mudança.
- [Se envolver mídia nova: garanta versão `.avif` + `.webp` com `?v=${MEDIA_VERSION}`.]
- Execute `typecheck`, `lint`, `test` (atualizando/criando testes para o comportamento novo) e valide visualmente com `Playwright` (desktop + mobile + teclado/foco + zero overflow horizontal).
```

---

## 3. Molde para `/frontend` — CRIAR ou REDESENHAR Telas, Sistemas, Dashboards e Apps (Padrão `product-ui-system.md`)

Quando o pedido em `/frontend` for criar, redesenhar ou elevar o nível de telas de um sistema/aplicação (como no padrão usado em `FinanceHub` e `GymHub`):

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/product-ui-system.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/landing-page.md e [CAMINHO_DO_KIT]/skills/project-workflow/references/validation.md.

(Opcional, se ainda não instaladas no projeto):
npx skills add https://github.com/Leonxlnx/taste-skill
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
npx skills add https://github.com/kylezantos/design-motion-principles

Quero que você atue simultaneamente como diretor de criação digital, designer de produto e UI/UX, desenvolvedor frontend sênior, especialista em motion, acessibilidade e performance, e revisor visual extremamente crítico.

## CONTEXTO E DIREÇÃO CRIATIVA ("CREATIVE NORTH STAR")
- Produto e Objetivo: [criar | redesenhar | ajustar] [nome do sistema / telas alvo]
- Metáfora Funcional (*Creative North Star*): [ex.: "Livro-razão vivo" | "Caderno de treino contemporâneo" | "Mesa de operações limpa"]
- Princípio de Hierarquia: **A próxima ação vem sempre antes do histórico e das métricas.**
- Stack: [preservar stack existente | Vite + React + TS strict + Tailwind + Motion + Fontsource]
- Figma: [link do arquivo Figma MCP | autorizado documentar em `DESIGN.md` + `tokens.css` e seguir direto para o código]

## ETAPAS OBRIGATÓRIAS DE EXECUÇÃO
1. **ETAPA 1 — INSPEÇÃO:** mapeie stack, rotas, componentes e o que deve ser preservado.
2. **ETAPA 2 — DESIGN.md e `tokens.css` (Claro + Escuro):**
   - Zero hex solto e zero cor default do Tailwind (`blue-500`, `emerald-500`, `gray-100`) nos componentes.
   - Um único acento de ação (`action` / `primary`). Verde, âmbar e vermelho exclusivos para estados semânticos.
   - **Estado = Forma (ícone) + Texto + Cor** (e diferenciação visual entre realizado/confirmado em traço sólido vs. previsto/pendente em traço pontilhado).
   - **Tabela de Contraste WCAG AA (≥ 4,5:1)** calculada para cada token de texto sobre cada superfície (`bg`, `surface`, `subtle`, `selected`) no claro e no escuro.
   - **Tipografia Tripla:** Display + UI + `font-data` (`tabular-nums`), sempre com unidade e janela de tempo nos números.
3. **ETAPA 3 — IMPLEMENTATION_PLAN.md:** arquitetura, componentes e estratégia de responsividade.
4. **ETAPA 4 — IMPLEMENTAÇÃO DAS TELAS E FLUXOS (`[listar telas/componentes]`):**
   - **Recompor, não encolher:** layout próprio no mobile (`< 640px`, barra inferior / listas estruturadas, inputs `≥ 16px`, alvos `≥ 44px`) e sidebar/split no desktop (`≥ 1024px`).
   - **Estados completos em cada tela:** `Empty State` útil com CTA, `Loading/Skeleton` sem layout shift, `Error inline` (`role="alert"`, `aria-invalid`, nunca só em toast).
   - **Motion de produto:** seleção em abas/menus/filtros troca na hora (sem flick de transição de cor), feedback tátil `scale(0.97)` em `120ms`, `prefers-reduced-motion` respeitado.
   - **Regras Anti-Slop:** zero gradiente roxo-azul, zero glassmorphism decorativo, zero emoji como ícone, zero travessão longo (`—`).
5. **ETAPA 5 e 6 — VALIDAÇÃO PLAYWRIGHT + REVISÃO CRÍTICA:**
   - Rode `typecheck`, `lint`, `test`, `build` e verifique com Playwright (claro + escuro, teclado `Tab`/`Esc`, e zero overflow horizontal de `360px` a `2560px`).
```

---

## 4. Molde para `/backend` e `/database` — CRIAR ou EDITAR API, Regra de Negócio e Banco

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md, [CAMINHO_DO_KIT]/skills/backend-dotnet/SKILL.md, [CAMINHO_DO_KIT]/skills/database-persistence/SKILL.md e [CAMINHO_DO_KIT]/skills/software-documentation/SKILL.md.

## CONTEXTO E ARQUITETURA PRESERVADA
- Solução / Repositório: `[CAMINHO_DO_PROJETO]`
- Stack / TargetFramework: `[identificado na inspeção]`
- Camadas e padrões existentes a preservar: `[ex.: Controllers -> Services -> EF Core, sem introduzir CQRS/Mediator fora do padrão]`

## ESCOPO TÉCNICO (CRIAR / EDITAR)
1. **Contrato de Entrada e Saída (DTOs / Endpoints):**
   - `[Método + Rota, Request DTO, Response DTO, códigos HTTP 200/201/400/401/403/404/409/422 com ProblemDetails]`
2. **Regras de Negócio e Invariantes:**
   - `[Validações na fronteira vs. invariantes de domínio]`
3. **Persistência, Concorrência e Performance (`database-persistence`):**
   - `[Consultas com projeção/paginação, prevenção de N+1, índices necessários, isolamento de transação/idempotência]`
   - **Regra de Migration:** gere a migration e revise o SQL gerado, mas **não aplique** em banco compartilhado sem autorização explícita.
4. **Segurança e Resiliência:**
   - `[Autenticação/Autorização por recurso, propagação de CancellationToken, timeouts em integrações externas]`

## VALIDAÇÃO OBRIGATÓRIA
- Execute `build`, testes unitários/integração cobrindo caminho feliz + erros de validação + permissão + concorrência, e atualize a documentação de contrato (`OpenAPI` / `README` / `ADR` se houver decisão durável).
```
