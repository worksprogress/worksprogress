import App from './App.svelte';
import { routes } from './routes';

const app = new App({
	target: document.body,
	props: {
		routes,
	}
});

export default app;
