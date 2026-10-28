# Moldes Oficiais para Geração Dinâmica de Prompts (Criar, Editar e Ajustar)

Quando o usuário escolher a opção **"Gerar Prompt(s) Pronto(s)"** durante o atendimento consultivo, **nunca** entregue um prompt curto ou genérico. Preencha os moldes abaixo com todas as decisões tomadas na conversa e com os caminhos reais das skills.

---

## 1. Molde para `/landingpage` — CRIAR Nova Landing Page (2 Prompts: Mídia + Aplicação)

Sempre que for **criação de landing page**, entregue **2 blocos Markdown separados**:
- **PASSO 1 — Prompt de Mídia (Enviar ao ChatGPT / Codex / Claude):** baseado em [02-prompt-gerar-midia.md](../../frontend-figma-playwright/pipeline-midia/02-prompt-gerar-midia.md), já preenchido com a estética do nicho, paleta, lista exata de arquivos `.avif` + `.webp`, vídeo `hero-ambient.mp4` com `xfade` de `0.5s`, 120 quadros de `<canvas>` codificados individualmente com `-frames:v 1` e (se for `ARQ-D`) os 8 pares de fotos `4:5` do catálogo (`prod-01-a/b` a `prod-08-a/b`).
- **PASSO 2 — Prompt da Aplicação (Enviar ao Claude Code):** baseado no preset correspondente de [04-prompt-implementar-codigo.md](../../frontend-figma-playwright/pipeline-midia/04-prompt-implementar-codigo.md) (`ARQ-A`, `ARQ-B`, `ARQ-D` ou `Mix & Match`), contendo:
  1. Leitura explícita das skills (`project-workflow`, `frontend-figma-playwright`, `landing-page.md`, `scroll-motion.md`, `conformidade-legal.md`);
  2. Direção visual completa (paleta com hex e contraste AA, tipografia Fontsource, tom da marca);
  3. Sequência detalhada de todas as seções e suas mecânicas interativas (10 técnicas de scroll ou catálogo + `BagDrawer` + `ShopTheLook` + `whatsapp.ts` no `ARQ-D`);
  4. Higiene de mídia (`<picture>` `image/avif` + `image/webp`, `?v=${MEDIA_VERSION}`, sem `canvas-sequence.mp4` em `public/media/`);
  5. Testes (`Vitest` + `Playwright` em 7 larguras + `reducedMotion`).

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
