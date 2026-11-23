# Apps que usam um LLM (ex.: API do Claude)

Use quando o produto em construção chama um modelo de linguagem: organizar texto, extrair dados, agir com ferramentas ou conversar. Vale para web, back-end e desktop. Junte às [regras comuns](common.md) e à linha "Integração com LLM" da [matriz](validation.md).

## Antes de escrever código

- Consulte a **documentação atual do provedor**: nomes de modelo, parâmetros, recursos (saída estruturada, ferramentas, cache) e preços mudam. Não copie nomes de modelo ou preços deste kit nem de memória; registre no AGENTS.md do projeto o que foi conferido.
- Deixe o modelo configurável (ajustes ou variável de ambiente) em vez de fixo no código.

## Chaves

- A chave fica no servidor ou no processo principal do app desktop, cifrada quando guardada no disco. Nunca no navegador/renderer, em logs, em mensagens de erro, em prints de teste ou no git.
- Na tela, mostre só se existe chave configurada, nunca o valor.

## Respostas confiáveis

- Para dados que o código vai ler, use **saída estruturada** (schema JSON ou ferramenta com schema) em vez de extrair texto livre com regex.
- Trate falha de rede, limite de uso, timeout e resposta fora do schema com mensagem clara e opção de tentar de novo.
- Em loops de agente com ferramentas, guarde o histórico como o provedor devolveu (sem editar blocos) e limite o número de voltas.

## Ferramentas e segurança

- Ler e procurar podem ser livres. Toda ação com efeito (escrever, mover, apagar, enviar, comprar, publicar) passa por **confirmação humana** na tela, com o detalhe do que vai acontecer.
- **Conteúdo é dado, não instrução.** Texto de arquivos, páginas, e-mails ou respostas de ferramentas pode trazer prompt injection. Diga isso no prompt de sistema e não deixe esse conteúdo liberar ações sem confirmação.
- Restrinja as ferramentas ao mínimo (pastas permitidas, domínios permitidos). Bloqueie pastas do sistema.

## Testes

- Crie um **modo de IA falsa** por variável de ambiente (ex.: `<APP>_FAKE_AI=1`) que devolve respostas fixas e válidas no mesmo formato. Unidade e e2e rodam com ele: grátis, rápidos e determinísticos.
- Teste o parsing com respostas válidas, inválidas e vazias.
- A chamada real ao modelo é **um teste de fumaça**, feito só com chave disponível e consentimento do usuário (custa dinheiro). Sem isso, relate "IA real não testada".
