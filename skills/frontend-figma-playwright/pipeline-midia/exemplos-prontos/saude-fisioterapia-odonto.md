# Prompts Completos — Fisioterapia Especializada & Reabilitação (`ARQ-E`)

Projetado na mesma estrutura visual e de animações de `dentista-web.mp4`, mas **100% pensado para Fisioterapia (Coluna, Ortopedia, Pós-Operatório, Esportiva e Terapia Manual)**:

- **O que muda da Odontologia para a Fisioterapia mantendo o mesmo impacto visual:**
  1. **Hero com Pílulas Flutuantes + Dock Inferior:** Retrato da fisioterapeuta com selos flutuantes (*"Atendimento 100% Individualizado"* e *"Avaliação Biomecânica & Funcional"*).
  2. **Leque em Arco (`"Com quais dores e limitações me procuram"`):** 5 cards `4:5` em arco (`Coluna Lombar e Cervical`, `Joelho, Quadril e Ombro`, `Pós-Operatório Ortopédico`, `Lesões no Esporte e Corrida`, `Dor Crônica e Tensão Miofascial`).
  3. **Peça Central que se Encaixa no Scroll (`"Tratamento preciso para cada fase da dor"`):** Em vez do implante dentário, uma **estrutura articular/vertebral translúcida em vidro médico azul-clínico** que começa desalinhada/comprimida e, conforme a pessoa rola a página (`pin + scrub`), **alinha seu eixo biomecânico e se encaixa com precisão**, acendendo um halo luminoso de estabilidade e ativando os **4 pilares ao redor** (*Terapia Manual*, *Estabilização Ativa*, *Correção Biomecânica*, *Retorno ao Movimento*).
  4. **Destaque do Atendimento Individual + Trilho Horizontal (`01–05`) + Marca d'Água `"Movimento"`:** Mostra por que a fisioterapia individualizada funciona para quem já cansou de sessões genéricas em série, com **Mini-Triagem da Dor em 3 cliques** que envia o caso direto para o WhatsApp dela.
  5. **Foto Fixada que Troca `01/04` a `04/04` (`"Da primeira avaliação à sua alta"`):** Troca automaticamente a foto da esquerda conforme o paciente rola pelas 4 fases (*01 Avaliação Funcional*, *02 Alívio e Terapia Manual*, *03 Fortalecimento Direcionado*, *04 Alta com Autonomia*).

---

## PASSO 1 — Prompt para Gerar as Imagens e Vídeos da Fisioterapia (Enviar ao ChatGPT / Codex / Claude)

```markdown
Você vai gerar o pacote completo de mídia otimizada (AVIF + WebP + MP4 + 120 quadros de `<canvas>`) para a landing page scrollytelling de uma **Fisioterapeuta Especialista em Reabilitação Ortopédica, Coluna e Movimento (Arquétipo ARQ-E: Precisão Clínica & Cuidado Humano)**.

## 1. DIREÇÃO DE ARTE E FOTOGRAFIA (CLÍNICA / ESTÚDIO DE FISIOTERAPIA PREMIUM)
- **Atmosfera:** Estúdio de fisioterapia e reabilitação contemporâneo, arquitetura limpa com luz natural difusa, madeira clara aquecida, maca clínica minimalista em tom claro, superfícies brancas/gelo `#F2F5F9` e detalhes em azul clínico suave `#5B8DEF` e azul-noturno `#0A0F1D`.
- **Tom humano, acolhedor e científico:** Transmitir cuidado individualizado (1 paciente por horário), precisão biomecânica e movimento sem dor. Nada de imagens hospitalares frias, choques elétricos ou expressões de sofrimento exagerado.
- **PROIBIÇÕES:** Nunca baixe vídeos genéricos de banco às cegas por URL. Não inclua textos queimados nas fotos nem marcas d'água.

## 2. LISTA DE ARQUIVOS OBRIGATÓRIOS EM `./media/` (TODOS EM `.avif` E `.webp`)

