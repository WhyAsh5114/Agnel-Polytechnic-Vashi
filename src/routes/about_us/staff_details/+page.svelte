<script lang="ts">
	import DepartmentTeachingStaff from './DepartmentTeachingStaff.svelte';

	let civil_engineering_teaching_staff = [
		['Mr. Manvendra Sinha', 'Head of Department', ['Masters in Technology', 'Construction Management'], '24/6/1995', '30 years'],
		['Mr. Shashikant Sawant', 'Lecturer', ['Masters in Technology', 'Environmental Engineering'], '25/11/2005', '20 years'],
		['Ms. Nirmala Mascarenhas', 'Lecturer', ['Masters in Technology', 'Structural Engineering'], '11/12/2006', '19 years'],
		['Ms. Amarpreet Kaur', 'Lecturer', ['Masters in Technology', 'Construction Management'], '01/08/2007', '17 years'],
		['Ms. Seema Kshirsagar', 'Lecturer', ['Masters in Technology', 'Environmental Engineering'], '05/01/2008', '16 years'],
		['Ms. Papiya Bala', 'Lecturer', ['Masters in Engineering', 'Environmental Engineering'], '17/6/2010', '20 years'],
		['Mr. Vishal Dalvi', 'Lecturer', ['Bachelors in Engineering', 'Civil'], '14/06/2012', '10 years'],
		['Mr. Lewis Anthony', 'Lecturer', ['Masters in Technology', 'Structural Engineering'], '10/12/2012', '19 years'],
		['Ms. Ruchira Shinde', 'Lecturer', ['Bachelors in Engineering', 'Civil'], '10/12/2012', '9 years']
	];

	let automobile_engineering_teaching_staff = [
		['Mr. Nitin Kulkarni', 'Head of Department', ['Masters in Engineering', 'Mechanical'], '10/07/2006', '24 years'],
		['Mr. Dinesh Patil', 'Lecturer', ['Masters in Technology', 'Mechanical'], '04/06/2007', '15 years'],
		['Ms. Sonal Kapadia', 'Lecturer', ['Masters in Technology', 'Mechanical'], '04/07/2008', '14 years'],
		['Ms. Cige Louis', 'Lecturer', ['Bachelors in Engineering', 'Production'], '03/01/2011', '11 years'],
		['Mr. Satish Eandole', 'Lecturer', ['Bachelors in Engineering', 'Mechanical'], '09/01/2012', '12 years'],
		['Mr. Syed Mohammed Arif', 'Lecturer', ['Masters in Engineering'], '03/07/2019', '9 years'],
		['Mr. Mahesh Vhanmane', 'Lecturer', ['Bachelors in Engineering', 'Automobile'], '05/07/2019', '8 years']
	];

	let electronics_telecommunication_teaching_staff = [
		['Mrs. Raji MP', 'Head of Department', ['Masters in Engineering', 'Electrical'], '06/06/1995', '25 years'],
		['Mrs. Jewel Samantha', 'Training and Placement Officer', ['Masters in Engineering', 'Electronics'], '07/01/1997', '23 years'],
		['Mrs. Suhasini David Sekhar', 'Lecturer', ['Masters in Technology', 'Electrical'], '06/01/1998', '22 years'],
		['Mr. Umesh Mhapankar', 'Lecturer', ['Masters in Engineering', 'Electronics'], '12/01/2003', '17 years'],
		['Mrs. Archana Wasule', 'Lecturer', ['Masters in Engineering', 'Electronics'], '14/12/2004', '16 years'],
		['Ms. Sonali Sherigar', 'Lecturer', ['Masters in Technology', 'Electronics'], '07/02/2007', '20 years'],
		['Ms. Varsha Meshram', 'Lecturer', ['Masters in Technology', 'Electronics'], '14/06/2010', '12 years'],
		['Mr. Amol Suryavanshi', 'Lecturer', ['Masters in Engineering', 'Electronics'], '18/08/2011', '9 years']
	];

	let mechanical_engineering_teaching_staff = [
		['Mrs. Beenu Johnkutty', 'Head of Department', ['Masters in Technology', 'Machine Design'], '17/08/2006', '22 years'],
		['Mr. Yogesh Vishwakarma', 'Lecturer', ['Masters in Engineering', 'Automobile'], '07/02/2003', '19 years'],
		['Ms. Pratima Kokate', 'Lecturer', ['Masters in Technology', 'Machine Design'], '03/07/2007', '17 years'],
		['Mr. Ravindra Dhawale', 'Lecturer', ['Masters in Technology', 'Production'], '01/12/2007', '20 years'],
		['Mr. Uday Gudsoorkar', 'Workshop Support', ['Masters in Engineering', 'Manufacturing System'], '17/12/2007', '28 years'],
		['Ms. Suvarchala M.', 'Lecturer', ['Masters in Technology', 'Production'], '15/01/2008', '14 years'],
		['Mr. Vivek Fegade', 'Lecturer', ['Masters in Engineering', 'CAD', 'CAM'], '01/02/2009', '15 years'],
		['Mr. Milind Shrirao', 'Lecturer', ['Bachelors in Engineering', 'Mechanical'], '27/07/2009', '13 years'],
		['Mr. Ganesh Gawande', 'Lecturer', ['Bachelors in Engineering', 'Mechanical'], '15/12/2010', '12 years'],
		['Ms. Madhuri Jadhav', 'Lecturer', ['Masters in Engineering', 'Manufacturing System'], '16/06/2011', '11 years'],
		['Mr. Chetan Baviskar', 'Lecturer', ['Masters in Technology', 'Machine Design'], '20/06/2011', '11 years'],
		['Mr. Premkumar Joshi', 'Lecturer', ['Masters in Engineering', 'Manufacturing System'], '15/07/2013', '17 years'],
		['Mr. Momin Musheer Anwar', 'Lecturer', ['Bachelors in Technology', 'Production'], '19/09/2016', '13 years']
	];

	let humanities_department = [
		['Mr. Venugopal Kurup', 'Lecturer', ['Masters in Science', 'Bachelors in Education'], '09/01/1992', '28 years'],
		['Ms. Malini Pawnday', 'Lecturer', ['Masters in Science', 'Physics'], '16/07/1998', '22 years'],
		['Ms. Roopa Shetty', 'Lecturer', ['Masters in Arts', 'English'], '18/06/1996', '24 years'],
		['Mr. Upendra Rai', 'Lecturer', ['Masters in Science', 'Chemistry', 'Bachelors in Education'], '30/09/2003', '25 years'],
		['Ms. Shalvi Bahadur', 'Lecturer', ['Masters in Science', 'Maths', 'Masters in Philosophy'], '01/07/2008', '12 years'],
		['Ms. Deepti Kalantri', 'Lecturer', ['Masters in Science', 'Physics'], '14/07/2008', '12 years'],
		['Ms. Purnima M. Barhate', 'Lecturer', ['Masters in Science', 'Bachelors in Education', 'Masters in Philosophy'], '20/07/2011', '11 years'],
		['Ms. R.P. Snehalatha', 'Lecturer', ['Masters in Science', 'Bachelors in Education'], '06/04/2012', '8 years']
	];
