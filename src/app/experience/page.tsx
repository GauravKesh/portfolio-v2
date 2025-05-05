import CallToAction from "@/components/sections/CallToAction";
import ProfessionalExperience from "@/pages/experience/ProfessionalExperience";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Professional Experience | Gaurav Kesh Roushan",
  description: "See my roles as an SDE intern, open-source contributor, and team lead. Explore my work history, companies, and achievements.",
  keywords: [
    "developer experience",
    "software engineer work history",
    "internship experience",
    "full-stack developer resume",
    "SDE intern",
    "developer roles",
    "CliniChat",
    "Eloquente AI",
    "open source contributions",
    "coding mentorship",
    "lead developer",
    "engineering timeline",
    "project lead experience",
    "software development experience",
    "professional journey",
    "developer CV",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.vercel.app/experience",
    title: "Professional Experience | Gaurav Kesh Roushan",
    description: "Detailed breakdown of my work experience in startups, internships, and open-source projects.",
    siteName: "Gaurav Kesh Roushan",
  },
};



export default function page() {
  return (
    <>
      <ProfessionalExperience />
      <CallToAction />
    </>
  );
}
