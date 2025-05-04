"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/data/experience";
import { BriefcaseIcon, ArrowUpRight, Building2, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-24 px-4 md:px-6 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="text-sm font-medium mb-3 px-4 py-1.5">
            <BriefcaseIcon className="h-4 w-4 mr-2" />
            Career Path
          </Badge>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full mt-5"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 md:left-8 top-12 h-[calc(100%-6rem)] w-1 bg-border/40 rounded-full z-0">
            <div className="sticky top-1/2 w-full h-12 bg-gradient-to-b from-transparent via-primary/30 to-transparent blur-sm"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative pl-16 md:pl-36"
              >
               <div className="absolute left-4 md:left-8 top-12 z-10 -translate-x-1/2">
                    <div className="h-5 w-5 rounded-full  group-hover:border-primary group-hover:scale-110 transition-all duration-300"> <BriefcaseIcon className="h-4 w-4 ml-1" /></div>
                  </div>

                  

                <div className="relative bg-card hover:bg-card/80 border border-border/40 hover:border-primary/30 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                  {/* Color accent bar */}
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-primary/50"></div>
                  <div className="absolute top-0 left-0 -mt-3 -ml-3 bg-background px-3 py-3 rounded-full border border-border text-xs font-semibold">
                      {experience.period}
                    </div>
                  {/* Content */}
                  <div className="grid grid-cols-1 md:grid-cols-12 p-6 md:p-8 gap-6">
                    {/* Left Column - Date & Company */}
                    <div className="md:col-span-3 flex flex-col">
                      {/* <div className="text-sm font-semibold text-primary mb-1 uppercase tracking-wider">
                        {experience.period}
                      </div> */}
                      <div className="flex items-center text-lg font-medium mb-4">
                        <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{experience.company}</span>
                      </div>
                    </div>

                    {/* Right Column - Role & Details */}
                    <div className="md:col-span-9">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {experience.title}
                        </h3>
                        <div className="hidden md:flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="mr-1">View Details</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>

                      <ul className="text-muted-foreground text-sm space-y-2 mb-6 ml-5 list-disc">
                        {experience.description?.map((point, i) => (
                          <li key={i} className="leading-relaxed">{point}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border/40">
                        {experience.skills.map((skill, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className="text-xs font-medium px-3 py-1 bg-secondary/30 hover:bg-secondary/40 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}