<script>
	import StaffMember from './StaffMember.svelte';
	let staffs = [
		['Representative Of The Management', 'Principal', 'Ms. Saly Antony', '9757352380'],
		['Representative Of The Police Dept.', 'Sr. Police Inspector', 'Mr. Sanjay Dhumal', '27820468'],
		['Department Representative', 'HOD Mechanical Engg.', 'Mrs. Beenu Johnkutty', '9869441160'],
		['-Do-', 'HOD Civil Engg.', 'Mr. Manvendra Sinha', '9819763770'],
		['-Do-', 'HOD Electronics & Telecommunication', 'Mrs. Raji MP', '9867803820'],
		['-Do-', 'HOD Humanities', 'Mr. Venu Gopala Kurup', '9869353658'],
		['-Do-', 'I/c HOD Automobile Engg.', 'Mr. Nitin Kulkarni', '7021337916'],
		["Teachers' Representative", 'Lecturer', 'Mr. Lewis A.', '9004897775'],
		['Non-Reaching Representative', 'Registrar', 'Mrs. Swapnali Thottam', '9969895227'],
		["Parents' Representative (Gents)", 'Parent (ME3I)', 'Mr. Suday Yande', '9821855002'],
		["Parents' Representative (Ladies)", 'Parent (TE3I)', 'Dr. Kharade', '9594649029'],
		["Students' Representative", 'Student ( AE-5 )', 'Mr. Jayendra RavindraSankpal', '7400338773'],
		["Students' Representative", 'Student (ME-3)', 'Mr. Sangam Yadav', '9372607856'],
		["Students' Representative", 'Student (EJ-5)', 'Ms. Swarali Kharche', '9623164810'],
		["Students' Representative", 'Student (CE-3)', 'Mr. Ritesh Ambedkar', '9324321515']
	];

	let squad = [
		['Representative of Faculty', 'Lecturer', 'Mr. Satish Eandole', '9834833416'],
		['Local Media', 'DNA Paper Press Correspondent', 'Mr. Kishore Rathod', '9820003636'],
		['Parent Representative', 'Sr. Police Inspector', 'Mr. Dattatrey Shinde', '9821940300'],
		['Police Administrator', 'PSI of Vashi Police Station', 'As Per Availability', '27820468']
	];
</script>

<div class="flex flex-col gap-10 items-center justify-center">
	<h2 class="lg:col-span-2 divider-heading">Anti-Ragging</h2>
	<ul class="list-decimal ml-2 text-lg px-6 md:px-10 lg:px-16 xl:px-24">
		<li>
			As per Order of the Joint Director of Technical Education No 1/ROM/TE/088 DATED 28-5-1999, it is hereby informed that MAHARASHTRA PROHIBITION
			RAGGING ACT-1999 is in force.
		</li>
		<li>As per this Act, Ragging within or outside any educational institution is prohibited.</li>
		<li>
			Whosoever directly or indirectly commits, participates in, abets or propagates ragging within or outside any educational institution shall be
			punished with imprisonment for a term which may extend to two years and shall also be liable to a fine to the extent of ten thousand rupees.
		</li>
		<li>
			Any student convicted of an offense of ragging under section 4 shall be dismissed from the educational institution and such a student shall not
			be admitted in any other educational institution for a period of five years from the date of order of such dismissal.
		</li>
	</ul>
	<h2 class="text-3xl font-bold lg:col-span-2 lg:divider px-2">Anti Ragging Committee 2022-23 (ARC)</h2>
	<div class="overflow-x-auto w-full">
		<table class="table w-full">
			<thead>
				<tr>
					<th>Name of the staff</th>
					<th>Designation</th>
					<th>Contact Number</th>
				</tr>
			</thead>
			<StaffMember data={staffs} />
		</table>
	</div>
	<h2 class="text-3xl font-bold lg:col-span-2 lg:divider px-2">Anti Ragging Squad (ARS)</h2>
	<div class="overflow-x-auto w-full">
		<table class="table w-full">
			<thead>
				<tr>
					<th>Name of the staff</th>
					<th>Designation</th>
					<th>Contact Number</th>
				</tr>
			</thead>
			<StaffMember data={squad} />
		</table>
	</div>
	<div class="flex btn-group btn-group-vertical lg:btn-group-horizontal gap-0.5">
		<a href="http://antiragging.in/" class="btn btn-secondary text-lg text-black border-none normal-case" target="_blank">Visit Anti-Ragging</a>
		<a href="https://www.amanmovement.org/" class="btn btn-secondary text-lg text-black border-none normal-case" target="_blank">Visit AmanMovement</a
		>
	</div>
</div>
