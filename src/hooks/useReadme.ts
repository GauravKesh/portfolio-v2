import { useState, useEffect } from "react";

export type ReadmeStatus = "idle" | "loading" | "success" | "error";

export interface UseReadmeResult {
  content: string | null;
  status: ReadmeStatus;
  error: string | null;
}

/**
 * Converts common GitHub URL formats into raw README candidates.
 * Supports:
 *   - https://github.com/user/repo/blob/main/README.md → raw
 *   - https://github.com/user/repo/README.md          → raw README variants
 *   - https://github.com/user/repo                    → repo README variants on main/master
 *   - https://raw.githubusercontent.com/...           → passthrough
 */
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
    return [
      `${rawBase}/${path}`,
      `${rawBase}/README.md`,
      `${rawBase}/readme.md`,
      `${rawBase}/README`,
      `${rawBase}/readme`,
    ];
  }

  const readmeMatch = url.match(
    /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/(README(?:\.md)?|readme(?:\.md)?)\/?$/i
  );
  if (readmeMatch) {
    const [, user, repo, file] = readmeMatch;
    const lowerFile = file.toLowerCase();
    return [
      `https://raw.githubusercontent.com/${user}/${repo}/main/${file}`,
      `https://raw.githubusercontent.com/${user}/${repo}/master/${file}`,
      `https://raw.githubusercontent.com/${user}/${repo}/main/${lowerFile}`,
      `https://raw.githubusercontent.com/${user}/${repo}/master/${lowerFile}`,
      `https://raw.githubusercontent.com/${user}/${repo}/main/README.md`,
      `https://raw.githubusercontent.com/${user}/${repo}/master/README.md`,
      `https://raw.githubusercontent.com/${user}/${repo}/main/readme.md`,
      `https://raw.githubusercontent.com/${user}/${repo}/master/readme.md`,
    ];
  }

  const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/i);
  if (match) {
    const [, user, repo] = match;
    return [
      `https://raw.githubusercontent.com/${user}/${repo}/main/README.md`,
      `https://raw.githubusercontent.com/${user}/${repo}/main/readme.md`,
      `https://raw.githubusercontent.com/${user}/${repo}/master/README.md`,
      `https://raw.githubusercontent.com/${user}/${repo}/master/readme.md`,
      `https://raw.githubusercontent.com/${user}/${repo}/main/README`,
      `https://raw.githubusercontent.com/${user}/${repo}/main/readme`,
      `https://raw.githubusercontent.com/${user}/${repo}/master/README`,
      `https://raw.githubusercontent.com/${user}/${repo}/master/readme`,
    ];
  }

  return [url];
}

function normalizeReadmeContent(rawText: string): string {
  const trimmed = rawText.replace(/\r\n/g, "\n").trim();

  if (!trimmed.startsWith("<")) {
    return trimmed;
  }

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(trimmed, "text/html");
    const pre = doc.querySelector("pre");

    if (pre?.textContent) {
      return pre.textContent.replace(/\r\n/g, "\n").trim();
    }

    const bodyText = doc.body?.textContent?.trim();
    if (bodyText) {
      return bodyText;
    }
  } catch {
    return trimmed;
  }

  return trimmed;
}

export function useReadme(docUrl: string | undefined): UseReadmeResult {
  const [content, setContent] = useState<string | null>(null);
  const [status, setStatus] = useState<ReadmeStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!docUrl) {
      setStatus("idle");
      setContent(null);
      setError(null);
      return;
    }

    let cancelled = false;

    const fetchDoc = async () => {
      setStatus("loading");
      setContent(null);
      setError(null);

      try {
        const candidates = toRawGithubUrls(docUrl);

        let lastError: Error | null = null;
        for (const rawUrl of candidates) {
          const res = await fetch(rawUrl);
          if (res.ok) {
            const text = normalizeReadmeContent(await res.text());
            if (!cancelled) {
              setContent(text);
              setStatus("success");
            }
            return;
          }

          lastError = new Error(`Failed to fetch (${res.status}): ${res.statusText}`);
        }

        throw lastError ?? new Error("Failed to fetch README");
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
          setStatus("error");
        }
      }
    };

    fetchDoc();
    return () => { cancelled = true; };
  }, [docUrl]);

  return { content, status, error };
}