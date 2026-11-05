# Prompts Completos — Loja de Roupa Feminina (Catálogo + Sacola Lateral → Pedido no WhatsApp)

Inspirado na arquitetura da **Ponto Afeto** (`https://pontoafeto.cloudlane.com.br/`), evoluído para **Moda Feminina Boutique** (com seleção de **Tamanho `PP–GG`**, **Cor**, **2ª foto no hover**, **Guia de Medidas**, **"Compre o Look"** e **Sacola Lateral que monta o pedido completo no WhatsApp**) e integrado ao pipeline de mídia **AVIF + WebP**.

---

## PASSO 1 — Prompt para Gerar as Imagens e Vídeos (Enviar ao ChatGPT / Codex / Claude)

> **Dica:** Você pode colar este prompt em uma pasta nova (ex.: `[PASTA_DO_PROJETO]`) no Claude Code ou no ChatGPT/Codex. Ele já gera tanto as fotos editoriais/vídeos quanto as **fotos 4:5 do catálogo (frente + detalhe no hover)** em `.avif` e `.webp`.

```markdown
Você vai gerar o pacote completo de mídia otimizada (AVIF + WebP + MP4 + 120 quadros de `<canvas>`) para a landing page com catálogo e sacola de WhatsApp de uma **Loja-Boutique de Roupa Feminina Contemporânea ("Aura Linho & Atelier")**.

## 1. DIREÇÃO DE ARTE E FOTOGRAFIA (BOUTIQUE DE MODA FEMININA)
- **Estética:** Boutique contemporânea de alfaiataria leve, linho, viscose e tricô artesanal ("Warm Mediterranean Boutique" — inspirada em Sezane, Massimo Dutti Studio e Amaro Editorial).
- **Luz e Temperatura:** Luz natural dourada de fim de tarde, sombras suaves, fundo de travertino, linho cru, cal virgem e madeira clara.
- **Paleta dominante nas fotos:** Creme/Marfim (`#FAF6F0`), Areia (`#E8DEC8`), Terracota queimado (`#B85D43`), Verde Sálvia (`#7A8B73`), Amarelo Manteiga (`#EED484`), Cacau (`#4A352B`) e Off-White.
- **PROIBIÇÕES:** Nunca use fotos P&B frias, iluminação neon, marcas d'água, textos sobrepostos ou vídeos de banco baixados às cegas por URL.

## 2. LISTA DE ARQUIVOS OBRIGATÓRIOS (TODOS EM `.avif` E `.webp`)

Salve todos os ativos em `./media/` (ou no pacote ZIP `landing-page-moda-package.zip`) contendo:

### A. Mídias Editoriais e de Narrativa (`./media/`)
1. `hero-main.avif` e `hero-main.webp` (`1920x1200`, 16:10):
   - Fotografia editorial de campanha: modelo em vestido midi de linho terracota/areia em ateliê iluminado por sol natural, arara de madeira clara e cortina de linho fluido ao fundo.
2. `hero-ambient.mp4` (`1280x720`, 24 fps, 4.5s, H.264, `CRF 24`, `-movflags +faststart`, `-an`, sem áudio):
   - Vídeo ambiente em loop contínuo (com `xfade` de `0.5s` entre o fim e o início para não dar salto) mostrando movimento suave da brisa no tecido de linho e feixe de luz solar na arara do ateliê.
3. `lookbook-full.avif` e `lookbook-full.webp` (`1200x1500`, 4:5):
   - Foto de corpo inteiro para a seção **"Compre o Look da Estação"** combinando 3 peças: Blazer de Linho Areia + Top Cropped Tricô Off-White + Calça Pantalona Alfaiataria.
4. `atelier-process.avif` e `atelier-process.webp` (`1400x1050`, 4:3):
   - Mesa de modelagem do ateliê com rolos de linho puro, fita métrica de alfaiate, tesoura dourada, cartela de fios/tecidos e botões naturais de madrepérola/coco.
5. `founder-portrait.avif` e `founder-portrait.webp` (`1200x1500`, 4:5):
   - Retrato editorial acolhedor da diretora criativa/estilista no ateliê ajustando uma peça no manequim de costura.
