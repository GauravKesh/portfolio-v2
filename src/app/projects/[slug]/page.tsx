import { notFound } from 'next/navigation'

import { projectsData } from '@/data/projects'
import ProjectDetails from '@/pages/projects/ProjectDetails'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}
// export function generateStaticParams() {
//   return projectsData.map((project) => ({
//     slug: project.slug,
//   }))
// }

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }
  return <ProjectDetails slug={slug} />
}

// export function generateStaticParams() {
//   return projectsData.map((project) => ({
//     slug: project.slug,
//   }))
// }
