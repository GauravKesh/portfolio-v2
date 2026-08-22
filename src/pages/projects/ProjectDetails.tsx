"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import NotFound from "../notFound/NotFound";
import ProjectTabs from "@/components/layout/ProjectTabs";

interface ProjectDetailsProps {
  slug: string;
}

export default function ProjectDetails({ slug }: ProjectDetailsProps) {
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="relative scroll-smooth">
      <motion.div
        className="relative w-full min-h-[52vh] md:min-h-[72vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.32)_42%,hsl(var(--background))_100%)]" />
        </div>

        <div className="absolute inset-0 flex items-end z-10">
          <div className="container mx-auto px-4 md:px-6 pb-8 md:pb-14">
            <div className="max-w-4xl">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/15 mb-5"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
                {project.description.slice(0,100)}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.slice(0, 5).map((tag) => (
                  <Badge
                    key={tag}
                    className="border-white/15 bg-white/10 text-white backdrop-blur-md"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 5 && (
                  <Badge className="border-white/15 bg-white/10 text-white/80 backdrop-blur-md">
                    +{project.tags.length - 5}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 -mt-8 md:-mt-12 relative z-20">
        <ProjectTabs project={project} />
      </div>

      <div className="container mx-auto py-12 md:py-16 px-4 md:px-6 max-w-4xl">

        {/* Next/Previous Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 pt-12 border-t border-border"
        >
          <h3 className="text-xl font-semibold mb-6">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData
              .filter((p) => p.slug !== slug)
              .sort(() => 0.5) // Shuffle the array
              .slice(0, 2)
              .map((relatedProject) => (
                <Link
                  href={`/projects/${relatedProject.slug}`}
                  key={relatedProject.id}
                >
                  <div className="group relative overflow-hidden rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-xs text-primary mb-1">
                        Related Project
                      </p>
                      <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
