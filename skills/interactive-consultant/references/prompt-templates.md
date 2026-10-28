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

## 3. Molde para `/frontend` — CRIAR Aplicação Web / Dashboard / Painel / Fluxo Complexo

Quando o pedido em `/frontend` for um **sistema, painel administrativo, CRM, portal ou fluxo de produto** (e não uma landing page promocional):

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/SKILL.md e [CAMINHO_DO_KIT]/skills/project-workflow/references/validation.md.

## OBJETIVO DO SISTEMA / FLUXO FRONT-END
- Produto e perfil de uso: [ex.: Painel operacional de uso diário — priorizar clareza, densidade controlada, velocidade e atalhos de teclado sobre animações longas]
- Stack: [stack existente preservada ou stack definida]
- Figma: [link do arquivo Figma MCP | autorizado documentar tokens em `DESIGN.md` + `/styleguide.html` e seguir para o código]

## TELAS, COMPONENTES E ESTADOS OBRIGATÓRIOS
Para cada tela/fluxo (`[listar telas]`):
1. **Estado Vazio (`Empty State`):** instrução clara + CTA primário para criar o primeiro registro.
2. **Estado Carregando (`Loading / Skeleton`):** preserva medidas sem layout shift (`CLS = 0`).
3. **Estado com Dados (`Loaded`):** tabela/grid com `tabular-nums`, busca, filtros combináveis, paginação/ordenação e ações por linha.
4. **Estado de Erro e Validação de Formulário:** mensagens inline com `role="alert"`, `aria-invalid`, preservação do que o usuário digitou e proteção contra duplo clique no submit.
5. **Acessibilidade e Responsividade:** navegação completa por teclado (`Tab`, `Esc`, foco preso em modais/gavetas) e adaptação de `360px` a `1920px`.

## VALIDAÇÃO
- Execute `typecheck`, `build`, testes de componente e roteiro E2E com `Playwright` comprovando os fluxos principais e a ausência de erros de console.
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
