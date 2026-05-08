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
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.me/contact",
    title: "Contact Gaurav Kesh Roushan | Developer Collaboration",
    description: "Get in touch for freelance work, internships, mentorship, or collaborative tech projects.",
    siteName: "Gaurav Kesh Roushan",
    images: [
      {
        url: "/images/mine/gkrcoder.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Gaurav Kesh Roushan | Developer Collaboration",
    description: "Get in touch for freelance work, internships, mentorship, or collaborative tech projects.",
    images: ["/images/mine/gkrcoder.webp"],
  },
};


export default function page() {
  return (
    <div>
        <ContactSection/>
    </div>
  )
}
