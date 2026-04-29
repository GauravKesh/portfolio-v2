"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectsData, Project } from "@/data/projects";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectCategories = [
  { value: "all", label: "All" },
  { value: "systems", label: "Systems" },
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Fullstack" },
  { value: "ai", label: "AI" },
  { value: "infra", label: "Infra" },
] as const;

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<
    Project["category"] | "all"
  >("all");
  
  // Mouse position tracking for custom cursor effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  
  // Ref for the project cards container to calculate relative mouse position
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (projectsContainerRef.current) {
      const { left, top } = projectsContainerRef.current.getBoundingClientRect();
      setMousePosition({ 
        x: clientX - left, 
        y: clientY - top 
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const activeCategoryLabel =
    projectCategories.find((category) => category.value === activeCategory)?.label ??
    "All";

  const projectStats = [
    { label: "Projects", value: projectsData.length },
    { label: "Visible", value: filteredProjects.length },
    { label: "Categories", value: projectCategories.length - 1 },
  ];

  return (
    <section 
      id="projects" 
      className="relative overflow-hidden bg-background px-4 py-20 md:px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient blobs */}
      <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl opacity-60"></div>
      <div className="absolute right-[-8rem] top-28 h-[28rem] w-[28rem] rounded-full bg-secondary/10 blur-3xl opacity-60"></div>
      <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.01),transparent_18%,transparent_82%,rgba(0,0,0,0.06))]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 overflow-hidden rounded-[2rem] border border-border/60 bg-background/75 p-6 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.55)] backdrop-blur-xl md:p-8"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Project showcase
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                A curated set of work, styled like a gallery.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                Browse the projects by category, skim the key technologies, and open each project for a quick visual summary.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:w-[22rem]">
              {projectStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/60 bg-gradient-to-b from-background to-muted/30 p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-semibold text-foreground md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mb-8 rounded-3xl border border-border/60 bg-background/75 p-3 shadow-lg backdrop-blur-xl md:p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 px-2 md:px-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ArrowRight className="h-5 w-5 rotate-45" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Filter projects</p>
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"} in {activeCategoryLabel}.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {projectCategories.map((category) => {
                const isActive = activeCategory === category.value;

                return (
                  <Button
                    key={category.value}
                    type="button"
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category.value)}
                    className={
                      `rounded-full px-4 transition-all duration-200 ` +
                      (isActive
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90"
                        : "border-border/70 bg-background/70 text-muted-foreground hover:bg-muted hover:text-foreground")
                    }
                  >
                    {category.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div 
          ref={projectsContainerRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="h-full"
              >
                <Card 
                  className={`group relative h-full overflow-hidden rounded-[1.75rem] border border-border/60 transition-all duration-300 ${
                    hoveredIndex === index
                      ? "scale-[1.02] shadow-[0_24px_80px_-35px_rgba(0,0,0,0.65)]"
                      : "shadow-[0_16px_50px_-35px_rgba(0,0,0,0.45)]"
                  }`}
                  style={{
                    background: hoveredIndex === index
                      ? "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))"
                      : "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover transition-transform duration-700 ${
                        hoveredIndex === index ? 'scale-110' : 'scale-100'
                      }`}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <Badge className="border-white/15 bg-black/30 text-white backdrop-blur-md">
                        {project.category}
                      </Badge>
                      {project.doc_url && (
                        <Badge className="border-white/15 bg-black/30 text-white/90 backdrop-blur-md">
                          docs
                        </Badge>
                      )}
                    </div>
                    <div 
                      className={`absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-6 transition-opacity duration-300 ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="flex w-full gap-3">
                        <Link href={`/projects/${project.slug}`} className="flex-1">
                          <Button 
                            variant="secondary"
                            className="w-full border-0 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                          >
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          type="button"
                          variant="secondary"
                          className="border-0 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                          onClick={() => setSelectedProject(project)}
                        >
                          Quick View
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardContent className="space-y-4 p-6 pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <motion.h3 
                          className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary"
                          animate={hoveredIndex === index ? { x: 4 } : { x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline"
                          className="border-border/70 bg-background/80 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge 
                          variant="outline" 
                          className="border-dashed border-border/70 bg-background/80 text-xs text-muted-foreground"
                        >
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-muted/25 p-4">
                      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Key features
                      </div>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span className="line-clamp-2">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3 px-6 pb-6 pt-0">
                    {project.githubUrl && (
                      <Button 
                        variant={hoveredIndex === index ? "default" : "outline"} 
                        size="sm" 
                        asChild
                        className={hoveredIndex === index ? "bg-primary hover:bg-primary/90" : "border-border/70"}
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button 
                        size="sm" 
                        asChild
                        className={
                          hoveredIndex === index 
                            ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90" 
                            : "bg-foreground text-background hover:bg-foreground/90"
                        }
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="col-span-full rounded-[1.75rem] border border-dashed border-muted-foreground/30 bg-background/60 p-10 text-center shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try a different category filter to see more projects.
              </p>
              <Button type="button" variant="outline" onClick={() => setActiveCategory("all")}>
                Reset filter
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Custom animated "View All Projects" button */}
       
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-4 z-50 overflow-hidden rounded-[2rem] border border-border/60 bg-background/95 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.75)] backdrop-blur-xl md:inset-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 rounded-full border border-border/60 bg-background/80 p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="grid h-full min-h-0 grid-cols-1 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="relative min-h-[16rem] overflow-hidden bg-muted/25 lg:min-h-0">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    <Badge className="border-white/15 bg-black/30 text-white backdrop-blur-md">
                      {selectedProject.category}
                    </Badge>
                    {selectedProject.doc_url && (
                      <Badge className="border-white/15 bg-black/30 text-white/90 backdrop-blur-md">
                        Documentation
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                    <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-white md:text-4xl">
                      {selectedProject.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 md:text-base md:leading-7">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                <div className="min-h-0 overflow-y-auto p-5 md:p-8">
                  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="grid grid-cols-2 gap-3 text-sm sm:min-w-[15rem]">
                      <div className="rounded-2xl border border-border/60 bg-muted/25 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Tags</p>
                        <p className="mt-2 font-medium">{selectedProject.tags.length}</p>
                      </div>
                      <div className="rounded-2xl border border-border/60 bg-muted/25 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Features</p>
                        <p className="mt-2 font-medium">{selectedProject.features.length}</p>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-muted/25 px-4 py-3 text-sm text-muted-foreground">
                      Quick preview of the project stack and links.
                    </div>
                  </div>

                  <div className="mb-6 rounded-2xl border border-border/60 bg-muted/20 p-4">
                    <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Technology
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-border/70 bg-background/80">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 rounded-2xl border border-border/60 bg-background p-5 md:p-6">
                    <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Key features
                    </div>
                    <ul className="space-y-3 text-sm leading-6 text-foreground/85">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {selectedProject.githubUrl && (
                      <Button variant="outline" asChild className="sm:w-auto">
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-5 w-5" />
                          View Source
                        </a>
                      </Button>
                    )}
                    {selectedProject.demoUrl && (
                      <Button asChild className="sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-95">
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-5 w-5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}