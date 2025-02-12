export const fetchGitHubProjects = async () => {
    const GITHUB_USERNAME = "darksoul729";
    const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Pastikan ini ada di .env.local
    
    if (!GITHUB_TOKEN) {
      console.error("GitHub token is missing.");
      return [];
    }
  
    try {
      const res = await fetch(`https://api.github.com/user/repos?visibility=all`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        console.error("GitHub API Error:", errorData);
        throw new Error(`Failed to fetch repositories: ${errorData.message}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error("Error fetching repositories:", error);
      return [];
    }
  };
  