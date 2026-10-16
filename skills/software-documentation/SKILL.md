---
name: software-documentation
description: Criar e manter documentação técnica coerente com código, contratos, configuração e operação do projeto, distinguindo comportamento implementado e propostas.
---

# Documentação de software

Leia [as regras comuns](../project-workflow/references/common.md).

- Descreva comportamento atual; identifique propostas e funcionalidades não implementadas.
- Escolha a fonte: README para início rápido; OpenAPI para HTTP; ADR para decisão durável; runbook para operação, diagnóstico e recuperação; AGENTS.md para instruções persistentes aos agentes.
- Prefira fonte principal com referências a regras duplicadas. Documente o suficiente para a mudança, sem exigir documento extenso para correção trivial.
- Confira caminhos, comandos, variáveis e exemplos no projeto. Diferencie configuração obrigatória, opcional e de desenvolvimento; comandos encontrados e executados seguem a distinção das regras comuns.
- Atualize AGENTS.md apenas para mudanças estáveis em como trabalhar no repositório. Histórico de execução pertence a issue, PR ou relatório.

A [matriz](../project-workflow/references/validation.md) orienta conferência. Não execute exemplos que afetem serviços/dados reais sem verificar o escopo autorizado.
