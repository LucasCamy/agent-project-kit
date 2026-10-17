# Guia de skills para projetos de software

Este pacote organiza o início do projeto, instruções persistentes e módulos especializados. O ponto de entrada é `skills/project-workflow/SKILL.md`. As regras do repositório e o pedido do usuário orientam a tarefa.

## Como usar agora

No agente que estiver aberto no projeto, envie:

```text
Leia [caminho absoluto do clone]/skills/project-workflow/SKILL.md e use esse fluxo para esta tarefa.
Projeto: [caminho do projeto]
Objetivo: [resultado esperado]
Critérios de aceitação: [o que precisa funcionar]
```

Exemplo no computador do autor: `F:/Skills/skills/project-workflow/SKILL.md`. Substitua pelo caminho do seu clone. O caminho absoluto serve para localizar a entrada. As referências seguintes são resolvidas a partir da pasta de cada SKILL.md, nunca do diretório atual do terminal. Este uso pressupõe que o agente pode ler arquivos locais. Apenas salvar o pacote nesta pasta não o registra automaticamente no catálogo de um agente. A instalação depende do agente e do escopo desejado; este pacote não alterou configurações globais.

## Módulos

| Módulo | Quando carregar |
|---|---|
| [project-workflow](skills/project-workflow/SKILL.md) | Entrada: inspecionar projeto, escolher módulos e integrar resultado |
| [project-agent-md](skills/project-agent-md/SKILL.md) | Criar AGENTS.md ausente ou manter orientações desatualizadas |
| [frontend-figma-playwright](skills/frontend-figma-playwright/SKILL.md) | Mudança de interface: Figma, implementação e conferência visual |
| [backend-dotnet](skills/backend-dotnet/SKILL.md) | API, serviços e regras C#/.NET |
| [database-persistence](skills/database-persistence/SKILL.md) | Consulta, schema, concorrência ou migration |
| [software-documentation](skills/software-documentation/SKILL.md) | README, OpenAPI, ADR e runbook |
| [agent-coordination](skills/agent-coordination/SKILL.md) | Trabalho amplo que ganha com responsabilidades separadas |
| [skill-discovery](skills/skill-discovery/SKILL.md) | Lacuna de capacidade ou pedido para encontrar skills |

[Regras comuns](skills/project-workflow/references/common.md) centralizam escopo, autorização, evidências e conclusão. A [matriz de validação](skills/project-workflow/references/validation.md) detalha verificações por mudança. Não carregue o pacote inteiro em tarefas pequenas. Preserve a estrutura de pastas ao copiar ou instalar: os módulos especializados compartilham as referências de project-workflow. Instalar um módulo isolado exige levar também essas referências e ajustar os caminhos.

## Decisões do pacote

- Criar AGENTS.md ausente ao iniciar implementação, conforme a preferência do usuário; preservar instruções existentes e não criá-lo em consultas somente de leitura.
- Adaptar o projeto novo ao briefing; em projeto existente, descobrir e respeitar suas convenções.
- Toda alteração de interface deve ser estruturada no Figma antes do código. Isso inclui pequenos ajustes e estados. A extensão do frame acompanha o escopo; não exige redesenhar a página inteira.
- Verificar resultado no navegador com Playwright, incluindo screenshots e comparação com o Figma.
- Usar coordenação adicional somente quando ajudar; um único agente pode cumprir os papéis em tarefas pequenas.
- Instalar skills externas apenas dentro do escopo autorizado, sem repetir uma confirmação já concedida.

## Manutenção

Mantenha instruções estáveis no AGENTS.md do próprio projeto. Atualize-o quando stack, comandos, limites arquiteturais ou operação mudarem; histórico de tarefas e resultados ficam em issues, PRs ou relatórios. Evite inserir caminhos locais deste pacote nos AGENTS.md de projetos que precisam funcionar em outras máquinas.

O [catálogo externo](skills/project-workflow/references/catalog.md) preserva fontes, comandos informados e status da conferência. O pacote não instala ferramentas, conecta MCPs ou cria agendamentos sozinho.

## Documentação e ADRs

O módulo software-documentation inclui [fluxo de decisões](skills/software-documentation/references/adr.md), [modelo de ADR](skills/software-documentation/assets/adr-template.md) e [orientação para o AGENTS.md](skills/software-documentation/references/agents-documentation.md). As convenções locais têm precedência; o kit propõe docs/adr e numeração sequencial apenas quando não houver padrão.

As ADRs registram motivos e consequências de escolhas duráveis. README, OpenAPI e runbooks continuam sendo atualizados conforme a mudança. Aceitar uma decisão não comprova que ela foi implementada ou implantada.

## Gestão no Linear

Quando adotado pelo projeto, o Linear organiza backlog, prioridades e acompanhamento e funciona como índice operacional para documentos do repositório. O [fluxo e bloco adaptável de AGENTS.md](skills/project-workflow/references/linear.md) orientam consulta da issue antes da implementação e registro do resultado com evidências e links ao concluir. Time e projeto precisam ser confirmados; nenhuma configuração específica de outro repositório é copiada automaticamente.

## Opções externas adicionais

| Opção | Quando usar |
|---|---|
| [Cloudflare security-audit](skills/project-workflow/references/security-audit.md) | Auditoria explícita ou investigação de vulnerabilidade, observando requisitos de validação e isolamento |
| [Anatomy](skills/frontend-figma-playwright/references/anatomy.md) | Ilustração isométrica explicativa para produto, documentação ou landing page |

São opções de uso conforme a tarefa. Os oito módulos internos continuam sendo o núcleo do kit. Registrar uma opção no catálogo não instala ferramentas nem executa auditorias ou gera figuras.
