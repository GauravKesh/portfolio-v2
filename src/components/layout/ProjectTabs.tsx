"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  FileText,
  Github,
  ExternalLink,
  Layers,
  Tag,
  ListChecks,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";
import ReadmeViewer from "../docs/ReadmeViewer";

type Tab = "overview" | "readme";

interface ProjectTabsProps {
  project: Project;
}

export default function ProjectTabs({ project }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const tabs: { id: Tab; label: string; icon: React.ReactNode; disabled?: boolean }[] = [
    {
      id: "overview",
      label: "Overview",
      icon: <LayoutGrid className="h-4 w-4" />,
    },
    {
      id: "readme",
      label: "README",
      icon: <FileText className="h-4 w-4" />,
      disabled: !project.doc_url,
    },
  ];

  return (
    <section className="w-full overflow-hidden rounded-3xl border border-border/70 bg-background/85 shadow-[0_24px_80px_-45px_rgba(0,0,0,0.55)] backdrop-blur-xl">
      <div className="border-b border-border/60 bg-gradient-to-r from-muted/50 via-background to-muted/30 px-4 py-4 md:px-6 md:py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground">
              {/* <Sparkles className="h-3.5 w-3.5 text-primary" /> */}
              Project Details
            </div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Project panel</h2>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Switch between a concise overview and the live documentation preview.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full px-3 py-1.5">
              {project.category}
            </Badge>
            <Badge variant="secondary" className="rounded-full px-3 py-1.5">
              {project.features.length} features
            </Badge>
            <Badge variant="secondary" className="rounded-full px-3 py-1.5">
              {project.tags.length} technologies
            </Badge>
          </div>
        </div>
      </div>

      <div className="px-3 pt-3 md:px-4 md:pt-4">
        <div className="inline-flex w-full flex-wrap gap-2 rounded-2xl bg-muted/40 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => !tab.disabled && setActiveTab(tab.id)}
              disabled={tab.disabled}
              className={
                `relative flex min-w-[120px] flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ` +
                (tab.disabled
                  ? "cursor-not-allowed text-muted-foreground/40"
                  : activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm ring-1 ring-border/80"
                    : "text-muted-foreground hover:bg-background/60 hover:text-foreground")
              }
            >
              {tab.icon}
              {tab.label}
              {tab.disabled && (
                <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                  N/A
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="p-4 md:p-6"
        >
          {activeTab === "overview" && <OverviewTab project={project} />}
          {activeTab === "readme" && project.doc_url && (
            <div className="rounded-2xl border border-border/70 bg-muted/20 p-3 shadow-sm md:p-4">
              <ReadmeViewer docUrl={project.doc_url} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function OverviewTab({ project }: { project: Project }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
      <div className="space-y-6">
        <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-background to-muted/25 p-5 md:p-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Layers className="h-3.5 w-3.5" />
            Overview
          </div>
          <p className="text-base leading-7 text-foreground/85 md:text-lg">
            {project.description}
          </p>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            A focused summary of the project, its core stack, the main features, and direct links.
          </p>
        </div>

        {project.features.length > 0 && (
          <div className="rounded-2xl border border-border/70 bg-background p-5 md:p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-primary/10 p-2 text-primary">
                <ListChecks className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Features
                </h3>
                <p className="text-xs text-muted-foreground">Highlights from the implementation</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.22 }}
                  className="rounded-xl border border-border/60 bg-muted/30 p-4 text-sm text-foreground/80 shadow-sm"
                >
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-border/70 bg-background p-5 md:p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-primary/10 p-2 text-primary">
              <Github className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Project Links
              </h3>
              <p className="text-xs text-muted-foreground">Open source and deployment entry points</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {project.githubUrl ? (
              <Button variant="outline" className="justify-start gap-2 rounded-xl px-4" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </Button>
            ) : null}
            {project.demoUrl ? (
              <Button className="justify-start gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 text-primary-foreground hover:opacity-95" asChild>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            ) : null}
            {!project.githubUrl && !project.demoUrl && (
              <p className="text-sm text-muted-foreground">No public links are available for this project.</p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-border/70 bg-gradient-to-b from-muted/35 to-background p-5 md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Snapshot
              </h3>
              <p className="text-xs text-muted-foreground">At a glance</p>
            </div>
            <div className="rounded-full border border-border/60 bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.doc_url ? "README available" : "README unavailable"}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <InfoCard label="Category" value={project.category} />
            <InfoCard label="Tags" value={`${project.tags.length}`} />
            <InfoCard label="Features" value={`${project.features.length}`} />
            <InfoCard label="Docs" value={project.doc_url ? "Live" : "None"} />
          </div>
        </div>

        <div className="rounded-2xl border border-border/70 bg-background p-5 md:p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-primary/10 p-2 text-primary">
              <Tag className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Technology Stack
              </h3>
              <p className="text-xs text-muted-foreground">Tools and frameworks used in the build</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-full border border-border/60 bg-primary/10 px-3 py-1.5 text-sm text-primary hover:bg-primary/15"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-background p-4 shadow-sm">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-foreground">{value}</div>
    </div>
  );
}