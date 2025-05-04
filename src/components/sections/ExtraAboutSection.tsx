'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code, ExternalLink, Layout, Server, Terminal, Trophy } from 'lucide-react'

// Utility function to replace cn from lib/utils
const classNames = (...classes :any) => {
  return classes.filter(Boolean).join(' ')
}

export default function ExtraAboutSection() {
  // Animation view references
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  
  // State for tracking if elements are in view
  const [sectionInView, setSectionInView] = useState(false)
  const [contentInView, setContentInView] = useState(false)
  
  // Image hover effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  
  // Skills hover state
  const [hoveredSkill, setHoveredSkill] = useState<string|null>(null)
  
  // IntersectionObserver setup to replace react-intersection-observer
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true)
          sectionObserver.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentInView(true)
          contentObserver.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current)
    }
    
    if (contentRef.current) {
      contentObserver.observe(contentRef.current)
    }
    
    return () => {
      sectionObserver.disconnect()
      contentObserver.disconnect()
    }
  }, [])
  
  // Update mouse position for image hover effect
  useEffect(() => {
    const handleMouseMove = (e:any) => {
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
        staggerChildren: 0.15,
        delayChildren: 0.2
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
  
  // Skills data - more concise descriptions for homepage
  const skills = [
    {
      icon: <Layout className="h-5 w-5 text-primary" />,
      title: "Frontend",
      description: "React, Next.js, Tailwind",
      bgClass: "bg-primary/10",
      iconClass: "text-primary"
    },
    {
      icon: <Server className="h-5 w-5 text-secondary" />,
      title: "Backend",
      description: "Node.js, Express, APIs",
      bgClass: "bg-secondary/10",
      iconClass: "text-secondary"
    },
    {
      icon: <Terminal className="h-5 w-5 text-primary" />,
      title: "DevOps",
      description: "CI/CD, AWS, Docker",
      bgClass: "bg-primary/10",
      iconClass: "text-primary"
    }
  ]

  // Simple Button component to replace imported Button
  const Button = ({ children, variant = "default", asChild, className, ...props }: {children: ReactNode, variant?: 'default' | 'outline', asChild?: boolean, className?: string, [key: string]: any }) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
    }
    
    const combinedClasses = classNames(
      baseClasses,
      variantClasses[variant],
      className
    )
    
    return (
      <button className={combinedClasses} {...props}>
        {children}
      </button>
    )
  }

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-6 bg-background/50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-primary blur-3xl opacity-20" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Image with hover effect - using regular img instead of next/image */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end perspective">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-background transform-gpu"
              style={{ 
                maxWidth: "340px",
                aspectRatio: "1/1",
                transformStyle: "preserve-3d",
                transform: `rotateY(${calcMovement(1)}deg) rotateX(${-calcMovement(1, 10)}deg)`,
                transition: "transform 0.2s ease-out"
              }}
            >
              <div className="w-full h-full">
                {/* Using standard img instead of Next.js Image */}
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQFwx9_pSbHGzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715803087891?e=1751500800&v=beta&t=FFBUpPcuiMDUpwmfOA4zW7oFM46OKj1LtIYrY1ycvSE"
                  alt="Profile"
                  className="w-full h-full object-cover scale-105"
                  style={{ objectFit: "cover" }}
                />
                
                {/* Moving gradient overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"
                  style={{ 
                    transform: `translateX(${calcMovement(10)}px) translateY(${calcMovement(10, 5)}px)`,
                    transition: "transform 0.3s ease-out"
                  }}
                />
              </div>
              
              {/* Tech badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -top-3 -left-3 bg-background rounded-full shadow-lg p-2 flex items-center justify-center border-2 border-secondary/20"
              >
                <div className="flex space-x-1">
                  <Code className="h-4 w-4 text-secondary" />
                  <span className="text-xs font-medium">Developer</span>
                </div>
              </motion.div>
              
              {/* Experience badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -bottom-3 -right-3 bg-background rounded-full shadow-lg p-3 flex items-center justify-center border-2 border-primary/20"
              >
                <div className="text-center w-12">
                  <div className="text-xl font-bold text-primary">2+</div>
                  <div className="text-xs font-medium">Years</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Brief content section */}
          <motion.div 
            ref={contentRef}
            variants={containerVariants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="w-full md:w-3/5 space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">Hi, I'm <span className="text-primary">Alex Smith</span></h2>
              <div className="h-1 w-16 bg-primary rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-4">
                Full-stack developer passionate about creating modern, responsive web applications with over 2 years of professional experience.
              </p>
            </motion.div>
            
            {/* Skills */}
            <motion.div variants={itemVariants} className="pt-2">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.title}
                    whileHover={{ 
                      y: -4,
                      boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)",
                      transition: { duration: 0.2 }
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.title)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={classNames(
                      "relative bg-card rounded-lg shadow-sm border border-border overflow-hidden flex items-center px-4 py-3",
                      hoveredSkill === skill.title ? "border-primary/50" : ""
                    )}
                  >
                    {/* Background animation */}
                    <motion.div 
                      className={classNames("absolute inset-0 opacity-10", skill.bgClass)}
                      animate={hoveredSkill === skill.title ? 
                        { scale: 1.5, opacity: 0.15 } : 
                        { scale: 1, opacity: 0.1 }
                      }
                      transition={{ duration: 0.4 }}
                    />
                    
                    <div className={classNames("rounded-full w-8 h-8 flex items-center justify-center mr-3", skill.bgClass)}>
                      {skill.icon}
                    </div>
                    
                    <div>
                      <div className="font-medium text-sm">{skill.title}</div>
                      <div className="text-xs text-muted-foreground">{skill.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Highlights */}
            <motion.div variants={itemVariants} className="pt-2">
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-primary" />
                  <span className="font-medium text-sm">5+ Projects</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-secondary" />
                  <span className="font-medium text-sm">10+ Technologies</span>
                </div>
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <Button>
                <a href="/about" className="flex items-center">
                  More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="outline">
                <a href="/projects" className="flex items-center">
                  View Projects
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}