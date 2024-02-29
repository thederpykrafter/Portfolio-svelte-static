
export async function fetchRepositories() {
  const username = 'thederpykrafter';
  const pages = 100;
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=${pages}`);
  const data = await response.json();
  const repos = data.filter(repo => repo.name !== 'thederpykrafter');
  return repos;
}