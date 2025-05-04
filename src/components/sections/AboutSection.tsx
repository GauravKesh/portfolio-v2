'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Code, Download, ExternalLink, Layout, MousePointer, Server, Terminal, Trophy, UserCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AboutSection() {
  // Multiple elements with different thresholds for staggered animations
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3, triggerOnce: true })
  
  // Image parallax and rotation effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll()
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1.05])
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-2, 2])
  
  // Skills hover animation state
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  
  // Update mouse position for image hover effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    handleResize()
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  // Calculate movement based on mouse position
  const calcMovement = (total:any, movement = 15) => {
    if (!windowSize.width) return 0
    const position = mousePosition.x / windowSize.width
    return total * (position - 0.5) * movement
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
  
  // Skills data
  const skills = [
    {
      icon: <Layout className="h-6 w-6 text-primary" />,
      title: "Frontend",
      description: "Building responsive, accessible interfaces with modern frameworks",
      bgClass: "bg-primary/10",
      iconClass: "text-primary",
      delay: 0.4
    },
    {
      icon: <Server className="h-6 w-6 text-secondary" />,
      title: "Backend",
      description: "Creating scalable server-side applications and RESTful APIs",
      bgClass: "bg-secondary/10",
      iconClass: "text-secondary",
      delay: 0.5
    },
    {
      icon: <Terminal className="h-6 w-6 text-primary" />,
      title: "DevOps",
      description: "Implementing CI/CD pipelines and cloud infrastructure",
      bgClass: "bg-primary/10",
      iconClass: "text-primary",
      delay: 0.6
    }
  ]
  
  // Experience counter
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (contentInView && count < 1.5) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount < 2) return prevCount + 0.1
          clearInterval(interval)
          return 2
        })
      }, 40)
      return () => clearInterval(interval)
    }
  }, [contentInView, count])

  return (
    <section id="about" className="py-24 px-4 md:px-6 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl opacity-20" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary blur-3xl opacity-20" />
        <svg className="absolute left-0 top-0 h-full w-1/3 text-primary/5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            style={{
              pathLength: scrollYProgress
            }}
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Passionate full-stack developer crafting modern web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={imageInView ? { 
              opacity: 1, 
              scale: 1,
              rotate: 0,
              transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                duration: 0.8
              } 
            } : { opacity: 0, scale: 0.9, rotate: -5 }}
            className="lg:col-span-2 perspective"
          >
            <div className="relative mx-auto lg:ml-auto overflow-hidden rounded-2xl shadow-2xl 
                          border-4 border-background transform-gpu"
                 style={{ 
                   maxWidth: "400px",
                   aspectRatio: "1/1",
                   transformStyle: "preserve-3d",
                   transform: `rotateY(${calcMovement(1)}deg) rotateX(${-calcMovement(1, 10)}deg)`,
                   transition: "transform 0.2s ease-out"
                 }}
            >
              <motion.div
                style={{ scale: imageScale, rotate: imageRotate }}
                className="w-full h-full"
              >
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E03AQFwx9_pSbHGzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715803087891?e=1751500800&v=beta&t=FFBUpPcuiMDUpwmfOA4zW7oFM46OKj1LtIYrY1ycvSE"
                  alt="About Me"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-700 ease-in-out scale-110"
                  priority
                />
              </motion.div>
              
              {/* Moving gradient overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"
                style={{ 
                  transform: `translateX(${calcMovement(10)}px) translateY(${calcMovement(10, 5)}px)`,
                  transition: "transform 0.3s ease-out"
                }}
              />
              
              {/* Experience badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={imageInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-5 -right-5 bg-background rounded-full shadow-lg p-4 flex items-center justify-center border-2 border-primary/20"
              >
                <div className="text-center w-16">
                  <div className="text-2xl font-bold text-primary">
                    {Math.floor(count)}
                    <span className="text-lg">+</span>
                  </div>
                  <div className="text-xs font-medium">Years</div>
                </div>
              </motion.div>
              
              {/* Tech stack floating badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={imageInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-4 -left-4 bg-background rounded-full shadow-lg p-3 flex items-center justify-center border-2 border-secondary/20"
              >
                <div className="flex space-x-1">
                  <Code className="h-5 w-5 text-secondary" />
                  <span className="text-xs font-medium pt-2">Software Developer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            ref={contentRef}
            variants={containerVariants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="lg:col-span-3 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-4 flex items-center">
                <span className="bg-primary/10 rounded-full p-2 mr-3">
                  <UserCheck className="h-6 w-6 text-primary" />
                </span>
                Who I Am
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over <span className="font-semibold text-foreground">2 years</span> of experience
                  creating modern web applications. I enjoy solving complex problems and turning ideas
                  into reality through elegant code.
                </p>
                <p>
                  My journey in software development
                  started when I built my first website at the age of 15, and I've been
                  hooked ever since.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={skillsRef}
              variants={containerVariants}
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.h3 variants={itemVariants} className="text-2xl font-bold">
                My Expertise
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      transition: { duration: 0.2 }
                    }}
                    onMouseEnter={() => setHoveredSkill(skill?.title)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={cn(
                      "relative bg-card rounded-lg shadow-sm border border-border overflow-hidden",
                      hoveredSkill === skill.title ? "border-primary/50" : ""
                    )}
                  >
                    {/* Background animation */}
                    <motion.div 
                      className={cn(
                        "absolute inset-0 opacity-10",
                        skill.bgClass
                      )}
                      initial={{ scale: 0, borderRadius: "100%" }}
                      animate={hoveredSkill === skill.title ? 
                        { scale: 2.5, borderRadius: "40%", opacity: 0.15 } : 
                        { scale: 1, borderRadius: "0%", opacity: 0.1 }
                      }
                      transition={{ duration: 0.5 }}
                    />
                    
                    <div className="p-6 relative z-10">
                      <motion.div 
                        className={cn(
                          "rounded-full w-14 h-14 flex items-center justify-center mb-4",
                          skill.bgClass
                        )}
                        animate={hoveredSkill === skill.title ? 
                          { scale: 1.1, rotate: 5 } : 
                          { scale: 1, rotate: 0 }
                        }
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <motion.h4 
                        className="text-xl font-semibold mb-2"
                        animate={hoveredSkill === skill.title ? 
                          { x: 5 } : 
                          { x: 0 }
                        }
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        {skill.title}
                      </motion.h4>
                      <p className="text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="group">
                <Link href="/resume">
                  View Resume
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
              
              <Button variant="outline" className="group">
                <motion.span
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mr-2"
                >
                  <Download className="h-4 w-4" />
                </motion.span>
                Download CV
              </Button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="ml-auto flex items-center text-sm text-muted-foreground"
              >
                <MousePointer className="h-3 w-3 mr-1 animate-pulse" />
                <span className="hidden md:inline">Hover over skills to see more</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-10 border-t border-border"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-primary" />
              Highlights
            </h3>
            <Button variant="ghost" size="sm" className="text-sm flex items-center">
              <span>See all</span>
              <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </div>
          
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 jus">
            {[
              { number: "5+", label: "Projects Completed" },
              // { number: "5+", label: "Happy Clients" },
              { number: "10+", label: "Technologies Mastered" },
              { number: "2+", label: "Years Experience" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-card rounded-lg border border-border p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">{item.number}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}