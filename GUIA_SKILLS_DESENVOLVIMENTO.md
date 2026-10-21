# Guia de uso do Agent Project Kit

Comece pelo [README](README.md) para baixar o kit e enviar o primeiro pedido. Este guia explica como aplicá-lo às tarefas, lidar com ferramentas indisponíveis e personalizar o fluxo. As regras detalhadas continuam nos módulos e referências vinculados.

## Kit, projeto e instruções

| Arquivo ou pasta | Função |
|---|---|
| README deste kit | Apresentar o conteúdo e ensinar a começar |
| skills/project-workflow/SKILL.md | Orientar a execução e escolher módulos |
| AGENTS.md da aplicação | Guardar convenções e instruções persistentes daquele projeto |
| Referências dos módulos | Detalhar procedimentos quando a tarefa exigir |

O AGENTS.md da raiz deste repositório orienta a manutenção do próprio kit. Não o copie para sua aplicação: `project-agent-md` deve produzir instruções específicas a partir do briefing, dos arquivos e das escolhas reais do projeto.

Guarde o clone em um local que o agente consiga ler. Os módulos fazem referências uns aos outros; mantenha a estrutura de pastas. Referências relativas partem do arquivo que as contém, não da pasta atual do terminal. Abrir apenas a página do GitHub ou copiar um SKILL.md isolado não disponibiliza automaticamente os arquivos auxiliares ao agente.

## Primeiro pedido e continuação

Na primeira tarefa da sessão, indique o caminho da entrada, o projeto e o objetivo:

```text
Leia [caminho absoluto do kit]/skills/project-workflow/SKILL.md
e use esse fluxo no projeto [caminho absoluto do projeto].
Objetivo: [resultado esperado]
Critérios de aceitação: [como reconhecer o resultado correto]
Restrições: [o que deve ser preservado]
```

Informe também stack escolhida, links de design ou issue quando existirem. Você não precisa preencher tudo para o agente começar a inspeção; ele deve perguntar apenas pelas decisões ausentes que mudarem materialmente o trabalho.

Na mesma sessão, continue com pedidos objetivos. Em outra sessão, aponte novamente para a entrada, a menos que já tenha configurado uma forma de descoberta no seu agente. Este pacote não implementa essa instalação por você.

## O que esperar da execução

1. Inspeção das instruções, estrutura e convenções do projeto.
2. Criação de AGENTS.md ausente antes de implementar, conforme a preferência do kit; preservação de instruções válidas existentes.
3. Escolha dos módulos relevantes e implementação dentro do escopo.
4. Verificações proporcionais pela [matriz](skills/project-workflow/references/validation.md).
5. Relato dos arquivos e comportamentos alterados, evidências reais e pendências.

Um projeto vazio, um scaffold e uma aplicação em produção têm contextos diferentes. O kit orienta o agente a reconhecer essa diferença. Um build aprovado não prova autorização correta, integração completa ou equivalência visual.

## Pedidos prontos por situação

Os exemplos abaixo pressupõem que você já enviou a entrada do kit. Substitua os campos entre colchetes e mantenha apenas as instruções pertinentes.

### Interface e Figma

```text
Ajuste [tela/componente] para [objetivo de UX].
Use o arquivo Figma [link] e preserve [marca, conteúdo e integrações].
Estruture os frames/estados afetados antes de implementar.
Confira o fluxo, teclado, responsividade e estados com Playwright,
capture screenshots e compare a implementação com o design.
```

Figma é requisito de interface deste kit. Se faltar arquivo/destino ou acesso, o agente precisa dessa informação ou de autorização para alternativa. Para back-end ou documentação sem mudança visual, não se exige frame. O [módulo de front-end](skills/frontend-figma-playwright/SKILL.md) descreve o procedimento.

### Back-end .NET e banco

```text
Implemente [caso de uso/endpoint] seguindo a arquitetura existente.
Critérios: [entradas, saída, validação e autorização esperadas].
Avalie persistência, isolamento e concorrência afetados.
Se precisar de migration, gere e revise as operações e o SQL;
a aplicação em ambiente compartilhado não faz parte deste pedido.
Atualize o contrato/documentação pertinente e valide o comportamento.
```

O [módulo .NET](skills/backend-dotnet/SKILL.md) e o de [persistência](skills/database-persistence/SKILL.md) preservam a organização real da solução. Criar migration, revisar SQL e aplicar são operações diferentes.

### Documentação e ADRs

```text
Use software-documentation para atualizar os documentos desta mudança.
Consulte decisões anteriores. Se houver uma nova decisão durável,
registre uma ADR seguindo o padrão do projeto, com contexto, decisão,
alternativas realmente consideradas e consequências.
Diferencie proposta, decisão aceita, implementação e implantação.
```

Veja [quando registrar uma ADR](skills/software-documentation/references/adr.md) e [o modelo adaptável](skills/software-documentation/assets/adr-template.md). Não é necessário criar ADR para cada correção ou documentar alternativas fictícias.

### Gestão no Linear

```text
Use o time [time] e o projeto [nome/link confirmado] do Linear.
Consulte a issue [identificador] antes de implementar e confira critérios,
dependências e impacto em segurança e dados.
Ao concluir, atualize essa issue com resultado, validações reais,
riscos/pendências e links de commit, PR, ADR ou runbook pertinentes.
Respeite o fluxo de status do time e os critérios ainda pendentes.
```

