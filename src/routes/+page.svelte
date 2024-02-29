<script>
	import tdklogo from '$lib/images/tdk-logo.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte portfolio app" />
</svelte:head>

<section>
	<h1>
		<span class="tdklogo">
				<img src={tdklogo} alt="tdklogo" />
		</span>

		<p>Welcome to my first<br />SvelteKit app</p>
	</h1>

	<h2>
		I made this on <a href="https://replit.com">replit </a><strong>on my phone!</strong>
	</h2>

	<p>
		You can check out the code below!
	</p>

	<iframe title="replit" src="https://replit.com/@JustinKulczyski/Portfolio-svelte-static?embed=true" width="105%" height="400"></iframe>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	iframe {
		border: 0;
	  background-color: var(--color-theme-2);
	}
</style>
