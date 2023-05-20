<script lang="ts">
	import { title } from '$lib/stores';
</script>

<div class="content-container flex col">
	<div class="scrollable-content flex col">
		<main>
			<h1>{$title}</h1>
			<slot />
		</main>
	</div>
</div>

<style>
	.content-container {
		padding: 1.5em 1em;
		margin: 1.25em;
		width: 95vw;
		height: 85vh;
		border-radius: 1em;
		box-shadow: 0.5em 0.5em var(--accent-color);
		background: var(--tertiary-color);
	}
	.scrollable-content {
		flex: 1;
		overflow: auto;
		padding-right: 2em;
	}
	@media only screen and (min-width: 768px) {
		.content-container {
			padding: 4em 3em;
			width: 50em;
			height: 50em;
			box-shadow: 0.75em 0.75em var(--accent-color);
			gap: 2em;
		}
		.scrollable-content {
			max-width: 50em;
			max-height: 50em;
			gap: 2em;
			/* for Firefox */
		}
	}
</style>
