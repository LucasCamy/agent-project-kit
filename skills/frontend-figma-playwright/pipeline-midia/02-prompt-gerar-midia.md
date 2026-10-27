# Etapa 2 e 3: Prompt Mestre Automático (Entrevista ➔ Mídia AVIF/WebP + Vídeo ➔ Prompt do Código)

Este arquivo contém:
1. **Prompt Mestre Semi-Automático (Formulário Interativo):** Você cola apenas este prompt inicial; a IA faz as perguntas de múltipla escolha para preencher o briefing e, após a sua resposta, **ela mesma gera as imagens (em AVIF + WebP), renderiza os vídeos e os 120 quadros do `<canvas>`, cria o `MEDIA_MANIFEST.json` e já entrega o prompt final preenchido para você colar no agente de código (Claude)**.
2. **Prompts Diretos por Arquétipo (`ARQ-A` e `ARQ-B`):** Caso você já queira pular a entrevista e mandar gerar direto.
3. **Prompt de Consolidação Local (`Python + ffmpeg`):** Para converter todas as imagens e os 120 quadros em **`.avif` + `.webp`** e renderizar os vídeos sem depender de clipes aleatórios da internet.

---

## 1. Prompt Mestre Semi-Automático (Copiar e Enviar para Iniciar Qualquer Projeto)

> **Como usar:** Cole o bloco abaixo no ChatGPT / Codex. Ele conduzirá o formulário enxuto, gerará todo o pacote de imagens (`.avif` e `.webp`) + vídeos (`.mp4` + 120 quadros `.avif`/`.webp`) e entregará no final o bloco Markdown pronto para enviar ao Claude.

```markdown
Atue como Diretor de Criação Digital, Produtor de Mídia Scrollytelling e Engenheiro de Prompt.

Vamos criar uma landing page scrollytelling completa dividida em duas fases:
- **Fase A (com você):** Definir o conceito por meio de um formulário rápido, gerar as imagens autorais, converter tudo para **AVIF + WebP**, renderizar os vídeos (`hero-ambient.mp4` e `canvas-sequence.mp4`) + 120 quadros (`1024×576` em `.avif` e `.webp`), montar o `MEDIA_MANIFEST.json` e **gerar o Prompt Markdown Final preenchido** para eu copiar e colar no Claude.
- **Fase B (no Claude):** O Claude lerá a pasta de mídias e o prompt gerado por você para programar a página completa com GSAP + ScrollTrigger + Lenis.

### PASSO 1 — FAÇA-ME AGORA ESTE FORMULÁRIO (NÃO GERE AS IMAGENS ANTES DE EU RESPONDER):
Apresente as 6 perguntas abaixo de forma limpa para eu responder rapidamente (posso responder só com os códigos, ex.: `1: Clínica de Longevidade | 2: ARQ-B | 3: F:\clinica\img ...`):

1. **Nicho, Nome da Marca e Cidade:** (Ex.: Escritório de Advocacia Empresarial / Estúdio de Arquitetura / Clínica Médica em São Paulo)
2. **Arquétipo Visual e Estrutura da Página:**
   - **[ARQ-A] Grade Estrutural Noturna:** Fundo escuro `#0A0A0B`, fios de `1px`, retrato em chiaroscuro + 4 pilares, bento xadrez `01–06`, sequência de 120 quadros no `<canvas>`, linha horizontal `01–04` e 3 sócios P&B → cor.
   - **[ARQ-B] Editorial Orgânico & Tátil:** Fundo claro linho/travertino `#F2EFE9` + galeria horizontal escura `#191815` com cursor `"ARRASTE"`, régua lateral `01 / 06`, Hero fullscreen que encolhe com scroll para virar foto no Manifesto, cortina Antes ↔ Depois (`Croqui/Projeto` ↔ `Obra Entregue` no mesmo ângulo), mesa tátil de 6 materiais/amostras e processo com coluna esquerda fixa + 6 etapas verticais.
   - **[CUSTOM] Mix & Match:** Escolher separadamente Hero (`HERO-1/2/3`), Portfólio (`PORT-1/2`), Cena-Assinatura (`SIGN-1: Cortina Antes/Depois`, `SIGN-2: Mesa de Amostras`, `SIGN-3: 120 quadros no Canvas`), Método (`METH-1/2`) e Equipe (`TEAM-1/2`).
3. **Cenas das 4 Imagens Principais (ou diga "sugira você para o meu nicho"):**
   - Imagem 1 (`hero-main`):
   - Imagem 2 (`section-editorial` ou `sketch-before` no mesmo ângulo do Hero):
   - Imagem 3 (`bento-02-detail` ou `process-studio-table`):
   - Imagem 4 (`contact-space`):
4. **Narrativa do Vídeo e dos 120 Quadros do `<canvas>` (`canvas-sequence.mp4`):**
   - **[V1] Do Traço à Obra Construída:** Croqui técnico em papel linho ➔ varredura diagonal de luz dourada ➔ obra real iluminada com movimento suave de câmera e reflexo vivo.
   - **[V2] Travessia Cinematográfica Chiaroscuro:** Movimento contínuo de câmera e feixe de luz lateral conectando as 3 cenas autorais do projeto.
   - **[V3] Outra transição personalizada:** (descrever).
