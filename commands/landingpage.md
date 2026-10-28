---
description: Criar, editar, ajustar ou evoluir uma landing page (scrollytelling, institucional ou catálogo com sacola WhatsApp) de forma consultiva, gerando prompts de mídia/código ou implementando direto.
argument-hint: [criar | editar | ajustar | adicionar sacola | trocar midia | briefing opcional]
---

Leia [../skills/interactive-consultant/SKILL.md](../skills/interactive-consultant/SKILL.md), o playbook `/landingpage` em [../skills/interactive-consultant/references/playbooks.md](../skills/interactive-consultant/references/playbooks.md), [../skills/frontend-figma-playwright/pipeline-midia/01-catalogo-formas-e-animacoes.md](../skills/frontend-figma-playwright/pipeline-midia/01-catalogo-formas-e-animacoes.md) e [../skills/frontend-figma-playwright/references/landing-page.md](../skills/frontend-figma-playwright/references/landing-page.md).

Pedido ou contexto inicial do usuário: `$ARGUMENTS`

## Como agir agora:
1. **Inspecione a pasta atual primeiro:**
   - Se a pasta estiver vazia (ou só tiver imagens), trate como **Criação de Nova Landing Page**.
   - Se já existir um projeto (`package.json`, `src/`, `DESIGN.md`), trate como **Edição / Ajuste / Evolução da Landing Page existente** (leia os arquivos relevantes antes de responder).
2. **Atue como Diretor Criativo + Especialista em Conversão:**
   - Diga em 3 a 5 tópicos o que entendeu, **sugira melhorias práticas** (ex.: qual arquétipo `ARQ-A`, `ARQ-B`, `ARQ-C` ou `ARQ-D` com sacola no WhatsApp `PORT-3` combina melhor, quais cenas de scroll ou filtros ajudam na conversão, ou o que pode ser melhorado na seção que o usuário quer editar).
3. **Faça de 3 a 5 perguntas diretas (sempre com uma opção recomendada)** para fechar as decisões de estilo, seções/funcionalidades e mídias (`.avif` + `.webp` + vídeo).
4. **Pergunte como o usuário prefere executar:**
   - **Opção 1 — Gerar os Prompts Prontos sob Medida** (Prompt 1 para gerar/ajustar imagens AVIF+WebP e vídeos no ChatGPT/Codex + Prompt 2 para o Claude Code implementar/editar a aplicação);
   - **Opção 2 — Executar Direto Aqui** (você mesmo já cria ou edita os arquivos no projeto atual e valida com Playwright);
   - **Opção 3 — Modo Híbrido** (gerar o prompt de mídia para rodar em paralelo enquanto você já estrutura/edita o código local).
