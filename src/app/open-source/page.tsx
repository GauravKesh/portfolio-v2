import OpenSourceSection from '@/components/sections/OpenSourceSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Source Contributions | Gaurav Kesh Roushan',
  description: "Full list of open-source contributions, PRs, and mentoring roles.",
}

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <OpenSourceSection />
    </div>
  )
}
