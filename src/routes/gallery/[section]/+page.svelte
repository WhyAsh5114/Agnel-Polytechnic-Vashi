<script lang="ts">
	import { page } from '$app/stores';
	export let data;
</script>

<ul class="flex flex-wrap mt-10 gap-0.5">
	{#each data.items[$page.params['section']] as imgName}
		<li style="height: 60vh;" class="grow">
			<img src="/gallery/{$page.params['section']}/{imgName}" alt={imgName} class="max-h-full min-w-full object-cover align-bottom" />
		</li>
	{/each}
	<li />
</ul>

<style>
	li:last-child {
		flex-grow: 10;
	}
</style>
