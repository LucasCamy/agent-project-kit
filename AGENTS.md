# Instruções para manter Agent Project Kit

Este repositório contém documentação Markdown, nove skills em `skills/` e comandos interativos em `commands/`. A entrada técnica é `skills/project-workflow/SKILL.md` e a entrada consultiva/dinâmica é `skills/interactive-consultant/SKILL.md`; regras comuns e matriz de validação ficam nas referências de `project-workflow`.

- Preserve a estrutura de pastas e os links relativos entre módulos. Resolva referências pela pasta do documento.
- Centralize regras compartilhadas; mantenha módulos especializados curtos e fontes externas no catálogo.
- Não acrescente detalhes de outro projeto, caminhos pessoais, credenciais ou nomes de modelos/preços como regras estáveis.
- A preferência por Figma para toda alteração de interface está documentada explicitamente. Alterações a essa preferência devem corresponder ao pedido do usuário.
- Ao criar ou renomear módulos, mantenha YAML `name` e `description`, atualize README e guia e confira os links locais.
- Este pacote não tem aplicação compilável nem suíte própria de testes. Confira frontmatter, referências e consistência documental; não invente comandos de build/teste.
- Mudanças no pacote não autorizam instalar skills globalmente, conectar serviços, aplicar migrations ou publicar outros projetos.

Ao concluir, relate documentos alterados, verificações executadas e limitações. Exemplos de tarefas reais só podem ser descritos como validados se realmente executados.
