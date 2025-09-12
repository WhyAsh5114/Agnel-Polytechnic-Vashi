<script lang="ts">
	import '../app.postcss';
	import FaPhoneAlt from 'svelte-icons/fa/FaPhoneAlt.svelte';
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
	import Footer from './Footer.svelte';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	let details1: HTMLDetailsElement;
	let details2: HTMLDetailsElement;
	function closeDetailsTag(num: number) {
		if (num === 1) {
			details1.open = false;
		} else if (num === 2) {
			details2.open = false;
		}
	}

	let menuElement: HTMLDetailsElement;
	onMount(() => {
		document.addEventListener('click', (event) => {
			const withinBoundaries = event.composedPath().includes(menuElement);

			if (!withinBoundaries) {
				menuElement.open = false;
			}
		});
	});

	function closeMenu() {
		menuElement.open = false;
		details1.open = false;
		details2.open = false;
	}
</script>

<nav class="navbar fixed bg-primary border-b-2 border-black shadow-lg z-50 left-0 right-0">
	<div class="navbar-start">
		<details class="dropdown" bind:this={menuElement}>
			<summary class="btn btn-sm 2xl:hidden btn-ghost"> <IoMdMenu /> </summary>
			<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 border border-accent font-semibold">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li on:click={closeMenu}><a href="/">HOME</a></li>
				<li>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<details
						class="dropdown"
						on:click={() => {
							closeDetailsTag(2);
						}}
						bind:this={details1}
					>
						<summary>ABOUT US</summary>
						<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit border border-accent" on:click={closeMenu}>
							<li><a href="/about_us/vision_and_mission">Vision and mission</a></li>
							<li><a href="/about_us/staff_details">Staff details</a></li>
							<li><a href="/about_us/anti_ragging">Anti ragging</a></li>
							<li><a href="/about_us/ladies_grievance">Ladies grievance</a></li>
							<li><a href="/about_us/prevention_of_sexual_harassment">Prevention of sexual harassment</a></li>
							<li><a href="/about_us/students_mentoring">Students mentoring</a></li>
							<li><a href="/about_us/institution_innovation_council">Institution innovation council</a></li>
							
						</ul>
					</details>
				</li>
				<li>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<details
						class="dropdown"
						on:click={() => {
							closeDetailsTag(1);
						}}
						bind:this={details2}
					>
						<summary>COURSES</summary>
						<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit border border-accent" on:click={closeMenu}>
							<li><a href="/courses/artificial_intelligence">Artificial Intelligence</a></li>
							<li><a href="/courses/electronics_and_computer_engineering">Electronics & Computer Engineering</a></li>
							<li><a href="/courses/civil_engineering">Civil Engineering</a></li>
							<li><a href="/courses/automobile_engineering">Automobile Engineering</a></li>
							<li><a href="/courses/mechanical_engineering">Mechanical Engineering</a></li>
						</ul>
					</details>
				</li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li on:click={closeMenu}><a href="/gallery/Facilities">GALLERY</a></li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li on:click={closeMenu}><a href="/admissions">ADMISSIONS</a></li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li on:click={closeMenu}><a href="/syllabus">SYLLABUS</a></li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li on:click={closeMenu}><a href="/contact_us">CONTACT US</a></li>
			</ul>
		</details>
		<a class="btn btn-ghost normal-case text-xl gap-2" href="/">
			<img src="/apv_logo.webp" alt="Logo" class="w-12" />
			<h1 class="text-left 2xl:hidden">APV</h1>
			<h1 class="text-left hidden 2xl:block">Agnel Polytechnic, Vashi</h1>
		</a>
	</div>

	<div class="navbar-center hidden 2xl:flex">
  <ul class="menu menu-horizontal px-1 font-semibold">
    <li><a href="/">HOME</a></li>

      <!-- ABOUT US with sub-menu -->
    <li class="dropdown dropdown-hover">
      <button tabindex="0">ABOUT US</button>
      <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border-accent border-2">
        <li><a href="/about_us/vision_and_mission">Vision and mission</a></li>
        <li><a href="/about_us/staff_details">Staff details</a></li>
        <li><a href="/about_us/anti_ragging">Anti ragging</a></li>
        <li><a href="/about_us/ladies_grievance">Ladies grievance</a></li>
        <li><a href="/about_us/prevention_of_sexual_harassment">Prevention of sexual harassment</a></li>
        <li><a href="/about_us/students_mentoring">Students mentoring</a></li>
        <li><a href="/about_us/institution_innovation_council">Institution innovation council</a></li>

        <!-- 🔽 Audit Statement with nested dropdown -->
        <li class="dropdown dropdown-hover">
          <button tabindex="0">Audit Statement</button>
          <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border-accent border-2">
            <li><a href="/pdfs/ARP 23-24.pdf" download>Audit 2024</a></li>
            <li><a href="/pdfs/ARP 22-23.pdf" download>Audit 2023</a></li>
            <li><a href="/pdfs/ARP 21-22.pdf" download>Audit 2022</a></li>
          </ul>
        </li>
      </ul>
    </li>
 <!-- 🔽 Audit Statement with nested dropdown -->
        <li class="dropdown dropdown-hover">
          <button tabindex="0">Key Highlights & Regulationst</button>
          <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border-accent border-2">
            <li><a href="/pdfs/ARP 23-24.pdf" download>Key Highlights & Regulations</a></li>
          </ul>
        </li>
      </ul>
   
	
         

    <!-- COURSES Dropdown -->
    <li class="dropdown dropdown-hover">
      <button tabindex="0">COURSES</button>
      <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border-accent border-2">
        <li><a href="/courses/artificial_intelligence">Artificial Intelligence</a></li>
        <li><a href="/courses/electronics_and_computer_engineering">Electronics & Computer Engineering</a></li>
        <li><a href="/courses/civil_engineering">Civil Engineering</a></li>
        <li><a href="/courses/automobile_engineering">Automobile Engineering</a></li>
        <li><a href="/courses/mechanical_engineering">Mechanical Engineering</a></li>
      </ul>
    </li>

    <!-- Other Top Level -->
    <li><a href="/gallery/Facilities">GALLERY</a></li>
    <li><a href="/admissions">ADMISSIONS</a></li>
    <li><a href="/syllabus">SYLLABUS</a></li>
    <li><a href="/contact_us">CONTACT US</a></li>
  </ul>
</div>

	<div class="navbar-end gap-3">
		<a class="btn rounded-sm btn-secondary items-center hidden md:inline-flex" href="https://connect.apv.ac.in"> Connect </a>
		<a class="btn gap-3 rounded-sm btn-secondary" href="https://forms.gle/Smb5PLM4RYer4G7o9"> Admission enquiry </a>
	</div>
</nav>
<div class="absolute w-full overflow-x-hidden">
	<main class="w-full mt-24">
		<slot />
	</main>
	<Footer />
</div>
