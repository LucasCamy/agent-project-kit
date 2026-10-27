# Contrato do `MEDIA_MANIFEST.json` e formato duplo (`.avif` + `.webp`)

Todo pacote gerado por este fluxo deve entregar **cada imagem estática e cada um dos 120 quadros do `<canvas>` em dois formatos**:
- **`.avif` (formato primário):** exigido nos projetos implementados pelo agente de código para máxima compressão e fidelidade em `<picture>` e `<canvas>`;
- **`.webp` (formato de fallback):** compatibilidade imediata em qualquer ferramenta ou navegador.

## Estrutura de pastas suportada

```text
[pacote-ou-public]/
  MEDIA_MANIFEST.json
  media/
    hero-main.avif / hero-main.webp
    hero-ambient.mp4
    sketch-before.avif / sketch-before.webp       # (ARQ-B) Mesmo enquadramento de hero-main para cortina Antes/Depois
    section-editorial.avif / section-editorial.webp
    bento-01-[tema].avif / .webp
    bento-02-[tema].avif / .webp
    bento-03-[tema].avif / .webp
    team-01.avif / .webp
    team-02.avif / .webp
    team-03.avif / .webp
    contact-space.avif / .webp
    canvas-sequence.mp4
    frames/
      frame_0001.avif ... frame_0120.avif
      frame_0001.webp ... frame_0120.webp
```

---

## Formato do `MEDIA_MANIFEST.json`

```json
{
  "project": "[slug-do-projeto]",
  "archetype": "ARQ-A | ARQ-B | CUSTOM",
  "status": "ready",
  "packageRoot": ".",
  "mediaDirectory": "media/",
  "formats": {
    "primaryStill": "AVIF",
    "fallbackStill": "WebP",
    "video": "MP4 (H.264, silent)"
  },
  "selectedForms": {
    "nav": "NAV-1 | NAV-2",
    "hero": "HERO-1 | HERO-2 | HERO-3",
    "portfolio": "PORT-1 | PORT-2",
    "signatures": ["SIGN-1", "SIGN-2", "SIGN-3"],
    "method": "METH-1 | METH-2",
    "team": "TEAM-1 | TEAM-2"
  },
  "licenseNotes": {
    "unsplash": "Free under the Unsplash License; attribution is appreciated.",
    "pexels": "Free under the Pexels License; attribution is appreciated.",
    "stockPeople": "Portraits from stock libraries are illustrative and must not be presented as real verified staff without replacement or authorization."
  },
  "assets": {
    "hero": {
      "avifPath": "media/hero-main.avif",
      "webpPath": "media/hero-main.webp",
      "alt": "[Descrição em pt-BR]",
      "expectedAspectRatio": "4:5 | 16:10",
      "focalPoint": { "x": 0.5, "y": 0.48 },
      "credit": "Imagem gerada para este projeto"
    },
    "beforeAfter": {
      "beforeAvif": "media/sketch-before.avif",
      "beforeWebp": "media/sketch-before.webp",
      "beforeLabel": "CROQUI · 2022",
      "afterAvif": "media/hero-main.avif",
      "afterWebp": "media/hero-main.webp",
      "afterLabel": "ENTREGA · 2024",
      "alt": "[Comparação entre croqui feito à mão e ambiente entregue no mesmo enquadramento]",
      "expectedAspectRatio": "16:10"
    },
    "canvasSequence": {
      "path": "media/canvas-sequence.mp4",
      "framesDirectory": "media/frames/",
      "avifPattern": "media/frames/frame_%04d.avif",
      "webpPattern": "media/frames/frame_%04d.webp",
      "firstFrameAvif": "media/frames/frame_0001.avif",
      "lastFrameAvif": "media/frames/frame_0120.avif",
      "frameCount": 120,
      "frameWidth": 1024,
      "frameHeight": 576,
      "frameRate": 24,
      "alt": "[Descrição da sequência de quadros]"
    }
  }
}
```

---

## Comandos `ffmpeg` de referência (AVIF + WebP + MP4)

1. **Converter imagem para `.avif` (primário) e `.webp` (fallback) mantendo proporção original:**
   ```bash
   # AVIF (rápido via SVT-AV1 ou libaom-av1)
   ffmpeg -hide_banner -loglevel error -y -i source/imagem.png \
     -frames:v 1 -c:v libsvtav1 -crf 28 -preset 8 -pix_fmt yuv420p \
     media/imagem.avif

   # WebP (fallback)
   ffmpeg -hide_banner -loglevel error -y -i source/imagem.png \
     -frames:v 1 -c:v libwebp -quality 84 -compression_level 6 -preset picture \
     media/imagem.webp
   ```

2. **Extrair os 120 quadros (`1024×576`) em `.webp` e `.avif` para o `<canvas>`:**
   ```bash
   # 120 quadros em WebP
   ffmpeg -hide_banner -loglevel error -y -ss 0 -t 5 -i media/canvas-sequence.mp4 \
     -vf "fps=24,scale=1024:576:force_original_aspect_ratio=increase,crop=1024:576" \
     -c:v libwebp -quality 80 -compression_level 4 \
     media/frames/frame_%04d.webp

   # 120 quadros em AVIF
   ffmpeg -hide_banner -loglevel error -y -framerate 24 -i media/frames/frame_%04d.webp \
     -frames:v 120 -vf "format=yuv420p" -c:v libaom-av1 -still-picture 1 -crf 30 -b:v 0 -cpu-used 6 \
     -f image2 media/frames/frame_%04d.avif
   ```

---

## Como o código consome `.avif` + `.webp`

- **Em imagens estáticas:** use um componente reutilizável `<SmartMedia>` com `<picture><source srcSet={asset.avif} type="image/avif" /><source srcSet={asset.webp} type="image/webp" /><img src={asset.webp} alt={asset.alt} style={{ objectPosition }} /></picture>`.
- **No `<canvas>` de 120 quadros:** carregue `frame_%04d.avif` por padrão e mantenha fallback automático para `frame_%04d.webp` no handler `onerror` de `new Image()`.
