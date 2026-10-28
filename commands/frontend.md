---
description: Criar, editar, ajustar, refatorar ou revisar interfaces e aplicações front-end com consultoria ativa de UX/UI, estados completos, responsividade e validação Playwright.
argument-hint: [criar tela | editar componente | ajustar layout | corrigir bug | descricao]
---

Leia [../skills/interactive-consultant/SKILL.md](../skills/interactive-consultant/SKILL.md), o playbook `/frontend` em [../skills/interactive-consultant/references/playbooks.md](../skills/interactive-consultant/references/playbooks.md), [../skills/project-workflow/SKILL.md](../skills/project-workflow/SKILL.md) e [../skills/frontend-figma-playwright/SKILL.md](../skills/frontend-figma-playwright/SKILL.md).

Pedido ou contexto inicial do usuário: `$ARGUMENTS`

## Como agir agora:
1. **Diagnóstico do projeto front-end:**
   - Inspecione a pasta atual (`package.json`, `AGENTS.md`, `DESIGN.md`, tokens, rotas e componentes existentes) para saber se é criação do zero ou edição/ajuste em código existente.
2. **Consultoria de UX, UI e Arquitetura Front-end:**
   - Antes de sair alterando código, apresente um diagnóstico curto apontando **o que pode ser melhorado** no fluxo pedido (estados `loading`/`empty`/`error`, responsividade mobile, acessibilidade por teclado/foco, componentização ou performance).
   - Explique quais recursos da skill serão usados (sem forçar bibliotecas desnecessárias como GSAP quando CSS/Motion bastarem).
3. **Alinhe em até 3–4 perguntas objetivas (com recomendação padrão):**
   - Dúvidas de comportamento/UX da tela ou ajuste;
   - Uso de Figma MCP ou autorização para seguir direto em `DESIGN.md` / código;
   - Se o usuário quer **Executar Direto Aqui** (implementar e validar com Playwright) ou **Gerar o Prompt Estruturado** para outro agente.
