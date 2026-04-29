"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import SkillsSection from "@/components/sections/SkillsSection";
import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/skills";

export default function Skills() {
  const totalSkills = skillsData.reduce(
    (count, category) => count + category.skills.length,
    0,
  );

  const strongestCategory = skillsData.reduce((best, category) => {
    if (!best || category.skills.length > best.skills.length) {
      return category;
    }

    return best;
  }, skillsData[0]);

  const heroStats = [
    { label: "Categories", value: skillsData.length },
    { label: "Skills", value: totalSkills },
    { label: "Top category", value: strongestCategory?.name ?? "N/A" },
  ];

  const highlightTags = skillsData.slice(0, 4).map((category) => category.name);

  return (
    <main className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5rem] top-[-4rem] h-80 w-80 rounded-full bg-primary/15 blur-3xl opacity-70" />
        <div className="absolute right-[-6rem] top-20 h-[28rem] w-[28rem] rounded-full bg-secondary/10 blur-3xl opacity-70" />
        <div className="absolute bottom-[-7rem] left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%,transparent_84%,rgba(0,0,0,0.06))]" />
      </div>

      {/* <section className="relative px-4 pb-14 pt-28 md:px-6 md:pt-32">
        <div className="container relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="overflow-hidden rounded-[2.5rem] border border-border/60 bg-background/80 p-6 shadow-[0_30px_110px_-65px_rgba(0,0,0,0.72)] backdrop-blur-xl md:p-8 lg:p-10"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Skill overview
                </div>
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-7xl">
                  Modern tools, arranged for a faster read.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                  A focused snapshot of the technologies I use to design,
                  build, and ship polished digital products.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {highlightTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full border-border/70 bg-background/80 px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:w-[24rem]">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.35rem] border border-border/60 bg-gradient-to-b from-background to-muted/30 p-4 text-center shadow-sm"
                  >
                    <div className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-[1.4rem] border border-border/60 bg-muted/20 px-4 py-4 text-sm text-muted-foreground md:px-5">
              <ArrowDownRight className="h-4 w-4 shrink-0 text-primary" />
              <p>
                Scroll to explore each category. The active set below keeps the
                interface calm and easy to scan.
              </p>
            </div>
          </motion.div>
        </div>
      </section> */}

      <div className="relative z-10 px-4 pb-20 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <SkillsSection />
        </div>
      </div>
    </main>
  );
}
