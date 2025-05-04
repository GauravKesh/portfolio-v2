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

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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

  return (
    <section 
      id="projects" 
      className="py-20 px-4 md:px-6 bg-background relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 inline-block">
          Projects
          </span> */}
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          All Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
          Explore all my professional, academic, and personal projects that highlight my journey as a developer.
          </p>
        </motion.div>

        <motion.div 
          ref={projectsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="h-full"
            >
              <Card 
                className={`h-full border-0 overflow-hidden rounded-xl group transition-all duration-300 ${
                  hoveredIndex === index ? 'shadow-xl shadow-primary/20 scale-[1.02]' : 'shadow-md'
                }`}
                style={{
                  background: hoveredIndex === index 
                    ? 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0))' 
                    : undefined,
                  backdropFilter: hoveredIndex === index ? 'blur(10px)' : undefined,
                }}
              >
                <div className="relative h-56 overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 flex items-end p-6 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Link href={`/projects/${project.slug}`} className="w-full">
                      <Button 
                        variant="secondary"
                        className="w-full bg-white/10 backdrop-blur-md hover:bg-white/20 border-0 text-white font-medium"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <CardContent className="pt-6 pb-0">
                  <motion.h3 
                    className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center"
                    animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                    {hoveredIndex === index && (
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }}
                        className="text-primary inline-block ml-2"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    )}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className={`text-xs transition-all duration-300 ${
                          hoveredIndex === index 
                            ? 'bg-primary/10 text-primary border-primary/30' 
                            : ''
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge 
                        variant="outline" 
                        className={`text-xs transition-all duration-300 ${
                          hoveredIndex === index 
                            ? 'bg-secondary/10 text-secondary border-secondary/30' 
                            : ''
                        }`}
                      >
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 pb-6 flex gap-3">
                  {project.githubUrl && (
                    <Button 
                      variant={hoveredIndex === index ? "default" : "outline"} 
                      size="sm" 
                      asChild
                      className={hoveredIndex === index ? "bg-primary hover:bg-primary/90" : ""}
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
                          : ""
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
          ))}
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
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background rounded-xl w-11/12 max-w-4xl max-h-[90vh] overflow-auto z-50 p-6"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/10 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="relative h-72 rounded-lg overflow-hidden mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <Button variant="outline" asChild>
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
                  <Button asChild>
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}