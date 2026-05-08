import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import OpenSourceSection from '@/components/sections/OpenSourceSection'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav Kesh Roushan | Full-Stack Developer",
  description: "Explore the portfolio of Gaurav Kesh Roushan – full-stack developer specializing in scalable web applications using React, Next.js, Node.js, and Django.",
  keywords: [
    "full-stack developer",
    "portfolio",
    "React.js",
    "Next.js",
    "Node.js",
    "Django",
    "TypeScript",
    "web development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.me",
    title: "Gaurav Kesh Roushan | Full-Stack Developer",
    description: "Building performant, scalable, and modern web applications using React, Next.js, Django, and more.",
    siteName: "Gaurav Kesh Roushan",
    images: [
      {
        url: "/images/mine/gkrcoder.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Kesh Roushan | Full-Stack Developer",
    description: "Building performant, scalable, and modern web applications using React, Next.js, Django, and more.",
    images: ["/images/mine/gkrcoder.webp"],
  },
};


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ProjectsSection />
      <OpenSourceSection limit={3} />
    </div>
  )
}