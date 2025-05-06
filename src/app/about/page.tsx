import CallToAction from '@/components/sections/CallToAction'
import AboutPage from '@/pages/about/AboutePage'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Gaurav Kesh Roushan",
  description: "Learn about Gaurav Kesh Roushan’s background, journey, career goals, technical expertise, and experience as a full-stack engineer.",
  keywords: [
    "about me developer",
    "Gaurav Kesh Roushan",
    "Gaurav Kesh Roushan biography",
    "developer story",
    "software engineer introduction",
    "personal brand developer",
    "web developer background",
    "career journey",
    "developer profile",
    "software engineer from India",
    "developer mission and vision",
    "portfolio about page",
    "self-taught developer story",
    "tech lead background",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.vercel.app/about",
    title: "About Gaurav Kesh Roushan | Full-Stack Developer",
    description: "Understand my professional journey, growth, and goals as a full-stack engineer.",
    siteName: "Gaurav Kesh Roushan",
  },
};



function page() {
  return (
    <div>
        <AboutPage/>
        <CallToAction/>
    </div>
  )
}

export default page