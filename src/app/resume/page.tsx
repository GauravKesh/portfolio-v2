import { Metadata } from 'next'
import ResumeViewer from '@/components/resume/ResumeViewer'

export const metadata: Metadata = {
  title: 'Resume | Professional Portfolio',
  description: 'View and download my professional resume',
  robots: {
    index: false,
    follow: true,
  },
}

const RESUME_ID = '1vlM4Wi8LJg7sIe2qqdxv3-8zlMLtBxrX'
const PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_ID}/preview`
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`

export default function ResumePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background px-4 pb-8 pt-24 md:px-6 md:pb-10 md:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <ResumeViewer previewUrl={PREVIEW_URL} />
    </div>
  )
}
