import { NextResponse } from "next/server";

export async function GET() {
  console.log("Fetching GitHub projects...");

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    console.error("GitHub token is missing!");
    return NextResponse.json({ error: "GitHub token is missing" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.github.com/user/repos?visibility=all", {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("GitHub API Error:", errorData);
      return NextResponse.json({ error: errorData.message }, { status: res.status });
    }

    const repos = await res.json();
    const repoImageData = await Promise.all(
      repos.map(async (repo: any) => {
        const { id, name, html_url, description, private: isPrivate, owner, default_branch } = repo;

        // Check for images folder in each repo
        const folderRes = await fetch(
          `https://api.github.com/repos/${owner.login}/${name}/contents/images?ref=${default_branch}`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        let images: string[] = [];
        if (folderRes.ok) {
          const files = await folderRes.json();
          images = files
            .filter((file: any) => file.type === "file" && file.name.match(/\.(png|jpe?g|gif|svg)$/i))
            .map((file: any) => file.download_url);
        }

        // Check for deskripsi.txt in each repo
        let repoDescription = "";
        const descRes = await fetch(
          `https://api.github.com/repos/${owner.login}/${name}/contents/deskripsi.txt?ref=${default_branch}`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (descRes.ok) {
          const descFile = await descRes.json();
          const descContent = await fetch(descFile.download_url);
          repoDescription = await descContent.text();
        }

        return {
          id,
          name,
          html_url,
          private: isPrivate,
          images,
          description: repoDescription || description, // Gunakan deskripsi dari file atau deskripsi default
        };
      })
    );

    console.log("Fetched Projects:", repoImageData);
    return NextResponse.json(repoImageData);
  } catch (error) {
    console.error("Error fetching images from GitHub repos:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}