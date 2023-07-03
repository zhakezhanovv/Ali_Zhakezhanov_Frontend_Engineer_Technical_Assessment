import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsConfigPaths from 'vite-tsconfig-paths'

import { manifest } from './manifest'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsConfigPaths(), VitePWA(manifest)],
})
