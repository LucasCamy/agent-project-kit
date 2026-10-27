# Etapa 4: Prompts Padronizados para Implementar o Código

Escolha abaixo o prompt que corresponde ao conceito do projeto:
1. **Preset ARQ-A (Grade Estrutural Noturna)** — Advocacia, Consultoria, Finanças, Engenharia (`NAV-1 + HERO-1 + PORT-1 + SIGN-3 + METH-1 + TEAM-1`).
2. **Preset ARQ-B (Editorial Orgânico & Tátil)** — Arquitetura, Interiores, Design Autoral (`NAV-2 + HERO-2 + PORT-2 + SIGN-1 + SIGN-2 + METH-2 + TEAM-2`).
3. **Template Modular (Mix & Match)** — Para montar qualquer combinação personalizada de blocos de [01-catalogo-formas-e-animacoes.md](01-catalogo-formas-e-animacoes.md).

---

## 1. Preset ARQ-A — Grade Estrutural Noturna (Ex.: Direito / Consultoria)

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/landing-page.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/scroll-motion.md e [CAMINHO_DO_KIT]/skills/project-workflow/references/conformidade-legal.md e aplique esse fluxo neste projeto.

Atue simultaneamente como diretor de criação digital, designer de UI/UX, desenvolvedor frontend sênior, especialista em motion (GSAP + ScrollTrigger + Lenis), acessibilidade e performance, e revisor visual extremamente crítico.

Objetivo: Criar a landing page scrollytelling completa usando o **Arquétipo ARQ-A (Grade Estrutural Noturna)**, consumindo o pacote real de mídias em `[CAMINHO_DO_PACOTE_DE_MIDIA]` e aplicando as 10 técnicas de animação ligada ao scroll.

## MODO DE EXECUÇÃO
- Execute todas as etapas (Inspeção → cópia de `media/` para `public/media/` → `AGENTS.md` → `DESIGN.md` → `IMPLEMENTATION_PLAN.md` → Implementação → Validação com Playwright → Revisão crítica) sem parar em decisões visuais ou técnicas razoáveis.
- [Se autorizar dispensa do Figma nesta tarefa: Caso o Figma MCP não esteja conectado nesta sessão, fica autorizado seguir direto para `DESIGN.md` e código.]

## FORMAS E MECÂNICAS DESTE ARQUÉTIPO (ARQ-A)
- **Paleta e Grade:** Fundo `#0A0A0B`, superfície `#111113`, fios aparentes de `1px solid rgba(242,239,233,0.12)`, texto `#F2EFE9`, acento único `#C85A32`.
- **`NAV-1` (Topo Estrutural):** Barra fixa superior com capítulos e barra de `Scroll Progress` (`scaleX`).
- **`HERO-1` (Retrato Monumental + 4 Pilares):** `/media/hero-main.webp` em chiaroscuro com tipografia display gigante sobreposta (`Pin + Timeline`), seguida de grade de 4 pilares com `Stagger` e abertura de detalhe.
- **Métricas + Institucional (`Clip-path + Parallax`):** 4 contadores `tabular-nums` acionados por `ScrollTrigger` + split assimétrico com `/media/section-editorial.webp` revelada como cortina (`clip-path: inset(100% 0 0 0)` → `inset(0%)`).
- **`PORT-1` (Grid Xadrez `1px`):** 6 frentes numeradas (`01` a `06`) intercaladas com `/media/bento-01.webp`, `/media/bento-02-detail.webp` e `/media/bento-03.webp` em `Parallax`, com filtro funcional e gaveta de escopo ao clicar em `Explorar`.
- **`SIGN-3` (Image Sequence em `<canvas>`):** Seção fixada (`pin`) que avança e rebobina 120 quadros (`/media/frames/frame_0001.webp`..`frame_0120.webp`) com `scrub: 1` e 4 legendas na timeline.
- **`METH-1` (Linha Horizontal `01–04`):** Eixo horizontal fixado que preenche com `scrub` no scroll.
- **`TEAM-1` (3 Sócios P&B → Cor):** `/media/team-01.webp` a `team-03.webp` em P&B que ganham cor no hover/foco + modal de trajetória e aviso de imagem ilustrativa.
- **FAQ Fixo + Contato (`Vamos Conversar`):** Coluna esquerda com `pin` + acordeão WAI-ARIA (`01–06`) + seção final com `/media/contact-space.webp` revelada por máscara e formulário em conformidade com a LGPD.

