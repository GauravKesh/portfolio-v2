import OpenSourceSection from '@/components/sections/OpenSourceSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Source Contributions | Gaurav Kesh Roushan',
  description: "Full list of open-source contributions, PRs, and mentoring roles.",
  keywords: [
    "open source contributions",
    "GitHub pull requests",
    "developer mentorship",
    "community projects",
    "OSS portfolio",
    "maintainer work",
    "code reviews",
    "open source developer",
  ],
  alternates: {
    canonical: "/open-source",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.me/open-source",
    title: "Open Source Contributions | Gaurav Kesh Roushan",
    description: "Full list of open-source contributions, PRs, and mentoring roles.",
    siteName: "Gaurav Kesh Roushan",
    images: [
      {
        url: "/images/webp/github.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source Contributions | Gaurav Kesh Roushan",
    description: "Full list of open-source contributions, PRs, and mentoring roles.",
    images: ["/images/webp/github.webp"],
  },
}

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <OpenSourceSection />
    </div>
  )
}
