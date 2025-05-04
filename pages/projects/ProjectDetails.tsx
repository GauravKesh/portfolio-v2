'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, ArrowLeft, ChevronRight, Code, Layers, Tag, Link2 } from 'lucide-react'
import { projectsData } from '@/data/projects'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ProjectDetailsProps {
  slug: string
}

const sections = [
  { id: 'overview', label: 'Overview', icon: <Layers className="h-4 w-4" /> },
  { id: 'features', label: 'Features', icon: <Code className="h-4 w-4" /> },
  { id: 'tags', label: 'Technology', icon: <Tag className="h-4 w-4" /> },
  { id: 'links', label: 'Links', icon: <Link2 className="h-4 w-4" /> },
]

function ScrollSpySidebar({ activeSection }: { activeSection: string }) {
  return (
    <div className="hidden lg:flex fixed right-8 top-1/3 transform -translate-y-1/2 z-30">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="space-y-2 py-4 px-3 bg-background/80 backdrop-blur-lg rounded-2xl shadow-lg border border-border/50"
      >
        {sections.map(({ id, label, icon }) => (
          <motion.a
            key={id}
            href={`#${id}`}
            whileHover={{ x: 4 }}
            className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 ${
              activeSection === id
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            <div className="flex items-center justify-center">
              {icon}
            </div>
            <span className="text-sm font-medium">{label}</span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}

export default function ProjectDetails({ slug }: ProjectDetailsProps) {
  const project = projectsData.find((p) => p.slug === slug)
  const [activeSection, setActiveSection] = useState('overview')
  const [scrollProgress, setScrollProgress] = useState(0)
  const router = useRouter()
  
  // Refs for scroll animations
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  // Transform values for parallax effects
  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const titleY = useTransform(scrollYProgress, [0, 0.1], [0, -20])

  // Progress bar for mobile
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = Math.min(scrollTop / scrollHeight, 1)
      
      setScrollProgress(progress)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
          setActiveSection(topMost.target.id)
        }
      },
      { rootMargin: '-15% 0px -80% 0px', threshold: 0.1 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="text-center p-10"
      >
        <h2 className="text-2xl font-bold mb-4 text-red-500">Project Not Found</h2>
        <p className="mb-6 text-muted-foreground">The project you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => router.push('/projects')}>
          Back to Projects
        </Button>
      </motion.div>
    </div>
  )

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
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <div className="relative scroll-smooth" ref={containerRef}>
      {/* Mobile Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-secondary"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: imageScale, opacity: imageOpacity }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-end z-10">
          <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ y: titleY }}
              className="max-w-3xl"
            >
              <Link href="/projects" className="inline-flex items-center text-primary/80 hover:text-primary mb-4 group">
                <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm">Back to projects</span>
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 5).map((tag) => (
                  <Badge key={tag} className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 5 && (
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30 backdrop-blur-sm">
                    +{project.tags.length - 5}
                  </Badge>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <ScrollSpySidebar activeSection={activeSection} />
      
      {/* Mobile Navigation Tabs */}
      <div className="lg:hidden sticky top-0 bg-background/90 backdrop-blur-md z-30 border-b border-border shadow-sm">
        <div className="container mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 py-3 px-4">
            {sections.map(({ id, label, icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`flex items-center whitespace-nowrap px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  activeSection === id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent/50 text-muted-foreground hover:bg-accent'
                }`}
              >
                <span className="mr-1.5">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-12 md:py-16 px-4 md:px-6 max-w-4xl">
        <motion.section
          id="overview"
          className="scroll-mt-32 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-2xl font-bold mb-6 inline-flex items-center"
            variants={itemVariants}
          >
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <Layers className="h-5 w-5" />
            </span>
            Overview
          </motion.h2>
          
          <motion.div 
            className="prose prose-lg dark:prose-invert max-w-none"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed">{project.description}</p>
            
            {/* Additional project description paragraphs would go here */}
            <p className="text-muted-foreground mt-4">
              This project demonstrates my expertise in {project.tags.slice(0, 3).join(", ")} and 
              showcases my ability to create efficient, scalable solutions.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          id="features"
          className="scroll-mt-32 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-2xl font-bold mb-6 inline-flex items-center"
            variants={itemVariants}
          >
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <Code className="h-5 w-5" />
            </span>
            Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-accent/30 p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-1">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                  <p>{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="tags"
          className="scroll-mt-32 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-2xl font-bold mb-6 inline-flex items-center"
            variants={itemVariants}
          >
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <Tag className="h-5 w-5" />
            </span>
            Technology Stack
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-accent/20 p-6 rounded-xl border border-border/50"
          >
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-sm py-2 px-3 shadow-sm bg-background border border-border/50 hover:bg-accent/50 transition-colors cursor-default"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="links"
          className="scroll-mt-32 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-2xl font-bold mb-6 inline-flex items-center"
            variants={itemVariants}
          >
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <Link2 className="h-5 w-5" />
            </span>
            Project Links
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            {project.githubUrl && (
              <Button 
                size="lg" 
                className="bg-[#24292e] hover:bg-[#24292e]/80 text-white"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  <span className="font-medium">View Source Code</span>
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                asChild
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="font-medium">Visit Live Demo</span>
                </a>
              </Button>
            )}
          </motion.div>
        </motion.section>
        
        {/* Next/Previous Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 pt-12 border-t border-border"
        >
          <h3 className="text-xl font-semibold mb-6">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.slice(0, 2).filter(p => p.slug !== slug).map((relatedProject) => (
              <Link href={`/projects/${relatedProject.slug}`} key={relatedProject.id}>
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
                    <p className="text-xs text-primary mb-1">Related Project</p>
                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{relatedProject.title}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}