Valide `typecheck`, `build`, Playwright (`reducedMotion: 'no-preference'` e `'reduce'`, `?movimento=1`) e overflow horizontal nas 7 larguras de `landing-page.md`.
```

---

## 2. Preset ARQ-B — Editorial Orgânico & Tátil (Ex.: Arquitetura / Interiores / Design)

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/landing-page.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/scroll-motion.md e [CAMINHO_DO_KIT]/skills/project-workflow/references/conformidade-legal.md e aplique esse fluxo neste projeto.

Atue simultaneamente como diretor de criação digital, arquiteto de informação e UI/UX, desenvolvedor frontend sênior, especialista em motion (GSAP + ScrollTrigger + Lenis), acessibilidade e performance, e revisor visual extremamente crítico.

Objetivo: Criar a landing page scrollytelling completa usando o **Arquétipo ARQ-B (Editorial Orgânico & Tátil)** — conceito distinto da grade escura corporativa, baseado em superfícies claras de linho/travertino, tipografia serifada editorial com *itálicos expressivos*, transições físicas de escala e capítulos táteis.

## MODO DE EXECUÇÃO
- Execute todas as etapas (Inspeção → organização de `public/media/` → `AGENTS.md` → `DESIGN.md` → `IMPLEMENTATION_PLAN.md` → Implementação → Validação com Playwright → Revisão crítica) sem parar em decisões visuais ou técnicas razoáveis.
- [Se autorizar dispensa do Figma nesta tarefa: Caso o Figma MCP não esteja conectado nesta sessão, fica autorizado seguir direto para `DESIGN.md` e código.]

## PACOTE DE MÍDIA (`[CAMINHO_DO_PACOTE_DE_MIDIA]`)
Copie os ativos para `public/media/` e `MEDIA_MANIFEST.json` para `src/data/MEDIA_MANIFEST.json`. Caso ainda não exista `sketch-before.webp` separado para a cortina Antes ↔ Depois, gere um filtro/camada SVG/Canvas de traço arquitetônico técnico sobre a própria imagem da obra para que a comparação `CROQUI · 2022` ↔ `ENTREGA · 2024` tenha alinhamento geométrico perfeito pixel a pixel.

## DIREÇÃO VISUAL E FORMAS OBRIGATÓRIAS DESTE ARQUÉTIPO (ARQ-B)
- **Paleta e Temperatura:** Tema claro orgânico predominante (fundo linho/areia `#F2EFE9`, superfície `#EAE5DC`, texto carvão `#1C1B18`, texto secundário `#6E6A63`, botão pílula escuro `#1C1B18`), alternando para um **único capítulo escuro `#191815` na seção `02 — Projetos`** para destacar a fotografia iluminada das casas.
- **Tipografia (Fontsource):** Serifada editorial leve (ex.: Cormorant Garamond / Instrument Serif / Newsreader) com **palavras-chave em *itálico*** nos títulos (`"Casas feitas de *luz*, matéria e tempo."`, `"Uma casa boa não chama atenção para si. Ela organiza a *luz*, acolhe o tempo e deixa a vida acontecer."`, `"Tudo começa num *traço* à mão."`, `"Poucos materiais, escolhidos para *envelhecer* bem."`, `"Seis etapas, uma só *interlocutora*."`) + sans limpa para corpo + mono discreta para legendas técnicas (`CASA JARDIM EUROPA · SALA DE ESTAR · 620 M² · 2024`).

### Sequência de Seções e Aplicação das 10 Técnicas de Scroll:
1. **`NAV-2` (Régua Vertical Lateral + Botão Flutuante):**
   - Navbar superior limpa (`Marca`, `Projetos`, `Materiais`, `Processo`, `Estúdio`, `Perguntas`, CTA pílula `Começar um projeto →`).
   - **Régua vertical fixa na margem esquerda** (`Scroll Progress`) atualizando o capítulo ativo (`01 / 06 MANIFESTO`, `02 / 06 PROJETOS`, `03 / 06 DO CROQUI AO ESPAÇO`, `04 / 06 MATERIAIS`, `05 / 06 PROCESSO`, `06 / 06 ESTÚDIO`) + pílula flutuante discreta `Começar um projeto →` no canto inferior direito.
