<script lang="ts">
	import Router from 'svelte-spa-router';
	import Footer from './components/Footer.svelte';
	import Navigation from './components/Navigation.svelte';

	export let routes;
</script>

<Navigation />

<main>
	<Router {routes} />
</main>

<Footer />

<style lang="scss">
	// @import './scss/framework';

	// main {
	// 	outline: rem(1px) solid red;
	// }
</style>