6. `sketch-before.avif` e `sketch-before.webp` (`1024x576`, 16:9):
   - Croqui técnico de moda / ficha de modelagem traçada à mão sobre papel creme (com linhas de construção e cotas de caimento) perfeitamente alinhado ao enquadramento da peça finalizada.
7. `frames/frame_0001.avif`..`frame_0120.avif` e `frames/frame_0001.webp`..`frame_0120.webp` (`1024x576`, 24 fps, 120 quadros):
   - Sequência para `<canvas>` em 3 atos:
     - Quadros 001–035: Croqui de modelagem sobre papel linho ganhando linhas de corte e medidas.
     - Quadros 036–085: Varredura diagonal suave revelando a trama real do linho e o caimento da peça com luz natural.
     - Quadros 086–120: Peça finalizada vestida no ateliê com movimento sutil de tecido e respiro luminoso.

### B. Catálogo de Produtos em Proporção `4:5` (`1000x1250`, Frente `-a` + Hover/Detalhe `-b` em `.avif` e `.webp`)
Gere **8 conjuntos de fotos de produtos** (`prod-01` a `prod-08`, cada um com foto principal `-a` e segunda foto de ângulo/detalhe de tecido `-b` para o efeito de troca no hover do card):
- `prod-01-a.{avif,webp}` e `prod-01-b.{avif,webp}` — **Vestido Midi Brisa em Linho Puro** (Terracota / Areia)
- `prod-02-a.{avif,webp}` e `prod-02-b.{avif,webp}` — **Blazer Oversized Atelier 100% Linho** (Areia / Off-White)
- `prod-03-a.{avif,webp}` e `prod-03-b.{avif,webp}` — **Calça Pantalona Pregas Alfaiataria** (Areia / Cacau)
- `prod-04-a.{avif,webp}` e `prod-04-b.{avif,webp}` — **Top Tricô Ponto Trama Artesanal** (Manteiga / Cru)
- `prod-05-a.{avif,webp}` e `prod-05-b.{avif,webp}` — **Conjunto Co-ord Camisa + Short Linho** (Verde Sálvia)
- `prod-06-a.{avif,webp}` e `prod-06-b.{avif,webp}` — **Saia Midi Evasê Botões Madrepérola** (Off-White / Areia)
- `prod-07-a.{avif,webp}` e `prod-07-b.{avif,webp}` — **Vestido Longo Resort Frente Única** (Amarelo Manteiga / Terracota)
- `prod-08-a.{avif,webp}` e `prod-08-b.{avif,webp}` — **Cardigan Tricô Botões Tartaruga** (Cacau / Caramelo)

## 3. REGRAS TÉCNICAS DE CODIFICAÇÃO (CRÍTICO)
1. **Proibido usar `-f image2 frame_%04d.avif` em lote com `-still-picture 1`** (grava caixa `av1C` vazia que falha no Chrome/Edge). Codifique os `.avif` **um arquivo por vez num laço `for` com `-frames:v 1`** a partir dos `.webp` ou PNGs:
   ```bash
   for f in media/frames/frame_*.webp; do
     ffmpeg -y -i "$f" -c:v libaom-av1 -still-picture 1 -crf 30 -b:v 0 -cpu-used 6 -pix_fmt yuv420p -frames:v 1 "${f%.webp}.avif"
   done
   ```
