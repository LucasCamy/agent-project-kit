# Agent Project Kit

Um kit de instruções e skills para orientar agentes de desenvolvimento em projetos novos ou existentes: entender o repositório, criar e manter `AGENTS.md`, implementar mudanças e conferir o resultado.

O ponto de entrada é **[project-workflow](skills/project-workflow/SKILL.md)**. Ele orienta a seleção dos módulos necessários conforme a tarefa.

[Começar](#começar-em-três-passos) · [O que tem](#o-que-tem-no-kit) · [Exemplos](#exemplos-de-pedido) · [Guia completo](GUIA_SKILLS_DESENVOLVIMENTO.md)

## Começar em três passos

### 1. Baixe o kit

Clone este repositório em uma pasta de sua preferência:

```bash
git clone https://github.com/LucasCamy/agent-project-kit.git
```

Também é possível baixar o ZIP pelo GitHub e extrair mantendo as pastas. Você pode guardar uma única cópia do kit fora dos projetos e reutilizá-la. Exemplo: kit em `F:/Skills` e aplicação em outra pasta.

### 2. Abra o projeto no agente

Abra a pasta da aplicação que será criada ou alterada. O agente precisa conseguir ler o clone do kit e os arquivos do projeto. Se o ambiente não tiver acesso à sua máquina, disponibilize o pacote completo em uma pasta acessível nesse ambiente.

### 3. Envie este pedido

Substitua os campos entre colchetes:

```text
Leia [caminho absoluto do kit]/skills/project-workflow/SKILL.md
e aplique o fluxo no projeto [caminho absoluto do projeto].

Objetivo: [o que quero criar ou corrigir]
Critérios de aceitação: [o que precisa funcionar ao terminar]
Restrições: [stack, conteúdo ou comportamento que deve ser preservado]
```

Se o kit estiver em `F:/Skills`, a primeira linha fica: `Leia F:/Skills/skills/project-workflow/SKILL.md`.

O agente deve inspecionar o projeto, seguir as instruções locais, selecionar os módulos pertinentes e realizar a tarefa. Em implementação sem `AGENTS.md`, o fluxo pede criar um arquivo específico antes de alterar código. Ao terminar, deve relatar mudanças, verificações reais e pendências.

**Clonar e indicar o arquivo é o modo de uso documentado aqui.** Isso não registra skills globalmente nem conecta serviços. Uma instalação descobrível automaticamente depende do mecanismo do agente; preserve os módulos e suas referências compartilhadas se escolher instalá-los.

## O que tem no kit

| Módulo | Para que serve |
|---|---|
| [project-workflow](skills/project-workflow/SKILL.md) | Entrada: inspecionar, selecionar módulos e integrar o resultado |
| [project-agent-md](skills/project-agent-md/SKILL.md) | Criar e manter instruções estáveis do repositório |
| [frontend-figma-playwright](skills/frontend-figma-playwright/SKILL.md) | Estruturar UI no Figma, implementar e conferir com screenshots |
| [backend-dotnet](skills/backend-dotnet/SKILL.md) | Trabalhar em APIs, serviços e regras C#/.NET |
| [database-persistence](skills/database-persistence/SKILL.md) | Consultas, isolamento, concorrência, schema e migrations |
| [software-documentation](skills/software-documentation/SKILL.md) | README, OpenAPI, ADRs e runbooks |
| [agent-coordination](skills/agent-coordination/SKILL.md) | Dividir responsabilidades, revisar e fazer handoff quando útil |
| [skill-discovery](skills/skill-discovery/SKILL.md) | Encontrar e avaliar skills externas para necessidades específicas |

Há ainda [regras comuns](skills/project-workflow/references/common.md), uma [matriz de validação](skills/project-workflow/references/validation.md), [modelo e fluxo de ADR](skills/software-documentation/references/adr.md), [orientação de Linear](skills/project-workflow/references/linear.md) e [prompt especializado de landing page](skills/frontend-figma-playwright/references/landing-page.md).

## Exemplos de pedido

Depois de carregar a entrada do kit, descreva a tarefa. Por exemplo:

**Projeto novo**

```text
Quero iniciar um projeto para [produto e público].
A stack escolhida é [stack], ou proponha uma adequada ao briefing.
Prepare um AGENTS.md específico, implemente [primeiro fluxo] e mantenha
as instruções atualizadas conforme as decisões forem confirmadas.
```

**Projeto existente**

```text
Corrija [problema] no fluxo [fluxo afetado].
Hoje acontece [comportamento atual]; espero [comportamento desejado].
Preserve a stack e as convenções existentes e verifique a correção.
```

O [guia completo](GUIA_SKILLS_DESENVOLVIMENTO.md) traz pedidos para interface/Figma, back-end/banco, documentação/ADRs, Linear, auditoria e ilustrações.

## O que precisa estar disponível

| Situação | Necessidade |
|---|---|
| Uso básico | Agente capaz de ler os arquivos do kit e trabalhar no projeto |
| Implementação e verificações | Ferramentas exigidas pela stack real do projeto |
| Mudança de interface | Figma MCP com destino acessível e Playwright para conferência |
| Gestão no Linear | Acesso ao Linear e time, projeto e issue corretos |
| Skills externas | Instalação e requisitos próprios, quando a tarefa pedir |

A preferência deste kit é **estruturar toda mudança de UI no Figma antes do código**, inclusive ajustes pequenos e estados. Se faltar acesso, o agente deve informar o bloqueio e combinar uma alternativa, continuando partes independentes. Adapte essa preferência explicitamente se seu fluxo for diferente.

O kit preserva a arquitetura de projetos existentes. O módulo .NET só é pertinente quando essa for a stack; projetos novos não recebem uma stack ou arquitetura universal por padrão.

## Opções externas

| Opção | Quando considerar |
|---|---|
| [Cloudflare security-audit](skills/project-workflow/references/security-audit.md) | Auditoria ou investigação de vulnerabilidade com requisitos específicos de isolamento e validação |
| [Anatomy](skills/frontend-figma-playwright/references/anatomy.md) | Figura isométrica explicativa para produto, documentação ou landing page |

Taste, Impeccable, UI UX Pro Max, Emil Kowalski e outras referências estão no [catálogo externo](skills/project-workflow/references/catalog.md), com comandos e status da conferência. São recursos opcionais conforme a tarefa, não instalações automáticas do kit.

## Consultar e manter

- [Guia de uso, pedidos prontos e solução de problemas](GUIA_SKILLS_DESENVOLVIMENTO.md)
- [Como documentar decisões e usar o modelo de ADR](skills/software-documentation/references/adr.md)
- [Bloco de documentação para AGENTS.md](skills/software-documentation/references/agents-documentation.md)
- [Linear como fonte de gestão e índice operacional](skills/project-workflow/references/linear.md)

As regras estáveis de cada aplicação ficam no `AGENTS.md` dela; o histórico de tarefas e resultados fica em issues, PRs ou relatórios. Para atualizar seu clone, dentro da pasta do kit execute `git pull --ff-only`, preservando adaptações locais. Consulte o guia antes de personalizar ou distribuir módulos separadamente.
