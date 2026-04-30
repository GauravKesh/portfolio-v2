export type OpenSourceItem = {
  organization: string;
  repo?: string;
  role: "Contributor" | "Mentor";
  period: string;
  description: string;
  contributions: string[];
  impact?: string[];
  links?: {
    pr?: string;
    repo?: string;
  };
  tech: string[];
};

export const openSource: OpenSourceItem[] = [
  {
    organization: "Express.js",
    repo: "expressjs.com",
    role: "Contributor",
    period: "Aug 2025",
    description:
      "Improved Express.js documentation for better developer experience.",
    contributions: [
      "Updated req.is() docs to support array and multiple arguments",
      "Enhanced clarity for API usage",
    ],
    impact: [
      "Merged PR into official Express.js docs",
      "Improved usability for developers working with content-type checks",
    ],
    links: {
      pr: "https://github.com/expressjs/expressjs.com/pull/2042",
    },
    tech: ["JavaScript", "Node.js", "Documentation"],
  },
  {
    organization: "GirlScript Summer of Code (GSSOC)",
    role: "Mentor",
    period: "2024",
    description:
      "Maintained repository and mentored contributors in open source.",
    contributions: [
      "Maintained AI Content Generator repository",
      "Reviewed and merged 10+ feature PRs",
      "Guided contributors on implementation and best practices",
      "Ensured code quality and consistency",
    ],
    impact: [
      "Improved feature delivery and contributor experience",
    ],
    links: {
      repo: "https://github.com/iamkanhaiyakumar/ai-content-generator",
    },
    tech: ["Open Source", "Mentorship", "Code Review", "GitHub"],
  },
  {
    organization: "Social Winter of Code (SWOC)",
    role: "Mentor",
    period: "2024",
    description:
      "Led contributor support and PR management for open source project.",
    contributions: [
      "Mentored developers and reviewed PRs",
      "Managed and merged feature contributions",
      "Provided technical guidance across features",
    ],
    impact: [
      "Helped deliver multiple features through community contributions",
    ],
    links: {
      repo: "https://github.com/iamkanhaiyakumar/ai-content-generator",
    },
    tech: ["Open Source", "Mentorship", "GitHub"],
  },
];