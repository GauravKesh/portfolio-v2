"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";

import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export default function HeroSection() {
  return (
    // <BackgroundBeamsWithCollision>
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center py-20 px-4 md:px-6"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
                className="text-lg text-primary font-medium"
              >
                Hello, my name is
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
                      "Open Source Contributor",
                      "Tech Community Lead",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
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
              I'm a full-stack developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#contact">Get In Touch</Link>
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
                src="https://media.licdn.com/dms/image/v2/D4E03AQFwx9_pSbHGzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715803087891?e=1751500800&v=beta&t=FFBUpPcuiMDUpwmfOA4zW7oFM46OKj1LtIYrY1ycvSE"
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
          <Link href="/#about" aria-label="Scroll to About section">
            <ChevronDown className="h-10 w-10 text-muted-foreground" />
          </Link>
        </motion.div>
      </div>
    </section>
    // </BackgroundBeamsWithCollision>
  );
}