### A. Hero, Fisioterapeuta, Peça Biomecânica e Estúdio
1. `hero-specialist.avif` e `hero-specialist.webp` (`1200x1400`, proporção vertical com fundo limpo claro `#F2F5F9` integrado ao card do Hero):
   - Retrato editorial meio-corpo de uma fisioterapeuta jovem/adulta brasileira com jaleco branco ou scrub clínico de corte impecável sobre blusa azul-marinho, postura acolhedora, confiante e serena, iluminação suave de estúdio clínico.
2. `hero-ambient.mp4` (`1280x720`, 24 fps, 4.5s, H.264, `CRF 24`, `-movflags +faststart`, `-an`, sem áudio):
   - Vídeo sutil em loop contínuo (com `xfade` de `0.5s` entre o fim e o início) mostrando luz natural suave atravessando o estúdio de fisioterapia e brilho suave sobre modelo anatômico articular translúcido.
3. `anatomy-top.avif`/`.webp` e `anatomy-base.avif`/`.webp` (`900x900`, fundo branco puro `#FFFFFF` para a cena de encaixe/alinhamento no scroll) + `anatomy-assembled.avif`/`.webp` (`1200x1000`):
   - Renderização 3D translúcida de altíssima precisão médica (estilo vidro/cristal clínico com iluminação interna azul suave `#5B8DEF` sobre fundo branco `#FFFFFF`):
     - `anatomy-top`: segmento superior de articulação/vértebra translúcida com disco intervertebral iluminado em azul cristalino.
     - `anatomy-base`: segmento inferior de sustentação articular/vertebral em cristal médico sobre base acrílica limpa.
     - `anatomy-assembled`: coluna/articulação translúcida perfeitamente alinhada e estabilizada sobre base acrílica transparente, transmitindo alívio, amortecimento e eixo biomecânico perfeito.
4. `specialist-hands.avif` e `specialist-hands.webp` (`1000x1200`, 4:5):
   - Close editorial das mãos da fisioterapeuta realizando avaliação articular / terapia manual precisa ou segurando modelo anatômico de coluna/joelho no consultório iluminado.
5. `clinic-reception.avif` e `clinic-reception.webp` (`1600x1000`, 16:10):
   - Recepção e espaço de reabilitação da clínica com balcão curvo em madeira clara, iluminação linear indireta, espaldar/equipamentos de cinesioterapia minimalistas ao fundo e atmosfera acolhedora (para destacar dentro do bloco escuro final de Contato).

### B. Os 5 Cards do Leque `"Com quais dores me procuram"` (`4:5`, `800x1000`, em `.avif` e `.webp`)
- `case-01.{avif,webp}` — **Coluna Lombar e Cervical:** fotografia/visualização clínica elegante do alinhamento das costas e pescoço sob luz suave, transmitindo alívio de tensão e hérnia de disco.
- `case-02.{avif,webp}` — **Joelho, Quadril e Ombro:** visualização 3D translúcida em vidro azul clínico da articulação em movimento estável.
- `case-03.{avif,webp}` — **Pós-Operatório Ortopédico:** ambiente de reabilitação controlada com foco em recuperação segura de ligamento/menisco/ombro.
- `case-04.{avif,webp}` — **Lesões no Esporte e Corrida:** close editorial de movimento atlético controlado / avaliação biomecânica de pisada e força.
- `case-05.{avif,webp}` — **Dor Crônica e Tensão Miofascial:** terapia manual / liberação miofascial cuidadosa em consultório iluminado por luz natural.

### C. As 4 Fotos da Timeline Fixada `"Da primeira avaliação à sua alta"` (`4:5`, `1000x1250`, em `.avif` e `.webp`)
- `step-01-avaliacao.{avif,webp}` — Fisioterapeuta conversando com paciente e analisando exame/teste de movimento em tela digital no consultório.
- `step-02-planejamento.{avif,webp}` — Sessão de terapia manual e mobilização articular na maca para alívio da dor e ganho de amplitude.
- `step-03-procedimento.{avif,webp}` — Fisioterapeuta guiando de perto exercício terapêutico de estabilização e controle motor no estúdio.
- `step-04-acompanhamento.{avif,webp}` — Paciente em movimento livre e confiante na fase de alta e retorno ao esporte/rotina.

