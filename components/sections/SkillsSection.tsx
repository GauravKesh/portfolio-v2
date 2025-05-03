'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { skillsData } from '@/data/skills'
import { Progress } from '@/components/ui/progress'

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I've worked with
          </p>
        </motion.div>

        <Tabs defaultValue={skillsData[0].name.toLowerCase()} className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              {skillsData.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name.toLowerCase()}
                  className="text-base px-6"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillsData.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name.toLowerCase()}
              className="mt-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2"
                      indicatorClassName="bg-gradient-to-r from-primary to-secondary"
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-6">Additional Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Webpack', 'Vite', 'Redux', 'Zustand', 'Material UI', 'SASS',
              'Netlify', 'Vercel', 'GitHub Actions', 'Jira', 'Figma', 'Adobe XD',
              'Responsive Design', 'Accessibility', 'SEO', 'Performance Optimization'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="bg-muted px-3 py-1.5 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}