<script>
	import Header from './Header.svelte';
	import './styles.css';
	import replit from '$lib/images/replit-logo.png';
	import github from '$lib/images/github.svg';
</script>



<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>@thederpykrafter</p>
		<div>
		<a href="https://replit.com/@JustinKulczyski/">
			<img src={replit} alt="Replit" />
		</a>
		
		<a href="https://github.com/thederpykrafter/ ">
			<img src={github} alt="GitHub" />
		</a>
		</div>
	</footer>
</div>



<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		background-color: rgb(255,255,255,100);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.75rem 0 0.75rem;
	}

	footer p {
		font-weight: bold;
	}

	a {
		display: flex;
		flex-direction: row;
		display: inline;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
</style>
