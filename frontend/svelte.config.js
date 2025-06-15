import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: '/project-baru-pzn',
			assets: dev ? '' : 'https://dwiwahyufauzan.github.io/project-baru-pzn'
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
