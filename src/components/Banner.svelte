<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	let showNav = false;

	const handleClick = () => {
		showNav = !showNav;
	};

	const navLinks: { label: string; pathname: string }[] = [
		{ label: 'Goal', pathname: '/goal' },
		{ label: 'Timeline', pathname: '/timeline' },
		{ label: 'Rules', pathname: '/rules' },
		{ label: 'Prizes', pathname: '/prizes' },
		{ label: 'Entries', pathname: '/entries' },
		{ label: 'Credits', pathname: '/credits' }
	];
</script>

<div class="banner">
	<input on:click={handleClick} class="checkbox" type="checkbox" name="" />
	<div class="hamburger-lines">
		<span class="line line1" />
		<span class="line line2" />
		<span class="line line3" />
	</div>
	<a href="/" class="banner-top">TimeEnjoyed's</a>
	<a href="/" class="banner-bottom"> {'< codejam/ >'}</a>
</div>

{#if showNav}
	<nav class="nav-container" transition:slide>
		{#each navLinks as { label, pathname }}
			<a
				on:click={handleClick}
				href={pathname}
				class={$page.url.pathname === pathname ? 'nav-btn nav-btn-active' : 'nav-btn'}>{label}</a
			>
		{/each}
	</nav>
{/if}

<style>
	.nav-container {
		display: flex;
		flex-direction: column;
		position: absolute;
		justify-content: center;
		align-items: center;
		background: var(--primary-color);
		width: 100vw;
		height: calc(100vh - 3em);
		top: 3em;
		left: 0;
		gap: 2em;
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
	.banner {
		display: flex;
		gap: 1em;
		flex-direction: row;
		border-bottom: 1px solid whitesmoke;
		align-items: center;
	}

	.hamburger-lines {
		display: flex;
		height: 23px;
		width: 35px;
		margin-left: 1em;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.hamburger-lines .line {
		display: block;
		height: 4px;
		width: 100%;
		border-radius: 10px;
		background: whitesmoke;
	}

	.banner .checkbox {
		position: absolute;
		display: block;
		height: 4em;
		width: 4em;
		top: 0px;
		left: 0px;
		z-index: 5;
		opacity: 0;
		cursor: pointer;
	}

	.banner-top {
		font-size: 1.5em;
		font-family: 'Liu Jian Mao Cao', cursive;
		color: whitesmoke;
		text-decoration: none;
	}
	.banner-bottom {
		font-size: 1.75em;
		color: whitesmoke;
		text-decoration: none;
	}

	@media only screen and (min-width: 768px) {
		.hamburger-lines {
			display: none;
		}
		.banner {
			flex-direction: column;
			align-items: start;
			border: none;
		}
		.banner-top {
			font-size: 2em;
		}
		.banner-bottom {
			font-size: 4em;
		}
		.nav-container {
			display: none;
		}
	}
</style>