### D. Sequência de 120 Quadros para `<canvas>` (`frames/frame_0001..0120.{avif,webp}`, `1024x576`, 24 fps)
- Gere uma sequência procedural suave de 120 quadros mostrando a **análise biomecânica 3D (eixos articulares e linhas de força sobre fundo claro `#F2F5F9`)** corrigindo a sobrecarga, alinhando os dois segmentos (`anatomy-top` + `anatomy-base`) com um pulso luminoso azul (`#5B8DEF`) no quadro `0075` e estabilizando o movimento completo até o quadro `0120`.

## 3. REGRAS TÉCNICAS DE CODIFICAÇÃO (OBRIGATÓRIO)
1. **Codificação individual de `.avif` (`-frames:v 1`):** NUNCA use `ffmpeg -f image2 frame_%04d.avif` em lote com `-still-picture 1` (grava `av1C` vazio e quebra no Chrome/Edge). Codifique cada `.avif` individualmente num loop `for` com `-frames:v 1`.
2. **Loop contínuo em `hero-ambient.mp4`:** Aplique `xfade=transition=fade:duration=0.5:offset=4.5`.
3. Gere `MEDIA_MANIFEST.json` com `"status": "ready"` e inspecione visualmente os quadros `0010`, `0060` e `0110`.
```

---

## PASSO 2 — Prompt para Implementar a Aplicação Completa de Fisioterapia (Enviar ao Claude Code)

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/landing-page.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/scroll-motion.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/product-ui-system.md e [CAMINHO_DO_KIT]/skills/project-workflow/references/conformidade-legal.md e aplique esse fluxo neste projeto.

Atue simultaneamente como diretor de criação digital especializado em saúde e reabilitação, designer de UI/UX, desenvolvedor frontend sênior (React 19 + TypeScript + Tailwind CSS v4 + GSAP + ScrollTrigger + Lenis + Motion), especialista em acessibilidade/performance e revisor visual extremamente crítico.

Objetivo: Criar a landing page interativa para uma **Fisioterapeuta Especialista em Reabilitação Ortopédica, Coluna e Movimento** usando o **Arquétipo ARQ-E (Precisão Clínica & Cuidado Humano)**, consumindo o pacote local de mídias em **AVIF + WebP** (`public/media/`).

## MODO DE EXECUÇÃO
- Execute todas as etapas (Inspeção → organização de `public/media/` → `AGENTS.md` → `DESIGN.md` → `IMPLEMENTATION_PLAN.md` → `/styleguide.html` → Implementação → Testes `Vitest` → Validação `Playwright` → `Dockerfile` + `docker-compose.yml`) sem parar em decisões técnicas ou visuais razoáveis.
- Caso o Figma MCP não esteja conectado nesta sessão, fica autorizado documentar os tokens em `DESIGN.md` + `/styleguide.html` e seguir direto para o código.

---

## 1. DIREÇÃO VISUAL E CONFIGURAÇÃO FÁCIL (`src/config/site.ts`)
- **Fácil personalização para a Fisioterapeuta (`src/config/site.ts`):**
  - Centralize nome da fisioterapeuta (ex.: `Dra. Camila Camy` — fácil de trocar em 1 linha), registro `CREFITO`, cidade, telefone de WhatsApp, endereço, horários e textos em `src/config/site.ts`.
  - Inclua um seletor discreto de tema de acento em `tokens.css` (`data-accent="clinical-blue"` padrão `#4F7DF3` igual à referência, e opção `"clinical-sage"` `#2E7D67` verde-sálvia biomecânico) para você mostrar as duas cores para a sua irmã escolher!
- **Arquitetura de Superfícies (Grandes Containers Arredondados `rounded-[36px]`):**
  - Fundo base da página (`bg`): `#FFFFFF`
  - Superfície dos grandes módulos arredondados (`surface-card`): `#F2F5F9` (gelo clínico luminoso)
  - Cartões internos (`surface-elevated`): `#FFFFFF` com borda `1px solid rgba(15, 23, 42, 0.07)`
  - Bloco escuro exclusivo da seção final de Contato (`night-clinical`): `#0A0F1D`
