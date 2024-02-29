<script>
  import { onMount } from 'svelte';

  let repositories = [];

  onMount(async () => {
      repositories = await fetchRepositories();
  });
</script>

<!-- Render repositories -->
{#each repositories as repo}
  <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <a href={repo.html_url}>{repo.html_url}</a>
  </div>
{/each}