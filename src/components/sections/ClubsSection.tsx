"use client";

import { motion } from "framer-motion";
import { clubsData } from "@/data/clubs";
import { Badge } from "../ui/badge";
import { Trophy, Users } from "lucide-react";

export default function ClubsSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.36 } },
  };

  return (
    <section id="clubs" className="py-12 px-4 md:px-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <Badge variant="outline" className="text-sm font-medium mb-3 px-4 py-1.5 inline-flex items-center gap-2">
            <Users className="h-4 w-4" /> Clubs
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold">Clubs & Extracurriculars</h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">Activities, leadership roles and memorable achievements outside formal academics.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="grid gap-4 md:grid-cols-3">
          {clubsData.map((c, idx) => (
            <motion.article key={idx} variants={item} className="rounded-2xl border border-border/40 bg-card p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold">{c.name}</h4>
                    {c.role && <span className="text-xs text-muted-foreground">{c.role}</span>}
                  </div>

                  {c.period && <div className="text-xs text-muted-foreground mt-1">{c.period}</div>}

                  {c.description && <p className="mt-3 text-sm text-foreground/90">{c.description}</p>}

                  {c.highlights?.length ? (
                    <ul className="mt-3 text-sm text-muted-foreground list-disc ml-5 space-y-1">
                      {c.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  ) : null}

                  {c.keySkills?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {c.keySkills.map((k, i) => (
                        <Badge key={i} variant="secondary" className="rounded-full px-2 py-1 text-xs">
                          {k}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
