<script>
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import FaPhoneAlt from 'svelte-icons/fa/FaPhoneAlt.svelte';
	import FaPaperPlane from 'svelte-icons/fa/FaPaperPlane.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
</script>

<footer class="footer p-10 bg-accent text-white mt-10">
	<div class="max-w-sm">
		<img src="/apv_logo.webp" alt="Father Agnel Logo" class="w-16" />
		<h1 class="font-semibold text-lg">Agnel Polytechnic, Vashi</h1>
		<h2 class="text-justify">
			What makes Agnel Polytechnic a unique institution in Mumbai is its discipline and culture and the dedication of the faculty imparting knowledge
			and expertise to the students in a cosmopolitan atmosphere
		</h2>
	</div>
	<div class="max-w-sm">
		<span class="footer-title opacity-100 underline underline-offset-4">Featured Links</span>
		<ul class="grid grid-cols-2 gap-1">
			<li><a class="link link-hover" href="/">&gt; Home</a></li>
			<li><a class="link link-hover" href="/admissions">&gt; Admission</a></li>
			<li><a class="link link-hover" href="/gallery/Facilities">&gt; Gallery</a></li>
			<li><a class="link link-hover" href="/about_us/vision_and_mission">&gt; Vision & Mission</a></li>
			<li><a class="link link-hover" href="/contact_us">&gt; Contact us</a></li>
			<li><a class="link link-hover" href="/about_us/anti_ragging">&gt; Anti-Ragging</a></li>
			<li><a class="link link-hover" href="https://msbte.org.in/">&gt; MSBTE Website</a></li>
			<li><a class="link link-hover" href="https://www.dtemaharashtra.gov.in/indexview.html">&gt; DTE Maharashtra</a></li>
		</ul>
	</div>
	<div class="max-w-sm">
		<span class="footer-title opacity-100 underline underline-offset-4">Information</span>
		<a
			class="link link-hover flex items-center gap-2"
			href="https://www.google.com/maps/place/Fr.+Agnel+Polytechnic/@19.0755441,72.9890864,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c135baaaaaab:0x931cf32f3e166f1f!8m2!3d19.075539!4d72.9912751!16s%2Fm%2F0bmhdtb"
		>
			<div class="basis-5 shrink-0">
				<FaPaperPlane />
			</div>
			Agnel Technical Education Complex, Sector 9A, Vashi, Navi Mumbai - 400703
		</a>
		<a class="link link-hover flex items-center gap-2" href="tel:02227661924">
			<div class="basis-5 shrink-0">
				<FaPhoneAlt />
			</div>
			022 2766 1924
		</a>
		<a class="link link-hover flex items-center gap-2" href="mailto:423agnel@gmail.com">
			<div class="basis-5 shrink-0">
				<FaEnvelope />
			</div>
			423agnel@gmail.com
		</a>
		<a class="link link-hover flex items-center gap-2" href="tel:02227660619">
			<div class="basis-5 shrink-0">
				<FaPhoneAlt />
			</div>
			022 2766 0619
		</a>
	</div>
	<div class="max-w-sm">
		<span class="footer-title opacity-100 underline underline-offset-4">Social</span>
		<div class="grid grid-flow-col grid-rows-2 gap-4">
			<a class="w-8 cursor-pointer" target="_blank" aria-label="Instagram" href="https://www.instagram.com/agnel_polytechnic_official/"
				><FaInstagram /></a
			>
			<a
				class="w-8 cursor-pointer"
				target="_blank"
				aria-label="Facebook"
				href="https://www.facebook.com/people/Father-Agnel-Polytechnic/100065276178779"><FaFacebook /></a
			>
			<a class="w-8 cursor-pointer" target="_blank" aria-label="LinkedIn" href="https://www.linkedin.com/company/father-agnel-polytechnic"
				><FaLinkedin /></a
			>
			<a class="w-8 cursor-pointer" target="_blank" aria-label="Twitter" href="https://twitter.com/fatheragnel"><FaTwitter /></a>
		</div>
	</div>
</footer>
