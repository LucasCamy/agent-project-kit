# Etapa 2 e 3: Prompts Padronizados para Gerar Imagens, Vídeos e Manifesto

Escolha abaixo o prompt correspondente ao arquétipo definido em [01-catalogo-formas-e-animacoes.md](01-catalogo-formas-e-animacoes.md):
1. **Bloco 1 — Questionário Interativo** (quando quiser que o agente ajude a escolher o arquétipo e faça as perguntas antes de gerar as imagens).
2. **Prompt ARQ-A — Grade Estrutural Noturna** (ex.: Direito, Consultoria, Finanças).
3. **Prompt ARQ-B — Editorial Orgânico & Tátil** (ex.: Arquitetura, Interiores, Design — inclui **par Croqui ↔ Obra no mesmo ângulo**, **galeria horizontal** e **amostras de materiais**).
4. **Prompt de Consolidação Local (`ffmpeg` + `MEDIA_MANIFEST.json`)** — para converter os PNGs baixados, buscar os ativos gratuitos restantes e extrair os 120 quadros do `<canvas>`.

---

## 1. Questionário Interativo (Escolha de Arquétipo + Direção de Arte)

```markdown
Quero produzir o pacote completo de mídia (`media/` + 120 quadros WebP para `<canvas>` + `MEDIA_MANIFEST.json`) para uma landing page scrollytelling.

Antes de gerar as imagens, faça-me estas perguntas de forma objetiva para definirmos o conceito:

1. **Público e Nicho:** Qual é a área de atuação e quem é o cliente ideal?
2. **Arquétipo Visual:** Qual conceito você prefere?
   - **ARQ-A (Grade Estrutural Noturna):** Fundo escuro `#0A0A0B`, fios de `1px`, retrato em chiaroscuro, bento xadrez e linha do tempo `01–04`.
   - **ARQ-B (Editorial Orgânico & Tátil):** Fundo claro linho/travertino `#F2EFE9` + galeria horizontal escura `#191815`, Hero que encolhe com scroll para virar foto no Manifesto, cortina Antes ↔ Depois (Croqui à mão vs. Foto real no mesmo ângulo), mesa tátil de 6 materiais e processo com coluna fixa.
   - **ARQ-C (Personalizado):** Escolher combinação específica de Hero, Portfólio, Cena-Assinatura e Método.
3. **Sujeito do Hero (`hero-main.webp`):** Retrato editorial ou ambiente/obra? Qual a atmosfera de luz?
4. **Cena-Assinatura Principal:** Será um comparador Antes ↔ Depois (ex.: Croqui 2022 ↔ Obra 2024), uma Mesa de Materiais, uma Sequência de 120 quadros em `<canvas>` ou ambos?
5. **Projetos / Frentes e Equipe:** Quantas obras/áreas serão destacadas e a seção de autoria mostrará 1 fundador(a) em ambiente de trabalho ou 3 sócios em retrato?
```

---

## 2. Prompt ARQ-A — Gerar Mídias para Grade Estrutural Noturna (Ex.: Direito / Consultoria)

```markdown
Atue como Diretor de Arte Fotográfica e Produtor de Mídia para Web Scrollytelling (Arquétipo ARQ-A: Grade Estrutural Noturna, fundo `#0A0A0B`, fios de `1px`, iluminação chiaroscuro e acento `#C85A32`).

Nicho do projeto: [DESCREVER NICHO, ex.: Escritório de Advocacia Estratégica em São Paulo].

### ENTREGA 1 — Gere agora (com sua ferramenta de imagem) os 4 visuais-chave abaixo:
1. `hero-main.webp` (4:5 vertical): Retrato editorial em chiaroscuro do(a) sócio(a)-fundador(a) em alfaiataria escura sobre fundo escuro com nuance verde-petróleo/carvão, deixando respiro para tipografia gigante sobreposta.
2. `section-editorial.webp` (4:3 horizontal): Cena narrativa institucional (ex.: profissional descendo escadaria clássica de madeira com pasta de couro sob luz lateral dramática).
3. `bento-02-detail.webp` (4:3 horizontal): Close-up tátil de execução (ex.: mãos assinando contrato com caneta-tinteiro sobre mesa de madeira maciça sob luz quente de abajur).
4. `contact-space.webp` (16:10 horizontal): Sala de conselho/reunião de alto padrão à noite, parede de vidro com luzes da cidade desfocadas ao fundo.

