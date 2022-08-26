import path from 'node:path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';

export default defineConfig({
	plugins: [vue(), pages()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