Este exemplo inclui o pedido de atualizar a issue indicada. Apenas consultar um ticket não autoriza outras alterações no sistema. Se o acesso não estiver disponível, o agente deve declarar a limitação e preparar o resumo para registro. A [referência Linear](skills/project-workflow/references/linear.md) explica o índice operacional e o mapa de documentação.

### Auditoria de segurança

```text
Avalie a opção Cloudflare security-audit para auditar [repositório/escopo].
Leia os requisitos da skill e confira a disponibilidade das ferramentas
e do isolamento antes de executar código do alvo.
Informe o modo e os limites da análise e registre o que precisar
de validação adicional, sem declarar confirmação sem evidência.
```

A [opção de auditoria](skills/project-workflow/references/security-audit.md) tem exigências próprias. O kit não a instala nem inicia auditoria em toda alteração de código. Se a execução não puder cumprir os requisitos, a limitação precisa constar no resultado.

### Revisão legal antes de publicar

```text
Revise [site/projeto] antes da publicação para reduzir riscos jurídicos no Brasil.
Dados do negócio: [razão social e nome fantasia, CNPJ ou CPF, e-mail e telefone].
O que vendo ou ofereço: [descrever]. Coleto dados por: [formulário, WhatsApp,
newsletter, pagamento ou nenhum]. Uso: [analytics, pixels, vídeos, mapas, chat].
Imagens de pessoas: [quem aparece e se há autorização].
Comece pelo diagnóstico, implemente em lotes e termine com o checklist
de feito, pendente e o que precisa de revisão de advogado.
```

A [referência de conformidade legal](skills/project-workflow/references/conformidade-legal.md) define o diagnóstico, as páginas legais como minutas, a base legal de cada formulário, cookies e embeds, imagens de pessoas e licenças. O agente não deve inventar dados da empresa nem leis, artigos ou prazos, e o resultado não substitui um advogado.

### Ilustração explicativa com Anatomy

```text
Avalie Anatomy para explicar [conceito do produto] com uma figura interativa.
Destino: [landing page, documentação ou componente].
Dados e comportamento: [informações reais que a figura deve representar].
Formato/tema: [formato desejado e linguagem visual do projeto].
Se a figura integrar a UI, siga Figma e confira a integração no navegador.
```

Use [Anatomy](skills/frontend-figma-playwright/references/anatomy.md) quando a metáfora visual ajudar o conteúdo. Sua geração é especializada; uma figura não precisa acompanhar toda tela ou documento.

## Ferramentas, acesso e instalações

Os módulos internos são instruções em Markdown. A execução depende do que o agente e o projeto oferecem. Nem todo pedido precisa de Node.js, .NET, navegador, Figma e Linear ao mesmo tempo.

Use [skill-discovery](skills/skill-discovery/SKILL.md) se quiser encontrar uma capacidade adicional. O [catálogo externo](skills/project-workflow/references/catalog.md) contém fontes e comandos com o status da conferência. Pedido de busca não equivale a pedido de instalação; quando você autorizar instalar, indique escopo do projeto ou do usuário quando relevante.

Publicação, deploy, exclusão de dados e aplicação de migrations compartilhadas dependem da autorização correspondente, respeitando o que já foi concedido. As [regras comuns](skills/project-workflow/references/common.md) centralizam esses limites.

## Quando algo não funcionar

| Situação | Como encaminhar |
|---|---|
| Agente não encontra o kit | Confira o caminho absoluto e o acesso ao disco/pasta no ambiente em uso |
| Referência local não encontrada | Mantenha o clone completo e a estrutura entre módulos; resolva o link pela pasta do documento |
| Skill não aparece no catálogo do agente | Clonar não a registra automaticamente; use a leitura explícita da entrada ou configure a instalação compatível |
| Figma ou Linear sem acesso | Forneça destino/identificadores e acesso necessários ou autorize alternativa para a etapa bloqueada |
| Playwright ou comando da stack indisponível | Peça que o agente registre a limitação e proponha a verificação viável; não aceite evidência de execução presumida |
| Projeto sem stack ou comandos | Informe escolhas já feitas; registre o que ainda não existe e deixe o agente inspecionar/propor o necessário |
| Resultado incompleto | Compare com os critérios e a matriz; trate a pendência sem marcar o fluxo inteiro como verificado |

## Personalizar e atualizar

Mantenha regras específicas da aplicação em seu próprio AGENTS.md. Adapte preferências de UI, tracker e ferramentas explicitamente; preserve a distinção entre instrução persistente e histórico de tarefas. Evite caminhos pessoais do clone em instruções que devam funcionar em outra máquina.

Para atualizar o kit, dentro da pasta do clone:

```bash
git pull --ff-only
```

Se houver adaptações locais ou histórico divergente, preserve e revise as diferenças; não descarte alterações para forçar a atualização. Ao distribuir módulos separadamente, leve suas referências compartilhadas e ajuste os caminhos. Melhorias no kit devem ser baseadas no uso observado, mantendo módulos focados e evitando carregar todos em qualquer tarefa.
