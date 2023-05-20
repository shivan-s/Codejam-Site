<script lang="ts">
	import { page } from '$app/stores';

	const navLinks: { label: string; pathname: string }[] = [
		{ label: 'Goal', pathname: '/goal' },
		{ label: 'Timeline', pathname: '/timeline' },
		{ label: 'Rules', pathname: '/rules' },
		{ label: 'Prizes', pathname: '/prizes' },
		{ label: 'Entries', pathname: '/entries' },
		{ label: 'Credits', pathname: '/credits' }
	];
</script>

<div class="nav-container sp-bwtn flex col">
	{#each navLinks as { label, pathname }}
		<a
			href={pathname}
			class={$page.url.pathname === pathname ? 'nav-btn nav-btn-active' : 'nav-btn'}>{label}</a
		>
	{/each}
</div>

<style>
	.nav-container {
		display: none;
		padding: 11em 3em 0em;
		gap: 3em;
	}
	.nav-btn {
		color: var(--text-color);
		background: var(--tertiary-color);
		border-radius: 100px;
		font-size: 1.1em;
		width: 10em;
		height: 3em;
		text-decoration: none;
		text-align: center;
		line-height: 3em;
	}
	.nav-btn:hover {
		box-shadow: 0.25em 0.25em var(--secondary-color);
		filter: brightness(125%);
		transition: filter 0.3s;
		transition: box-shadow 0.4s;
		transition-timing-function: ease-in-out;
	}
	.nav-btn:active {
		background: var(--secondary-color);
	}

	.nav-btn-active {
		box-shadow: 0.25em 0.25em var(--accent-color);
	}

	@media only screen and (min-width: 768px) {
		.nav-container {
			display: flex;
		}
	}
</style>
