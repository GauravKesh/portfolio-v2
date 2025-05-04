import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume | Professional Portfolio',
  description: 'View and download my professional resume',
  robots: {
    index: false,
    follow: true,
  },
}

const RESUME_ID = '17NYKkjHQYMhlCV3AqFksMwm_-5TJr6at'
const PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_ID}/preview`
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`

export default function ResumePage() {
  return (
    <div className=" min-h-screen bg-white py-10 px-4 md:px-6">
      <div className="mb-6 flex items-center justify-between max-w-5xl mx-auto">
        {/* <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Button>
        </Link> */}
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          src={PREVIEW_URL}
          className="w-full h-[800px] bg-white  rounded"
          allow="autoplay"
        />
      </div>

      {/* Static Download Button (bottom-right corner) */}
      <a
        href={DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <Button className="shadow-lg rounded-full px-5 py-3">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </a>
    </div>
  )
}
