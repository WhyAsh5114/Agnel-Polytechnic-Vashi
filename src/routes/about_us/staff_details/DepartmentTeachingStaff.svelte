<script lang="ts">
	export let data: (string | string[])[][];
	export let tableHeading: string;
</script>

<thead>
	<tr>
		<th colspan="6">{tableHeading}</th>
	</tr>
</thead>
<tbody>
	{#each data as member}
		<tr>
			<td>
				<div class="flex items-center space-x-3">
					<div class="avatar">
						<div class="mask mask-squircle w-12 h-12">
							<img src="/staff/{member[0]}.webp" alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div class="font-bold">{member[0]}</div>
				</div>
			</td>
			<td> 
				{member[1]}
				<br />
				<div class="flex flex-wrap gap-1">
					{#each member[2] as badge}
						<span class="badge badge-ghost badge-sm whitespace-nowrap">{badge}</span>
					{/each}
				</div>
			</td>
			<td class="capitalize">{member[3]}</td>
			<td>{member[4]}</td>
			<td>{member[5]}</td>
			<td>{member[6]}</td>
		</tr>
	{/each}
</tbody>
