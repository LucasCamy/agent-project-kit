---
description: Criar, editar, ajustar, refatorar ou revisar interfaces e aplicações front-end com consultoria ativa de UX/UI, estados completos, responsividade e validação Playwright.
argument-hint: [criar tela | editar componente | ajustar layout | corrigir bug | descricao]
---

Leia [../skills/interactive-consultant/SKILL.md](../skills/interactive-consultant/SKILL.md), o playbook `/frontend` em [../skills/interactive-consultant/references/playbooks.md](../skills/interactive-consultant/references/playbooks.md), [../skills/project-workflow/SKILL.md](../skills/project-workflow/SKILL.md), [../skills/frontend-figma-playwright/SKILL.md](../skills/frontend-figma-playwright/SKILL.md), [../skills/frontend-figma-playwright/references/product-ui-system.md](../skills/frontend-figma-playwright/references/product-ui-system.md) e [../skills/frontend-figma-playwright/references/landing-page.md](../skills/frontend-figma-playwright/references/landing-page.md).

Pedido ou contexto inicial do usuário: `$ARGUMENTS`

## Como agir agora:
1. **Diagnóstico do projeto front-end:**
   - Inspecione a pasta atual (`package.json`, `skills-lock.json`, `AGENTS.md`, `DESIGN.md`, `tokens.css`, rotas e componentes existentes) para saber se é criação do zero ou redesign/edição/ajuste em código existente.
   - Verifique se as skills visuais complementares (`taste-skill`, `ui-ux-pro-max-skill`, `design-motion-principles`, `impeccable`, `emilkowalski/skills`) já estão instaladas na pasta; se não estiverem e o projeto for um redesign/criação de tela maior, mencione o bloco rápido de instalação de `product-ui-system.md`.
2. **Consultoria de Direção Visual, UX e Arquitetura Front-end (Padrão `product-ui-system.md`):**
   - Proponha ou preserve a **Metáfora Funcional do Produto (*Creative North Star*)** em `DESIGN.md` (ex.: *"Livro-razão vivo"*, *"Caderno de treino contemporâneo"*), onde **a próxima ação vem sempre antes do histórico**.
   - Aponte o que pode ser melhorado na tela/fluxo pedido:
     - **Tokens e Contraste AA Calculado:** `tokens.css` (claro/escuro) sem hex solto ou cores default do Tailwind (`blue-500`, `gray-100`), único acento de ação e regra `Estado = Forma (ícone) + Texto + Cor`;
     - **Dados e Tipografia:** Display + UI + `font-data` (`tabular-nums`) sempre com unidade e janela de tempo;
     - **Ergonomia e Estados Completos:** `Empty`, `Loading/Skeleton`, `Error inline` (`role="alert"`), `Recompor no mobile` (barra inferior / listas próprias, inputs `≥ 16px`, toque `≥ 44px`) e **seleção instantânea sem flick**;
     - **Regras Anti-Slop:** sem gradientes roxo-azul, sem emojis como ícone, sem travessão longo (`—`).
3. **Alinhe em até 3–4 perguntas objetivas (com recomendação padrão):**
   - Direção visual / metáfora e comportamento esperado da tela ou ajuste;
   - Uso de Figma MCP ou autorização para seguir direto em `DESIGN.md` + código;
   - Se o usuário quer **Executar Direto Aqui** (implementar e validar com Playwright de `360px` a `2560px`) ou **Gerar o Prompt Completo** (seguindo o Molde 3 de [../skills/interactive-consultant/references/prompt-templates.md](../skills/interactive-consultant/references/prompt-templates.md)).
