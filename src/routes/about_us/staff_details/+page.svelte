<script lang="ts">
	import DepartmentTeachingStaff from './DepartmentTeachingStaff.svelte';

	let civil_engineering_teaching_staff = [
		['Mr. Manvendra Sinha', 'Head of Department', ['Masters in Technology', 'Construction Management'], '--','24/6/1995','0', '30 years'],
		['Mr. Shashikant Sawant', 'Lecturer', ['Masters in Technology', 'Environmental Engineering'], 'Regular','25/11/2005', '2.5','20 years'],
		['Ms. Nirmala Mascarenhas', 'Lecturer', ['Masters in Technology', 'Structural Engineering'],'Regular', '11/12/2006', '19 years'],
		['Ms. Amarpreet Kaur', 'Lecturer', ['Masters in Technology', 'Construction Management'],'Regular', '01/08/2007','0', '18 years'],
		['Ms. Seema Kshirsagar', 'Lecturer', ['Masters in Technology', 'Environmental Engineering'], 'Regular','05/01/2008','0', '20 years'],
		['Ms. Papiya Bala', 'Lecturer', ['Masters in Engineering', 'Environmental Engineering'],'Regular', '17/6/2010','0', '23 years'],
		['Mr. Vishal Dalvi', 'Lecturer', ['Bachelors in Engineering', 'Civil'], 'Regular','14/06/2012','0', '14 years'],
		['Mr. Lewis Anthony', 'Lecturer', ['Masters in Technology', 'Structural Engineering'],'Regular', '10/12/2012', '9','12 years']
		
	];

	let automobile_engineering_teaching_staff = [
		['Mr. Nitin Kulkarni', 'Head of Department', ['Masters in Engineering', 'Mechanical'],'--', '10/07/2006', '26 years'],
		['Mr. Dinesh Patil', 'Lecturer', ['Masters in Technology', 'Mechanical'], 'Regular','04/06/2007', '17 years'],
		['Ms. Cige Louis', 'Lecturer', ['Bachelors in Engineering', 'Production'], 'Regular','03/01/2011', '13 years'],
		['Mr. Satish Eandole', 'Lecturer', ['Bachelors in Engineering', 'Mechanical'],'Regular', '09/01/2012', '14 years'],
		['Mr. Mahesh Vhanmane', 'Lecturer', ['Bachelors in Engineering', 'Automobile'], 'AdHoc', '05/07/2019', '10 years'],
		['Ms. Ruchira Shinde', 'Lecturer', ['Bachelors in Engineering', 'Civil'],'Regular', '10/12/2012', '11 years']
	];

	let electronics_telecommunication_teaching_staff = [
		['Mrs. Raji MP', 'Head of Department', ['Masters in Engineering', 'Electrical'],'--', '06/06/1995', '30 years'],
		['Mrs. Jewel Samantha', 'Training and Placement Officer', ['M.Tech', 'Electronics'], 'Regular','07/01/1997', '28 years'],
		['Mrs. Suhasini David Sekhar', 'Lecturer', ['Masters in Technology', 'Electrical'], 'Regular','06/01/1998', '27 years'],
		['Mr. Umesh Mhapankar', 'Lecturer', ['Masters in Engineering', 'Electronics'],'Regular', '12/01/2003', '21 years'],
		['Mrs. Archana Wasule', 'Lecturer', ['M.Tech', 'Electronics'],'Regular', '14/12/2004', '21 years'],
		['Ms. Varsha Meshram', 'Lecturer', ['Masters in Technology', 'Electronics'],'Regular', '14/06/2010', '17 years'],
		['Mr. Amol Suryavanshi', 'Lecturer', ['Masters in Engineering', 'Electronics'],'Regular', '18/08/2011', '14 years'],
		['Mr. Mohd Janisar', 'Lecturer',['M.Tech  Computer Engineering (Pursuing)'],'AdHoc','02/07/2025','3 years']
	];

	let mechanical_engineering_teaching_staff = [
		['Mrs. Beenu Johnkutty', 'Head of Department', ['Masters in Technology', 'Machine Design'],'--', '17/08/2006', '25 years'],
		['Mr. Yogesh Vishwakarma', 'Lecturer', ['Masters in Engineering', 'Automobile'],'Regular', '07/02/2003', '21 years'],
		['Ms. Pratima Kokate', 'Lecturer', ['Masters in Technology', 'Machine Design'],'Regular', '03/07/2007', '19 years'],
		['Mr. Ravindra Dhawale', 'Lecturer', ['Masters in Technology', 'Production'], 'Regular','01/12/2007', '22 years'],
		['Ms. Suvarchala M.', 'Lecturer', ['Masters in Technology', 'Production'],'Regular', '15/01/2008', '16 years'],
		['Mr. Vivek Fegade', 'Lecturer', ['Masters in Engineering', 'CAD', 'CAM'],'Regular', '01/02/2009', '17 years'],
		['Mr. Milind Shrirao', 'Lecturer', ['Bachelors in Engineering', 'Mechanical'],'Regular', '27/07/2009', '15 years'],
		['Mr. Ganesh Gawande', 'Lecturer', ['Bachelors in Engineering', 'Mechanical'],'Regular', '15/12/2010', '14 years'],
		['Ms. Madhuri Jadhav', 'Lecturer', ['Masters in Engineering', 'Manufacturing System'],'Regular', '16/06/2011', '13 years'],
		['Mr. Chetan Baviskar', 'Lecturer', ['Masters in Technology', 'Machine Design'],'Regular', '20/06/2011', '13 years'],
		['Mr. Premkumar Joshi', 'Lecturer', ['Masters in Engineering', 'Manufacturing System'],'Regular', '15/07/2013', '19 years'],
		['Mr. Momin Musheer Anwar', 'Lecturer', ['Bachelors in Technology', 'Production'], 'Regular','19/09/2016', '15 years']
	];

	let Artificial_Intelligence_Machine_Learning_teaching_staff = [
		['Ms. Sonali Sherigar', 'Head of Department', ['Masters in Technology'], '--','24/6/1995', '32 years'],
		['Mr. Pranavkumar Bhadane', 'Lecturer', ['M.E Computer '],'Regular', '14/02/2022', '12 years'],
		['Mrs. Ashwini Baviskar', 'Lecturer', ['B.E IT'],'AdHoc', '01/02/2023',  '3 years'], 
		['Mrs. Samina Siddique', 'Lecturer', ['M.Tech Computer (Pursuing)'],'AdHoc', '01/09/2023', '11 years'],
		['Ms. Kirti Karande', 'Lecturer', ['M.E Computer (Pursuing)'],'AdHoc', '15/7/2024', '10 years'],
		['Ms. Namrata Thakur', 'Lecturer', ['M.E Computer (Pursuing)'],'AdHoc', '17/09/2025', '9 years'],
		['Ms. Monali Chandwadkar', 'Lecturer',[ 'B.E Computer'], 'AdHoc','03/03/2025', '8 years']
];



	let humanities_department = [
		['Mr. Venugopal Kurup', 'Lecturer', ['Masters in Science Maths', 'Bachelors in Education','PGDM'],'Regular', '09/01/1992', '30 years'],
		['Ms. Malini Pawnday', 'Lecturer', ['Masters in Science', 'Physics'],'Regular', '16/07/1998', '25 years'],
		['Ms. Roopa Shetty', 'Lecturer', ['Masters in Arts', 'English'],'Regular', '18/06/1996', '29 years'],
		['Mr. Upendra Rai', 'Lecturer', ['Masters in Science', 'Chemistry', 'Bachelors in Education'],'Regular', '30/09/2003', '27 years'],
		['Ms. Shalvi Bahadur', 'Lecturer', ['Masters in Science', 'Maths', 'Masters in Philosophy'],'Regular', '01/07/2008', '14 years'],
		['Ms. Deepti Kalantri', 'Lecturer', ['Masters in Science', 'Physics'],'Regular', '14/07/2008', '14 years'],
		['Ms. Purnima M. Barhate', 'Lecturer', ['Masters in Science', 'Bachelors in Education', 'Masters in Philosophy'],'Regular', '20/07/2011', '13 years'],
		['Ms. R.P. Snehalatha', 'Lecturer', ['Masters in Science', 'Bachelors in Education'],'Regular', '06/04/2012', '10 years'],
		['Ms. Susan Sabu Manimala', 'Lecturer', ['BE in EXTC, MA in English Literature'], 'AdHoc', '01/06/2024', '5 years']
	];
   

