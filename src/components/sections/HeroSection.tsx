"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { Spotlight } from "../ui/Spotlight";

export default function HeroSection() {
  const [ripples, setRipples] = useState<any[]>([]);

  // Function to handle the click and create the ripple
  const createRipple = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const ripple = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, ripple]);

    // Remove the ripple after the animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 600); // match the animation duration
  };
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center py-20 px-4 md:px-6 overflow-hidden"
      onClick={createRipple}
    >
      <div className="absolute inset-0 pointer-events-none">
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              top: ripple.y - 50, // to center the ripple
              left: ripple.x - 50, // to center the ripple
              width: 100, // initial size of the ripple
              height: 100, // initial size of the ripple
            }}
            animate={{
              scale: [1, 3], // ripple grows
              opacity: [0.3, 0], // ripple fades out
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Bubbles */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-secondary/5 dark:bg-secondary/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        {/* Additional floating circles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-accent/10 dark:bg-accent/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-tertiary/10 dark:bg-tertiary/15"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
        {/* SVG bubbles */}

        <svg
          className="absolute top-40 right-40 w-12 h-12 opacity-40 animate-ping text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="6" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6 lg:order-1 order-2"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary font-medium flex items-center gap-2"
              >
                Hello, my name is
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="inline-block origin-bottom"
                >
                  👋
                </motion.span>
              </motion.p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <AnimatedText
                  text="Gaurav Kesh Roushan"
                  className="text-foreground"
                />
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground">
                <span className="text-muted-foreground">
                  <Typewriter
                    words={[
                      "Full-Stack Developer",
                      "Backend Developer",
                      "Open Source Contributor",
                      "Tech Community Lead",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={90}
                    delaySpeed={2000}
                  />
                </span>
              </h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-muted-foreground max-w-xl text-lg"
            >
              I'm a{" "}
              <span className="text-foreground font-medium">
                Full-stack software developer
              </span>{" "}
              passionate about building
              <span className="text-foreground font-medium px-1">
                scalable
              </span>{" "}
              solutions in
              <span className="text-foreground font-medium px-1">
                health tech
              </span>
              , <span className="text-foreground font-medium">AI</span>, and
              <span className="text-foreground font-medium px-1">SaaS</span>. I
              focus on creating
              <span className="text-foreground font-medium px-1">
                robust, production-ready systems
              </span>{" "}
              that deliver
              <span className="text-foreground font-medium px-1">
                real-world impact
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/about">
                  View More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:order-2 order-1 mx-auto"
          >
            <Spotlight
              className="-top-40 left-0 md:-top-20 md:left-60"
              fill="white"
            />
            {/* Decorative SVG */}
            <svg
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-10 -left-10 w-[120%] h-[120%] -z-10 opacity-20 dark:opacity-25 blur-xl"
            >
              <defs>
                <radialGradient id="bg-gradient" cx="50%" cy="50%" r="50%">
                  <stop
                    offset="0%"
                    stopColor="var(--tw-prose)"
                    stopOpacity="0.4"
                  />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="200" fill="url(#bg-gradient)" />
            </svg>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4E03AQFwx9_pSbHGzw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715803087891?e=1756944000&v=beta&t=UZRlVl3NnmcFXdXmrHtfc3W7ctCvTcpI84elLXG2fN4"
                alt="Developer Portrait"
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
              />
            </div>

            {/* Optional animated color blur */}
            <motion.div
              className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <Link href="/#projects" aria-label="Scroll to About section">
            <ChevronDown className="h-10 w-10 text-muted-foreground" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