2. **Loop contínuo em `hero-ambient.mp4`:** Aplique `xfade=transition=fade:duration=0.5:offset=4.5` para que o vídeo não dê pulo ao reiniciar.
3. **Manifesto:** Gere `MEDIA_MANIFEST.json` com `"status": "ready"`, dimensões, tamanhos em bytes, `alt` descritivo em pt-BR e `focalPoint` para todas as imagens estáticas, produtos (`prod-01-a/b` a `prod-08-a/b`), vídeo e sequência de quadros.
```

---

## PASSO 2 — Prompt para Implementar a Aplicação Completa (Enviar ao Claude Code)

> **Dica:** Cole este prompt no Claude Code na pasta do novo projeto (ex.: `[PASTA_DO_PROJETO]`). Ele combina a mecânica completa de **Catálogo + Sacola Lateral → Pedido no WhatsApp da Ponto Afeto** com o design system editorial, AVIF+WebP e animações suaves.

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/landing-page.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/scroll-motion.md e [CAMINHO_DO_KIT]/skills/project-workflow/references/conformidade-legal.md e aplique esse fluxo neste projeto.

Você pode consultar `[PROJETO_REFERENCIA_SACOLA]` (`Ponto Afeto`) como referência direta da arquitetura de sacola (`src/lib/shop.tsx`), formatação de WhatsApp (`src/lib/whatsapp.ts`), gaveta da sacola (`src/components/sections/BagDrawer.tsx`), modal de produto (`src/components/sections/ProductDetail.tsx`) e `/styleguide.html`, evoluindo a experiência para uma **Loja-Boutique de Roupa Feminina Contemporânea**.

Atue simultaneamente como diretor de criação de moda digital, designer de UI/UX sênior, engenheiro frontend React 19 + TypeScript + Tailwind CSS v4 + Motion/GSAP, especialista em conversão de social commerce (Catálogo → Sacola → WhatsApp) e revisor visual extremamente crítico.

## MODO DE EXECUÇÃO
- Execute todas as etapas (Inspeção → Organização de `public/media/` em AVIF+WebP → `AGENTS.md` → `DESIGN.md` → `IMPLEMENTATION_PLAN.md` → `/styleguide.html` → Implementação completa → Testes unitários `Vitest` → Validação E2E e screenshots com `Playwright` → `Dockerfile` + `docker-compose.yml`) sem parar em decisões técnicas ou visuais razoáveis.
- Caso o Figma MCP não esteja conectado nesta sessão, fica autorizado documentar em `FIGMA_GUIDE.md` + `design/tokens.json` + `/styleguide.html` e seguir direto para o código.

---

## 1. IDENTIDADE E DIREÇÃO VISUAL ("WARM MEDITERRANEAN BOUTIQUE")
- **Marca demonstrativa (configurável em `src/config/site.ts`):** **Aura Atelier — Moda Feminina & Linho Autoral** (`isDemo: true`, fácil edição de nome, telefone de WhatsApp, frete grátis e Instagram).
- **Paleta de Cores (contraste WCAG AA ≥ 4.5:1 verificado):**
  - Fundo principal (`linen`): `#FAF6F0`
  - Superfície / Cards (`ivory`): `#FFFDF9`
  - Areia / divisórias (`sand` / `sand-line`): `#EFE7DA` / `#E2D5C1`
  - Texto principal (`espresso`): `#2C221E`
  - Texto secundário (`taupe`): `#6B584C`
  - Marca / Terracota (`terracotta` / `terracotta-deep`): `#C4684E` / `#9E4730`
  - Acento Sálvia (`sage` / `sage-soft`): `#6E8268` / `#E6ECE3`
  - Acento Manteiga (`butter`): `#F2D479`
  - **CTA WhatsApp / Sucesso (`whatsapp-green`):** `#2F6B48` (sofisticado, não neon, contraste > 5.5:1 com branco)
- **Tipografia (Auto-hospedada via `@fontsource`):**
  - **Display / Títulos e Nomes de Peças:** Serifada editorial elegante (`Cormorant Garamond` ou `Fraunces` com itálicos expressivos em palavras-chave).
  - **Corpo, Preços, Seletores de Tamanho e Botões:** Sans geométrica limpa (`Plus Jakarta Sans` ou `Figtree`), com `tabular-nums` em todos os preços, medidas e contadores da sacola.
  - **Notas de Curadoria / Etiquetas:** Manuscrita discreta (`Caveat`) ou mono técnica (`JetBrains Mono`) para códigos de referência/SKU (`REF. AU-014`).

---

## 2. MECÂNICA CENTRAL: CATÁLOGO DE MODA + SACOLA LATERAL → WHATSAPP

### A. Modelo de Produto de Moda (`src/data/products.ts`)
Crie **12 produtos completos** distribuídos nas categorias:
- `todos` ("Todas as peças")
- `vestidos` ("Vestidos & Macacões")
- `alfaiataria` ("Alfaiataria & Blazers")
- `blusas` ("Blusas & Tricôs")
- `calcas-saias` ("Calças & Saias")
- `conjuntos` ("Conjuntos & Resort")

