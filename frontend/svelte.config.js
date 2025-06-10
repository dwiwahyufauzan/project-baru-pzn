import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html' // penting untuk SPA
		}),
		paths: {
			base: dev ? '' : '/project-baru-pzn' // sesuai nama repo GitHub
		},
		prerender: {
			entries: []
		}
	}
};
