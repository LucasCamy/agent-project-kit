# Padronização de Docker, Deploy e Integrações Opcionais

Use esta referência quando o usuário pedir para containerizar a aplicação (`Dockerfile` / `docker-compose.yml`), preparar o deploy para produção (Nginx / Node / .NET) ou estruturar pontos de integração (WhatsApp, webhooks, pagamentos).

---

## 1. Front-end SPA / Landing Page (`Dockerfile` Multi-Stage + Nginx)

Para aplicações Vite / React / estáticas:

1. **Estágio 1 (`build`):**
   - Base `node:22-alpine` (ou a versão Node fixada pelo projeto).
   - `npm ci` aproveitando cache de camadas (`COPY package*.json ./` antes do código).
   - Executa `npm run build` (que já inclui `tsc -b` e gera o hash `__MEDIA_VERSION__` quando houver `/media/`).
2. **Estágio 2 (`runtime`):**
   - Base `nginx:stable-alpine`.
   - Configuração `nginx.conf` com:
     - Compressão `gzip on` para `text/css`, `application/javascript`, `application/json`, `image/svg+xml`;
     - Tipos MIME corretos para `image/avif` (`.avif`) e `image/webp` (`.webp`);
     - Cache longo (`expires 7d` ou `30d`, `Cache-Control "public, no-transform"`) para `/assets/` e `/media/` (já que o app usa `?v=<hash>` para cache busting);
     - `Cache-Control "no-cache"` para `index.html` e `styleguide.html` (para que novos deploys entrem no ar imediatamente);
     - Fallback `try_files $uri $uri/ /index.html;` para rotas SPA;
     - Endpoint `/healthz` retornando `200 ok`.
3. **Higiene (`.dockerignore`):**
   - Ignore sempre `node_modules`, `dist`, `.git`, `.claude`, `.agents`, `.validation`, `validation`, `img` (pasta bruta de geração, pois o build já consome `public/media/`) e arquivos `.env*` locais.

---

## 2. Back-end .NET / API (`Dockerfile` Multi-Stage + Compose)

1. **Estágio 1 (`build` / `publish`):**
   - Base `mcr.microsoft.com/dotnet/sdk:<versao-do-projeto>` restaurando `.sln`/`.csproj` em camada separada antes do `COPY . .` e publicando com `dotnet publish -c Release -o /app/publish /p:UseAppHost=false`.
2. **Estágio 2 (`runtime`):**
   - Base `mcr.microsoft.com/dotnet/aspnet:<versao-do-projeto>`.
   - Execução com usuário não-root (`USER $APP_UID`).
   - Variáveis sensíveis (connection strings, chaves JWT, credenciais de API) passadas **exclusivamente por variáveis de ambiente no runtime**, nunca gravadas na imagem ou com fallback inseguro de produção.
3. **`docker-compose.yml`:**
   - Separe claramente serviços (`frontend`, `backend`, `db`), volumes nomeados para persistência de banco/uploads, `restart: unless-stopped` e `healthcheck` real antes de subir dependentes (`condition: service_healthy`).

---

## 3. Pontos de Integração e Pagamentos (Quando o Projeto Pedir)

Como meios de pagamento e ERPs variam por projeto, siga estas práticas sempre que precisar deixar o projeto preparado ou integrar um provedor real (Stripe, Mercado Pago, Asaas, Pagar.me, Shopify, WhatsApp API):

1. **Front-end (Catálogo / Checkout / WhatsApp):**
   - Isole a ação final em um módulo único (ex.: `src/lib/shop.tsx` + `src/lib/whatsapp.ts` ou `src/lib/checkout.ts`) para que trocar o redirecionamento `wa.me` por uma chamada de Checkout Transparente/Link de Pagamento não exija reescrever componentes visuais (`BagDrawer` ou `ProductCard`).
2. **Back-end (Webhooks e Cobranças):**
   - **Nunca confie apenas no retorno do navegador (redirect front-end)** para confirmar pagamento; a mudança de status oficial deve vir do **Webhook assinado** do provedor.
   - Valide a assinatura criptográfica do webhook (`HMAC` / header do provedor) antes de processar.
   - Grave o `externalEventId` / `idempotencyKey` em banco com índice único: se o provedor reenviar o mesmo webhook 3 vezes, o sistema processa apenas a primeira e responde `200 OK` nas demais sem duplicar saldo, matrícula ou baixa de estoque.