Cada produto deve ter:
- `id`, `sku` (ex.: `AU-101`), `name`, `slug`, `category`, `alsoIn`
- `price`, `compareAtPrice` (opcional, para peças em oferta), `installments` (ex.: `até 6x sem juros` e `5% OFF no Pix`)
- `image` (foto principal `4:5` em `.avif`/`.webp`) e `gallery` (pelo menos 2 fotos: frente e hover/detalhe)
- `colors`: lista de `ColorOption` (`name`, `hex`)
- `sizes`: lista de tamanhos (`'PP' | 'P' | 'M' | 'G' | 'GG'`) com status de disponibilidade por tamanho (`inStock: boolean`, `lastUnits?: boolean`)
- `measurements`: tabela por tamanho (`busto`, `cintura`, `quadril`, `comprimento` em cm) + `modelNote` (ex.: `"A modelo mede 1,72m e veste tamanho P"`)
- `fabric`: composição e toque (ex.: `"70% Linho Puro, 30% Viscose Eco · Forro 100% Algodão"`)
- `care`: cuidados de conservação
- `availability`: `'pronta-entrega' | 'sob-medida' | 'esgotado'`
- `badge`: `'Novo Drop' | 'Mais Vendido' | 'Edição Limitada' | 'Últimas Peças'`

### B. Cards de Produto (`ProductCard.tsx`) com Adição Rápida por Tamanho
- Proporção `4:5` com `<picture>` (`image/avif` + fallback `image/webp` + `?v=${MEDIA_VERSION}`).
- **Troca automática para a 2ª foto no hover** (`[@media(hover:hover)]:group-hover/card:opacity-100`) + zoom suave `scale-[1.035]`.
- Seletor de bolinhas de **Cor (`ColorSwatches`)** diretamente no card.
- **Quick-Add de Tamanho no Card:**
  - Ao clicar no botão `+ Adicionar` (ou ao passar o mouse em desktop), exibe a barra rápida de tamanhos (`PP`, `P`, `M`, `G`, `GG`).
  - Clicar num tamanho disponível **adiciona imediatamente à sacola** (`addToBag(slug, size, color, 1)`) e dispara o **`BagToast`** no topo da tela (`"Vestido Midi Brisa (Tam. M · Terracota) adicionado à sacola — [Abrir sacola]"`).
  - Se a peça for `'esgotado'`, exibe botão `"Avise-me / Encomendar no WhatsApp"`. Se for `'sob-medida'`, abre o modal ou pré-preenche a seção de Ajustes/Sob Medida.

### C. Modal / Sheet de Detalhe do Produto (`ProductDetail.tsx`)
- Galeria interativa à esquerda com miniaturas e indicador de foto.
- À direita:
  - Categoria, SKU, Badges, Nome da peça, Preço à vista, Preço no Pix (-5%) e parcelamento.
  - Seletor de **Cor** com nome da cor ativa.
  - Seletor de **Tamanho (`PP`, `P`, `M`, `G`, `GG`)** com aviso `"Últimas unidades"` quando aplicável + botão **"Guia de Medidas (Tabela cm)"** que expande/abre a tabela de Busto, Cintura, Quadril e Comprimento + nota da modelo.
  - Seletor de quantidade (`- / +`) e botão principal **"Adicionar à Sacola"** (que adiciona e já abre a `BagDrawer`).
  - Botão secundário **"Tirar dúvida desta peça no WhatsApp"** com mensagem pré-preenchida contendo nome da peça, cor e tamanho selecionado.
  - Acordeões internos para **Composição & Tecido**, **Medidas da Peça** e **Trocas & Envio (1ª troca grátis)**.

### D. Seção "Compre o Look Completo" (`ShopTheLook.tsx`)
- Editorial interativo apresentando o look completo da estação (`lookbook-full.{avif,webp}`) com **3 pontos focais/cards das peças que compõem o look** (ex.: Blazer + Top Tricô + Calça Pantalona).
- Permite escolher o tamanho de cada peça (ou um tamanho único para o look) e clicar em **"Adicionar Look Completo à Sacola (10% OFF no combo)"**, inserindo os 3 itens de uma vez na sacola!