</script>

<h3 class="divider-heading pb-12 pt-6 px-2">Staff details</h3>
<div class="overflow-x-auto w-full">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Name of the staff</th>
				<th>Designation</th>
				<th>Joining date</th>
				<th>Experience</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src="/staff/Ms. Saly Antony.webp" alt="Avatar Tailwind CSS Component" />
							</div>
						</div>
						<div class="font-bold">Ms. Saly Antony</div>
					</div>
				</td>
				<td>
					Principal
					<br />
					<span class="badge badge-ghost badge-sm">Masters in Engineering</span>
				</td>
				<td>29/03/1989</td>
				<td>31 years</td>
			</tr>
		</tbody>
		<DepartmentTeachingStaff tableHeading="Civil Engineering Department - Teaching Staff" data={civil_engineering_teaching_staff} />
		<DepartmentTeachingStaff tableHeading="Automobile Engineering Department - Teaching Staff" data={automobile_engineering_teaching_staff} />
		<DepartmentTeachingStaff
			tableHeading="Electronics Telecommunication Engineering Department - Teaching Staff"
			data={electronics_telecommunication_teaching_staff}
		/>
		<DepartmentTeachingStaff tableHeading="Mechanical Engineering Department - Teaching Staff" data={mechanical_engineering_teaching_staff} />
		<DepartmentTeachingStaff tableHeading="Humanities Department - Teaching Staff" data={humanities_department} />
	</table>
</div>