</script>

<h3 class="divider-heading pb-12 pt-6 px-2">Staff details</h3>
<div class="overflow-x-auto w-full">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Name of the staff</th>
				<th>Designation</th>
				<th>Appointment Type</th>
				<th>Joining date</th>
				<th>Industry Experience</th>
				<th>Teaching Experience</th>
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
				<td>--</td>
				<td>29/03/1989</td>
				<td>36 years</td>
			</tr>
		</tbody>
		<DepartmentTeachingStaff tableHeading="Civil Engineering Department - Teaching Staff" data={civil_engineering_teaching_staff} />
		<DepartmentTeachingStaff tableHeading="Automobile Engineering Department - Teaching Staff" data={automobile_engineering_teaching_staff} />
		<DepartmentTeachingStaff
			tableHeading="Electronics and Computer Engineering Engineering Department - Teaching Staff"
			data={electronics_telecommunication_teaching_staff}
		/>
		<DepartmentTeachingStaff tableHeading="Mechanical Engineering Department - Teaching Staff" data={mechanical_engineering_teaching_staff} />
		<DepartmentTeachingStaff tableHeading="Artificial Intelligence & Machine Learning Department - Teaching Staff" data={Artificial_Intelligence_Machine_Learning_teaching_staff} />
		<DepartmentTeachingStaff tableHeading="Humanities Department - Teaching Staff" data={humanities_department} />
	</table>
</div>
