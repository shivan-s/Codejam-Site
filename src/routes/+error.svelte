<script lang="ts">
	import { title } from '$lib/stores';
	import { page } from '$app/stores';
	title.set('Error');
</script>

<div>
	{#if $page?.error}
		{#if $page?.status}
			<h2>{$page?.status}</h2>
		{/if}
		{#if $page?.error?.message}
			<p>{$page?.error?.message}</p>
		{/if}
	{/if}
</div>
