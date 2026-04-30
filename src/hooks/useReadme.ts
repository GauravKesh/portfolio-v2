import { useState, useEffect } from "react";

export type ReadmeStatus = "idle" | "loading" | "success" | "error";

export interface UseReadmeResult {
  html: string | null;
  status: ReadmeStatus;
  error: string | null;
}

function toRawGithubUrls(url: string): string[] {
  if (url.startsWith("https://raw.githubusercontent.com")) {
    return [url];
  }

  const blobMatch = url.match(
    /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/i
  );
  if (blobMatch) {
    const [, user, repo, branch, path] = blobMatch;
    const rawBase = `https://raw.githubusercontent.com/${user}/${repo}/${branch}`;
    return [`${rawBase}/${path}`, `${rawBase}/README.md`, `${rawBase}/readme.md`];
  }

  const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/i);
  if (match) {
    const [, user, repo] = match;
    return [
      `https://raw.githubusercontent.com/${user}/${repo}/main/README.md`,
      `https://raw.githubusercontent.com/${user}/${repo}/main/readme.md`,
      `https://raw.githubusercontent.com/${user}/${repo}/master/README.md`,
      `https://raw.githubusercontent.com/${user}/${repo}/master/readme.md`,
    ];
  }

  return [url];
}

async function fetchRawMarkdown(docUrl: string): Promise<string> {
  const candidates = toRawGithubUrls(docUrl);
  for (const rawUrl of candidates) {
    const res = await fetch(rawUrl);
    if (res.ok) {
      return res.text();
    }
  }
  throw new Error("Could not fetch README from any candidate URL");
}

async function renderMarkdownViaGitHub(markdown: string): Promise<string> {
  const res = await fetch("https://api.github.com/markdown", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: markdown, mode: "gfm" }),
  });

  if (!res.ok) {
    // Fallback: if GitHub API rate-limits, return raw markdown signal
    throw new Error(`GitHub API error: ${res.status}`);
  }

  return res.text();
}

export function useReadme(docUrl: string | undefined): UseReadmeResult {
  const [html, setHtml] = useState<string | null>(null);
  const [status, setStatus] = useState<ReadmeStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!docUrl) {
      setStatus("idle");
      setHtml(null);
      setError(null);
      return;
    }

    let cancelled = false;

    const fetchDoc = async () => {
      setStatus("loading");
      setHtml(null);
      setError(null);

      try {
        const markdown = await fetchRawMarkdown(docUrl);
        const rendered = await renderMarkdownViaGitHub(markdown);

        if (!cancelled) {
          setHtml(rendered);
          setStatus("success");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
          setStatus("error");
        }
      }
    };

    fetchDoc();
    return () => {
      cancelled = true;
    };
  }, [docUrl]);

  return { html, status, error };
}