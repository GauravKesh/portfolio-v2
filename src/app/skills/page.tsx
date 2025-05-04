import CodingProfilesSection from "@/components/sections/CodingProfileSection";
import Skills from "@/pages/skill/Skills";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Gaurav Kesh Roushan | Skills",
  description:
    "Technical skills and tools I use to build production-ready applications across the stack.",
  keywords: [
    "skills",
    "tech stack",
    "frontend",
    "backend",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Django",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.vercel.app/skills",
    title: "Gaurav Kesh Roushan | Skills",
    description:
      "Discover my technical stack across frontend, backend, databases, and DevOps.",
    siteName: "Gaurav Kesh Roushan",
  },
};

export default function page() {
  return (
    <div>
      <Skills />
      {/* <CodingProfilesSection/> */}
    </div>
  );
}
