import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import nodePolyfills from 'rollup-plugin-polyfill-node'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
	build: {
		outDir: 'dist',
		rollupOptions: {
			// @ts-expect-error aaa
			plugins: [nodePolyfills()],
		},
	},
	define: {
		global: {},
	},
	plugins: [
		tsconfigPaths(),
		react(),
		svgrPlugin({
			svgrOptions: {
				icon: true,
			},
		}),
	],
})
