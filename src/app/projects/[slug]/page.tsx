import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

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

export async function generateMetadata(
  { params }: ProjectPageProps
): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found | Gaurav Kesh Roushan",
      description: "The requested project could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const title = `${project.title} | Gaurav Kesh Roushan`
  const description = project.description
  const image = project.image || "/images/mine/gkrcoder.webp"

  return {
    title,
    description,
    keywords: [
      project.title,
      ...project.tags,
      "project portfolio",
      "full-stack development",
    ],
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://gkrcoder.me/projects/${slug}`,
      title,
      description,
      siteName: "Gaurav Kesh Roushan",
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}
