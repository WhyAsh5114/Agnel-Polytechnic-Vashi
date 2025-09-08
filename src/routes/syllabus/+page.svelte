<script>
	import FaFilePdf from 'svelte-icons/fa/FaFilePdf.svelte';
</script>

<div class="overflow-x-auto">
	<table class="table mx-auto border-b border-x">
		<thead>
			<tr>
				<th class="normal-case text-base">Branch</th>
				<th class="normal-case text-base">1st Semester</th>
				<th class="normal-case text-base">2nd Semester</th>
				<th class="normal-case text-base">3rd Semester</th>
				<th class="normal-case text-base">4th Semester</th>
				<th class="normal-case text-base">5th Semester</th>
				<th class="normal-case text-base">6th Semester</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Automobile Engineering (AE)</td>
				<td rowspan="5" class="border">
					<a href="https://econtent.msbte.edu.in/curriculum_search/" class="btn btn-ghost flex-nowrap gap-2 normal-case">
						<span class="w-6">
							<FaFilePdf />
						</span>
						Common for all K-scheme
					</a>
				</td>
				{#each ['AE-2K', 'AE-3K', 'AE-4K', 'AE-5K', 'AE-6K'] as item}
					<td class="border">
						<a href="https://econtent.msbte.edu.in/curriculum_search/" class="btn btn-ghost flex-nowrap gap-2">
							<span class="w-6">
								<FaFilePdf />
							</span>
							{item}
						</a>
					</td>
				{/each}
			</tr>
			<tr>
				<td>Civil Engineering (CE)</td>
				{#each ['CE-2K', 'CE-3K', 'CE-4K', 'CE-5K', 'CE-6K'] as item}
					<td class="border">
						<a href="https://econtent.msbte.edu.in/curriculum_search/" class="btn btn-ghost flex-nowrap gap-2">
							<span class="w-6">
								<FaFilePdf />
							</span>
							{item}
						</a>
					</td>
				{/each}
			</tr>
			<tr>
				<td>Artificial Intelligence & Machine Learning (AN)</td>
				{#each ['AN-2K', 'AN-3K', 'AN-4K', 'AN-5K', 'AN-6K'] as item}
					<td class="border">
						<a href="https://econtent.msbte.edu.in/curriculum_search/" class="btn btn-ghost flex-nowrap gap-2">
							<span class="w-6">
								<FaFilePdf />
							</span>
							{item}
						</a>
					</td>
				{/each}
			</tr>
			<tr>
				<td>Electronics & Computer Engineering (TE)</td>
				<td class="border">
					<a href="https://econtent.msbte.edu.in/curriculum_search/" class="btn btn-ghost flex-nowrap gap-2">
						<span class="w-6">
							<FaFilePdf />
						</span>
						TE-2K
					</a>
				</td>
				{#each ['TE-3K', 'TE-4K', 'TE-5K', 'TE-6K'] as item}
					<td class="border">
						<a href="https://econtent.msbte.edu.in/curriculum_search/" class="btn btn-ghost flex-nowrap gap-2">
							<span class="w-6">
								<FaFilePdf />
							</span>
							{item}
						</a>
					</td>
				{/each}
			</tr>

			<tr>
				<td>Mechanical Engineering (ME)</td>
				{#each ['ME-2K', 'ME-3K', 'ME-4K', 'ME-5K', 'ME-6K'] as item}
					<td class="border">
						<a href="https://econtent.msbte.edu.in/curriculum_search/" class="btn btn-ghost flex-nowrap gap-2">
							<span class="w-6">
								<FaFilePdf />
							</span>
							{item}
						</a>
					</td>
				{/each}
			</tr>
		</tbody>
	</table>
</div>
