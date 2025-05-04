'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Terminal, Server, Layout } from 'lucide-react'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-background ">
      <div className="container mx-auto ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:ml-auto overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4E03AQFwx9_pSbHGzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715803087891?e=1751500800&v=beta&t=FFBUpPcuiMDUpwmfOA4zW7oFM46OKj1LtIYrY1ycvSE"
                alt="About Me"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full blur-xl" />
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 2 years of experience
                creating modern web applications. I enjoy solving complex problems and turning ideas
                into reality through elegant code. My journey in software development
                started when I built my first website at the age of 15, and I've been
                hooked ever since.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-card p-4 rounded-lg shadow-sm border border-border"
              >
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Frontend</h4>
                <p className="text-sm text-muted-foreground">
                  Building responsive, accessible interfaces with modern frameworks
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-card p-4 rounded-lg shadow-sm border border-border"
              >
                <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Backend</h4>
                <p className="text-sm text-muted-foreground">
                  Creating scalable server-side applications and RESTful APIs
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-card p-4 rounded-lg shadow-sm border border-border"
              >
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">DevOps</h4>
                <p className="text-sm text-muted-foreground">
                  Implementing CI/CD pipelines and cloud infrastructure
                </p>
              </motion.div>
            </div>
            
            <div className="pt-4">
              <Button asChild>
                <Link href="/resume">
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}