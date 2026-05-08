import React from "react";
import Projects from "../../pages/projects/Projects";
import { Metadata } from "next";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Projects Portfolio | Gaurav Kesh Roushan",
  description: "Browse full-stack, open-source, and SaaS projects I've built using modern technologies like React, Next.js, Node.js, Django, and TypeScript.",
  keywords: [
    "software projects",
    "React projects",
    "Next.js apps",
    "open source contributions",
    "developer portfolio",
    "SaaS projects",
    "personal projects",
    "full-stack projects",
    "MongoDB PostgreSQL apps",
    "API-based apps",
    "web app portfolio",
    "GitHub projects",
    "production-ready software",
    "coding showcase",
    "developer achievements",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.me/projects",
    title: "Projects Portfolio | Gaurav Kesh Roushan",
    description: "Explore my featured projects and contributions showcasing expertise in building scalable applications.",
    siteName: "Gaurav Kesh Roushan",
    images: [
      {
        url: "/images/webp/portfoliov1.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Portfolio | Gaurav Kesh Roushan",
    description: "Explore my featured projects and contributions showcasing expertise in building scalable applications.",
    images: ["/images/webp/portfoliov1.webp"],
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
