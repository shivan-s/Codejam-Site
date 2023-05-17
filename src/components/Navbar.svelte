<script lang="ts">
	import { page } from '$app/stores';
	type NavLink = {
		label: string;
		pathname: string;
	};

	const navLinks: NavLink[] = [
		{ label: 'Goal', pathname: '/goal' },
		{ label: 'Timeline', pathname: '/timeline' },
		{ label: 'Rules', pathname: '/rules' },
		{ label: 'Prizes', pathname: '/prizes' },
		{ label: 'Entries', pathname: '/entries' },
		{ label: 'Credits', pathname: '/credits' }
	];
</script>

<div class="main-container">
	<div class="icon top-right" />
	<div class="top-left">
		<div class="nav-container sp-bwtn flex col">
			{#each navLinks as { label, pathname }}
				<a
					href={pathname}
					class={$page.url.pathname === pathname ? 'nav-btn nav-btn-active' : 'nav-btn'}>{label}</a
				>
			{/each}
		</div>
	</div>
</div>

<style>
	.nav-container {
		padding: 3em 3em;
		gap: 3em;
	}
	.nav-btn {
		color: whitesmoke;
		background: #3f4e69;
		border-radius: 100px;
		font-size: 1.1em;
		width: 10em;
		height: 3em;
		text-decoration: none;
		text-align: center;
		line-height: 3em;
	}
	.nav-btn:hover {
		box-shadow: 0.25em 0.25em #f18e8e;
		filter: brightness(125%);
		transition: filter 0.3s;
		transition: box-shadow 0.4s;
		transition-timing-function: ease-in-out;
	}
	.nav-btn:active {
		background: #ab376c;
	}

	.nav-btn-active {
		box-shadow: 0.25em 0.25em #f18e8e;
	}
</style>
