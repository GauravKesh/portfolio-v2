"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { educationData } from "@/data/education";
import { GraduationCap, Star, ChevronDown, Check } from "lucide-react";
import { Badge } from "../ui/badge";

export default function EducationSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  function toggleAchievements(i: number) {
    setOpenIndexes((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  }
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

  const achList = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.06 },
    },
  };

  const achItem = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.18 } },
  };

  return (
    <section
      id="education"
      className="py-24 px-4 md:px-6 bg-background dark:bg-secondary/10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="text-sm font-medium mb-3 px-4 py-1.5 inline-flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Academic Background
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
            Highlights of formal education, achievements and key skills learned.
          </p>
        </motion.div>

        <div className="relative">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {educationData.map((education, index) => {
              const initials = education.institution
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")
                .toUpperCase();

              return (
                <motion.article
                  key={education.institution + index}
                  variants={itemVariants}
                  className="flex flex-col md:flex-row items-start gap-4 md:gap-6"
                  aria-labelledby={`edu-${index}-title`}
                >
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 text-primary font-bold text-lg">
                      {initials}
                    </div>
                  </div>

                  <div className="flex-1 bg-card border border-border/30 rounded-xl p-5 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 id={`edu-${index}-title`} className="text-lg font-semibold">
                          {education.institution}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{education.location}</p>
                      </div>

                      <time className="text-xs text-muted-foreground">{education.period}</time>
                    </div>

                    <p className="mt-3 text-sm font-medium text-foreground">{education.degree}</p>

                    {education.grade && (
                      <div className="mt-3">
                        <Badge variant="secondary" className="inline-flex items-center gap-2">
                          <Star className="h-3 w-3" /> {education.grade}
                        </Badge>
                      </div>
                    )}

                    <p className="mt-3 text-sm text-foreground/90">{education.description}</p>

                    {education.achievements?.length > 0 && (
                      <div className="mt-3 text-sm text-muted-foreground">
                        <button
                          onClick={() => toggleAchievements(index)}
                          aria-expanded={openIndexes.includes(index)}
                          className="w-full flex items-center justify-between gap-3 py-2 px-2 rounded-md hover:bg-muted transition-colors"
                        >
                          <span className="font-medium">Achievements ({education.achievements.length})</span>
                          <motion.span
                            animate={{ rotate: openIndexes.includes(index) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {openIndexes.includes(index) && (
                            <motion.ul
                              key={`ach-${index}`}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={achList}
                              className="mt-2 list-none space-y-2"
                            >
                              {education.achievements.map((a, i) => (
                                <motion.li
                                  key={i}
                                  variants={achItem}
                                  className="flex items-start gap-3 rounded-md p-2 hover:bg-muted/60 transition-colors"
                                >
                                  <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.03, type: 'spring', stiffness: 300 }}
                                    className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary"
                                  >
                                    <Check className="h-3 w-3" />
                                  </motion.span>
                                  <span className="text-sm">{a}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {education.keySkills?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {education.keySkills.slice(0, 8).map((skill, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary/10 border border-border text-muted-foreground">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
