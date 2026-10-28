$ErrorActionPreference = "Stop"

$KitRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path -replace '\\', '/'
$CommandsSrc = Join-Path $KitRoot "commands"
$SkillsSrc = Join-Path $KitRoot "skills"

# 1. Instalar Slash Commands no Claude Code (~/.claude/commands)
$ClaudeCommandsDir = Join-Path $HOME ".claude\commands"
New-Item -ItemType Directory -Force -Path $ClaudeCommandsDir | Out-Null

$CommandFiles = Get-ChildItem -Path $CommandsSrc -Filter "*.md" | Where-Object { $_.Name -ne "README.md" }
foreach ($file in $CommandFiles) {
  $raw = Get-Content -Path $file.FullName -Raw -Encoding UTF8
  # Substitui links relativos ../skills/ pelo caminho real do clone local do kit
  $resolved = $raw.Replace("](../skills/", "]($KitRoot/skills/").Replace("(../skills/", "($KitRoot/skills/")
  $destPath = Join-Path $ClaudeCommandsDir $file.Name
  Set-Content -Path $destPath -Value $resolved -Encoding UTF8
  Write-Host "[Claude Code] Comando instalado: /$($file.BaseName) -> $destPath"
}

# Alias adicional /create-landing apontando para landingpage.md
$LandingSource = Join-Path $ClaudeCommandsDir "landingpage.md"
if (Test-Path $LandingSource) {
  $AliasPath = Join-Path $ClaudeCommandsDir "create-landing.md"
  Copy-Item -Path $LandingSource -Destination $AliasPath -Force
  Write-Host "[Claude Code] Alias instalado: /create-landing -> $AliasPath"
}

# 2. Sincronizar Skills Globais no Antigravity (~/.gemini/config/skills)
$AgySkillsDir = Join-Path $HOME ".gemini\config\skills"
if (Test-Path (Join-Path $HOME ".gemini")) {
  New-Item -ItemType Directory -Force -Path $AgySkillsDir | Out-Null
  $SkillDirs = Get-ChildItem -Path $SkillsSrc -Directory
  foreach ($dir in $SkillDirs) {
    $targetDir = Join-Path $AgySkillsDir $dir.Name
    if (Test-Path $targetDir) {
      Remove-Item -Path $targetDir -Recurse -Force
    }
    Copy-Item -Path $dir.FullName -Destination $targetDir -Recurse -Force
    Write-Host "[Antigravity] Skill sincronizada: $($dir.Name) -> $targetDir"
  }
}

Write-Host ""
Write-Host "Instalacao concluida! Comandos disponiveis: /landingpage (/create-landing), /frontend, /backend, /database, /review, /kit"