### E. Sacola Lateral (`BagDrawer.tsx`) + Redirecionamento Completo para o WhatsApp (`src/lib/whatsapp.ts`)
- Persistência automática em `localStorage` (`aura-atelier:sacola`).
- Chave única de linha na sacola: `slug + size + color` (ex.: se a pessoa adicionar o mesmo vestido no tamanho `P` e no tamanho `M`, aparecem como 2 linhas distintas; se adicionar o mesmo `slug + size + color`, incrementa a quantidade).
- Dentro da `BagDrawer`:
  - Lista animada (`AnimatePresence`) com foto `4:5`, nome da peça, ** etiquetas de Tamanho (`Tam: M`) e Cor (`Cor: Areia`)**, controle de quantidade (`- / +`), subtotal da linha e botão de remover (`Trash`).
  - **Barra de Progresso de Frete Grátis** (ex.: meta configurável de `R$ 399,00` — mostra quanto falta ou confirma `"Seu pedido ganhou Frete Grátis!"`).
  - **Resumo inteligente de pagamento:**
    - Seletor rápido opcional na própria sacola: **Forma de pagamento preferida** (`Pix com 5% OFF` | `Cartão de Crédito até 6x` | `Combinar no atendimento`) e campo opcional de **Seu Nome / CEP** para agilizar o cálculo de entrega.
    - Exibe Subtotal, Desconto Pix (se marcado) e Total estimado.
  - **Botão Principal `"Finalizar Pedido pelo WhatsApp"` (`variant="whatsapp"`):**
    - Abre `https://wa.me/${digits}?text=${encodeURIComponent(message)}` com tudo que a cliente colocou na sacola perfeitamente estruturado:
      ```text
      Olá! Gostaria de finalizar meu pedido pelo site da Aura Atelier:

      🛍️ *ITENS DA SACOLA:*
      • 1x Vestido Midi Brisa em Linho (Ref. AU-101)
        Tam: M | Cor: Terracota — R$ 389,00
      • 1x Blazer Oversized Atelier (Ref. AU-102)
        Tam: P | Cor: Areia — R$ 459,00

      ──────────────────────
      Subtotal: R$ 848,00
      Pagamento preferido: Pix com 5% OFF (R$ 805,60)
      Frete: GRÁTIS (pedido acima de R$ 399,00)
      Cliente: Maria | CEP: 79000-000

      Pode confirmar a disponibilidade para separação?
      ```
  - Botão `"Esvaziar sacola"` e estado vazio acolhedor com atalho para `"Explorar a coleção"`.

---

## 3. ESTRUTURA COMPLETA DAS 12 SEÇÕES DA LANDING PAGE
1. **Topbar + Navbar Fixa (`Navbar.tsx`):**
   - Faixa superior discreta (`"Frete grátis acima de R$ 399 · 5% OFF no Pix · 1ª Troca por nossa conta"`).
   - Navbar com links (`Coleção`, `Categorias`, `Compre o Look`, `Nosso Linho`, `Consultoria`, `Dúvidas`) + botão **Sacola** com contador animado de itens (`bagCount`) e valor parcial.
2. **Hero Editorial (`Hero.tsx`):**
   - Composição editorial em tela cheia com `hero-main.{avif,webp}` e vídeo sutil `hero-ambient.mp4` em moldura arqueada/editorial, badge `"Coleção Outono/Inverno · Tiragem Limitada"`, headline com itálico expressivo, CTAs (`"Explorar a Coleção"` e `"Montar Look no WhatsApp"`) e selo giratório `"Modelagem Autoral · Tecidos Naturais"`.
3. **Faixa de Diferenciais (`BenefitStrip.tsx`):**
   - 4 garantias com ícones Phosphor `duotone` (Linho & Fibras Naturais, Numeração Real PP ao GG com Guia de Medidas, Atendimento Personalizado no WhatsApp, 1ª Troca Fácil em até 30 dias).
4. **Categorias Visuais (`Categories.tsx`):**
   - Cards clicáveis que filtram e rolam suavemente até a vitrine (`Vestidos`, `Alfaiataria`, `Blusas & Tricôs`, `Calças & Saias`, `Conjuntos`).
