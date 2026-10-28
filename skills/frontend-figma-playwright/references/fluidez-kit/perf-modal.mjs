// Mede a abertura e o fechamento de um modal/gaveta: quadros longos (rAF) e
// Long Animation Frames com atribuição de script e layout forçado.
// Uso (na raiz do projeto, com playwright-core instalado e o preview no ar):
//   OPEN="Abrir sacola" node <kit>/perf-modal.mjs [url]
// Variáveis:
//   OPEN      nome acessível (regex) do botão que abre o painel  [obrigatória]
//   CLOSE     tecla para fechar (padrão Escape)
//   SCROLL_Y  rolar antes de medir, para a página estar "cheia" (padrão 1800)
//   SETUP     JS executado na página antes de medir (ex.: semear localStorage) e depois recarrega
//   CPU=4, WIDTH=1440, REDUCED=1, HEADED=1, BROWSER_CHANNEL como nos outros scripts
// Leitura: o quadro do clique deve ter script curto e "layout" forçado ≈ 0; quadros >25 ms
// no abrir indicam re-render grande, medição de layout no mount ou animação fora do compositor.
import { createRequire } from 'node:module'
import { join } from 'node:path'

const { chromium } = createRequire(join(process.cwd(), 'package.json'))('playwright-core')

const url = process.argv[2] ?? process.env.BASE_URL ?? 'http://localhost:4173/'
if (!process.env.OPEN) {
  console.error('Defina OPEN com o nome do botão que abre o painel, ex.: OPEN="Abrir sacola"')
  process.exit(1)
}
const openName = new RegExp(process.env.OPEN, 'i')
const rate = Number(process.env.CPU ?? 4)
const width = Number(process.env.WIDTH ?? 1440)

const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL ?? 'msedge', headless: process.env.HEADED !== '1' })
const page = await browser.newPage({
  viewport: { width, height: width < 768 ? 844 : 900 },
  reducedMotion: process.env.REDUCED === '1' ? 'reduce' : 'no-preference',
})
const cdp = await page.context().newCDPSession(page)
await page.goto(url, { waitUntil: 'networkidle' })
if (process.env.SETUP) {
  await page.evaluate(process.env.SETUP)
  await page.reload({ waitUntil: 'networkidle' })
}
await page.evaluate((y) => window.scrollTo(0, y), Number(process.env.SCROLL_Y ?? 1800))
await page.waitForTimeout(1500)

await page.evaluate(() => {
  window.__loaf = []
  new PerformanceObserver((l) => {
    for (const e of l.getEntries())
      window.__loaf.push({
        dur: Math.round(e.duration),
        scripts: e.scripts.map((s) => ({
          ms: Math.round(s.duration),
          layoutForcado: Math.round(s.forcedStyleAndLayoutDuration),
          origem: `${s.invoker} → ${s.sourceFunctionName || '(anon)'} @ ${(s.sourceURL || '').split('/').pop()}`,
        })),
      })
  }).observe({ type: 'long-animation-frame' })
})

async function measure(label, action) {
  await page.evaluate(() => {
    window.__loaf.length = 0
    window.__f = []
    let last = performance.now()
    const loop = (t) => {
      window.__f.push(t - last)
      last = t
      if (window.__f.length < 90) requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)
  })
  await action()
  await page.waitForTimeout(1600)
  const { frames, loaf } = await page.evaluate(() => ({ frames: window.__f.slice(1), loaf: window.__loaf }))
  const long = frames.filter((d) => d > 25)
  console.log(
    `${label.padEnd(7)} pior quadro ${Math.round(Math.max(...frames))} ms · quadros >25 ms: ${long.length} · tempo perdido: ${Math.round(long.reduce((a, b) => a + b, 0))} ms`,
  )
  for (const e of loaf) {
    console.log(`   LoAF ${e.dur} ms${e.scripts.length ? '' : ' (só renderização/pintura)'}`)
    for (const s of e.scripts) console.log(`     script ${s.ms} ms · layout forçado ${s.layoutForcado} ms · ${s.origem}`)
  }
}

await cdp.send('Emulation.setCPUThrottlingRate', { rate })
console.log(`CPU ${rate}x · ${width}px · ${process.env.REDUCED === '1' ? 'movimento reduzido' : 'movimento permitido'}`)
await measure('abrir', () => page.getByRole('button', { name: openName }).first().click())
await measure('fechar', () => page.keyboard.press(process.env.CLOSE ?? 'Escape'))
await cdp.send('Emulation.setCPUThrottlingRate', { rate: 1 })

// Confere se o painel desliza por animação nativa (WAAPI, roda no compositor)
await page.getByRole('button', { name: openName }).first().click()
await page.waitForTimeout(60)
const native = await page.evaluate(() =>
  document
    .getAnimations()
    .filter((a) => a.effect?.target?.closest?.('[role="dialog"]') || a.effect?.target?.getAttribute?.('role') === 'dialog')
    .map((a) => Object.keys(a.effect.getKeyframes()[0] ?? {}).filter((k) => !['offset', 'easing', 'composite', 'computedOffset'].includes(k)).join('+')),
)
console.log(`Animações nativas no painel ao abrir: ${native.length ? native.join(', ') : 'nenhuma (o deslize roda em JS no thread principal)'}`)
await browser.close()