- **Tipografia Bicolor (Assinatura Visual):**
  - Títulos (`H1` e `H2`) combinam duas tonalidades na mesma frase: palavras principais em `#0F172A` (slate profundo) e complemento em `#8A94A6` (cinza clínico). Exemplos:
    - `"Com quais dores"` (`#0F172A`) + `"me procuram"` (`#8A94A6`)
    - `"Reabilitação precisa para"` (`#0F172A`) + `"cada fase da sua dor"` (`#8A94A6`)
    - `"Quando o tratamento individual"` (`#0F172A`) + `"é a solução indicada"` (`#8A94A6`)
    - `"Da primeira avaliação"` (`#0F172A`) + `"à sua alta sem dor"` (`#8A94A6`)
  - Números e métricas sempre com `tabular-nums`.

---

## 2. SEQUÊNCIA OBRIGATÓRIA DAS 8 SEÇÕES E MECÂNICAS DE SCROLL

### 1. Navbar Limpa + Dock Flutuante Inferior (`Navbar.tsx` + `FloatingBottomDock.tsx`)
- **Navbar superior:** Avatar miniatura + nome da fisioterapeuta à esquerda, links centrais (`Queixas`, `Abordagem`, `Atendimento`, `Como funciona`, `Sobre`, `Dúvidas`) e botão pílula `Agendar +` à direita.
- **Dock Flutuante Fixo no Rodapé (`FloatingBottomDock`):** Pílula escura (`#111827/90` com `backdrop-blur-md`) centralizada na base da tela, exibindo avatar miniatura + `"Sente dor ao se movimentar? Descubra como funciona a avaliação"` + botão azul `"Agendar avaliação →"`.

### 2. Hero em Módulo Arredondado `#F2F5F9` com Pílulas Flutuantes (`Hero.tsx`)
- Grande container `rounded-[36px]` em `#F2F5F9`:
  - **Coluna esquerda:** Pílula `• Fisioterapia Ortopédica & Coluna · CREFITO`, H1 bicolor com o nome da fisioterapeuta, subtítulo direto (*"Fisioterapia individualizada com avaliação biomecânica, terapia manual e reabilitação ativa. Tratamos a causa da sobrecarga para você voltar a se movimentar com confiança."*), CTAs (`"Agendar avaliação →"` + `"Ver como funciona ↓"`) e 2 métricas na base (`60 min de sessão 100% individual`, `1:1 uma paciente por horário`).
  - **Coluna direita:** Retrato `hero-specialist.{avif,webp}` integrado ao card, com **2 pílulas flutuantes de vidro (`shadow-lift`) com `Parallax` suave no scroll**: `"Especialista em Coluna e Ortopedia"` e `"Reabilitação Baseada em Evidência"`.

### 3. `"Com quais dores me procuram"` — Leque de 5 Cards em Arco (`SymptomsFanSection.tsx`)
- Container `rounded-[36px]` em `#F2F5F9` com título centralizado bicolor e controles `← 01 / 05 →`.
- **Mecânica de Leque em Arco (`SIGN-4: Fan Deck`):**
  - Os 5 cards `4:5` (`case-01` a `case-05`) ficam dispostos em um leque curvo sobreposto (`-12deg`, `-6deg`, `0deg`, `+6deg`, `+12deg`):
    1. **Dor na Coluna Lombar e Cervical** (*Hérnia de disco, nervo ciático, travamentos e dor ao ficar sentado*)
    2. **Joelho, Quadril e Ombro** (*Condromalácia, tendinites, bursites e dor ao subir escadas ou elevar o braço*)
    3. **Pós-Operatório Ortopédico** (*Reabilitação segura de LCA, menisco, manguito rotador e próteses*)
    4. **Lesões no Esporte e Corrida** (*Canelite, fascite plantar, estiramentos e retorno seguro ao treino*)
    5. **Dor Crônica e Tensão Miofascial** (*Para quem já tomou anti-inflamatório ou fez repouso e a dor sempre volta*)
  - Clicar em qualquer card ou nas setas `← / →` traz o caso para o centro e abre o painel detalhado com: **Por que essa dor acontece**, **O que avaliamos na 1ª sessão** e botão `"Tenho essa queixa — falar no WhatsApp"` (que já leva a queixa preenchida na mensagem!).

