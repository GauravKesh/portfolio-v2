import ContactSection from '@/components/sections/ContactSection'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Gaurav Kesh Roushan | Contact",
  description: "Get in touch for collaboration, mentorship, or hiring opportunities. Let's build something impactful together.",
  keywords: [
    "contact",
    "hire developer",
    "connect",
    "collaboration",
    "email",
    "networking",
    "Gaurav Kesh Roushan",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.vercel.app/contact",
    title: "Gaurav Kesh Roushan | Contact",
    description: "Reach out to me for collaboration or to discuss new opportunities.",
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
