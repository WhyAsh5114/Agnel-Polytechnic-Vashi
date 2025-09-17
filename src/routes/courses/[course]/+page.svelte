<script lang="ts">
	export let data;
	$: deptData = data.deptData;

	import { page } from '$app/stores';

	function removeExtension(filename: string) {
		var lastDotPosition = filename.lastIndexOf('.');
		if (lastDotPosition === -1) return filename;
		else return filename.substring(0, lastDotPosition);
	}
</script>

<div class="flex flex-col gap-12">
	<!-- Department Name + HOD -->
	<section class="px-2">
		<h3 class="text-center text-4xl font-bold max-w-7xl mx-auto mb-4">{deptData.name}</h3>
		<div class="card lg:card-side shadow-xl bg-accent max-w-7xl mx-auto pt-2 lg:p-5 items-center justify-center">
			<div class="card card-compact w-96 shrink-0 grow-0 bg-base-100 shadow-xl rounded-none h-fit my-auto">
				<figure><img src="/courses/{$page.params.course}/HOD.webp" alt="HOD" /></figure>
				<h2 class="card-title p-2.5">{deptData.HOD}</h2>
			</div>
			<div class="card-body text-justify text-white">
				<p>{deptData.about}</p>
			</div>
		</div>
	</section>

	<!-- Vision and Mission -->
	<section class="flex justify-around items-center flex-col gap-6 px-2">
		<div class="grid lg:grid-cols-2 gap-x-8 gap-y-2 max-w-7xl">
			<h2 class="text-center text-4xl font-bold max-w-7xl mx-auto lg:col-span-2 mb-4">Vision and Mission</h2>
			<div class="card shadow-xl text-white bg-secondary">
				<div class="card-body">
					<h2 class="card-title mx-auto text-4xl font-bold">Vision</h2>
					<p class="text-lg text-justify">
						{deptData.vision}
					</p>
				</div>
			</div>
			<div class="card shadow-xl text-white bg-secondary">
				<div class="card-body">
					<h2 class="card-title mx-auto text-4xl font-bold">Mission</h2>
					<ul class="text-lg list-disc mx-auto pl-2">
						{#each deptData.mission as point}
							<li>{point}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<div class="stats shadow h-fit border-2 border-accent">
			<div class="stat">
				<div class="stat-title text-black font-semibold">Intake</div>
				<div class="stat-value font-bold">{deptData.intake} students</div>
			</div>
			<div class="stat">
				<div class="stat-title text-black font-semibold">Duration</div>
				<div class="stat-value font-bold">{deptData.duration} years</div>
			</div>
		</div>
	</section>

	<!-- Teaching Faculty -->
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Teaching Faculty</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center mb-16">
			{#each deptData.teachingFaculty as name, index}
				<div class="card card-compact w-64 shadow-xl">
					<figure><img src="/staff/{name}.webp" alt="{name} picture" class="aspect-square" /></figure>
					<div class="card-body">
						<h2 class="card-title">{name}</h2>
						<p>{deptData.teachingFacultyQualifications[index]}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Non-Teaching Faculty -->
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Non-Teaching Faculty</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center items-end">
			{#each deptData.nonTeachingFaculty as name}
				<div class="card card-compact w-64 shadow-xl">
					<figure><img src="/staff/{name}.webp" alt={`${name} picture`} class="aspect-square" /></figure>
					<div class="card-body">
						<h2 class="card-title">{name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Dynamic Sections (excluding Toppers & Magazine) -->
	{#each Object.keys(data.items) as directory, i}
		{#if directory !== "Toppers" && directory !== "Magazine"}
			<section class="flex flex-col gap-6">
				<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">{directory}</h4>
				<div class="flex flex-wrap gap-5 mx-auto justify-center items-end">
					{#each data.items[directory] as item}
						<div class="card card-compact w-96 shadow-xl h-fit {i % 2 === 0 ? 'bg-accent text-white' : 'bg-secondary text-black'}">
							<figure>
								<img src={`/courses/${$page.params.course}/${directory}/${item}`} alt={`${item} picture`} />
							</figure>
							<div class="card-body">
								<h2 class="card-title text-base">{removeExtension(item)}</h2>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/if}
	{/each}

	<!-- Combined Section: Toppers + Magazine -->
	<section class="max-w-7xl mx-auto px-2">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			
			<!-- Toppers -->
			<div>
				<h4 class="text-center text-4xl font-bold mb-4">Toppers</h4>
				<div class="flex flex-wrap gap-5 justify-center items-end">
					{#if data.items['Toppers']}
						{#each data.items['Toppers'] as topper, idx}
							<div class="card card-compact w-64 shadow-xl h-fit {idx % 2 === 0 ? 'bg-accent text-white' : 'bg-secondary text-black'}">
								<figure>
									<img src={`/courses/${$page.params.course}/Toppers/${topper}`} alt={`${topper} picture`} />
								</figure>
								<div class="card-body">
									<h2 class="card-title text-base">{removeExtension(topper)}</h2>
								</div>
							</div>
						{/each}
					{/if}
				</div>
			</div>

			<!-- Magazine -->
			<div>
				<div class="flex flex-wrap gap-5 justify-center items-end">
					{#if data.items['Magazine'] && data.items['Magazine'].length > 0}
							<div>
								
								<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{#each data.items['Magazine'].filter(file => file.endsWith('.pdf')) as pdf}
									<div class="card card-compact w-full shadow-xl h-fit bg-secondary text-black">
									<a href={`/courses/${$page.params.course}/Magazine/${pdf}`} download>
										<figure>
										<img 
											src={`/courses/${$page.params.course}/Magazine/${removeExtension(pdf)}.webp`} 
											alt="Magazine Cover" 
										/>
										</figure>
										<div class="card-body">
										<h2 class="card-title text-base">{removeExtension(pdf)}</h2>
										<p class="text-sm text-blue-700">Click to download PDF</p>
										</div>
									</a>
									</div>
								{/each}
								</div>
							</div>
							{/if}
				</div>
			</div>

		</div>
	</section>
</div>