### ENTREGA 2 — Liste os ativos gratuitos (Unsplash / Pexels) que irão compor o pacote local:
- `bento-01.webp` (4:5 vertical) e `bento-03.webp` (4:5 vertical) para o grid xadrez.
- `team-01.webp`, `team-02.webp`, `team-03.webp` (3:4 vertical) para os 3 sócios.
- `hero-ambient.mp4` (5s loop escuro) e `canvas-sequence.mp4` (5s em movimento contínuo para extrair 120 quadros WebP `1024x576`).
```

---

## 3. Prompt ARQ-B — Gerar Mídias para Editorial Orgânico & Tátil (Ex.: Arquitetura / Interiores / Design)

> **Diferencial deste prompt:** Gera as mídias específicas do conceito editorial claro/tátil (como no vídeo `arquitetura-web.mp4`): o Hero que também é o ambiente da comparação, o **Croqui à mão exatamente no mesmo ângulo da foto do Hero**, a mesa de trabalho do processo e o retrato autoral no estúdio.

```markdown
Atue como Diretor de Arte de Fotografia Arquitetônica e Produtor de Mídia para Web Scrollytelling (Arquétipo ARQ-B: Editorial Orgânico & Tátil — paleta linho/travertino `#F2EFE9` combinada com galeria noturna `#191815`, concreto aparente, madeira natural e luz solar).

Nicho do projeto: [DESCREVER NICHO, ex.: Estúdio de Arquitetura e Interiores Residenciais de Alto Padrão em São Paulo].

### ENTREGA 1 — Gere agora (com sua ferramenta de imagem) os 4 visuais-chave abaixo:

1. `hero-main.webp` (Proporção 16:10 horizontal):
   - Cena: Sala de estar arquitetônica contemporânea de alto padrão com pé-direito amplo, forro de madeira ripada/freijó, piso em travertino romano, sofá de linho claro à esquerda, poltrona de couro caramelo, mesa de centro baixa em madeira maciça e grandes caixilhos de vidro de piso a teto abrindo para um jardim tropical denso e piscina com espelho d'água ao entardecer.
   - Uso duplo: Será o Hero fullscreen (que encolhe com scroll para virar a foto do Manifesto) **e também o lado direito ("ENTREGA · 2024") do comparador Antes ↔ Depois**.

2. `sketch-before.webp` (Proporção 16:10 horizontal — **MESMO ENQUADRAMENTO E PERSPECTIVA DA IMAGEM 1**):
   - Cena: **Exatamente a mesma sala, mesma câmera, mesma posição do sofá, poltrona, mesa de centro, caixilhos e jardim da Imagem 1**, porém renderizada como um **croqui arquitetônico técnico desenhado à mão** sobre papel creme claro (linhas finas de grafite/nanquim com hachuras de perspectiva e leve aquarela amadeirada apenas nos painéis de madeira).
   - Uso: Será o lado esquerdo (`CROQUI · 2022`) da cortina interativa `clip-path` sobreposta à `hero-main.webp` (`ENTREGA · 2024`).

3. `process-studio-table.webp` (Proporção 4:3 horizontal):
   - Cena: Mesa de madeira do estúdio vista em ângulo superior/diagonal com plantas técnicas abertas em papel sulfite/vegetal, maquete volumétrica física em madeira balsa e base branca, escalímetro, lápis e luz natural lateral suave.
   - Uso: Imagem fixa da coluna esquerda na seção `05 — Processo`.

