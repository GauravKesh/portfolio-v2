"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/data/experience";
import { BriefcaseIcon, Calendar, Building2, ArrowUpRight } from "lucide-react";
import CallToAction from "@/components/sections/CallToAction";

export default function ProfessionalExperience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  const heroStats = [
    {
      label: "Roles",
      value: experienceData.length,
    },
    {
      label: "Skills showcased",
      value: experienceData.reduce((count, item) => count + item.skills.length, 0),
    },
    {
      label: "Latest position",
      value: experienceData[0]?.title ?? "N/A",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 240, damping: 24 },
    },
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-24 md:px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-12 h-80 w-80 rounded-full bg-primary/15 blur-3xl opacity-70" />
        <div className="absolute right-[-7rem] top-28 h-[30rem] w-[30rem] rounded-full bg-secondary/10 blur-3xl opacity-70" />
        <div className="absolute bottom-[-6rem] left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_20%,transparent_82%,rgba(0,0,0,0.05))]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 18, scale: 0.995 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 180, damping: 18 } },
          }}
          className="overflow-hidden rounded-[2rem] border border-border/40 bg-gradient-to-br from-background/70 to-muted/5 p-6 md:p-8 lg:p-10 shadow-lg backdrop-blur-md"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
                <BriefcaseIcon className="h-4 w-4 text-primary" />
                Professional experience
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                A career timeline built like a product story.
              </h1>

              <p className="mt-4 max-w-xl text-lg leading-7 text-muted-foreground">
                A compact view of the roles I’ve held, the systems I’ve helped ship, and the
                work patterns I’ve built through internships and full-stack delivery.
              </p>

              {/* <div className="mt-6 flex flex-wrap gap-3">
                {experienceData.map((experience) => (
                  <Badge
                    key={experience.company}
                    variant="outline"
                    className="rounded-full border-border/60 bg-muted/10 px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted/20"
                  >
                    {experience.company}
                  </Badge>
                ))}
              </div> */}
            </div>

            {/* <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:w-[26rem]">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/95 p-4 text-center shadow-sm"
                >
                  <div className="text-3xl font-extrabold leading-none text-foreground md:text-4xl lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative mt-10"
        >
          <div className="absolute left-5 top-4 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-transparent via-border to-transparent md:block" />

          <div className="space-y-6 md:space-y-8">
            {experienceData.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="relative"
              >
                <div className="grid gap-4 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-6">
                  <div className="relative hidden md:flex md:justify-center">
                    <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/90 shadow-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 shadow-[0_18px_60px_-45px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-[0_24px_80px_-50px_rgba(0,0,0,0.65)]">
                    <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary/40" />

                    <div className="p-5 md:p-6 lg:p-7">
                      <div className="mb-5 flex flex-col gap-4 border-b border-border/60 pb-5 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            <Building2 className="h-3.5 w-3.5 text-primary" />
                            {experience.company}
                          </div>
                          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                            {experience.title}
                          </h2>
                          <p className="mt-2 text-sm text-muted-foreground md:text-base">
                            {experience.location}
                          </p>
                        </div>

                        <Badge
                          variant="outline"
                          className="w-fit rounded-full border-border/70 bg-background/80 px-3 py-1.5 text-sm text-muted-foreground"
                        >
                          {experience.period}
                        </Badge>
                      </div>

                      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Highlights
                          </div>
                          <ul className="space-y-3 text-sm leading-7 text-foreground/85 md:text-base">
                            {experience.description.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-[1.5rem] border border-border/60 bg-muted/20 p-4 md:p-5">
                          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Core stack
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="rounded-full border border-border/50 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

      
      </div>
    </section>
  );
}
