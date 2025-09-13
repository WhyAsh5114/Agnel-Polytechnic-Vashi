<script>
	import Staff from './Staff.svelte';
	let staff = [
		['Ms. Saly Antony', 'Principal'],
		['Mrs. Raji MP', 'President'],
		['Ms. Sonali Sherigar', 'Vice President'],
		['Mr. Mohd Janisar', 'Convener'],
		['Mr. Satish Eandole', 'Member']
	];

	let students = [
		['Mr. Anshul Harish Vethekar ', 'AN5I'],
		['Ms. Ojaswini Oak ', 'AN3K'],
		['Ms. Anoushka Bhaskarwar', 'TE3k'],
		['Mr. Shreeyash Babaji Patil', 'TE3k'],
		['Mr. Sarthak Mahesh Bankarl', 'ME'],
		['Mr. Atharva Parmeshwar Sawalkar', 'CE']
	];
</script>

<div class="flex flex-col gap-4 mb-8 px-2">
	<h2 class="divider-heading lg:col-span-2">Institution’s Innovation Council (IIC)</h2>
	<div class="card lg:card-side bg-base-100 shadow-xl max-w-7xl mx-auto mb-8 p-8">
		<figure class="basis-1/3 shrink-0"><img src="/icc_image.webp" alt="IIC logo" width="800" /></figure>
		<div class="card-body">
			<p>
				Established Institution’s Innovation Council under ‘MHRD’s Innovation Cell (MIC) to systematically foster the culture of Innovation amongst
				students.
				<br />
				<br />
				The IIC promotes innovation in the Institution through multitudinous modes leading to an innovation promotion eco-system in the campus. Last year
				for the National Innovation Contest a total of 947 PoCs were submitted by IICs all over India including IITs, NITs, Engg Colleges, etc. We are
				glad to announce that the PoC submitted by our students “Early detection of cancer with non-invasive technique” from the Electronics Department
				under the guidance of Mr. Umesh Mhapankar got selected for the National Boot Camp and ours was the only Polytechnic in the selected list.
			</p>
		</div>
	</div>
	<h2 class="lg:col-span-2 divider-heading">IIC committee</h2>
</div>
<div class="overflow-x-auto w-full">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Name of the staff</th>
				<th>Designation</th>
			</tr>
		</thead>

		<Staff data={staff} />
		
		<div class="overflow-x-auto w-full">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Name of the student Co-ordinator</th>
				<th>Department</th>
			</tr>
		</thead>
		<Staff data={students} />
	</table>
</div>
