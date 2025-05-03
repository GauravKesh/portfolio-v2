'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Badge } from '@/components/ui/badge'
import { experienceData } from '@/data/experience'
import { BriefcaseIcon } from 'lucide-react'

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            My professional journey and the companies I've worked with
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:-ml-[1px] top-0 h-full w-[2px] bg-border dark:bg-border/50 md:translate-x-0"></div>

          {/* Timeline items */}
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              {/* Timeline bullet */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 mt-1.5 h-5 w-5 rounded-full bg-background dark:bg-background border-2 border-primary z-10"></div>

              {/* Content */}
              <div className={`${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'} pl-8 md:pl-0`}>
                <div className="inline-flex items-center mb-1">
                  <BriefcaseIcon className="md:hidden h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{experience.period}</span>
                </div>
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-base text-muted-foreground mb-2">
                  {experience.company} • {experience.location}
                </div>
                <p className="text-muted-foreground mb-3">{experience.description}</p>
                <div className="flex flex-wrap gap-2 md:justify-end md:justify-start">
                  {experience.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Empty div for timeline balance */}
              <div className={index % 2 === 0 ? 'md:order-2' : ''}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}