interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  created_at: string
  updated_at: string
  language: string | null
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`
  )
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories')
  }

  const repos = await response.json()
  return repos.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    homepage: repo.homepage,
    topics: repo.topics,
    created_at: repo.created_at,
    updated_at: repo.updated_at,
    language: repo.language
  }))
}
