"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPostgresql } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import { Spotlight } from "../ui/Spotlight";
import BackgroundUILayer from "../ui/backgrounduilayer";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/gauravkesh", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/gkrcoder", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/gkrcoder_", label: "Twitter" },
];

const TECH_STACK = [
  { icon: SiTypescript, label: "TypeScript", color: "text-sky-500" },
  { icon: SiReact, label: "React", color: "text-sky-400" },
  { icon: SiNextdotjs, label: "Next.js", color: "text-neutral-300" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-400" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const calcParallax = (strength = 15) => ({
    x: (mousePos.x / window.innerWidth - 0.5) * strength,
    y: (mousePos.y / window.innerHeight - 0.5) * strength,
  });

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center py-24 px-4 md:px-6 overflow-hidden"
    >
      {/* ── Background layer ── */}
     <BackgroundUILayer/>

      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Left: Text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7 order-2 lg:order-1 lg:col-span-7"
          >
            {/* Greeting pill */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
                <motion.span
                  animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block origin-bottom"
                >
                  👋
                </motion.span>
                Hello, Buddy
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <AnimatedText
                  text="Gaurav Kesh Roushan"
                  className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                />
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground">
                <Typewriter
                  words={[
                    "Full-Stack Developer",
                    "Backend Developer",
                    "Open Source Contributor",
                    "Tech Community Lead",
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={90}
                  delaySpeed={2000}
                />
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed"
            >
              I&apos;m a{" "}
              <span className="text-foreground font-medium">Full-stack software developer</span>{" "}
              passionate about building{" "}
              <span className="text-foreground font-medium">scalable</span> solutions in{" "}
              <span className="text-foreground font-medium">health tech</span>,{" "}
              <span className="text-foreground font-medium">AI</span>, and{" "}
              <span className="text-foreground font-medium">SaaS</span>. I focus on creating{" "}
              <span className="text-foreground font-medium">robust, production-ready systems</span>{" "}
              that deliver <span className="text-foreground font-medium">real-world impact</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" asChild>
                  <Link href="/about" className="flex items-center gap-2">
                    View More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </motion.div>

              {/* Social links */}
              <div className="flex items-center gap-2 ml-1">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-border/60 bg-muted/20 hover:bg-muted/40 hover:border-primary/30 transition-colors"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Tech stack */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground uppercase tracking-widest mr-1">Stack</span>
              {TECH_STACK.map(({ icon: Icon, label, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-muted/20 px-3 py-1 text-xs font-medium cursor-default"
                >
                  <Icon className={`h-3.5 w-3.5 ${color}`} />
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative order-1 lg:order-2 lg:col-span-5 flex items-center justify-center"
          >
            {/* Parallax container */}
            <motion.div
              animate={calcParallax(8)}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="relative"
            >
              {/* Decorative ring 1 */}
              <motion.div
                className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Decorative ring 2 */}
              <motion.div
                className="absolute -inset-12 rounded-full border border-secondary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />

              {/* Glowing backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl scale-110" />

              {/* Profile image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl"
              >
                <Image
                  src="/images/mine/gkrcoder.webp"
                  alt="Gaurav Kesh Roushan"
                  fill
                  priority
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                  className="object-cover"
                />
              </motion.div>

              {/* Floating badge — experience */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-8 flex items-center gap-2 rounded-2xl border border-border/60 bg-background/90 backdrop-blur-sm px-4 py-2.5 shadow-lg"
              >
                <span className="text-xl"></span>
                 <div>
                  {/* <p className="text-xs text-muted-foreground leading-none mb-0.5">Experience</p> */}
                  <p className="text-sm font-semibold leading-none">Builder</p>
                </div>
              </motion.div>

              {/* Floating badge — projects */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-4 bottom-10 flex items-center gap-2 rounded-2xl border border-border/60 bg-background/90 backdrop-blur-sm px-4 py-2.5 shadow-lg"
              >
                <span className="text-xl">🚀</span>
                <div>
                  <p className="text-xs text-muted-foreground leading-none mb-0.5">Projects</p>
                  <p className="text-sm font-semibold leading-none">10+ Built</p>
                </div>
              </motion.div>

              {/* Status dot */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute right-2 bottom-6 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/90 backdrop-blur-sm px-3 py-1.5 shadow-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-medium text-green-500">Available</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link href="/#projects" aria-label="Scroll to projects">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}