import { NextResponse } from "next/server";

export async function GET() {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  
  if (!GITHUB_TOKEN) {
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
      throw new Error(`GitHub API error: ${errorData.message}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
