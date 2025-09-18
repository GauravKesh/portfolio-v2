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
} from "lucide-react";
import CallToAction from "@/components/sections/CallToAction";
import EducationSection from "@/components/sections/EducationSection";
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

const RESUME_ID = '1ZOQtn5N1lKTV5nj-jLjhxwpXfX4u8S4i';
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <motion.span
                className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                About Me
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                I'm <span className="text-primary">Gaurav</span>,<br />
                {/* Full Stack Developer */}
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground mb-8 max-w-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                I craft modern, high-performance web applications with a focus
                on user experience and clean code. With 1.5+ years of experience
                in web development, I specialize in React, TypeScript, and
                modern JavaScript frameworks.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                    },
                  },
                }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href={DOWNLOAD_URL}
                    download
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              <motion.div
                className="flex gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <a
                  href="https://github.com/gauravkesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/gkrcoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/gkrcoder_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Border animation */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-primary/20"
                  animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />

                {/* Main image */}
                <div className="absolute inset-4 overflow-hidden rounded-2xl bg-muted/20 border border-border">
                  <Image
                    src="/images/mine/gkrcoder.webp"
                    alt="Gaurav Kesh Roushan - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <motion.div
                  custom={0}
                  variants={decorativeItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute -top-6 -right-6 p-3 bg-background rounded-lg shadow-lg border border-border"
                >
                  <Code className="h-6 w-6 text-primary" />
                </motion.div>

                <motion.div
                  custom={1}
                  variants={decorativeItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute -bottom-6 -right-6 p-3 bg-background rounded-lg shadow-lg border border-border"
                >
                  <Monitor className="h-6 w-6 text-secondary" />
                </motion.div>

                <motion.div
                  custom={2}
                  variants={decorativeItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute -bottom-6 -left-6 p-3 bg-background rounded-lg shadow-lg border border-border"
                >
                  <Database className="h-6 w-6 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-6" ref={bioRef}>
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <span className="inline-block mb-4 px-5 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
              Biography
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Who I Am
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          {/* About Me */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="prose prose-base dark:prose-invert max-w-3xl mx-auto mb-20 space-y-6 leading-loose text-neutral-800 dark:text-neutral-200"
          >
            <p>
              I'm a passionate and impact-driven{" "}
              <strong>Full Stack Software Developer</strong> focused on building
              real-world solutions in <strong>health tech</strong>,{" "}
              <strong>education</strong>, <strong>AI</strong>, and{" "}
              <strong>scalable SaaS platforms</strong>.
            </p>

            <p>
              My technical stack includes <strong>React.js</strong>,{" "}
              <strong>Next.js</strong>, <strong>Node.js</strong>,{" "}
              <strong>Django</strong>, <strong>TypeScript</strong>,{" "}
              <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>. I
              specialize in <strong>full-stack development</strong>,{" "}
              <strong>API design</strong>, <strong>system architecture</strong>,
              and <strong>DevOps practices</strong>.
            </p>

            <p>
              With over <strong>300+ DSA problems solved</strong>, I’ve
              sharpened my algorithmic thinking and built a strong foundation in{" "}
              <strong>data structures</strong>,{" "}
              <strong>operating systems</strong>, <strong>networking</strong>,{" "}
              <strong>DBMS</strong>, and <strong>computer architecture</strong>.
            </p>

            <p>
              I’m currently an <strong>SDE Intern at CliniChat.ai</strong> and{" "}
              <strong>Eloquente AI</strong>, contributing to robust,
              production-grade systems in healthcare-AI. I previously led
              backend efforts at <strong>Accura Tequipment</strong>, improving
              performance, optimizing deployments, and integrating APIs
              effectively.
            </p>

            <p>
              As the{" "}
              <strong>
                Technical Lead of GDG On Campus at Presidency University
              </strong>
              , I mentor developers, conduct workshops, and drive tech community
              engagement. I was also a{" "}
              <strong>Top 50 Mentor in GirlScript Summer of Code 2024</strong>{" "}
              and a contributor to <strong>Script Winter of Code 2025</strong>.
            </p>

            <p>
              I thrive in dynamic environments, bring both execution and
              leadership skills, and aim to build{" "}
              <strong>scalable, efficient, and impactful systems</strong> that
              improve lives through technology.
            </p>

           
          </motion.div>

          {/* Skills */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className={classNames(
                  "p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all bg-background/50 backdrop-blur",
                  skill.bgClass
                )}
                variants={item}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  {skill.icon}
                  <h4 className="text-xl font-semibold">{skill.title}</h4>
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
    </div>
  );
}
