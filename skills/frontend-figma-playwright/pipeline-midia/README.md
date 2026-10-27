# Pipeline de mídia e scrollytelling (passo a passo)

Fluxo padronizado para planejar a direção visual, gerar pacotes completos de mídia (imagens autorais, pares de antes/depois, texturas, vídeos, sequência de 120 quadros para `<canvas>` e `MEDIA_MANIFEST.json`) e implementar landing pages contadas pelo scroll **sem repetir o mesmo layout entre nichos diferentes**.

Complementa a [receita de landing page](../references/landing-page.md), a [referência de animação ligada ao scroll](../references/scroll-motion.md) e a [conformidade legal](../../project-workflow/references/conformidade-legal.md).

## Arquivos desta pasta

| Arquivo | Função |
|---|---|
| [README.md](README.md) | Visão geral do fluxo em 4 etapas e como escolher o conceito certo para cada público |
| [01-catalogo-formas-e-animacoes.md](01-catalogo-formas-e-animacoes.md) | **Catálogo de arquétipos, formas de seção e 10 mecânicas de scroll** para variar a estrutura conforme o público |
| [02-prompt-gerar-midia.md](02-prompt-gerar-midia.md) | Questionário de briefing + prompts padronizados para gerar imagens/vídeos (por arquétipo) e consolidar com `ffmpeg` |
| [03-schema-media-manifest.md](03-schema-media-manifest.md) | Contrato do `MEDIA_MANIFEST.json` (incluindo suporte a Hero, galeria horizontal, antes/depois, materiais e `<canvas>`) |
| [04-prompt-implementar-codigo.md](04-prompt-implementar-codigo.md) | Prompts padronizados para o agente de código (Template Modular + Presets prontos por arquétipo) |

---

## Por que separar Arquétipo, Forma e Animação?

Usar as mesmas 10 tecnologias de scroll (GSAP, ScrollTrigger, Lenis, Pin, Scrub, Timeline, Clip-path, Parallax, Canvas e Stagger) **não significa usar o mesmo desenho de página**. Cada público pede um ritmo, uma temperatura visual e uma mecânica principal:

| Dimensão | Exemplo A: Advocacia / Consultoria / Finanças | Exemplo B: Arquitetura / Design / Interiores | Exemplo C: Produto / Engenharia / SaaS |
|---|---|---|---|
| **Arquétipo visual** | *Grade Estrutural Noturna* (fundo carvão `#0A0A0B`, fios aparentes de `1px`, seriedade institucional) | *Editorial Orgânico & Tátil* (fundo claro linho/travertino `#F2EFE9` + seção escura `#191815` para galeria de obras) | *Showroom Técnico / Laboratório* (contraste alto, diagramas, telemetria e anatomia de produto) |
| **Tipografia** | Display condensada/geométrica em caixa alta + mono tabular | Serifada editorial leve com *palavras-chave em itálico* + legendas técnicas discretas | Sans variável geométrica + mono para especificações |
| **Mecânica do Hero** | Retrato em chiaroscuro com título gigante sobreposto + 4 pilares em grade de `1px` | Foto `100vw × 100dvh` que **fixa (`pin`) e encolhe com `scrub`** até virar uma moldura na coluna direita do Manifesto | Cena interativa ou `<canvas>` que desmonta/revela o produto no primeiro scroll |
| **Apresentação de Portfólio / Áreas** | Grid xadrez (`1px`) intercalando fotos em parallax e cards numerados `01–06` | **Trilho horizontal fixado (`pin + scrub`)** sobre fundo escuro com selo de cursor `"Arraste"` e barra `01 / 05` | Abas interativas WAI-ARIA + janela funcional ou diagrama clicável |
| **Cena-Assinatura** | Sequência de 120 quadros em `<canvas>` ou linha do tempo horizontal | **Cortina Antes ↔ Depois (`clip-path`)** comparando o *Croqui à mão* e a *Obra entregue* no mesmo ângulo + **Mesa Tátil de Materiais** | Sequência de 120 quadros em `<canvas>` controlada pelo scroll + marcadores técnicos |
| **Seção de Método / Processo** | Linha horizontal `01–04` que preenche com o scroll | Coluna esquerda fixa (`pin`) com foto de maquete/estudo + 6 etapas verticais à direita que acendem (`opacity: 0.25 -> 1`) ao cruzar a leitura | Timeline conectada a estados simulados de execução |

---

## Passo a passo em 4 etapas

1. **Escolher o conceito em [01-catalogo-formas-e-animacoes.md](01-catalogo-formas-e-animacoes.md):**
   Analise o público (ou um vídeo `.mp4` de referência) e selecione o **Arquétipo Visual**, o **Conjunto de Formas de Seção** e onde cada uma das **10 técnicas de scroll** será usada.
2. **Gerar os ativos visuais com [02-prompt-gerar-midia.md](02-prompt-gerar-midia.md):**
   Use o questionário ou envie direto o prompt da variante escolhida para gerar as imagens autorais (incluindo pares especiais como *Croqui vs. Obra Pronta* ou *Amostras de Materiais* quando o arquétipo pedir).
3. **Empacotar localmente e validar o [03-schema-media-manifest.md](03-schema-media-manifest.md):**
   Converta os PNGs em WebP com `ffmpeg`, baixe fotos/vídeos complementares gratuitos, extraia os 120 quadros WebP (`1024x576`) e gere o `MEDIA_MANIFEST.json` com `status: "ready"`.
4. **Construir o código com [04-prompt-implementar-codigo.md](04-prompt-implementar-codigo.md):**
   Envie o prompt padronizado (Modular ou Preset do Arquétipo) para o agente implementador criar a aplicação completa e validar com Playwright em desktop, celular e `prefers-reduced-motion`.
