import CallToAction from '@/components/sections/CallToAction'
import AboutPage from '@/pages/about/AboutePage'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav Kesh Roushan | About",
  description: "A complete introduction about me, my journey, vision, and passion for full-stack development.",
  keywords: [
    "about",
    "Gaurav Kesh Roushan",
    "developer story",
    "career",
    "background",
    "journey",
    "developer introduction",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.vercel.app/about",
    title: "Gaurav Kesh Roushan | About",
    description: "Learn more about my background, interests, and motivation as a full-stack developer.",
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