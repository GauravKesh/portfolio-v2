import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume | Professional Portfolio',
  description: 'View and download my professional resume',
  robots: {
    index: false,
    follow: true,
  },
}

const RESUME_ID = '1ZOQtn5N1lKTV5nj-jLjhxwpXfX4u8S4i'
const PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_ID}/preview`
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-10 px-4 md:px-6 transition-colors">
      <div className="mb-6 flex items-center justify-between max-w-5xl mx-auto">
        {/* Optional back button */}
      </div>

      <div className="max-w-5xl mx-auto bg-background rounded-lg shadow-lg overflow-hidden border border-border">
        <iframe
          src={PREVIEW_URL}
          className="w-full h-[1000px] bg-background"
          allow="autoplay"
        />
      </div>

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
