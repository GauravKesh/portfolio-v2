import CallToAction from "@/components/sections/CallToAction";
import ProfessionalExperience from "@/pages/experience/ProfessionalExperience";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gaurav Kesh Roushan | Experience",
  description: "Explore my professional journey, internships, roles, and key contributions across companies and open-source projects.",
  keywords: [
    "experience",
    "internship",
    "roles",
    "work history",
    "open source",
    "developer",
    "career",
    "resume",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.vercel.app/experience",
    title: "Gaurav Kesh Roushan | Experience",
    description: "An overview of my software development experience and contributions in various organizations.",
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
