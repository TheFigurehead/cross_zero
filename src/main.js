import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		board: [[0,0,0], [0,0,0], [0,0,0]]
	},
});

export default app;