### 4. `"Reabilitação precisa para cada fase da sua dor"` — Alinhamento Biomecânico no Scroll (`AnatomyAssemblySection.tsx`)
- Seção sobre fundo `#FFFFFF` com título bicolor à esquerda.
- **Mecânica Central (`SIGN-5: Pin + Scrub Assembly`):**
  - No centro da tela, conforme a pessoa rola a seção fixada (`pin: true`, `scrub: 1`), o segmento articular/vertebral superior (`anatomy-top.{avif,webp}`) alinha sua inclinação e desce no eixo Y até **se encaixar perfeitamente sobre a base (`anatomy-base.{avif,webp}`)** (ou avança pelos 120 quadros de `/media/frames/frame_0001..0120.{avif,webp}`), acendendo um halo azul suave (`#5B8DEF`) de estabilidade biomecânica!
  - Ao redor da peça central, **4 quadrantes orbitais conectados por linhas sutis** acendem conforme o encaixe:
    1. **Terapia Manual & Liberação** (*Descompressão articular e alívio da dor aguda sem depender só de medicamentos*)
    2. **Estabilização & Controle Motor** (*Ativação da musculatura profunda que protege a coluna e as articulações*)
    3. **Correção Biomecânica** (*Ajuste do padrão de movimento para a sobrecarga não voltar*)
    4. **Fortalecimento & Autonomia** (*Progressão segura de carga para você voltar ao treino e à rotina sem medo*)
  - Clicar em `"Saiba mais →"` em qualquer quadrante exibe os detalhes da técnica, e no canto inferior direito o card `"Qual abordagem o seu caso pede? Isso se define na avaliação funcional."` + botão escuro `"Falar sobre o meu caso ↗"`.

### 5. `"Quando a fisioterapia individualizada é a solução indicada"` + Trilho Horizontal `01–05` (`SignatureTreatmentSection.tsx`)
- Grande container `#F2F5F9` (`rounded-[36px]`) com marca d'água tipográfica gigante no fundo (`"Movimento"` em branco translúcido):
  - **Topo (Split):** Imagem `anatomy-assembled.{avif,webp}` à esquerda + explicação sobre a diferença entre **fisioterapia individualizada 1:1** vs. sessões padronizadas em série, acompanhada dos indicadores grandes (`1 paciente por horário`, `4 etapas até a alta`, pílula `"Plano de tratamento desenhado após testes específicos de movimento"`).
  - **Base (`Indicações mais comuns (5)`):** Trilho horizontal de 5 cartões brancos (`01` a `05`: *Dor que volta sempre no mesmo lugar*, *Medo de travar ao agachar ou pegar peso*, *Pós-cirúrgico que precisa de acompanhamento próximo*, *Querer evitar cirurgia quando o tratamento conservador é indicado*, *Voltar a correr ou treinar na academia sem dor*) com barra de progresso `01–04 / 05`.
  - Botão azul **"Descobrir se é indicado para mim →"**: abre um **Modal de Triagem Rápida da Dor em 3 passos** (*1. Região da queixa*, *2. Tempo de duração*, *3. Principal objetivo*), gerando um link `https://wa.me/` com o resumo clínico pronto para enviar à fisioterapeuta!

