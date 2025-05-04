"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { educationData } from "@/data/education";
import { GraduationCap } from "lucide-react";
import { Badge } from "../ui/badge";

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="education"
      className="py-20 px-4 md:px-6 bg-background dark:bg-secondary/10"
    >
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
            My academic background and educational journey
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline vertical line */}
          <div className="absolute left-0 md:left-1/2 md:-ml-[1px] top-0 h-full w-[2px] bg-border dark:bg-border/60 md:translate-x-0 z-0"></div>

          {/* Timeline items */}
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 mt-1.5 h-5 w-5  my-3 z-1" ><GraduationCap className="h-5 w-5 text-primary" /></div>

              {/* Card content */}
              <div
                className={`bg-card border border-border rounded-2xl shadow-sm p-6 m-5 ${
                  index % 2 === 0
                    ? "md:pr-10 md:text-right"
                    : "md:pl-10 md:order-2"
                }`}
              >
                <div className="flex items-center justify-between md:justify-end mb-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">
                      {education.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {education.institution}
                  <span className="text-muted-foreground font-normal">
                    {" "}
                    {education.location}
                  </span>
                </h3>

                <p className="text-sm text-primary font-medium mb-1">
                  {education.degree}
                </p>

                {/* <ul className="text-sm space-y-1 text-muted-foreground">
                  {education.achievements.map((item, i) => (
                    <span
                      key={i}
                      className="inline-block rounded-full border border-accent bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </ul> */}

                {/* <div className="flex flex-wrap gap-2 mt-3"> */}
                  {/* {education.keySkills?.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs border-muted-foreground/30 text-muted-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div> */}
              </div>

              {/* Balance column for alignment */}
              <div className={index % 2 === 0 ? "md:order-2" : ""}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
