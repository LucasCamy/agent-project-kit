#!/usr/bin/env bash
set -euo pipefail

KIT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COMMANDS_SRC="$KIT_ROOT/commands"
SKILLS_SRC="$KIT_ROOT/skills"

# 1. Instalar Slash Commands no Claude Code (~/.claude/commands)
CLAUDE_COMMANDS_DIR="$HOME/.claude/commands"
mkdir -p "$CLAUDE_COMMANDS_DIR"

for file in "$COMMANDS_SRC"/*.md; do
  fname="$(basename "$file")"
  if [[ "$fname" == "README.md" ]]; then
    continue
  fi
  sed "s|\.\./skills/|$KIT_ROOT/skills/|g" "$file" > "$CLAUDE_COMMANDS_DIR/$fname"
  echo "[Claude Code] Comando instalado: /${fname%.md} -> $CLAUDE_COMMANDS_DIR/$fname"
done

if [[ -f "$CLAUDE_COMMANDS_DIR/landingpage.md" ]]; then
  cp "$CLAUDE_COMMANDS_DIR/landingpage.md" "$CLAUDE_COMMANDS_DIR/create-landing.md"
  echo "[Claude Code] Alias instalado: /create-landing -> $CLAUDE_COMMANDS_DIR/create-landing.md"
fi

# 2. Sincronizar Skills Globais no Antigravity (~/.gemini/config/skills)
if [[ -d "$HOME/.gemini" ]]; then
  AGY_SKILLS_DIR="$HOME/.gemini/config/skills"
  mkdir -p "$AGY_SKILLS_DIR"
  for dir in "$SKILLS_SRC"/*/; do
    sname="$(basename "$dir")"
    rm -rf "$AGY_SKILLS_DIR/$sname"
    cp -R "$dir" "$AGY_SKILLS_DIR/$sname"
    echo "[Antigravity] Skill sincronizada: $sname -> $AGY_SKILLS_DIR/$sname"
  done
fi

echo ""
echo "Instalacao concluida! Comandos disponiveis: /landingpage (/create-landing), /frontend, /backend, /database, /review, /kit"
