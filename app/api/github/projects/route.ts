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
      throw new Error(`GitHub API error: ${errorData.message}`);
    }

    const data = await res.json();
    console.log("Fetched Projects:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
