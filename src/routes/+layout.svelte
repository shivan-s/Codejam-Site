<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import Banner from '$components/Banner.svelte';
	import Footer from '$components/Footer.svelte';
	import Content from '$components/Content.svelte';
</script>

<svelte:head>
	<title>TimeEnjoyed's CodeJam</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true} />
	<link
		href="https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&family=Ubuntu+Mono&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<Navbar />
</header>
<div class="flex col">
	<Banner />
	<Content>
		<slot>main content goes here</slot>
	</Content>
	<footer><Footer /></footer>
</div>

<style>
	:global(:root) {
		--primary-color: #323742;
		--secondary-color: #f6abb5;
		--tertiary-color: #3f4e69;
		--accent-color: #f18e8e;
		--text-color: whitesmoke;
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}
	:global(*) {
		margin: 0;
		border: 0px solid red;
	}
	:global(html, body) {
		height: 100%;
	}
	:global(body) {
		display: flex;
		justify-content: center;
		flex-direction: row;
		line-height: 1.5;
		background: var(--primary-color);
		font-family: 'Ubuntu Mono', monospace;
		color: var(--text-color);
		-webkit-font-smoothing: antialiased;
	}
	:global(img, picture, video, canvas, svg) {
		display: block;
		max-width: 100%;
	}
	:global(input, button, textarea, select) {
		font: inherit;
	}
	:global(p, h1, h2, h3, h4, h5, h6) {
		overflow-wrap: break-word;
	}
	:global(strong) {
		color: var(--secondary-color);
	}
	:global(ul) {
		list-style: none;
		text-indent: -1em;
	}
	:global(li::before) {
		content: '✽ ';
		color: var(--secondary-color);
	}
	:global(.flex) {
		display: flex;
	}
	:global(.wrap) {
		flex-wrap: wrap;
	}
	:global(.row) {
		flex-direction: row;
	}
	:global(.col) {
		flex-direction: column;
	}
	:global(.center) {
		align-items: center;
	}
	:global(.sp-bwtn) {
		justify-content: space-between;
	}
	:global(.icon) {
		width: 12em;
		height: 8em;
	}

	:global(.animate-content) {
		animation-duration: 0.5s;
		animation-name: animate-fade;
		animation-fill-mode: backwards;
	}

	@keyframes -global-animate-fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	/*.scrollable-content::before {*/
	/*  content: '';*/
	/*  display: block;*/
	/*  position:sticky;*/
	/*  height: 50px;*/
	/*  background: linear-gradient(to top, #3f4d68, #333 50%, #3f4d68 75%, #333 75%);*/
	/*}*/
	/*.scrollable-content::after {*/
</style>
