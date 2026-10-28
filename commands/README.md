# Comandos Dinâmicos (`/landingpage`, `/frontend`, `/backend`, `/database`, `/review`, `/kit`)

Esta pasta contém os comandos interativos do **Agent Project Kit**. Eles ativam a skill [interactive-consultant](../skills/interactive-consultant/SKILL.md), fazendo com que o agente **não aja no escuro**: antes de sair criando ou alterando código, ele inspeciona a pasta, sugere melhorias reais para o seu caso, faz de 3 a 5 perguntas diretas (sempre com recomendação padrão) e pergunta se você quer **gerar os prompts prontos (ex.: Mídia + Código)** ou **executar direto na pasta**.

Todos os comandos funcionam tanto para **criar do zero** quanto para **editar, ajustar, corrigir ou evoluir um projeto existente**.

---

## Comandos disponíveis

| Comando | Quando usar (Criar, Editar ou Ajustar) |
|---|---|
| **`/landingpage`** *(ou `/create-landing`)* | **Criar** uma nova landing page (scrollytelling `ARQ-A`/`ARQ-B`/`ARQ-C` ou loja com catálogo e sacola no WhatsApp `ARQ-D`), **editar/ajustar** seções existentes, **adicionar sacola de WhatsApp**, **trocar/otimizar mídias AVIF+WebP** ou **gerar os 2 prompts prontos** (Mídia + Aplicação). |
| **`/frontend`** | **Criar, editar, ajustar ou refatorar** telas, componentes, fluxos de UX, estados (`loading`/`empty`/`error`), responsividade mobile e integração com Figma/Playwright. |
| **`/backend`** | **Criar, editar, ajustar ou otimizar** endpoints, regras de negócio, contratos HTTP, DTOs, autenticação, idempotência e integrações (.NET ou stack do projeto). |
| **`/database`** | **Criar, ajustar ou otimizar** tabelas, queries, índices, concorrência, isolamento de transações e migrations com revisão segura de SQL. |
| **`/review`** | **Auditar e melhorar** um projeto existente: UX/UI e overflow com Playwright, conformidade legal Brasil (LGPD), segurança, performance de mídia (`.avif`/`?v=<hash>`) e documentação/ADR. |
| **`/kit`** | **Comando curinga:** faz um raio-X de qualquer pasta (nova ou em andamento), conversa sobre o que pode ser criado ou melhorado e aciona apenas as skills necessárias. |

---

## Exemplos práticos de uso (Criar vs. Editar/Ajustar)

```text
/landingpage criar loja de roupa feminina com catálogo e sacola que envia o pedido pro WhatsApp
```

```text
/landingpage editar a seção de projetos para usar trilho horizontal escuro e trocar as fotos para AVIF
```

```text
/frontend ajustar o modal de detalhe do produto para incluir tabela de medidas e corrigir o layout no mobile
```

```text
/backend editar o endpoint de pedidos para validar estoque por tamanho e evitar pedido duplicado
```

```text
/database otimizar a consulta de listagem de catálogo que está lenta e revisar os índices
```

```text
/review revisar responsividade, imagens quebradas e conformidade LGPD antes de colocar no ar
```

---

## Como instalar os comandos na sua máquina (1 comando)

Para usar `/landingpage`, `/frontend`, `/backend`, `/database`, `/review` e `/kit` em **qualquer pasta** no **Claude Code** (`~/.claude/commands/`) e no **Antigravity** (`~/.gemini/config/skills/`), rode uma vez:

**Windows (PowerShell):**
```powershell
powershell -ExecutionPolicy Bypass -File ./scripts/install-commands.ps1
```

**Linux / macOS (Bash):**
```bash
bash ./scripts/install-commands.sh
```

O script detecta automaticamente a pasta onde o kit foi clonado e atualiza os atalhos globais apontando para ela.
