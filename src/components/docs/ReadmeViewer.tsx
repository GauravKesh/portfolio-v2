"use client";

import { useReadme } from "@/hooks/useReadme";
import { Loader2, AlertCircle, FileText } from "lucide-react";
import { useEffect, useRef } from "react";

interface ReadmeViewerProps {
  docUrl: string;
}

// GitHub's markdown CSS injected once globally
const GITHUB_MARKDOWN_CSS = `
  .readme-github-body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
    color: #e6edf3;
  }

  .readme-github-body::before { display: table; content: "" }
  .readme-github-body::after { display: table; clear: both; content: "" }

  .readme-github-body > *:first-child { margin-top: 0 !important }
  .readme-github-body > *:last-child { margin-bottom: 0 !important }

  .readme-github-body a { color: #4493f8; text-decoration: none }
  .readme-github-body a:hover { text-decoration: underline }

  .readme-github-body h1,
  .readme-github-body h2,
  .readme-github-body h3,
  .readme-github-body h4,
  .readme-github-body h5,
  .readme-github-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    color: #e6edf3;
  }
  .readme-github-body h1 { font-size: 2em; padding-bottom: 0.3em; border-bottom: 1px solid #30363d }
  .readme-github-body h2 { font-size: 1.5em; padding-bottom: 0.3em; border-bottom: 1px solid #30363d }
  .readme-github-body h3 { font-size: 1.25em }
  .readme-github-body h4 { font-size: 1em }
  .readme-github-body h5 { font-size: 0.875em }
  .readme-github-body h6 { font-size: 0.85em; color: #848d97 }

  .readme-github-body p { margin-top: 0; margin-bottom: 16px }

  .readme-github-body blockquote {
    margin: 0 0 16px;
    padding: 0 1em;
    color: #848d97;
    border-left: 0.25em solid #3d444d;
  }

  .readme-github-body ul,
  .readme-github-body ol {
    margin-top: 0;
    margin-bottom: 16px;
    padding-left: 2em;
  }

  .readme-github-body li { margin-top: 0.25em }
  .readme-github-body li + li { margin-top: 0.25em }
  .readme-github-body li > p { margin-top: 16px }

  .readme-github-body dl { padding: 0 }
  .readme-github-body dl dt { padding: 0; margin-top: 16px; font-size: 1em; font-style: italic; font-weight: 600 }
  .readme-github-body dl dd { padding: 0 16px; margin-bottom: 16px }

  .readme-github-body table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
    margin-top: 0;
    margin-bottom: 16px;
  }
  .readme-github-body table th {
    font-weight: 600;
    padding: 6px 13px;
    border: 1px solid #3d444d;
    background-color: #161b22;
  }
  .readme-github-body table td {
    padding: 6px 13px;
    border: 1px solid #3d444d;
  }
  .readme-github-body table tr { background-color: #0d1117; border-top: 1px solid #3d444d }
  .readme-github-body table tr:nth-child(2n) { background-color: #161b22 }

  .readme-github-body img {
    max-width: 100%;
    box-sizing: border-box;
    border-radius: 6px;
  }

  .readme-github-body code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: #3d444d;
    border-radius: 6px;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace;
    color: #e6edf3;
  }

  .readme-github-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    color: #e6edf3;
    background-color: #161b22;
    border-radius: 6px;
    border: 1px solid #30363d;
    margin-top: 0;
    margin-bottom: 16px;
    word-wrap: normal;
  }

  .readme-github-body pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
    font-size: 100%;
    white-space: pre;
    color: inherit;
  }

  .readme-github-body hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #3d444d;
    border: 0;
    border-radius: 2px;
  }

  .readme-github-body details { display: block }
  .readme-github-body summary { display: list-item; cursor: pointer }

  .readme-github-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #e6edf3;
    vertical-align: middle;
    background-color: #161b22;
    border: solid 1px #3d444d;
    border-bottom-color: #3d444d;
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 #3d444d;
  }

  /* Task list checkboxes */
  .readme-github-body input[type="checkbox"] {
    margin: 0 0.2em 0.25em -1.4em;
    vertical-align: middle;
  }

  /* Anchor links */
  .readme-github-body .anchor { float: left; padding-right: 4px; margin-left: -20px; line-height: 1 }
  .readme-github-body .anchor:focus { outline: none }
`;

function injectGithubStyles() {
  const id = "github-readme-styles";
  if (!document.getElementById(id)) {
    const style = document.createElement("style");
    style.id = id;
    style.textContent = GITHUB_MARKDOWN_CSS;
    document.head.appendChild(style);
  }
}

export default function ReadmeViewer({ docUrl }: ReadmeViewerProps) {
  const { html, status, error } = useReadme(docUrl);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    injectGithubStyles();
  }, []);

  // Fix relative image URLs in rendered HTML
  useEffect(() => {
    if (!html || !containerRef.current) return;

    const repoBase = (() => {
      const m = docUrl.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)/i);
      if (!m) return null;
      return `https://raw.githubusercontent.com/${m[1]}/${m[2]}/main`;
    })();

    if (!repoBase) return;

    containerRef.current.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src");
      if (src && !src.startsWith("http") && !src.startsWith("data:")) {
        img.setAttribute("src", `${repoBase}/${src}`);
      }
    });

    // Open all links in new tab
    containerRef.current.querySelectorAll("a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href && !href.startsWith("#")) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noreferrer noopener");
      }
    });
  }, [html, docUrl]);

  if (status === "loading") {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-6 py-20 text-muted-foreground shadow-sm">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        <p className="text-sm font-medium">Fetching documentation…</p>
        <p className="max-w-sm text-center text-xs leading-5 text-muted-foreground">
          Rendering README via GitHub…
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex min-h-[240px] flex-col items-center justify-center gap-3 rounded-2xl border border-border/60 bg-destructive/5 px-6 py-16 text-muted-foreground shadow-sm">
        <AlertCircle className="h-6 w-6 text-destructive" />
        <p className="text-sm font-semibold text-destructive">Failed to load README</p>
        <p className="max-w-md text-center text-xs leading-5 text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (!html) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-[#0d1117] shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#161b22] px-4 py-3 md:px-5">
        <span className="rounded-full bg-primary/10 p-2 text-primary">
          <FileText className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-[#e6edf3]">README</p>
          <p className="text-xs text-[#848d97]">Rendered by GitHub</p>
        </div>
      </div>

      {/* Rendered content */}
      <div
        ref={containerRef}
        className="readme-github-body px-6 py-6 md:px-8 md:py-8"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}