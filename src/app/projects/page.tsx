import React from "react";
import Projects from "../../pages/projects/Projects";
import { Metadata } from "next";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Gaurav Kesh Roushan | Projects",
  description:
    "A curated list of my full-stack, open-source, and SaaS projects built with modern technologies.",
  keywords: [
    "projects",
    "portfolio",
    "React projects",
    "Next.js",
    "TypeScript",
    "Node.js",
    "open source",
    "SaaS",
    "software development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.vercel.app/projects",
    title: "Gaurav Kesh Roushan | Projects",
    description:
      "Discover featured software projects showcasing my expertise across the stack.",
    siteName: "Gaurav Kesh Roushan",
  },
};

function page() {
  return (
    <>
      <Projects />
      <CallToAction/>
    </>
  );
}

export default page;
