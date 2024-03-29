type DeptData = {
	name: string;
	HOD: string;
	intake: number;
	duration: number;
	about: string;
	vision: string;
	mission: string[];
	teachingFaculty: string[];
	teachingFacultyQualifications: string[];
	nonTeachingFaculty: string[];
	academicToppers: object;
};

export const data: Record<string, DeptData> = {
	artificial_intelligence: {
		name: 'Artificial Intelligence & Machine Learning (AN)',
		HOD: 'Mrs. Raji MP',
		intake: 60,
		duration: 3,
		about:
			'Artificial Intelligence and Machine Learning is transforming the global technology market and creating numerous jobs in the industry. AI & ML Engineering is an engineering discipline that involves learning how machines can have the ability to solve problems by using some complex algorithms which a human brain solves using natural intelligence. This specialization will help in building intelligent machines through advanced software with machine learning, analytics and visualization. This programme lays an emphasis on understanding concepts of Computer programming, Algorithms in AI, Data Structure and Algorithms, Algorithms in ML, Deep Learning Techniques involving Artificial Neural Networks, Python Programming, Natural Language Processing etc. Some of the applications of AI & ML are in speech recognition, facial recognition, language translations, robotics, healthcare, banking, E-commerce etc. With an increase in popularity, the demand for AI and Machine Learning professionals has also increased. This specialization further offers the perfect chance for students to build a career in the most demanding profession of the world.',
		vision:
			'Produce competent diploma engineers in Artificial Intelligence and Machine Learning through quality education focussed on holistic development to contribute significantly towards the national growth.',
		mission: [
			'To develop skilled professionals in the field of Artificial Intelligence and Machine Learning by providing industry oriented quality education',
			'To inculcate human values and ethical principles to cater to the societal needs.',
			'To develop technical skills in-line with current industry trends through effective teaching and industry-institute interaction'
		],
		teachingFaculty: ['Mrs. Raji MP', 'Mr. Pranavkumar Bhadane', 'Mrs. Rashmi Dhake', 'Mrs. Ashwini Baviskar', 'Mrs. Ashwini Patil'],
		teachingFacultyQualifications: ['M.E Electrical', 'M.E Computer', 'M.E Computer', 'B.E Computer', 'B.E Computer'],
		nonTeachingFaculty: ['Mrs. Kiran', 'Mr. Sadiq'],
		academicToppers: []
	},
	electronics_and_computer_engineering: {
		name: 'Electronics & Computer Engineering (TE)',
		HOD: 'Mrs. Raji MP',
		intake: 60,
		duration: 3,
		about:
			'The rapid pace of technological change and the diversity of modern applications require a broad educational background and a lifelong commitment to learning new and specialised skills. ELECTRONICS & COMPUTER ENGINEERING programme combines the core elements of Electronics Engineering with those of Computer Science, the intellectual discipline underlying all aspects of software development',
		vision:
			'Be a premier Electronics and Computer Engineering Department creating competent diploma engineers, focusing on holistic development with Indian values and ethics',
		mission: [
			'To impart industry oriented quality education and training in the field of Electronics and Computer Engineering.',
			'To provide value based education and opportunities for holistic development.',
			'To inculcate awareness towards societal needs and environmental issues.'
		],
		teachingFaculty: [
			'Mrs. Raji MP',
			'Mrs. Jewel Samantha',
			'Mrs. Suhasini David Sekhar',
			'Mr. Umesh Mhapankar',
			'Mrs. Archana Wasule',
			'Ms. Sonali Sherigar',
			'Ms. Varsha Meshram',
			'Mr. Amol Suryavanshi'
		],
		teachingFacultyQualifications: [
			'M.E Electrical',
			'M.E Electronics',
			'M.Tech Electronics',
			'M.E Electronics',
			'M.E Electronics',
			'M.Tech Electronics',
			'M.Tech Electronics',
			'M.E Electronics'
		],
		nonTeachingFaculty: ['Mr. Vishwas Patil', 'Mr. Manoj Parthe', 'Mr. Kishor Barve', 'Mr. Avadhut Ghadge'],
		academicToppers: []
	},
	automobile_engineering: {
		name: 'Automobile Engineering (AE)',
		HOD: 'Mr. Nitin Kulkarni',
		intake: 60,
		duration: 3,
		about:
			'Automobile engineering is a branch of vehicle engineering, incorporating elements of mechanical, electrical, electronic, software and safety engineering as applied to the design, manufacture and operation of all types of vehicles and their respective engineering subsystems.',
		vision:
			'Be a progressive Automobile Engineering Department Creating Engineers with high caliber and ethics, contributing to the development of Nation.',
		mission: [
			'Impart technical knowledge and skills in the field of Automobile Engineering, focusing on latest trends in the industry.',
			'Establish and enhance interaction with industries for training, internship and entrepreneurial activities.',
			'Educate the students for effective communication, teamwork and leadership for their overall development.'
		],
		teachingFaculty: [
			'Mr. Nitin Kulkarni',
			'Mr. Dinesh Patil',
			'Ms. Sonal Kapadia',
			'Mr. Umesh Mhapankar',
			'Ms. Cige Louis',
			'Mr. Satish Eandole',
			'Mr. Syed Mohammed Arif',
			'Mr. Mahesh Vhanmane'
		],
		teachingFacultyQualifications: [
			'M.E Mechanical',
			'M.Tech Mechanical',
			'M.Tech Mechanical',
			'M.E Electronics',
			'B.E Production',
			'B.E Mechanical',
			'M.E',
			'B.E Automobile'
		],
		nonTeachingFaculty: ['Mr. Paresh Ranpura', 'Mr. Ganesh Rathod'],
		academicToppers: [
			{ name: 'KOTECHA PRATHAMESH', profilePicture: '', percentage: 90.38, semester: 'AE-6-I' },
			{ name: 'KOLI TANISH', profilePicture: '', percentage: 79.29, semester: 'AE-4-I' },
			{ name: 'PATIL VIRENDRA', profilePicture: '', percentage: 79.5, semester: 'AE-2-I' },
			{ name: 'SODHI RAJVEER SINGH', profilePicture: '', percentage: 87.68, semester: 'AE-6-I' },
			{ name: 'MEHTA SAHIL', profilePicture: '', percentage: 78.71, semester: 'AE-4-I' },
			{ name: 'POOJARI HARSHITH', profilePicture: '', percentage: 76, semester: 'AE-2-I' }
		]
	},
	civil_engineering: {
		name: 'Civil Engineering (CE)',
		HOD: 'Mr. Manvendra Sinha',
		intake: 60,
		duration: 3,
		about:
			'Civil Engineering is considered to be the oldest engineering discipline. It is believed to have commenced during 4000 BC in ancient Egypt and Mesopotamia when humans started to abandon the nomadic existence and make permanent settlements. It deals with the design, construction and maintenance of building, bridges, roads, canals, dams etc. Today with globalization there is an increased need for the development of infrastructure all over the world. Hence Civil Engineers are in great demand..',
		vision:
			'Be a premier department of Civil Engineering, producing ethically strong professional civil engineers to contribute in the development of the nation.',
		mission: [
			'Empower the students to become diploma civil engineers of high caliber.',
			'To provide sustained environment for learning, co-curricular and extra-curricular activities for overall personality development.',
			'To develop students with skills of employability, entrepreneurship potential and professional ethics.'
		],
		teachingFaculty: [
			'Mr. Manvendra Sinha',
			'Mr. Shashikant Sawant',
			'Ms. Nirmala Mascarenhas',
			'Ms. Amarpreet Kaur',
			'Ms. Seema Kshirsagar',
			'Ms. Papiya Bala',
			'Mr. Vishal Dalvi',
			'Mr. Lewis Anthony',
			'Ms. Ruchira Shinde'
		],
		teachingFacultyQualifications: [
			'M.Tech Construction Management',
			'M.Tech Environmental',
			'M.E Structural',
			'M.Tech Construction Management',
			'M.Tech Environmental',
			'M.E Environmental',
			'B.E Civil',
			'M.Tech Strucutual',
			'B.E Civil'
		],
		nonTeachingFaculty: ['Mr. Shrikant Shinde', 'Mr. Lahu Surve', 'Mr. Mahesh Suryavanshi'],
		academicToppers: [
			{ name: 'Raahil Patel', profilePicture: '', percentage: 90.84, semester: 'CE-6-I' },
			{ name: 'Akash Kaulage', profilePicture: '', percentage: 81.13, semester: 'CE-4-I' },
			{ name: 'Darsh Bhoir', profilePicture: '', percentage: 84.34, semester: 'AE-2-I' },
			{ name: 'Anamay Ghangale', profilePicture: '', percentage: 90.63, semester: 'CE-6-I' },
			{ name: 'Sartak Hande', profilePicture: '', percentage: 81.13, semester: 'CE-4-I' },
			{ name: 'Sahil Dalvi', profilePicture: '', percentage: 82.32, semester: 'CE-2-I' }
		]
	},
	mechanical_engineering: {
		name: 'Mechanical Engineering (ME)',
		HOD: 'Mrs. Beenu Johnkutty',
		intake: 120,
		duration: 3,
		about:
			'Mechanical Engineering is an engineering discipline that involves the application of principles of science for analysis, design, manufacturing, and maintenance of mechanical systems. Mechanical engineering is one of the oldest and broadest engineering disciplines. It requires a solid understanding of core concepts including mechanics, kinematics, thermodynamics, fluid mechanics, and energy. Mechanical engineers use the core principles as well as other knowledge in the field to design and analyze motor vehicles, aircraft, heating and cooling systems, watercraft, manufacturing plants, industrial equipment and machinery, robotics, medical devices and more. The educational objectives for Mechanical Engineering programme at Agnel Polytechnic are designed to produce competent engineers who are ready to contribute effectively to the advancement of mechanical engineering field and to accommodate the needs of the community.',
		vision:
			'Be a well-recognized Mechanical Engineering department producing a blend of responsible & technically competent engineers imbibed with human values',
		mission: [
			'Impart fundamentals of Mechanical Engineering and technical skills to serve the industry and the society',
			'Organize regular interactions with industry in order to provide exposure to emerging technologies for professional development.',
			'Provide opportunities to promote organizational and leadership skills through extra-curricular and co-curricular activities.'
		],
		teachingFaculty: [
			'Mrs. Beenu Johnkutty',
			'Mr. Yogesh Vishwakarma',
			'Ms. Pratima Kokate',
			'Mr. Uday Gudsoorkar',
			'Mr. Vivek Fegade',
			'Mr. Milind Shrirao',
			'Mr. Ganesh Gawande',
			'Ms. Madhuri Jadhav',
			'Mr. Chetan Baviskar',
			'Mr. Premkumar Joshi',
			'Mr. Momin Musheer Anwar',
			'Ms. Suvarchala M.'
		],
		teachingFacultyQualifications: [
			'M.Tech Machine Design',
			'M.E Automobile',
			'M.Tech Machine Design',
			'M.Tech Production',
			'M.E Manufacturing System',
			'M.Tech Production',
			'M.E CAD/CAM',
			'B.E Mechanical',
			'B.E Mechanical',
			'M.E Manufacturing System',
			'M.Tech Machine Design',
			'M.E Manufacturing System',
			'B.Tech Production'
		],
		nonTeachingFaculty: ['Mr. Mahesh Salunkhe', 'Mr. Avinash Jage', 'Mr. Shailesh Gawand', 'Mr. Mangesh Deshmukh'],
		academicToppers: [
			{ name: 'Siddik Shingare', profilePicture: '', percentage: 93.33, semester: 'ME-6-I' },
			{ name: 'Dvij Koli', profilePicture: '', percentage: 89.63, semester: 'ME-4-I' },
			{ name: 'Varad Yande', profilePicture: '', percentage: 84.0, semester: 'ME-2-I' },
			{ name: 'Mirdul Date', profilePicture: '', percentage: 91.22, semester: 'ME-6-I' },
			{ name: 'Naveen Thomas', profilePicture: '', percentage: 87.25, semester: 'ME-4-I' },
			{ name: 'Kishan Chaoudhari', profilePicture: '', percentage: 81.6, semester: 'ME-2-I' },
			{ name: 'Pundlik Shinde', profilePicture: '', percentage: 90.78, semester: 'ME-6-I' },
			{ name: 'Tanmay Ambulkar', profilePicture: '', percentage: 82.75, semester: 'ME-6-I' },
			{ name: 'Ganesh Jalvi', profilePicture: '', percentage: 81.47, semester: 'ME-6-I' }
		]
	}
};
