<script lang="ts">
	import { title } from '$lib/stores';
	import Navbar from '$components/Navbar.svelte';
	import Banner from '$components/Banner.svelte';
</script>

<svelte:head>
	<title>TimeEnjoyed's CodeJam</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&family=Ubuntu+Mono&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<Navbar />
</header>
<main class="main-container flex col">
	<Banner />
	<div class="bottom-right">
		<div class="content-container flex col">
			<div class="scrollable-content flex col">
				<h1>{$title}</h1>
				<slot>main content goes here</slot>
			</div>
		</div>
	</div>
</main>
<footer />

<style>
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
		flex-direction: row;
		line-height: 1.5;
		background: #323742;
		font-family: 'Ubuntu Mono', monospace;
		color: whitesmoke;
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
	:global(#root, #__next) {
		isolation: isolate;
	}

	:global(strong) {
		color: #f6abb5;
	}
	:global(ul) {
		list-style: none;
		text-indent: -20px;
	}

	:global(li::before) {
		content: '✽ ';
		color: #afa186;
	}
	:global(.flex) {
		display: flex;
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
	:global(.main-container) {
		flex-wrap: wrap;
	}
	.bottom-right .content-container {
		padding: 4em 3em;
		border-radius: 50px;
		background: #3f4e69;
		width: 50em;
		height: 50em;
		gap: 2em;
	}
	.content-container {
		background: transparent;
		width: 50em;
		max-height: 50em;
		gap: 2em;
		/* for Firefox */
		min-height: 0;
		overflow: hidden;
		box-shadow: 1em 1em #f18e8e;
	}
	.scrollable-content {
		flex: 1;
		max-width: 50em;
		max-height: 50em;
		gap: 2em;
		overflow: auto;
		padding-right: 2em;

		/* for Firefox */
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