5. **Pasta de Destino neste Computador:** (Ex.: `F:\meu-projeto\img`)
6. **Cor de Acento Preferida (ou "automática pelo arquétipo"):**

---

### PASSO 2 — O QUE VOCÊ DEVE FAZER AUTOMATICAMENTE ASSIM QUE EU RESPONDER:
1. **Gerar as 4 imagens principais** seguindo a proporção e o respiro para tipografia do arquétipo escolhido.
2. **Montar o pacote completo na pasta de destino** usando Python (Pillow/NumPy) + `ffmpeg`:
   - Salvar **todas** as imagens estáticas em **dois formatos: `.avif` (primário, exigido pelo Claude) e `.webp` (fallback)** (`hero-main.avif`/`.webp`, `section-editorial.avif`/`.webp`, `bento-01..03.avif`/`.webp`, `team-01..03.avif`/`.webp`, `contact-space.avif`/`.webp`, e `sketch-before.avif`/`.webp` quando usar cortina Antes/Depois).
   - **Proibido baixar vídeos aleatórios de bancos gratuitos apenas pelo nome na URL.** Gere `hero-ambient.mp4` (1920×1080, 5s, 24fps, sem áudio) e `canvas-sequence.mp4` (1024×576, 5s, 24fps, sem áudio) por script Python + `ffmpeg` diretamente a partir das imagens autorais do projeto (simulando câmera, varredura de luz, croqui→obra e reflexo), e extraia os **120 quadros tanto em `.avif` (`frames/frame_0001.avif`..`frame_0120.avif`) quanto em `.webp` (`frames/frame_0001.webp`..`frame_0120.webp`)**.
   - Inspecione 3 quadros (`frame_0010`, `frame_0060`, `frame_0110`) para confirmar a qualidade visual e gere o `MEDIA_MANIFEST.json` com `status: "ready"`.
3. **Entregar no final da sua resposta um bloco de código Markdown chamado `PROMPT PARA COLAR NO CLAUDE`**, já totalmente preenchido com:
   - Os caminhos reais de `F:/Skills/...` e da pasta de mídias gerada;
   - A lista de todos os arquivos `.avif`, `.webp` e `.mp4` com seus `focalPoints` e `alt`;
   - As regras do arquétipo escolhido e o mapeamento das 10 técnicas de scroll (GSAP + ScrollTrigger + Lenis) para o Claude executar o código sozinho.
```

---

## 2. Prompt de Consolidação / Correção de Vídeo e Conversão AVIF + WebP

Use este prompt se você já gerou as imagens e precisa apenas refazer os vídeos/quadros com qualidade procedural e garantir que **todas as imagens e os 120 quadros existam em `.avif` e `.webp`**:

```markdown
Atualize o pacote de mídia na pasta `[CAMINHO_DA_PASTA_DE_MIDIA]` usando Python (Pillow / NumPy) + `ffmpeg`:

1. **Garanta formato duplo (`.avif` + `.webp`) em tudo:**
   - O Claude exige imagens em **`.avif`** (com `.webp` como fallback). Converta todas as imagens estáticas da pasta (`hero-main`, `section-editorial`, `bento-01..03`, `team-01..03`, `contact-space`, `sketch-before`) e todos os 120 quadros da pasta `frames/` para que existam simultaneamente em `.avif` (`-c:v libsvtav1 -crf 28` ou `libaom-av1 -still-picture 1`) e em `.webp` (qualidade 84).
2. **Recrie `canvas-sequence.mp4` (5s, 24fps, `1024×576`) e `hero-ambient.mp4` (5s, 24fps, `1920×1080`, sem áudio) a partir das nossas imagens autorais (sem vídeos genéricos de banco):**
   - **Se for Arquétipo ARQ-B (Arquitetura / Editorial):** Gere `sketch-before.avif` e `.webp` (croqui técnico em papel linho `#F2EFE9` com mesmo enquadramento de `hero-main`) e renderize os 120 quadros mostrando: Frames `0001–0035` (croqui ganhando linhas de eixo e hachuras com dolly-in suave) ➔ Frames `0036–0085` (varredura diagonal com linha dourada revelando a obra real iluminada) ➔ Frames `0086–0120` (obra completa com luz interna e micro-ondulação no reflexo d'água).
   - **Se for Arquétipo ARQ-A (Direito / Corporativo):** Renderize os 120 quadros em chiaroscuro conectando as 3 cenas autorais com movimento suave de câmera e varredura de feixe de luz quente lateral.
3. Inspecione visualmente os quadros `0010`, `0060` e `0110`, atualize o `MEDIA_MANIFEST.json` registrando os caminhos `.avif` e `.webp` e me entregue o **Prompt Final atualizado para colar no Claude**.
```
