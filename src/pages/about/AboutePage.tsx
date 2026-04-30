"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowRight,
  Code,
  Monitor,
  Lightbulb,
  Database,
  Layers,
  ExternalLink,
  Layout,
  Server,
  Terminal,
  Trophy,
  BriefcaseIcon,
} from "lucide-react";
import { experienceData } from "@/data/experience";
import CallToAction from "@/components/sections/CallToAction";
import EducationSection from "@/components/sections/EducationSection";
import ClubsSection from "@/components/sections/ClubsSection";
const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

const skills = [
  {
    icon: <Layout className="h-5 w-5 text-primary" />,
    title: "Frontend",
    description: "React, Next.js, Tailwind",
    bgClass: "bg-primary/10",
    iconClass: "text-primary",
  },
  {
    icon: <Server className="h-5 w-5 text-secondary" />,
    title: "Backend",
    description: "Node.js, Express, APIs",
    bgClass: "bg-secondary/10",
    iconClass: "text-secondary",
  },
  {
    icon: <Terminal className="h-5 w-5 text-primary" />,
    title: "DevOps",
    description: "CI/CD, AWS, Docker",
    bgClass: "bg-primary/10",
    iconClass: "text-primary",
  },
];

const RESUME_ID = "1ZOQtn5N1lKTV5nj-jLjhxwpXfX4u8S4i";
const PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_ID}/preview`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;

export default function AboutPage() {
  // References for scroll animations
  const containerRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const decorativeItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div
          className="absolute right-[10%] top-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          style={{ y, scale }}
        />
        <motion.div
          className="absolute left-[5%] bottom-[30%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
          style={{ y, rotate }}
        />
      </div>

      {/* Hero Section - Storytelling */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={staggerContainer}
              className="order-2 lg:order-1 lg:col-span-7 lg:pl-6"
            >
              <motion.span
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                variants={item}
              >
                <BriefcaseIcon className="h-4 w-4" /> About
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-foreground"
                variants={item}
              >
                I design and build meaningful
                <span className="text-primary">
                  {" "}
                  products that solve real problems.
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground mb-6 max-w-xl"
                variants={item}
              >
                My work sits at the intersection of product, engineering, and
                empathy. I start with the user, solve the hard problems, and
                ship reliable systems that people enjoy using. Below is a
                concise story of how I got here.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 items-center"
                variants={item}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Let’s talk
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href={DOWNLOAD_URL}
                    download
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" /> Resume
                  </a>
                </Button>

                <div className="ml-3 flex items-center gap-3">
                  <a
                    href="https://github.com/gauravkesh"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/gkrcoder"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative order-1 lg:order-2 lg:col-span-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/6 to-secondary/4 blur-[30px] -z-10" />

                {/* Decorative icon collage instead of photo */}
                <div className="relative rounded-2xl border border-border bg-muted/6 p-6 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-border shadow-sm">
                      <Code className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary/10 to-secondary/5 border border-border shadow-sm">
                      <Monitor className="h-7 w-7 text-secondary" />
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 border border-border shadow-sm">
                      <Database className="h-7 w-7 text-emerald-600" />
                    </div>

                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-border shadow-sm">
                      <Layout className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary/10 to-secondary/5 border border-border shadow-sm">
                      <Server className="h-7 w-7 text-secondary" />
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-border shadow-sm">
                      <Terminal className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  {/* small center emblem */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-background/90 border border-border shadow-lg flex items-center justify-center">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="0.8"
                          opacity="0.12"
                        />
                        <path
                          d="M7 12l3 3 7-7"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative stat pills overlapping the collage */}
                <div className="absolute -bottom-6 left-1/2 w-[92%] -translate-x-1/2 flex justify-between gap-3">
                  <div className="rounded-xl bg-background/95 border border-border p-3 text-center shadow-lg w-1/3 backdrop-blur-sm">
                    <div className="text-lg font-extrabold">1.5+</div>
                    <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground mt-1">
                      Years
                    </div>
                  </div>
                  <div className="rounded-xl bg-background/95 border border-border p-3 text-center shadow-lg w-1/3 backdrop-blur-sm">
                    <div className="text-lg font-extrabold">20+</div>
                    <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground mt-1">
                      Projects
                    </div>
                  </div>
                  <div className="rounded-xl bg-background/95 border border-border p-3 text-center shadow-lg w-1/3 backdrop-blur-sm">
                    <div className="text-lg font-extrabold">Mentor</div>
                    <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground mt-1">
                      Community
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio / Journey Section */}
      <section className="py-20 px-6" ref={bioRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeIn}
            className="mb-12 text-center"
          >
            <span className="inline-block mb-4 px-5 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
              Biography
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
              My journey so far
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              A short narrative of the roles, learnings, and product-focused
              outcomes that shaped my approach to engineering and design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={item} className="space-y-4">
                <div className="p-4 rounded-xl border border-border/40 bg-primary/5">
                  <p className="text-sm leading-relaxed">
                    <strong>Full Stack Developer</strong> building real-world
                    solutions in <strong>HealthTech</strong>,{" "}
                    <strong>EdTech</strong>, and <strong>AI</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border/40 bg-secondary/5">
                  <p className="text-sm leading-relaxed">
                    End-to-end product development  from{" "}
                    <strong>prototyping</strong> to{" "}
                    <strong>scalable production systems</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border/40 bg-emerald-500/5">
                  <p className="text-sm leading-relaxed">
                    <strong>Mentor & contributor</strong> — helping peers
                    grow through workshops and open source.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="space-y-3">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-4 w-4 text-primary mt-1" />
                  <p className="text-sm">
                    <strong>Product-first:</strong> Build what matters
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="h-4 w-4 text-secondary mt-1" />
                  <p className="text-sm">
                    <strong>Systems:</strong> Scalable & maintainable
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Trophy className="h-4 w-4 text-emerald-600 mt-1" />
                  <p className="text-sm">
                    <strong>Community:</strong> Mentor & teach
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <div className="rounded-2xl border border-border/50 bg-background/50 p-6">
                <h4 className="text-lg font-semibold mb-2">
                  Experience highlights
                </h4>
                <ul className="text-sm text-muted-foreground space-y-3">
                  <li>
                    <strong>CliniChat.ai</strong> — SDE Intern: Contributed to
                    healthcare AI systems and backend services.
                  </li>
                  <li>
                    <strong>Eloquente AI</strong> — Full Stack: Built end-to-end
                    features and integrations.
                  </li>
                  <li>
                    <strong>Accura Tequipment</strong> — Backend: Improved
                    deployment performance and observability.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border/50 bg-background/50 p-6">
                <h4 className="text-lg font-semibold mb-2">Core skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="rounded-full px-3 py-1.5 text-sm"
                    >
                      {s.title}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Polished Skills Grid */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={staggerContainer}
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className={classNames(
                  "p-6 rounded-2xl border border-border/50 transition-all bg-background/50 backdrop-blur",
                  skill.bgClass,
                )}
                variants={item}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-background/80 border border-border">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{skill.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Academic Background */}
      <EducationSection />
      <ClubsSection />
    </div>
  );
}
