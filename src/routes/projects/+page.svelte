<script>
    import { onMount } from 'svelte';
    import { fetchRepositories } from '$lib/api/github.js';

    let repositories = []; // Initialize repositories as an empty array

    onMount(async () => {
        repositories = await fetchRepositories('your_github_username');
    });
</script>

<!-- Render repositories -->
<h1>Recent Projects</h1>
{#if repositories.length > 0}
    {#each repositories as repo}
        <div >
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <p class="link"><a href={repo.html_url}>View on GitHub</a></p>
        </div>
    {/each}
{:else}
    <p>No repositories found.</p>
{/if}


<style>
    div {
        background-color: var(--color-theme-2);
        text-align: center;
        margin: 1rem 0 1rem 0;
        color: var(--color-text-2);
        border-radius: var(--card-border-radius);
    }


</style>