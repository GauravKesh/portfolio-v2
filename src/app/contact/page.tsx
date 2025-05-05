import ContactSection from '@/components/sections/ContactSection'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Gaurav Kesh Roushan | Developer Collaboration",
  description: "Reach out to collaborate, connect, or discuss new opportunities. Available for freelance, open-source, or startup ventures.",
  keywords: [
    "contact developer",
    "hire full-stack developer",
    "freelance software engineer",
    "connect with Gaurav",
    "developer contact form",
    "startup collaboration",
    "open source collaboration",
    "network with developers",
    "developer inquiry",
    "software engineer India",
    "portfolio contact page",
    "tech hiring",
    "reach out developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.vercel.app/contact",
    title: "Contact Gaurav Kesh Roushan | Developer Collaboration",
    description: "Get in touch for freelance work, internships, mentorship, or collaborative tech projects.",
    siteName: "Gaurav Kesh Roushan",
  },
};


export default function page() {
  return (
    <div>
        <ContactSection/>
    </div>
  )
}
