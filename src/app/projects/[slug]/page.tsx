import { projectsData } from '@/data/projects'
import ProjectDetails from '@/pages/projects/ProjectDetails'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  return <ProjectDetails slug={slug} />
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}
