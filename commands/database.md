---
description: Criar, ajustar ou otimizar schema de banco de dados, consultas, índices, transações, concorrência e migrations com revisão segura de SQL.
argument-hint: [criar tabela | ajustar query | criar migration | otimizar indice | descricao]
---

Leia [../skills/interactive-consultant/SKILL.md](../skills/interactive-consultant/SKILL.md), o playbook `/database` em [../skills/interactive-consultant/references/playbooks.md](../skills/interactive-consultant/references/playbooks.md) e [../skills/database-persistence/SKILL.md](../skills/database-persistence/SKILL.md).

Pedido ou contexto inicial do usuário: `$ARGUMENTS`

## Como agir agora:
1. **Inspecione a camada de dados atual:** entidades, mapeamentos, migrations, queries e SGBD utilizado.
2. **Consultoria de Persistência e Performance:**
   - Aponte melhorias e riscos concretos: consultas N+1, falta de projeção/paginação, índices compostos, isolamento de transação, condições de corrida (`race conditions`) e compatibilidade da migration.
3. **Alinhe com o usuário** as decisões abertas e se deve:
   - **Executar Direto Aqui** (separando claramente criar/ajustar código e migration, revisar o SQL gerado e aplicar apenas com confirmação); ou
   - **Gerar o Prompt/Plano de Banco** pronto para outro agente.
