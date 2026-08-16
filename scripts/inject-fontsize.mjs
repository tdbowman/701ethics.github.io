#!/usr/bin/env node
/**
 * Injects a font-size accessibility widget (A- / A / A+) into every page of
 * the built site. Run after `jupyter-book build --html`:
 *
 *   node scripts/inject-fontsize.mjs
 *
 * The GitHub Actions deploy workflow runs this automatically.
 * Idempotent: safe to run more than once.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(process.cwd(), '_build', 'html');
const MARKER = 'inf420-fontsize-widget';

const SNIPPET = `
<style id="${MARKER}-css">
  #${MARKER} {
    position: fixed; bottom: 18px; right: 18px; z-index: 9999;
    display: flex; gap: 6px; align-items: center;
    background: rgba(255,255,255,0.92); border: 1px solid #b0bec5;
    border-radius: 10px; padding: 6px 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    font-family: Helvetica, Arial, sans-serif;
  }
  html[data-theme="dark"] #${MARKER}, html.dark #${MARKER} {
    background: rgba(30,41,59,0.92); border-color: #475569;
  }
  #${MARKER} button {
    cursor: pointer; border: 1px solid #00796b; background: transparent;
    color: #00796b; border-radius: 7px; min-width: 34px; height: 30px;
    font-size: 14px; font-weight: bold; line-height: 1;
  }
  html[data-theme="dark"] #${MARKER} button, html.dark #${MARKER} button {
    color: #80cbc4; border-color: #80cbc4;
  }
  #${MARKER} button:hover { background: #00796b; color: #fff; }
  #${MARKER} button:focus-visible { outline: 3px solid #ffab40; outline-offset: 2px; }
  #${MARKER} .pct { font-size: 11px; color: #607d8b; min-width: 38px; text-align: center; }
  html[data-theme="dark"] #${MARKER} .pct, html.dark #${MARKER} .pct { color: #90a4ae; }
  @media print { #${MARKER} { display: none; } }
  img.book-cover {
    border-radius: 6px;
    box-shadow: 0 12px 32px rgba(0,0,0,0.28);
    margin: 1.5rem auto 2rem;
  }
</style>
<script id="${MARKER}-js">
(function () {
  var KEY = 'inf420-font-scale';
  var MIN = 80, MAX = 160, STEP = 10;
  function get() {
    var v = parseInt(localStorage.getItem(KEY), 10);
    return isNaN(v) ? 100 : Math.min(MAX, Math.max(MIN, v));
  }
  function apply(v) {
    document.documentElement.style.fontSize = (v === 100 ? '' : v + '%');
    var pct = document.getElementById('${MARKER}-pct');
    if (pct) pct.textContent = v + '%';
    try { localStorage.setItem(KEY, String(v)); } catch (e) {}
  }
  function change(d) { apply(Math.min(MAX, Math.max(MIN, get() + d))); }
  function build() {
    if (document.getElementById('${MARKER}')) return;
    var box = document.createElement('div');
    box.id = '${MARKER}';
    box.setAttribute('role', 'group');
    box.setAttribute('aria-label', 'Adjust text size');
    box.innerHTML =
      '<button type="button" id="${MARKER}-dec" aria-label="Decrease text size" title="Smaller text">A&minus;</button>' +
      '<span class="pct" id="${MARKER}-pct" aria-live="polite">100%</span>' +
      '<button type="button" id="${MARKER}-inc" aria-label="Increase text size" title="Larger text">A+</button>' +
      '<button type="button" id="${MARKER}-reset" aria-label="Reset text size" title="Reset text size">A</button>';
    document.body.appendChild(box);
    document.getElementById('${MARKER}-dec').addEventListener('click', function () { change(-STEP); });
    document.getElementById('${MARKER}-inc').addEventListener('click', function () { change(STEP); });
    document.getElementById('${MARKER}-reset').addEventListener('click', function () { apply(100); });
    apply(get());
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
</script>
`;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

let patched = 0, skipped = 0;
for (const file of walk(ROOT)) {
  const html = readFileSync(file, 'utf8');
  if (html.includes(MARKER)) { skipped++; continue; }
  if (!html.includes('</body>')) { skipped++; continue; }
  writeFileSync(file, html.replace('</body>', SNIPPET + '\n</body>'));
  patched++;
}
console.log(`font-size widget: injected into ${patched} page(s), skipped ${skipped}.`);
