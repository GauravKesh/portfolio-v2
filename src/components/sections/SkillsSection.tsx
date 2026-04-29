/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillsData } from "@/data/skills";

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    if (inView && skillsData.length > 0) {
      setActiveCategory(skillsData[0].name);
    }
  }, [inView]);

  const activeCategoryData =
    skillsData.find((category) => category.name === activeCategory) ??
    skillsData[0];

  const totalSkills = skillsData.reduce(
    (count, category) => count + category.skills.length,
    0,
  );

  return (
    <section
      id="skills"
      className="scroll-mt-28 relative overflow-hidden px-4 py-20 pt-[100px] md:px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-12 h-72 w-72 rounded-full bg-primary/15 blur-3xl opacity-70" />
        <div className="absolute right-[-7rem] top-32 h-[26rem] w-[26rem] rounded-full bg-secondary/10 blur-3xl opacity-70" />
        <div className="absolute bottom-[-5rem] left-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(0,0,0,0.05))]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 overflow-hidden rounded-[2rem] border border-border/60 bg-background/75 p-6 shadow-[0_24px_90px_-55px_rgba(0,0,0,0.6)] backdrop-blur-xl md:mb-12 md:p-8"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Skills
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                A modern stack, organized for fast scanning.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                The tools below reflect the environments I build in, the systems
                I ship, and the workflows I keep sharp.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:w-[22rem]">
              {[
                { label: "Categories", value: skillsData.length },
                { label: "Skills", value: totalSkills },
                {
                  label: "Active",
                  value: activeCategoryData?.skills.length ?? 0,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/60 bg-gradient-to-b from-background to-muted/30 p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-semibold text-foreground md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max flex-wrap justify-start gap-3 md:justify-center">
              {skillsData.map((category) => (
                <motion.button
                  key={category.name}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category.name)}
                  className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 md:px-5 md:py-3 md:text-base ${
                    activeCategory === category.name
                      ? "border-primary/40 bg-primary text-primary-foreground shadow-[0_10px_30px_-16px_rgba(0,0,0,0.6)]"
                      : "border-border/70 bg-background/70 text-muted-foreground shadow-sm hover:border-primary/30 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span>{category.name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                      activeCategory === category.name
                        ? "bg-white/15 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {category.skills.length}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {activeCategoryData && (
              <motion.div
                key={activeCategoryData.name}
                initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden rounded-[2rem] border border-border/60 bg-background/75 p-5 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.65)] backdrop-blur-xl md:p-6"
              >
                <div className="mb-6 flex flex-col gap-3 border-b border-border/60 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Featured category
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {activeCategoryData.name}
                    </h3>
                  </div>
               
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                  {activeCategoryData.skills.map((skill, index) => (
                    <motion.div
                      key={`${skill.name}-${index}`}
                      layout
                      whileHover={{ y: -6, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.03,
                        type: "spring",
                        stiffness: 220,
                        damping: 22,
                      }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-gradient-to-b from-background to-muted/30 p-4 shadow-sm transition-colors"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative flex h-full min-h-[150px] flex-col items-center justify-center text-center">
                        <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-border/60 bg-background/80 shadow-inner shadow-black/5">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                          <motion.div
                            className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/10"
                            animate={
                              hoveredSkill === skill.name
                                ? { opacity: [0, 0.45, 0] }
                                : { opacity: 0 }
                            }
                            transition={{
                              duration: 1.2,
                              repeat:
                                hoveredSkill === skill.name ? Infinity : 0,
                              ease: "easeInOut",
                            }}
                          />
                        </div>

                        <p className="text-sm font-semibold tracking-tight text-foreground">
                          {skill.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
