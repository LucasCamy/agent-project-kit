---
description: Revisar e auditar um projeto existente (UX/UI com Playwright, performance/mídia, conformidade legal LGPD, segurança ou documentação/ADR) propondo melhorias práticas.
argument-hint: [tudo | ux | legal | seguranca | performance | docs]
---

Leia [../skills/interactive-consultant/SKILL.md](../skills/interactive-consultant/SKILL.md), o playbook `/review` em [../skills/interactive-consultant/references/playbooks.md](../skills/interactive-consultant/references/playbooks.md), [../skills/project-workflow/references/validation.md](../skills/project-workflow/references/validation.md), [../skills/project-workflow/references/conformidade-legal.md](../skills/project-workflow/references/conformidade-legal.md) e [../skills/software-documentation/SKILL.md](../skills/software-documentation/SKILL.md).

Foco solicitado pelo usuário: `$ARGUMENTS`

## Como agir agora:
1. **Inspecione o projeto atual** para entender stack, páginas/endpoints, mídias, formulários e documentação (`AGENTS.md`, `README.md`, `DESIGN.md`).
2. **Entregue um Diagnóstico Consultivo Priorizado:**
   - **Crítico (Corrigir já):** bugs visuais/funcionais, quebras mobile, falhas de segurança, imagens/quadros `.avif` quebrados ou riscos legais/LGPD;
   - **Recomendado (Alto impacto):** melhorias de UX/conversão, cache busting `?v=<hash>`, acessibilidade, contratos de API ou cobertura de testes;
   - **Polimento:** microinterações, documentação e organização.
3. **Pergunte ao usuário:** quais itens dessa lista ele quer que você **aplique direto agora** ou se prefere que você **gere um prompt de correção em lote** para outro agente.
