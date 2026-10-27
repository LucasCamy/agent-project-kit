# Contrato do `MEDIA_MANIFEST.json` e estrutura de `media/`

O `MEDIA_MANIFEST.json` unifica os metadados do pacote de mídia e declara qual arquétipo (`archetype: "ARQ-A" | "ARQ-B" | "CUSTOM"`) e quais blocos (`sections`) serão usados pelo código.

## Estrutura de pastas suportada

```text
[pacote-ou-public]/
  MEDIA_MANIFEST.json
  media/
    hero-main.webp
    hero-ambient.mp4
    sketch-before.webp           # (ARQ-B) Mesmo enquadramento de hero-main para cortina Antes/Depois
    section-editorial.webp       # (ARQ-A) Cena institucional
    process-studio-table.webp    # (ARQ-B) Foto fixa da coluna esquerda de Processo
    founder-portrait.webp        # (ARQ-B) Retrato autoral no estúdio
    contact-space.webp
    bento-01.webp                # (ARQ-A) Grid xadrez
    bento-02-detail.webp
    bento-03.webp
    team-01.webp                 # (ARQ-A) 3 sócios
    team-02.webp
    team-03.webp
    projects/                    # (ARQ-B) Obras do trilho horizontal
      project-01.webp
      ...
      project-05.webp
    swatches/                    # (ARQ-B) Amostras quadradas da Mesa de Materiais
      swatch-01.webp
      ...
      swatch-06.webp
    canvas-sequence.mp4
    frames/
      frame_0001.webp
      ...
      frame_0120.webp
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
      "path": "media/hero-main.webp",
      "alt": "[Descrição em pt-BR]",
      "expectedAspectRatio": "4:5 | 16:10",
      "focalPoint": { "x": 0.5, "y": 0.48 },
      "credit": "Imagem gerada para este projeto"
    },
    "beforeAfter": {
      "beforePath": "media/sketch-before.webp",
      "beforeLabel": "CROQUI · 2022",
      "afterPath": "media/hero-main.webp",
      "afterLabel": "ENTREGA · 2024",
      "alt": "[Comparação entre croqui feito à mão e ambiente entregue no mesmo enquadramento]",
      "expectedAspectRatio": "16:10"
    },
    "projects": [
      {
        "id": "01",
        "title": "[Nome da Obra / Caso]",
        "path": "media/projects/project-01.webp",
        "expectedAspectRatio": "16:10 | 4:5",
        "focalPoint": { "x": 0.5, "y": 0.5 },
        "alt": "[Descrição em pt-BR]",
        "meta": { "local": "São Paulo, SP", "area": "620 m²", "year": "2024", "scope": "Arquitetura e Interiores" },
        "credit": "[Autor] / Unsplash"
      }
    ],
    "materials": [
      {
        "id": "01",
        "name": "Travertino romano",
        "usage": "Pisos e bancos · levigado, sem resina",
        "swatchPath": "media/swatches/swatch-01.webp",
        "scenePath": "media/hero-main.webp",
        "sceneCaption": "TRAVERTINO · SALA · CASA JARDIM EUROPA"
      }
    ],
    "canvasSequence": {
      "path": "media/canvas-sequence.mp4",
      "framesDirectory": "media/frames/",
      "framePattern": "media/frames/frame_%04d.webp",
      "firstFrame": "media/frames/frame_0001.webp",
      "lastFrame": "media/frames/frame_0120.webp",
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

## Comandos `ffmpeg` de referência

1. **Converter PNG gerado para WebP mantendo proporção original:**
   ```bash
   ffmpeg -hide_banner -loglevel error -y -i source/imagem.png \
     -frames:v 1 -c:v libwebp -quality 84 -compression_level 6 -preset picture \
     media/imagem.webp
   ```

2. **Extrair os 120 quadros WebP (`1024×576`) para `<canvas>`:**
   ```bash
   ffmpeg -hide_banner -loglevel error -y -ss 0 -t 5 -i media/canvas-sequence.mp4 \
     -vf "fps=24,scale=1024:576:force_original_aspect_ratio=increase,crop=1024:576" \
     -c:v libwebp -quality 80 -compression_level 4 \
     media/frames/frame_%04d.webp
   ```

3. **Gerar amostra quadrada (`400×400`) de textura para a seção de Materiais:**
   ```bash
   ffmpeg -hide_banner -loglevel error -y -i source/material.jpg \
     -vf "scale=400:400:force_original_aspect_ratio=increase,crop=400:400" \
     -frames:v 1 -c:v libwebp -quality 84 media/swatches/swatch-01.webp
   ```
