import CodingProfilesSection from "@/components/sections/CodingProfileSection";
import Skills from "@/pages/skill/Skills";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Tech Stack & Skills | Gaurav Kesh Roushan",
  description: "Discover my expertise in frontend, backend, databases, DevOps, and tools. Tech stack includes React, Next.js, Django, PostgreSQL, MongoDB, and more.",
  keywords: [
    "developer skills",
    "tech stack",
    "React.js skills",
    "Next.js skills",
    "Node.js developer",
    "Django developer skills",
    "MongoDB PostgreSQL",
    "TypeScript React",
    "frontend backend skills",
    "web dev technologies",
    "developer tools",
    "programming stack",
    "Git Docker CI/CD",
    "full-stack technology",
    "JavaScript frameworks",
    "API development",
    "RESTful backend",
    "Backend Developer",
    "Full-stack Software Developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.vercel.app/skills",
    title: "Tech Stack & Skills | Gaurav Kesh Roushan",
    description: "Comprehensive overview of the technologies and tools I work with as a full-stack developer.",
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
