"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  const [mouseData, setMouseData] = useState({ x: 0, y: 0, vx: 0, vy: 0 });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - lastTime;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const vx = dx / dt;
      const vy = dy / dt;

      setMouseData({ x: e.clientX, y: e.clientY, vx, vy });

      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Sparkles */}
      <div className="absolute inset-0 -z-10">
        <SparklesCore
          className="w-full h-full"
          background="transparent"
          minSize={2}
          maxSize={3}
          speed={5}
          particleColor="#ffffff"
          particleDensity={10}
          // mouseVelocity={mouseData}
        />
      </div>
      {/* d?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number; */}

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
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

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Gaurav Kesh Roushan
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground">
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
                <Link href="/#projects">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#contact">Get In Touch</Link>
              </Button>
            </motion.div>

            {/* Technology Badges */}
            <div className="flex gap-3 mt-4">
              <Badge variant="secondary">
                <SiReact className="mr-1" /> React
              </Badge>
              <Badge variant="secondary">
                <SiNextdotjs className="mr-1" /> Next.js
              </Badge>
              <Badge variant="secondary">
                <SiTypescript className="mr-1" /> TypeScript
              </Badge>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
