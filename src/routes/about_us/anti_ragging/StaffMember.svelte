<script lang="ts">
	export let data: string[][];
</script>

<tbody>
	{#each data as member}
		<tr>
			<td>
				<div class="flex items-center space-x-3">
					<div class="avatar">
						<div class="mask mask-squircle w-12 h-12">
							<img src="/staff/{member[2]}.webp" alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div class="font-bold">{member[2]}</div>
				</div>
			</td>
			<td>
				{member[1]}
				<br />
				<span class="badge badge-ghost badge-sm whitespace-nowrap">{member[0]}</span>
			</td>
			<td>{member[3]}</td>
		</tr>
	{/each}
</tbody>
