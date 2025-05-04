"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { educationData } from "@/data/education";
import { GraduationCap } from "lucide-react";
import { Badge } from "../ui/badge";

export default function EducationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="education"
      className="py-24 px-4 md:px-6 bg-background dark:bg-secondary/10"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="text-sm font-medium mb-3 px-4 py-1.5">
            <GraduationCap className="h-4 w-4 mr-2" />
            Education
          </Badge>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Academic Background
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full mt-5"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-2 h-[calc(100%-6rem)] w-1 bg-border/40 rounded-full z-0">
            <div className="sticky top-1/2 w-full h-12 bg-gradient-to-b from-transparent via-primary/30 to-transparent blur-sm"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative  pl-16 md:pl-36"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-8 top-2 z-10 -translate-x-1/2">
                  <div className="h-5 w-5 rounded-full group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="h-4 w-4 ml-1" />
                  </div>
                </div>

                {/* Card Container */}
                <div className="relative bg-card hover:bg-card/80 border border-border/40 hover:border-primary/30 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                  {/* Top Bar */}
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-primary/50"></div>

                  {/* Period Badge */}
                  <div className="absolute top-0 left-0 -mt-3 -ml-3 bg-background px-3 py-2 rounded-full border border-border text-xs font-semibold shadow-sm">
                    {education.period}
                  </div>

                  {/* Card Content */}
                  <div className="grid grid-cols-1 md:grid-cols-12 p-6 md:p-8 gap-6">
                    <div className="md:col-span-9">
                      {/* Institution and Location */}
                      <div className="flex flex-col gap-1 mb-3">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {education.institution}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {education.location}
                        </span>
                      </div>

                      {/* Degree */}
                      <p className="text-base font-medium text-foreground mb-2">
                        {education.degree}
                      </p>

                      {/* Grade Badge */}
                      {education?.grade && (
                        <span className="inline-block text-xs font-medium bg-secondary/30 text-foreground px-3 py-1 rounded-full border border-border">
                          Grade: {education.grade}
                        </span>
                      )}
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
