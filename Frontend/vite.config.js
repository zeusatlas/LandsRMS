import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_PUBLIC_URL || '/',
    plugins: [react()],
    // optimizeDeps: {
    //   include: [
    //     'pdfmake',
    //     'jszip',
    //     'datatables.net',
    //     'datatables.net-bs4',
    //     'datatables.net-buttons',
    //     'datatables.net-buttons-bs4',
    //     'datatables.net-responsive',
    //     'datatables.net-responsive-bs4',
    //   ],
    // },
    build: {
      outDir: 'dist',
      sourcemap: env.SOURCE_MAP === 'true',
      minify: 'esbuild',
    },
    define: {
      'window.jQuery': 'jQuery',
      'window.$': 'jQuery',
    },
    server: {
      host: '0.0.0.0',
      port: 2028,
      strictPort: false,
    },
  }
})
