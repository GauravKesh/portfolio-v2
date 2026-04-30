"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { openSource } from "@/data/openSource";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type Props = {
  limit?: number;
};

export default function OpenSourceSection({ limit }: Props) {
  const items = typeof limit === "number" ? openSource.slice(0, limit) : openSource;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const totalOrgs = openSource.length;
  const mentors = openSource.filter((o) => o.role === "Mentor").length;
  const prs = openSource.filter((o) => o.links?.pr).length;

  return (
    <section id="open-source" className="scroll-mt-28 relative overflow-hidden px-4 py-20 pt-[100px] md:px-6">
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
            <div className="max-w-3xl text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Open Source
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Community contributions & mentorship
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                Selected open-source contributions, PRs and mentoring roles that improved projects and docs.
              </p>
            </div>

            <div className="w-full hidden sm:block">
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                { label: "Organizations", value: totalOrgs },
                { label: "Mentor roles", value: mentors },
                { label: "PRs", value: prs },
              ].map((stat) => (
                <div key={stat.label} className="flex w-full items-center justify-center">
                  <div className="w-full max-w-xs rounded-2xl border border-border/60 bg-gradient-to-b from-background to-muted/30 p-4 text-center shadow-sm">
                    <div className="text-2xl font-semibold text-foreground sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-xs  sm:font-semibold uppercase tracking-wide text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.organization} className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border/60 transition-all duration-300 shadow-[0_16px_50px_-35px_rgba(0,0,0,0.45)]" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))", backdropFilter: "blur(12px)" }}>
              <div className="relative p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-foreground">{item.organization}</div>
                    <div className="text-sm text-muted-foreground">{item.role} • {item.period}</div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{item.description}</p>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <div className="rounded-2xl border border-border/60 bg-muted/25 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Top contributions</div>
                    <ul className="mt-2 space-y-1 text-sm text-foreground/85">
                      {item.contributions.slice(0, 3).map((c) => (
                        <li key={c} className="flex gap-2 items-start"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" /> <span className="line-clamp-2">{c}</span></li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.slice(0, 4).map((t) => (
                      <Badge key={t} variant="outline" className="text-xs border-border/70 bg-background/80">{t}</Badge>
                    ))}
                    {item.tech.length > 4 && <Badge variant="outline" className="text-xs border-dashed border-border/70 bg-background/80">+{item.tech.length - 4}</Badge>}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex gap-3">
                {item.links?.pr ? (
                  <a href={item.links.pr} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="border-border/70"> <ExternalLink className="h-4 w-4" /> PR</Button>
                  </a>
                ) : (
                  <Button size="sm" variant="outline" className="border-border/70">No PR</Button>
                )}

                {item.links?.repo && (
                  <a href={item.links.repo} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="group rounded-full bg-gradient-to-r from-primary to-secondary shadow-md shadow-primary/20 hover:opacity-9">Repo</Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
        {typeof limit === "number" && openSource.length > limit && (
          <div className="mt-8 text-center">
            <a href="/open-source">
              <Button className="bg-gradient-to-r from-primary to-secondary px-6">
                View all contributions
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
