"use client";

import { useReadme } from "@/hooks/useReadme";
import { Loader2, AlertCircle, FileText } from "lucide-react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

interface ReadmeViewerProps {
  docUrl: string;
}

function getReadmeBaseUrl(docUrl: string): string {
  if (docUrl.startsWith("https://raw.githubusercontent.com")) {
    return docUrl;
  }

  const blobMatch = docUrl.match(
    /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/i
  );
  if (blobMatch) {
    const [, user, repo, branch, path] = blobMatch;
    return `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${path}`;
  }

  const readmeMatch = docUrl.match(
    /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/(README(?:\.md)?|readme(?:\.md)?)\/?$/i
  );
  if (readmeMatch) {
    const [, user, repo, file] = readmeMatch;
    return `https://raw.githubusercontent.com/${user}/${repo}/main/${file}`;
  }

  const repoMatch = docUrl.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/i);
  if (repoMatch) {
    const [, user, repo] = repoMatch;
    return `https://raw.githubusercontent.com/${user}/${repo}/main/README.md`;
  }

  return docUrl;
}

function rewriteGithubAssetUrl(url: string, docUrl: string): string {
  if (!url || url.startsWith("http") || url.startsWith("#") || url.startsWith("mailto:")) {
    return url;
  }

  try {
    return new URL(url, getReadmeBaseUrl(docUrl)).toString();
  } catch {
    return url;
  }
}

const createMarkdownComponents = (docUrl: string): Components => ({
  a: ({ href, children, ...props }) => (
    <a
      {...props}
      href={href ? rewriteGithubAssetUrl(href, docUrl) : href}
      target={href?.startsWith("#") ? undefined : "_blank"}
      rel={href?.startsWith("#") ? undefined : "noreferrer noopener"}
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => {
    const imageSrc = src ? rewriteGithubAssetUrl(src, docUrl) : src;
    if (!imageSrc) return null;

    return (
      <div className="my-4 overflow-hidden rounded-xl border border-border/40 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={alt ?? "README image"}
          className="h-auto w-full"
        />
      </div>
    );
  },
  table: ({ children, ...props }) => (
    <div className="my-6 w-full overflow-x-auto rounded-xl border border-border/60">
      <table {...props} className="w-full border-collapse">
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      {...props}
      className="border-b border-border/60 bg-muted/60 px-4 py-2 text-left text-sm font-semibold text-foreground"
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td {...props} className="border-b border-border/40 px-4 py-2 text-sm">
      {children}
    </td>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className="border-l-4 border-primary/50 bg-muted/30 px-4 py-2 italic text-muted-foreground"
    >
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }) => (
    <code {...props} className={className}>
      {children}
    </code>
  ),
});

export default function ReadmeViewer({ docUrl }: ReadmeViewerProps) {
  const { content, status, error } = useReadme(docUrl);
  const markdownComponents = createMarkdownComponents(docUrl);
  const normalizedContent = content?.replace(/\r\n/g, "\n").trim() ?? null;

  if (status === "loading") {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-6 py-20 text-muted-foreground shadow-sm">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        <p className="text-sm font-medium">Fetching documentation…</p>
        <p className="max-w-sm text-center text-xs leading-5 text-muted-foreground">
          Pulling the latest README content so the tab stays in sync with the repository.
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

  if (!normalizedContent) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm">
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/35 px-4 py-3 md:px-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary/10 p-2 text-primary">
            <FileText className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">README Preview</p>
            <p className="text-xs text-muted-foreground">Rendered markdown documentation</p>
          </div>
        </div>
      </div>

      <div className="readme-viewer prose prose-neutral dark:prose-invert max-w-none px-4 py-5 md:px-6 md:py-6
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
        prose-h1:border-b prose-h1:border-border prose-h1:pb-3 prose-h1:mb-6
        prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-2 prose-h2:mb-4
        prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5
        prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-border/30 prose-pre:rounded-xl
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-l-primary/50 prose-blockquote:text-muted-foreground
        prose-img:rounded-lg prose-img:border prose-img:border-border/30
        prose-table:text-sm prose-th:bg-muted/50
        prose-li:marker:text-primary
      ">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          components={markdownComponents}
        >
          {normalizedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}