### 6. `"Da primeira avaliação à sua alta sem dor"` — Foto Fixada que Troca `01/04` a `04/04` (`ProcessStickySection.tsx`)
- Seção sobre fundo `#FFFFFF`:
  - **Coluna esquerda fixada (`pin`):** Moldura vertical `4:5` (`rounded-[28px]`) que troca automaticamente a foto com crossfade (`step-01-avaliacao` ➔ `step-02-planejamento` ➔ `step-03-procedimento` ➔ `step-04-acompanhamento`) e exibe o badge de vidro `"01 / 04 · Avaliação funcional"`.
  - **Coluna direita (Timeline Vertical):** Eixo vertical que preenche conforme o scroll com as 4 fases:
    - `01 PRIMEIRA CONSULTA — Avaliação funcional e mapa da dor` (*Escuta detalhada da sua rotina, histórico e exames + testes práticos de mobilidade, força e controle motor + explicação clara da causa da sua dor.*)
    - `02 FASE DE ALÍVIO — Terapia manual e ganho de mobilidade` (*Técnicas manuais específicas, liberação miofascial e mobilização articular para reduzir a dor e devolver o movimento livre.*)
    - `03 FASE ATIVA — Reabilitação e fortalecimento direcionado` (*Exercícios terapêuticos progressivos acompanhados de perto para estabilizar a região e corrigir compensações.*)
    - `04 ALTA E PREVENÇÃO — Autonomia para a vida e o esporte` (*Transição segura para sua rotina, academia ou corrida, com orientações práticas para manter o resultado.*)

### 7. `"Quem vai cuidar da sua reabilitação"` — Sobre a Fisioterapeuta (`AboutSpecialistSection.tsx`)
- Container `#F2F5F9` (`rounded-[36px]`) em 2 colunas:
  - Foto `specialist-hands.{avif,webp}` à esquerda;
  - À direita: apresentação acolhedora, citação em destaque (*"Reabilitar não é proibir você de se movimentar — é devolver ao seu corpo a capacidade de se mover sem medo."*), registro `CREFITO`, pílulas de formação (`Graduação em Fisioterapia`, `Especialização em Ortopedia, Traumatologia e Coluna`, `Formação em Terapia Manual e Biomecânica`) e 3 cards de destaque.

### 8. `"Perguntas frequentes"` + Bloco Final `"Contato"` em Azul-Noturno `#0A0F1D` (`FAQSection.tsx` + `ContactDarkSection.tsx`)
- **FAQ em 2 colunas:**
  - Coluna esquerda fixada (`pin`) com título `"Perguntas frequentes"` e card branco com avatar da fisioterapeuta + `"Ficou com alguma dúvida? Mande uma mensagem no WhatsApp"` + botão escuro `"Perguntar no WhatsApp ↗"`.
  - Coluna direita com 7 perguntas reais de pacientes (`01 Preciso de encaminhamento médico para agendar a avaliação?`, `02 Como funciona a primeira sessão de avaliação?`, `03 Quantas sessões vou precisar fazer?`, `04 O atendimento é individual ou com vários pacientes no mesmo horário?`, `05 Estou na fase de dor aguda/travado(a), posso fazer fisioterapia hoje?`, `06 Atende convênio ou emite recibo para reembolso?`, `07 Com que roupa devo ir e quanto tempo dura a sessão?`).
- **Bloco Final de Contato (`#0A0F1D`, `rounded-[36px]`, texto branco):**
  - Título `"Sua recuperação começa com uma boa avaliação."` + botão azul `"Agendar avaliação →"`.
  - Foto `clinic-reception.{avif,webp}` à esquerda e 3 cartões escuros translúcidos à direita (`ENDEREÇO + Como chegar ↗`, `HORÁRIOS + ● Aberto agora`, `WHATSAPP + Enviar mensagem ↗`).

---

## 3. HIGIENE DE MÍDIA, ÉTICA DO CREFITO E VALIDAÇÃO
- **AVIF + WebP + Cache Busting (`?v=<hash>`):** Gere `__MEDIA_VERSION__` no `vite.config.ts`, use `<picture>` (`image/avif` + `image/webp`) em todas as imagens e verifique se `frame_0001.avif` decodifica no navegador. Não copie `canvas-sequence.mp4` para `public/media/`.
- **Ética Profissional (COFFITO/CREFITO) e LGPD:** Exiba o `CREFITO` configurável, linguagem ética baseada em evidência (sem promessas irreais de cura instantânea) e consentimento claro nos pontos de contato.
- **Testes e Validação:** Rode `typecheck`, `lint`, `test` (`Vitest` cobrindo a Triagem Rápida da Dor e os links de WhatsApp), `build` e valide com `Playwright` (`reducedMotion: 'no-preference'` e `'reduce'`, `?movimento=1` e zero overflow horizontal de `360px` a `1920px`).
```

