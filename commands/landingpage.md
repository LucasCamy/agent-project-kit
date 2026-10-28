---
description: Criar, editar, ajustar ou evoluir uma landing page (scrollytelling, institucional ou catálogo com sacola WhatsApp) de forma consultiva, gerando prompts de mídia/código ou implementando direto.
argument-hint: [criar | editar | ajustar | adicionar sacola | trocar midia | briefing opcional]
---

Leia [../skills/interactive-consultant/SKILL.md](../skills/interactive-consultant/SKILL.md), o playbook `/landingpage` em [../skills/interactive-consultant/references/playbooks.md](../skills/interactive-consultant/references/playbooks.md), os moldes obrigatórios em [../skills/interactive-consultant/references/prompt-templates.md](../skills/interactive-consultant/references/prompt-templates.md), [../skills/frontend-figma-playwright/pipeline-midia/01-catalogo-formas-e-animacoes.md](../skills/frontend-figma-playwright/pipeline-midia/01-catalogo-formas-e-animacoes.md), [../skills/frontend-figma-playwright/pipeline-midia/02-prompt-gerar-midia.md](../skills/frontend-figma-playwright/pipeline-midia/02-prompt-gerar-midia.md) e [../skills/frontend-figma-playwright/pipeline-midia/04-prompt-implementar-codigo.md](../skills/frontend-figma-playwright/pipeline-midia/04-prompt-implementar-codigo.md).

Pedido ou contexto inicial do usuário: `$ARGUMENTS`

## Como agir agora:
1. **Inspecione a pasta atual primeiro:**
   - Se a pasta estiver vazia (ou só tiver imagens), trate como **Criação de Nova Landing Page**.
   - Se já existir um projeto (`package.json`, `src/`, `DESIGN.md`), trate como **Edição / Ajuste / Evolução da Landing Page existente** (leia os arquivos relevantes antes de responder).
2. **Atue como Diretor Criativo + Especialista em Conversão:**
   - Diga em 3 a 5 tópicos o que entendeu, **sugira melhorias práticas** para o nicho (ex.: `ARQ-A` Grade Noturna para Direito/Consultoria; `ARQ-B` Editorial Orgânico com Hero que encolhe, galeria horizontal escura, cortina Croqui ↔ Obra e 6 amostras táteis para Arquitetura/Design; `ARQ-D` Boutique com catálogo `4:5` de 2 fotos por peça, filtro de tamanho `PP–GG`, Guia de Medidas, Compre o Look e Sacola Lateral → WhatsApp para Moda/Lojas).
3. **Faça de 3 a 5 perguntas diretas (sempre com uma opção recomendada)** — ou, se o usuário já pediu os prompts diretamente, gere-os usando as recomendações ideais do nicho.
4. **Ao gerar os Prompts Prontos (Opção 1), entregue SEMPRE os 2 blocos completos e já preenchidos (sem formulário intermediário dentro do Prompt 1):**
   - **PASSO 1 — Prompt Direto de Mídia (para colar no Codex/ChatGPT):** já com a direção fotográfica, paleta, lista nominal de todas as fotos `.avif` + `.webp` (incluindo `prod-01-a/b..prod-08-a/b` se for `ARQ-D`, ou `sketch-before` se for `ARQ-B`), `hero-ambient.mp4` com loop `xfade` de `0.5s`, `120` quadros `<canvas>` codificados um a um com `-frames:v 1` (evitando `av1C` vazio) e `MEDIA_MANIFEST.json`.
   - **PASSO 2 — Prompt Direto de Código (para colar no Claude Code):** baseado no preset completo de `04-prompt-implementar-codigo.md` (`ARQ-A`, `ARQ-B`, `ARQ-D` ou `Mix & Match`) com todas as seções, higiene de mídia (`?v=${MEDIA_VERSION}`), testes `Vitest` e validação `Playwright`.