2. **`HERO-2` + `01 — MANIFESTO` (Hero Fullscreen que Encolhe com `Pin + Scrub + Timeline`):**
   - Abre em `100vw × 100dvh` com `/media/hero-main.webp` em tela cheia, headline serifada com *itálico* à esquerda, CTAs (`Começar um projeto →` e `Ver projetos ↓`) e legenda técnica no canto inferior direito.
   - Ao rolar (`pin: true`, `scrub: 1`), **a imagem do Hero encolhe suavemente e se posiciona como uma fotografia emoldurada na coluna direita** da seção `01 — MANIFESTO` sobre o fundo `#F2EFE9`, enquanto à esquerda surgem a frase-manifesto, o texto em coluna editorial e os 4 números com `Stagger` (`15 ANOS DE ESTÚDIO`, `132+ PROJETOS ENTREGUES`, `85 mil M² PROJETADOS`, `6 CASAS NOVAS POR ANO, NO MÁXIMO`).
3. **`PORT-2` (`02 — PROJETOS`: Trilho Horizontal Fixado sobre Fundo Escuro `#191815`):**
   - Transição para fundo `#191815`. Cabeçalho com título à esquerda e contador `05 OBRAS SELECIONADAS` em itálico grande à direita.
   - `Pin + Horizontal Scroll Scrub`: O trilho horizontal desliza da direita para a esquerda conforme o scroll (`x: () => -(scrollWidth - innerWidth)`, `invalidateOnRefresh: true`), exibindo 5 obras (`01 Casa Cidade Jardim`, `02 Casa Baleia`, `03 Apartamento Alto de Pinheiros`, `04 Casa Pacaembu`, `05 Casa Jardim América` + card final de portfólio completo) alternando formatos paisagem (`16:10`) e retrato (`4:5`) com `Parallax` interno nas fotos, metadados (`LOCAL`, `ÁREA`, `ANO`, `ESCOPO`), selo circular `"ARRASTE"` e barra inferior `01 / 05 ───●───`. No mobile e em `prefers-reduced-motion: reduce`, converte em grade vertical.
4. **`SIGN-1` (`03 — DO CROQUI AO ESPAÇO`: Cortina Interativa Antes ↔ Depois com `Clip-path`):**
   - Volta ao fundo `#F2EFE9`. Título `"Tudo começa num *traço* à mão."`
   - Comparador de largura ampla sobrepondo a versão em **croqui arquitetônico desenhado à mão** (`CROQUI · 2022`, à esquerda) e a **fotografia real entregue** (`ENTREGA · 2024`, à direita) via `clip-path`.
   - Ao entrar na seção, o scroll anima a abertura inicial da cortina com `scrub`, e o usuário pode arrastar livremente o controle circular central `< >` (suporte a ponteiro, toque e teclado `ArrowLeft`/`ArrowRight`).
   - Faixa técnica em 6 colunas logo abaixo: `PÉ-DIREITO 3,40 M` | `CAIXILHOS DE PISO A TETO` | `PISO TRAVERTINO ROMANO` | `PAINEL FREIJÓ` | `ESTUDO 2022` | `ENTREGA 2024`.
5. **`SIGN-2` (`04 — MATERIAIS`: Mesa Tátil de Amostras `01` a `06`):**
   - Título `"Poucos materiais, escolhidos para *envelhecer* bem."`
   - Coluna esquerda fixa (`pin`) com fotografia emoldurada mostrando o material aplicado em uma obra e legenda técnica abaixo (`TRAVERTINO · SALA · CASA JARDIM EUROPA`).
   - Coluna direita com 6 itens interativos (`01 Travertino romano`, `02 Concreto aparente`, `03 Cumaru`, `04 Freijó`, `05 Terracota`, `06 Linho`), cada um com uma **amostra quadrada real da textura**, nome em serifada e especificação de acabamento. Passar o mouse, clicar, focar por teclado ou rolar por cada item troca a fotografia da esquerda com crossfade suave.
   - *(Opcional se houver os 120 quadros em `/media/frames/`):* Incluir também um modo/gaveta ou subseção de **Estudo de Luz em `<canvas>`** percorrendo os 120 quadros no scroll.
