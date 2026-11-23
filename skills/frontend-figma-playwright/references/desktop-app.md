# App desktop (Electron ou Tauri)

Use junto ao [módulo de front-end](../SKILL.md) quando a interface roda numa janela nativa, e não numa aba do navegador. As regras de UI, estados e acessibilidade continuam valendo. Confira as versões e a documentação atuais do framework antes de seguir um detalhe de API daqui.

## Janela

- **Sem moldura / sempre por cima / transparente:** declare região de arraste (`-webkit-app-region: drag`) e marque botões e campos como `no-drag`. Teste o arraste e o clique nos dois.
- **Sempre por cima:** confira que a janela não cobre diálogos do sistema e que existe um jeito de esconder (atalho, bandeja ou botão).
- **Bandeja e atalho global:** registre no `ready`, libere no `will-quit`. Se o atalho já estiver em uso, avise na tela; não falhe calado.
- **Tamanho e posição:** guarde e restaure, mas recoloque a janela dentro da área visível se o monitor mudou.
- **Uma instância:** use o bloqueio de instância única quando duas cópias abertas causariam conflito.

## Segurança do IPC (Electron)

- `contextIsolation: true`, `sandbox: true`, `nodeIntegration: false` em toda janela.
- O preload expõe só uma **allowlist** de funções nomeadas (`contextBridge.exposeInMainWorld`). Nunca exponha `ipcRenderer` inteiro, `require` ou canais genéricos.
- No processo principal, valide os argumentos de cada canal como entrada não confiável.
- Bloqueie navegação e janelas novas: `will-navigate` com `preventDefault` e `setWindowOpenHandler(() => ({ action: 'deny' }))`. Links externos abrem com `shell.openExternal`, só para `https:`.
- Defina uma Content-Security-Policy no HTML. Carregue fontes e scripts locais, sem CDN.
- Em Tauri, o equivalente é a lista de permissões/capabilities por comando; mantenha-a mínima.

## Segredos e arquivos

- Chaves do usuário ficam no processo principal, cifradas com o cofre do sistema (`safeStorage` no Electron; keychain/credential manager no Tauri). Nunca no renderer, em logs, em prints de teste ou no git.
- Operações em arquivos do usuário: ler e procurar podem ser livres; criar, mover, renomear, sobrescrever ou apagar pedem confirmação na tela. Prefira mandar para a Lixeira (`shell.trashItem`) a apagar de vez. Bloqueie pastas do sistema.
- Permita apontar dados e pastas para um diretório de teste por variável de ambiente, para o e2e não tocar nos dados reais.

## Testes e2e

- Use Playwright com `_electron.launch` (ou o driver do framework) para abrir o **app real**, clicar como uma pessoa e salvar prints em pasta temporária.
- Rode ao menos uma vez contra o **executável empacotado**, não só contra `electron .`: caminhos de recursos, `asar` e permissões mudam.
- Isole o perfil e os dados com variáveis de ambiente. Se o app chama IA ou serviço externo, use um modo falso (ver [apps com LLM](../../project-workflow/references/llm-app.md)).
- **Fontes web:** o navegador só carrega uma fonte quando há texto renderizado com ela. Para conferir, cheque `document.fonts.check(...)` ou o estilo computado **depois** que a tela com texto aparece; checar na janela vazia dá falso negativo.
- Confira tema claro/escuro e `prefers-reduced-motion` emulados.

## Empacotamento

- `electron-builder` com alvo NSIS no Windows (ou o bundler do Tauri). Saída em `dist/` (ou equivalente), **fora do git**.
- Ícone, nome do produto, `appId` e pasta de dados definidos antes do primeiro instalador.
- Sem certificado de assinatura, o Windows mostra aviso do SmartScreen. Registre isso no relatório; não peça nem invente certificado.

## Pegadinha do npm com o Electron

Versões recentes do npm podem bloquear scripts de instalação de dependências até serem aprovados. O `postinstall` do Electron baixa o binário; bloqueado, `npm start` falha com "Electron failed to install correctly". Confira a mensagem do npm e resolva por um destes caminhos:

- aprovar o script do pacote (`npm approve-scripts electron`, quando o npm em uso oferece esse comando), ou
- rodar o instalador do pacote direto: `node node_modules/electron/install.js`.

Registre no AGENTS.md do projeto qual caminho foi usado.