5. **Vitrine / Catálogo Interativo (`ProductGrid.tsx`):**
   - Chips de filtro por **Categoria** (com pílula animada `layoutId`) + filtro rápido por **Tamanho (`Todos`, `PP`, `P`, `M`, `G`, `GG`)** + busca/ordenação.
   - Grid responsivo (`2 colunas` no mobile, `3` no tablet, `4` no desktop) com os 12 produtos, troca de foto no hover, escolha de cor e adição rápida por tamanho.
6. **Compre o Look da Estação (`ShopTheLook.tsx`):**
   - Destaque editorial com `lookbook-full.{avif,webp}`, seleção de tamanhos das 3 peças do look e adição em 1 clique à sacola.
7. **Do Croqui ao Caimento (`AtelierCraft.tsx`):**
   - Cena interativa mostrando o cuidado de modelagem (`sketch-before` + sequência em `<canvas>` ou comparador Antes ↔ Depois do molde técnico para a peça pronta + 3 etapas: Escolha da Fibra, Corte em Pequenos Lotes, Acabamento Manual).
8. **Consultoria de Styling & Ajustes Sob Medida (`CustomStylingSection.tsx`):**
   - Formulário interativo onde a cliente escolhe a ocasião (`Casamento / Convidada`, `Trabalho / Alfaiataria`, `Viagem / Mala Cápsula`, `Ajuste de Comprimento / Sob Medida`), tamanho habitual, tons preferidos e envia um briefing pronto para a stylist no WhatsApp (com validação acessível e pré-visualização da mensagem).
9. **Sobre o Ateliê & Diretora Criativa (`AboutBrand.tsx`):**
   - Foto `founder-portrait.{avif,webp}`, manifesto sobre slow fashion, tabela transparente de tiragem por peça e assinatura.
10. **Depoimentos de Clientes (`Testimonials.tsx`):**
    - Avaliações com qual peça e tamanho a cliente comprou (ex.: *"Tenho 1,64m, comprei o tamanho M e o caimento na cintura ficou impecável"*), ajudando na decisão de tamanho.
11. **Perguntas Frequentes (`FAQ.tsx`):**
    - Acordeão WAI-ARIA cobrindo: Como funciona a compra pelo WhatsApp, Guia de tamanhos e trocas, Prazos de envio, Formas de pagamento (Pix, link de cartão em até 6x) e Cuidados com o linho.
12. **CTA Final + Newsletter + Rodapé (`FinalCTA.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`):**
    - Botão flutuante do WhatsApp, rodapé completo com aviso de demonstração (`site.isDemo`), conformidade LGPD e link para `/styleguide.html`.

---

## 4. HIGIENE DE MÍDIA, TESTES E VALIDAÇÃO OBRIGATÓRIA
- **AVIF + WebP + Cache Busting (`?v=<hash>`):** Gere `__MEDIA_VERSION__` no `vite.config.ts` a partir de `public/media/` e use `<picture>` (`image/avif` + `image/webp`) no componente `SmartImage.tsx`. Não copie `canvas-sequence.mp4` para `public/media/`.
- **Testes Automatizados (`npm test` com Vitest):**
  - Teste o reducer da sacola (`addToBag` diferenciando `slug + size + color`, incremento de quantidade, remoção, cálculo de frete grátis e desconto Pix).
  - Teste a geração da mensagem de WhatsApp (`bagMessage`) garantindo que **nome da peça, SKU, tamanho, cor, quantidade, subtotal e status de frete grátis** apareçam corretamente no texto e no link `https://wa.me/`.
  - Teste filtros de categoria e tamanho na vitrine.
- **Validação E2E e Visual (`Playwright`):**
  - Valide o fluxo completo: filtrar categoria → filtrar tamanho → abrir detalhe do produto → abrir Guia de Medidas → selecionar Cor e Tamanho → adicionar 2 peças diferentes à sacola → abrir `BagDrawer` → alterar quantidade → verificar o `href` gerado no botão `"Finalizar Pedido pelo WhatsApp"`.
  - Verifique `0` erros de console, `0` imagens quebradas e `0` overflow horizontal nas larguras `360`, `375`, `390`, `768`, `1024`, `1280`, `1440` e `1920`.
```