4. `founder-portrait.webp` (Proporção 3:4 vertical):
   - Cena: Retrato editorial natural da arquiteta/sócia-fundadora apoiada na mesa de madeira do estúdio ao lado de uma maquete branca e plantas arquitetônicas, janela com luz natural à direita e estante com amostras de pedra e madeira ao fundo.
   - Uso: Seção `06 — Estúdio`.

### ENTREGA 2 — Planeje os ativos complementares gratuitos (Unsplash / Pexels) para o script local baixar:
- **5 Obras para o Trilho Horizontal (`projects/project-01.webp` a `project-05.webp`):**
  1. `project-01.webp` (16:10): Casa contemporânea em concreto aparente e brises de madeira com espelho d'água e jardim tropical (`Casa Cidade Jardim`).
  2. `project-02.webp` (16:10): Varanda de praia com pérgola de madeira cumaru, sofá externo em linho e vista para o mar (`Casa Baleia`).
  3. `project-03.webp` (4:5 vertical): Sala de apartamento com marcenaria sob medida e vista para a copa das árvores (`Apartamento Alto de Pinheiros`).
  4. `project-04.webp` (4:5 vertical): Escada escultural em madeira maciça e concreto aparente com iluminação zenital (`Casa Pacaembu`).
  5. `project-05.webp` (4:5 vertical): Banho revestido em travertino aberto para jardim interno (`Casa Jardim América`).
- **6 Amostras de Textura (`swatches/swatch-01.webp` a `swatch-06.webp`, quadradas 1:1, `400x400`):**
  `01 Travertino romano`, `02 Concreto aparente`, `03 Cumaru`, `04 Freijó`, `05 Terracota`, `06 Linho`.
- **Vídeo e Sequência de Quadros (`canvas-sequence.mp4` + 120 quadros `frames/frame_0001.webp` a `frame_0120.webp`):**
  Movimento contínuo de luz e arquitetura de 5 segundos para `<canvas>` opcional ou ambiência.
```

---

## 4. Prompt de Consolidação Local (`ffmpeg` + Download + `MEDIA_MANIFEST.json`)

Depois que o agente gerar as 4 imagens na conversa, baixe-as para sua pasta local de `Downloads` (ou anexe-as) e envie este comando ao agente local:

```markdown
Baixei as 4 imagens geradas para `[CAMINHO_DA_PASTA_DE_DOWNLOADS]` (ou estão anexadas).

Monte e valide o pacote completo localmente em `[PASTA_DE_SAIDA_OU_PROJETO]` usando `ffmpeg`, sem me pedir novos links:

1. **Converta os 4 PNGs gerados para `.webp`** (qualidade 84, mantendo proporção original) dentro de `media/`:
   - Se for Arquétipo ARQ-A: `hero-main.webp`, `section-editorial.webp`, `bento-02-detail.webp`, `contact-space.webp`.
   - Se for Arquétipo ARQ-B: `hero-main.webp`, `sketch-before.webp`, `process-studio-table.webp`, `founder-portrait.webp`.

2. **Baixe você mesmo da internet (Unsplash / Pexels) e converta para `.webp` / `.mp4` em `media/`:**
   - Todos os ativos complementares previstos para o arquétipo (em ARQ-A: `bento-01.webp`, `bento-03.webp`, `team-01..03.webp`; em ARQ-B: `projects/project-01.webp` a `project-05.webp` e as 6 texturas quadradas `swatches/swatch-01.webp` a `swatch-06.webp` ou fotos correspondentes de aplicação dos materiais).
   - Os vídeos `hero-ambient.mp4` e `canvas-sequence.mp4` (5 segundos, 24 fps, sem áudio) e extraia os 120 quadros WebP (`1024x576`, qualidade 80) em `media/frames/frame_0001.webp` a `frame_0120.webp`.

3. **Gere o `MEDIA_MANIFEST.json` com `status: "ready"`** contendo caminhos locais, `expectedAspectRatio`, `focalPoint`, `alt` em `pt-BR`, créditos e licenças.
```
