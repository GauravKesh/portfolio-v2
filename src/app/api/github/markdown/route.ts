import { NextResponse } from "next/server";

type MarkdownRequestBody = {
  text?: string;
  mode?: "gfm" | "markdown";
};

export async function POST(req: Request) {
  let body: MarkdownRequestBody | null = null;

  try {
    body = (await req.json()) as MarkdownRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body?.text || typeof body.text !== "string") {
    return NextResponse.json({ error: "Missing markdown text" }, { status: 400 });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "Missing GitHub token" }, { status: 500 });
  }

  const ghRes = await fetch("https://api.github.com/markdown", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
    body: JSON.stringify({ text: body.text, mode: body.mode ?? "gfm" }),
  });

  if (!ghRes.ok) {
    const details = await ghRes.text();
    return NextResponse.json(
      { error: `GitHub API error: ${ghRes.status}`, details },
      { status: ghRes.status }
    );
  }

  const html = await ghRes.text();
  return new NextResponse(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
