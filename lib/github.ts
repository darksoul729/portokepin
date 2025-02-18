
export const fetchGitHubProjects = async () => {
  try {
    const res = await fetch("/api/github/projects");
    if (!res.ok) throw new Error("Failed to fetch GitHub projects");
    return res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
