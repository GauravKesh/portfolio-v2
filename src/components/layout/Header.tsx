"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "OpenSrc", href: "/open-source" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const social = [
  { name: "Github", href: "https://github.com/gauravkesh", icon: Github },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/gkrcoder",
    icon: Linkedin,
  },

  { name: "Twitter", href: "https://x.com/gkrcoder_r", icon: Twitter },
];

const navVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -8, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 260, damping: 24, mass: 0.8 },
  },
};

const mobilePanelVariants = {
  hidden: {
    opacity: 0,
    y: -16,
    scale: 0.98,
    filter: "blur(10px)",
    transition: { duration: 0.18, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 260, damping: 24, mass: 0.85 },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.985,
    filter: "blur(10px)",
    transition: { duration: 0.16, ease: "easeIn" },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: "easeIn" } },
};

const logoVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 240, damping: 22 },
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/75 backdrop-blur-xl shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      )}
    >
      <div className="container  mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="group inline-flex items-center gap-3">
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/80 text-sm font-semibold tracking-[0.2em] shadow-sm transition-transform group-hover:scale-105"
            >
              GKR
            </motion.div>
            <div className="hidden md:block">
              <motion.div
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08, duration: 0.35, ease: "easeOut" }}
              >
                {/* <Sparkles className="h-3.5 w-3.5 text-primary" /> */}
                {/* GKR */}
              </motion.div>
              
            </div>
          </Link>

          <motion.nav
            className="hidden items-center rounded-full border border-border/60 bg-background/70 px-2 py-2 shadow-sm backdrop-blur-xl md:flex"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div key={item.name} variants={itemVariants} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-muted hover:text-foreground",
                    pathname === item.href
                      ? "bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div className="ml-2 flex items-center gap-2 border-l border-border/60 pl-3" variants={itemVariants}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="rounded-full border border-border/60 bg-background/80 transition-transform hover:scale-105"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Link href="/contact">
                <Button className="rounded-full bg-gradient-to-r from-primary to-secondary px-5 shadow-md shadow-primary/20 transition-transform duration-300 hover:translate-y-[-1px] hover:shadow-lg hover:shadow-primary/25 active:translate-y-0">
                  Hire Me
                </Button>
              </Link>
            </motion.div>
          </motion.nav>

          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2 rounded-full border border-border/60 bg-background/80 transition-transform hover:scale-105"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="rounded-full border border-border/60 bg-background/80 transition-transform duration-300 hover:scale-105"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-40 cursor-default bg-black/40 backdrop-blur-[2px] md:hidden"
              aria-label="Close menu overlay"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={mobilePanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed left-0 right-0 top-[4.5rem] z-50 mx-4 overflow-hidden rounded-[1.75rem] border border-border/60 bg-background/95 shadow-[0_24px_80px_-35px_rgba(0,0,0,0.65)] backdrop-blur-xl"
            >
              <div className="px-4 py-4">
                <motion.nav initial="hidden" animate="visible" variants={navVariants} className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={itemVariants} whileTap={{ scale: 0.99 }}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                          pathname === item.href
                            ? "bg-foreground text-background"
                            : "bg-muted/30 text-foreground hover:bg-muted"
                        )}
                      >
                        <span>{item.name}</span>
                        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Go</span>
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div className="flex items-center gap-3 pt-4" variants={itemVariants}>
                    {social.map((item, id) => (
                      <Link href={item.href} target="_blank" key={id} onClick={() => setIsOpen(false)}>
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-full border-border/70 bg-background/80 transition-transform duration-300 hover:scale-105 hover:bg-muted"
                        >
                          <item.icon className="h-5 w-5" />
                        </Button>
                      </Link>
                    ))}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="mt-4 w-full rounded-2xl bg-gradient-to-r from-primary to-secondary py-6 text-base shadow-md shadow-primary/20 transition-transform duration-300 hover:translate-y-[-1px] hover:shadow-lg hover:shadow-primary/25">
                        Hire Me
                      </Button>
                    </Link>
                  </motion.div>
                </motion.nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
