---
name: interactive-consultant
description: Conduzir atendimento consultivo e dinâmico para criar, editar, ajustar ou revisar projetos (landing pages, front-end, back-end, banco e documentação), diagnosticando o contexto atual, propondo melhorias práticas, fazendo perguntas cirúrgicas e permitindo escolher entre gerar prompts prontos ou executar diretamente.
---

# Consultor Interativo e Orquestrador Dinâmico

Use esta skill sempre que o usuário acionar um comando dinâmico (`/landingpage`, `/frontend`, `/backend`, `/database`, `/review`, `/kit`) ou quando pedir ajuda para planejar, criar, editar, ajustar ou melhorar um projeto sem um especificador técnico fechado.

O objetivo desta skill é evitar dois extremos ruins:
1. **Obediência cega:** sair codando ou aplicando regras rígidas sem entender se aquilo faz sentido para o momento do projeto.
2. **Interrogatório burocrático:** fazer dezenas de perguntas genéricas sem antes olhar os arquivos da pasta e sem recomendar caminhos concretos.

Consulte [references/playbooks.md](references/playbooks.md) para os roteiros específicos de cada área (`/landingpage`, `/frontend`, `/backend`, `/database` e `/review`) tanto para **criação do zero** quanto para **edição/ajuste de projeto existente**, e use obrigatoriamente [references/prompt-templates.md](references/prompt-templates.md) sempre que o usuário pedir para gerar os prompts prontos.

---

## Protocolo Consultivo em 4 Passos

### Passo 1 — Diagnóstico Silencioso de Contexto (Criar vs. Editar/Ajustar)
Antes de responder ao usuário, inspecione rapidamente o diretório de trabalho:
- **Cenário A — Projeto Novo (Criar):** Pasta vazia ou apenas com rascunhos/mídias. Identifique o que já existe para não pedir o que já está na pasta.
- **Cenário B — Projeto Existente (Editar, Ajustar, Corrigir ou Evoluir):** Leia `AGENTS.md`, `package.json` / `.sln` / `.csproj`, `DESIGN.md` e os arquivos diretamente relacionados ao pedido. Entenda a stack, o estilo visual e a arquitetura atual antes de opinar.

### Passo 2 — Consultoria Proativa (Diga o que pode melhorar)
Apresente um diagnóstico curto e direto (3 a 5 tópicos):
- **O que você identificou:** resuma em 1 frase se é criação ou ajuste no projeto existente e quais partes serão tocadas.
- **Sugestões de melhoria de alto valor:** aponte 2 ou 3 melhorias práticas que elevam o resultado (ex.: em uma loja com sacola no WhatsApp, sugerir filtro de tamanho `PP–GG`, 2ª foto no hover e Guia de Medidas; em uma edição de API, sugerir idempotência, validação na fronteira ou paginação; em um ajuste de landing page, sugerir cache busting `?v=<hash>` ou correção de `ScrollTrigger.refresh()`).
- **Uso consciente das skills:** indique quais módulos de [project-workflow](../project-workflow/SKILL.md) realmente servem para este caso e quais **não** precisam ser forçados.

### Passo 3 — Perguntas Cirúrgicas com Recomendação Padrão
Faça **no máximo 3 a 5 perguntas** sobre decisões que mudam o trabalho.
- Para cada pergunta, traga sempre uma **recomendação pronta** entre parênteses — assim o usuário pode tanto personalizar quanto responder apenas *"Pode seguir com as recomendações"*.
- Se o usuário estiver **editando ou ajustando** algo específico (ex.: *"quero mudar a seção de projetos"* ou *"ajuste o carrinho para ter tamanho"*), pergunte apenas sobre o comportamento desejado daquele ponto e o que deve permanecer intacto.

### Passo 4 — Escolha do Modo de Execução
Ao final das perguntas (ou logo após as respostas do usuário), ofereça claramente como entregar o trabalho:

1. **Executar direto aqui (Implementação Local):** o próprio agente cria ou edita os arquivos no projeto atual, executa os testes/validações aplicáveis da [matriz de validação](../project-workflow/references/validation.md) e entrega pronto.
2. **Gerar Prompt(s) Pronto(s) sob Medida (Orquestração Multi-Agente):** o agente monta os prompts completos e personalizados em blocos Markdown prontos para copiar e colar (por exemplo: **Prompt 1** para geração/ajuste de mídias e vídeos no ChatGPT/Codex + **Prompt 2** para implementação ou refatoração no Claude Code).
3. **Modo Híbrido:** o agente gera o prompt de mídia/ativos externos para o usuário rodar em paralelo enquanto já inicia a edição/estruturação do código localmente.
