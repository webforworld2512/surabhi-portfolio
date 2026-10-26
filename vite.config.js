import { defineConfig } from 'vite';

// Deployed under https://webforworld2512.github.io/surabhi-portfolio/
// so every asset URL has to carry that path prefix. BASE is overridable
// via env in case the repo name changes (or you later host at root).
const BASE = process.env.VITE_BASE || '/surabhi-portfolio/';

export default defineConfig({
  base: BASE,
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
});