6. **`METH-2` (`05 — PROCESSO`: Coluna Esquerda Fixa + 6 Etapas Verticais com Foco de Opacidade):**
   - Coluna esquerda fixada (`pin`) com `"Seis etapas, uma só *interlocutora*."`, fotografia da mesa de estudo/maquete e botão `Agendar a primeira conversa →`.
   - Coluna direita rolando verticalmente pelas 6 etapas (`01 Escuta`, `02 Estudo preliminar`, `03 Anteprojeto`, `04 Executivo e interiores`, `05 Acompanhamento de obra`, `06 Entrega e styling`). Um `ScrollTrigger` ilumina a etapa ativa (`opacity: 1`) e suaviza as demais (`opacity: 0.28`), exibindo `PRAZO DE REFERÊNCIA` e `ENTREGAS`.
7. **`TEAM-2` (`06 — ESTÚDIO` + Perguntas Frequentes + Contato):**
   - Split editorial com retrato no estúdio à esquerda e apresentação da arquiteta fundadora à direita, citação em serifada itálica, formação (`FAU-USP`, `CAU`) e nota de imagem ilustrativa se aplicável.
   - Acordeão WAI-ARIA de Perguntas Frequentes e seção final de Contato com formulário acessível em conformidade com a LGPD (`conformidade-legal.md`).

Valide `typecheck`, `build`, Playwright (`reducedMotion: 'no-preference'` e `'reduce'`, `?movimento=1`) e overflow horizontal nas 7 larguras de `landing-page.md`.
```

---

## 3. Template Modular (Mix & Match para Qualquer Público)

Quando quiser combinar formas diferentes para outro mercado (saúde, educação, indústria, produto digital), copie o bloco abaixo escolhendo os códigos de [01-catalogo-formas-e-animacoes.md](01-catalogo-formas-e-animacoes.md):

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/landing-page.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/scroll-motion.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/pipeline-midia/01-catalogo-formas-e-animacoes.md e [CAMINHO_DO_KIT]/skills/project-workflow/references/conformidade-legal.md e aplique esse fluxo neste projeto.

Objetivo: Criar a landing page scrollytelling para [NOME E NICHO DO PROJETO], consumindo as mídias em `[CAMINHO_DO_PACOTE_DE_MIDIA]` e combinando os seguintes blocos do catálogo:

- **Arquétipo base:** [ARQ-A | ARQ-B | ARQ-C] (Tema: [escuro | claro com capítulo escuro], Fundo: `[#HEX]`, Acento: `[#HEX]`)
- **Navegação (`Scroll Progress`):** [NAV-1 (Barra superior) | NAV-2 (Régua vertical lateral 01/06)]
- **Hero (`Pin + Scrub + Timeline`):** [HERO-1 (Retrato + 4 pilares) | HERO-2 (Fullscreen que encolhe para moldura no Manifesto) | HERO-3 (Canvas imediato)]
- **Portfólio / Áreas:** [PORT-1 (Grid xadrez 1px com parallax) | PORT-2 (Trilho horizontal fixado com cursor "Arraste")]
- **Cena(s)-Assinatura:** [SIGN-1 (Cortina Antes ↔ Depois) | SIGN-2 (Mesa Tátil de Amostras) | SIGN-3 (Sequência de 120 quadros em `<canvas>`)]
- **Método / Processo:** [METH-1 (Linha horizontal 01–04) | METH-2 (Coluna esquerda fixa + 6 etapas verticais com foco de opacidade)]
- **Equipe / Autoria:** [TEAM-1 (3 retratos P&B → cor) | TEAM-2 (Editorial de fundador(a) com citação)]

Implemente todas as 10 técnicas de scroll em `src/lib/scroll.ts` (respeitando `prefers-reduced-motion: reduce` e `?movimento=1`) e execute a validação completa de `landing-page.md`.
```
