<script lang="ts">
	import Staff from './Staff.svelte';
	let staff = [
		['Ms. Roopa Shetty', '	Hum', 'Overall Coordinator', '7039021128'],
		['Mr. Lewis Anthony', 'Civil', 'Member', '9004897775'],
		['Mrs. Suhasini David Sekhar', 'TE', 'Member', '9819321626'],
		['Mr. Nitin Kulkarni', 'ME', 'Member', '9969338603'],
		['Mr. Satish Eandole', 'AE', '	Member', '9834833416'],
		['Ms. Roopali Hedge', '', 'Counsellor', '9619325880']
	];
</script>

<div class="flex flex-col gap-8 mb-8">
	<h2 class="divider-heading lg:col-span-2">Students Mentoring and Grievance Cell</h2>
	<p class="max-w-7xl">
		Students Mentoring and Grievance Cell have been formed in order to solve the problems of the students and to motivate them to do well in Academic
		as well as extra/Co-curricular activities.
		<br />
		<br />
		The following are the members of this cell and students are requested to contact them in case of any difficulty/Suggestions.
	</p>
</div>
<div class="overflow-x-auto w-full">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Name of the staff</th>
				<th>Course</th>
				<th>Contact Number</th>
			</tr>
		</thead>

		<Staff data={staff} />
	</table>
</div>
