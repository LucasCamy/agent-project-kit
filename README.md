# Agent Project Kit

Kit modular de skills e instruções para agentes de desenvolvimento. Organiza o início do projeto, a criação e manutenção de `AGENTS.md` e fluxos para front-end, C#/.NET, banco de dados e documentação.

## Começar

Clone o pacote:

```bash
git clone https://github.com/LucasCamy/agent-project-kit.git
```

Abra seu projeto no agente e envie o pedido abaixo, substituindo os campos:

```text
Leia [caminho absoluto do clone]/skills/project-workflow/SKILL.md
 e aplique esse fluxo no projeto [caminho do projeto].
Objetivo: [resultado esperado]
Critérios de aceitação: [comportamentos que precisam funcionar]
```

Se o clone estiver em `F:/Skills`, a entrada é `F:/Skills/skills/project-workflow/SKILL.md`. O agente precisa conseguir ler esses arquivos locais. Clonar não instala skills globalmente nem configura Figma ou Playwright.

## O que o pacote faz

- Inspeciona o projeto e carrega apenas os módulos pertinentes.
- Cria `AGENTS.md` ausente antes de implementar e mantém instruções estáveis atualizadas.
- Preserva arquitetura e convenções de projetos existentes.
- Estrutura mudanças de interface no Figma e confere a implementação com Playwright e screenshots.
- Orienta API .NET, persistência, concorrência, migrations e documentação.
- Define validações proporcionais, handoff e coordenação quando houver benefício.

A exigência de Figma para toda mudança de interface é uma preferência deste kit. Se o acesso estiver indisponível, o fluxo identifica o bloqueio e trata uma alternativa com o usuário. Adapte preferências às necessidades do seu projeto.

## Módulos

| Skill | Responsabilidade |
|---|---|
| [project-workflow](skills/project-workflow/SKILL.md) | Ponto de entrada e integração |
| [project-agent-md](skills/project-agent-md/SKILL.md) | Criação e manutenção de AGENTS.md |
| [frontend-figma-playwright](skills/frontend-figma-playwright/SKILL.md) | Interface, design e conferência visual |
| [backend-dotnet](skills/backend-dotnet/SKILL.md) | API e serviços .NET |
| [database-persistence](skills/database-persistence/SKILL.md) | Consultas, schema e migrations |
| [software-documentation](skills/software-documentation/SKILL.md) | README, OpenAPI, ADR e runbooks |
| [agent-coordination](skills/agent-coordination/SKILL.md) | Responsabilidades, revisão e handoff |
| [skill-discovery](skills/skill-discovery/SKILL.md) | Encontrar e avaliar skills externas |

## Documentação

- [Guia completo de uso](GUIA_SKILLS_DESENVOLVIMENTO.md)
- [Regras comuns](skills/project-workflow/references/common.md)
- [Matriz de validação](skills/project-workflow/references/validation.md)
- [Fontes e catálogo externo](skills/project-workflow/references/catalog.md)

Mantenha os módulos e suas referências compartilhadas juntos ao copiar o pacote. Os caminhos relativos partem da pasta do arquivo que os referencia, não do diretório de execução do agente.

## Manutenção

Atualize as orientações com base no uso real. Registre comandos encontrados separadamente dos efetivamente executados, preserve instruções locais e mantenha histórico temporário em issues ou PRs. Skills externas e ferramentas citadas têm seus próprios requisitos; o catálogo não as instala automaticamente.
