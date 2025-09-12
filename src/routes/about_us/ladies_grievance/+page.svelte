<script lang="ts">
	import Staff from './Staff.svelte';
	let staff = [
		['Mrs. Jewel Samantha', 'Chairman'],
		['Ms. Roopa Shetty', 'Member'],
		['Ms. Seema Kshirsagar', 'Member'],
		['Ms. Malini Pawnday', 'Member'],
		['Ms. Amarpreet Kaur', 'Member'],
		['Mr. Nitin Kulkarni', 'Member'],
		['Mr. Upendra Rai', 'Member'],
		['Mr. Rajan Walinjkar', 'Member'],
		['Ms. Saly Antony', '	Member']
	];
</script>

<div class="flex flex-col mb-8 gap-4 px-2">
	<h2 class="lg:col-span-2 divider-heading">Ladies Grievance Cell</h2>
	<p class="max-w-7xl">
		The Teaching and Non-Teaching Staff members of the polytechnic are hereby informed that as per the directives received from Joint Director,
		Technical Education, Regional Office, Maharashtra State, the following staff members have been nominated to the LADIES STAFF COMPLAINT REDRESSAL
		COMMITTEE with immediate effect.
	</p>
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
	</table>
	<p>
		The Member Secretary is hereby informed that on receipt of complaint from the staff, the same shall be discussed and necessary decision be taken
		in the committee and report be prepared which should be sent to the management for appropriate action.
	</p>
</div>
