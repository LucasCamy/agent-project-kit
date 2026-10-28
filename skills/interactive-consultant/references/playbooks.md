# Playbooks por Comando (Criar, Editar, Ajustar e Revisar)

Este guia detalha como conduzir a conversa consultiva em cada comando, cobrindo tanto **novos projetos** quanto **ajustes, edições e evolução de projetos existentes**.

---

## 1. Playbook `/landingpage` (Landing Pages, Scrollytelling e Catálogo WhatsApp)

Recursos relacionados:
- [frontend-figma-playwright](../../frontend-figma-playwright/SKILL.md)
- [landing-page.md](../../frontend-figma-playwright/references/landing-page.md)
- [scroll-motion.md](../../frontend-figma-playwright/references/scroll-motion.md)
- [Catálogo de Formas e Animações](../../frontend-figma-playwright/pipeline-midia/01-catalogo-formas-e-animacoes.md)
- [Prompt Gerador de Mídia AVIF+WebP](../../frontend-figma-playwright/pipeline-midia/02-prompt-gerar-midia.md)
- [Prompts de Implementação](../../frontend-figma-playwright/pipeline-midia/04-prompt-implementar-codigo.md)

### Se o objetivo for CRIAR uma Landing Page nova:
1. **Recomende o Arquétipo ideal conforme o nicho:**
   - **ARQ-A (Grade Estrutural Noturna):** Advocacia, consultoria, finanças, engenharia, segurança (`#0A0A0B`, fios `1px`, sobriedade).
   - **ARQ-B (Editorial Orgânico & Tátil):** Arquitetura, interiores, design autoral, gastronomia, estética premium (fundo linho `#F2EFE9`, Hero que encolhe para moldura, capítulo escuro na galeria horizontal, cortina Antes ↔ Depois e amostras táteis).
   - **ARQ-C (Showroom Técnico & Produto):** SaaS, hardware, indústria, saúde diagnóstica.
   - **ARQ-D (Boutique Editorial & Catálogo com Sacola WhatsApp):** Moda feminina, ateliês, joias, crochê, decoração e social commerce (`PORT-3`: vitrine `4:5` com 2ª foto no hover, filtros de categoria e tamanho, Guia de Medidas, Compre o Look e Sacola Lateral `localStorage` que monta o pedido completo no `https://wa.me/`).
2. **Sugira melhorias práticas para o nicho** (ex.: barra de frete grátis na sacola, desconto Pix no resumo de WhatsApp, comparador Antes ↔ Depois do processo, vídeo ambiente com loop `xfade`).
3. **Pergunte (3 a 5 itens com recomendação):**
   - Nome da marca/negócio, público e objetivo principal (ex.: pedido no WhatsApp vs. agendamento de reunião);
   - Arquétipo e combinação de seções preferida (`ARQ-A`, `ARQ-B`, `ARQ-C`, `ARQ-D` ou Mix & Match);
   - Paleta/temperatura de cor desejada;
   - Se deseja **receber os 2 Prompts Prontos (Passo 1: Mídia AVIF+WebP + Vídeo / Passo 2: Código Completo)** ou **implementar direto na pasta**.

### Se o objetivo for EDITAR, AJUSTAR ou EVOLUIR uma Landing Page existente:
1. **Inspecione o projeto atual antes de perguntar:**
   - Confira `AGENTS.md`, `DESIGN.md`, `src/data/`, `src/components/sections/` e `src/lib/`.
2. **Identifique o tipo de ajuste e proponha melhorias:**
   - **Ajuste de Seção / Layout / Copy:** mostre qual componente será editado, preserve a direção visual de `DESIGN.md` e sugira melhorias de hierarquia ou responsividade.
   - **Adicionar Catálogo ou Sacola WhatsApp (`PORT-3`):** proponha a estrutura `src/lib/shop.tsx` (`localStorage`), `src/lib/whatsapp.ts` e `BagDrawer.tsx` adaptada às variações do produto (tamanho, cor, modelo).
   - **Troca ou Atualização de Imagens/Vídeos:** verifique se o projeto já usa `.avif` + `.webp`, se os quadros `.avif` decodificam no navegador (`av1C` válido com `-frames:v 1`) e se há cache busting `?v=<hash>` no `vite.config.ts`. Se precisar gerar novas mídias, ofereça o prompt cirúrgico de regeneração.
   - **Correção de Animação / Scroll (`GSAP / ScrollTrigger / Lenis`):** verifique problemas clássicos de [scroll-motion.md](../../frontend-figma-playwright/references/scroll-motion.md) (como `ScrollTrigger.sort()` com `React.lazy`, fallback de `prefers-reduced-motion: reduce`, travamento do Lenis ao abrir modais/gavetas).

---

## 2. Playbook `/frontend` (Interfaces, Aplicações Web, Design System e UX)

