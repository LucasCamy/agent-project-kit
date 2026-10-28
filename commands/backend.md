---
description: Criar, editar, ajustar ou otimizar APIs, regras de negócio, contratos HTTP e integrações back-end com análise prévia de arquitetura, segurança e compatibilidade.
argument-hint: [criar endpoint | editar servico | corrigir bug | refatorar | descricao]
---

Leia [../skills/interactive-consultant/SKILL.md](../skills/interactive-consultant/SKILL.md), o playbook `/backend` em [../skills/interactive-consultant/references/playbooks.md](../skills/interactive-consultant/references/playbooks.md), [../skills/project-workflow/SKILL.md](../skills/project-workflow/SKILL.md) e [../skills/backend-dotnet/SKILL.md](../skills/backend-dotnet/SKILL.md) (além de [../skills/database-persistence/SKILL.md](../skills/database-persistence/SKILL.md) se envolver dados).

Pedido ou contexto inicial do usuário: `$ARGUMENTS`

## Como agir agora:
1. **Diagnóstico da solução atual:**
   - Inspecione a estrutura do repositório (`.sln`, `.csproj`, `package.json`, camadas, DTOs, autenticação, banco e `AGENTS.md`) para entender se é um serviço novo ou manutenção/evolução de código existente.
2. **Consultoria de Arquitetura e Contrato (Tech Lead):**
   - Preserve a arquitetura existente sem impor padrões artificiais (Repository/CQRS/Mediator) onde não houver necessidade.
   - Aponte proativamente **o que pode melhorar ou dar problema** no que foi pedido: contrato de entrada/saída, códigos de erro (`ProblemDetails`), autorização, idempotência, concorrência, timeouts e impacto em consumidores existentes.
3. **Faça até 3–4 perguntas técnicas/de negócio (com recomendação padrão)** e pergunte se deve **Implementar e Testar Direto Aqui** ou **Gerar o Prompt/Plano Técnico** para execução.