Recursos relacionados:
- [frontend-figma-playwright](../../frontend-figma-playwright/SKILL.md)
- [validation.md](../../project-workflow/references/validation.md)

### Como conduzir (Criar ou Editar/Ajustar):
1. **Inspecione o front-end atual:** framework (React, Vite, Next.js, Angular, Vue), estilização (Tailwind, CSS Modules), tokens e componentes existentes.
2. **Atue como Designer de Produto + Tech Lead Front-end:**
   - Antes de alterar ou criar uma tela, aponte o que pode ser melhorado em:
     - **Estados completos:** vazio (`empty state`), carregando (`skeleton/loading`), erro com recuperação, sucesso e desabilitado;
     - **Usabilidade e Acessibilidade:** navegação por teclado (`Tab`, `Esc`), foco visível, contraste WCAG AA, rótulos e máscaras de formulário;
     - **Responsividade real:** comportamento em mobile (`360px–390px`) vs. desktop (`1280px–1920px`).
3. **Alinhe o uso de Figma sem travar o usuário:**
   - Pergunte se há link/destino no Figma MCP ou se o usuário autoriza seguir direto para `DESIGN.md` / `/styleguide.html` e código nesta tarefa.
4. **Ofereça executar direto na pasta ou gerar o prompt estruturado de implementação/refatoração.**

---

## 3. Playbook `/backend` (APIs, Serviços, Regras de Negócio e Integrações)

Recursos relacionados:
- [backend-dotnet](../../backend-dotnet/SKILL.md)
- [database-persistence](../../database-persistence/SKILL.md)
- [software-documentation](../../software-documentation/SKILL.md)

### Como conduzir (Criar ou Editar/Ajustar):
1. **Inspecione a solução existente:** linguagem/runtime (`.sln`, `.csproj`, TargetFramework, Node/Python/Go se não for .NET), divisão de camadas, autenticação, tratamento de erros (`ProblemDetails`) e testes.
2. **Atue como Arquiteto de Back-end (Consultoria antes do código):**
   - Não imponha abstrações desnecessárias (Repository, CQRS, Mediator) se o projeto não usar.
   - Aponte pontos críticos que o pedido pode ter esquecido:
     - **Contrato e Compatibilidade:** quebra algum consumidor no front-end ou integração?
     - **Validação vs. Regra de Negócio:** o que é erro `400` de entrada, `401/403` de permissão, `404` ou `409/422` de estado de negócio?
     - **Resiliência e Concorrência:** precisa de `CancellationToken`, timeout, idempotência ou transação para evitar duplicidade?
3. **Pergunte apenas as decisões de negócio/contrato em aberto** e ofereça **implementar direto com testes** ou **gerar o plano/prompt técnico detalhado**.

---

## 4. Playbook `/database` (Schema, Queries, Migrations e Performance)

Recursos relacionados:
- [database-persistence](../../database-persistence/SKILL.md)

### Como conduzir (Criar ou Editar/Ajustar):
1. **Inspecione o modelo de dados atual:** ORM (EF Core, Prisma, Dapper, SQL puro), migrations existentes e índices.
2. **Consultoria de Persistência:**
   - Aponte riscos de **N+1**, falta de paginação, leituras sem projeção, bloqueios/deadlocks, isolamento de transação e compatibilidade retroativa da migration (zero-downtime quando aplicável).
   - Lembre sempre a separação segura: **1) criar/ajustar modelo e migration**, **2) revisar o SQL gerado**, **3) aplicar no banco somente quando autorizado**.

---

## 5. Playbook `/review` (Diagnóstico de Qualidade, UX, Legal/LGPD, Segurança e Docs)

Recursos relacionados:
- [conformidade-legal.md](../../project-workflow/references/conformidade-legal.md)
- [security-audit.md](../../project-workflow/references/security-audit.md)
- [validation.md](../../project-workflow/references/validation.md)
- [software-documentation](../../software-documentation/SKILL.md)

### Como conduzir:
1. Pergunte (ou detecte pelo pedido) qual lente de revisão o usuário deseja priorizar:
   - **Revisão Visual, UX e Responsividade (Playwright):** captura screenshots, mede overflow horizontal, testa estados e aponta melhorias visuais.
   - **Revisão Pré-Publicação / Conformidade Legal Brasil (LGPD):** analisa formulários, WhatsApp, cookies, páginas legais, direitos autorais de imagens/retratos e gera diagnóstico + minutas.
   - **Revisão de Arquitetura, Código e Segurança:** analisa contratos, exposição de dados, autenticação, dependências e documentação (`AGENTS.md`, `README.md`, `ADR`).
2. Entregue uma lista priorizada (**Crítico → Recomendado → Polimento**) e pergunte: *"Quer que eu já aplique essas correções agora ou gere um prompt/plano para outro agente executar?"*
