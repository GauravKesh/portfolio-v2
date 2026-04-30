import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Instagram, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/gauravkesh",
    icon: <Github className="h-4 w-4" />,
    ariaLabel: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/gkrcoder",
    icon: <Linkedin className="h-4 w-4" />,
    ariaLabel: "LinkedIn",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/gkrcoder_",
    icon: <Twitter className="h-4 w-4" />,
    ariaLabel: "Twitter",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/gkrcoder_",
    icon: <Instagram className="h-4 w-4" />,
    ariaLabel: "Instagram",
  },
];
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-border/60 bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_36%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%)]" />
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-70" />
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl opacity-70" />

      <div className="container relative mx-auto px-4 py-14 md:px-4 md:py-16">
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-[0_18px_70px_-45px_rgba(0,0,0,0.6)] backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Let&apos;s build something sharp
              </div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                I design and build interfaces that feel intentional.
              </h2>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                Full-stack developer specializing in clean systems, product-focused experiences, and polished front-end details.
              </p>
            </div>

            <Link href="/contact">
              <Button className="group rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-6 shadow-md shadow-primary/20 hover:opacity-95">
                Start a project
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="space-y-4 rounded-[1.75rem] border border-border/60 bg-background/70 p-6 backdrop-blur-xl">
            <h2 className="text-xl font-bold tracking-tight">GKR</h2>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Full-stack developer building modern digital products with a strong focus on clarity, performance, and useful motion.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label={social.ariaLabel}
                    className="rounded-full border-border/70 bg-background/80 transition-transform hover:scale-105 hover:bg-muted"
                  >
                    {social.icon}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border/60 bg-background/70 p-6 backdrop-blur-xl">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-2">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Experience", "/experience"],
                ["Skills", "/skills"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
                ["Resume", "/resume"],
                ["Blog", "/blog"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex items-center justify-between rounded-2xl border border-transparent px-3 py-2 text-muted-foreground transition-colors hover:border-border/60 hover:bg-muted hover:text-foreground"
                >
                  <span>{label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border/60 bg-background/70 p-6 backdrop-blur-xl">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:gkrcoder@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/25 px-4 py-3 text-sm transition-colors hover:bg-muted"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </span>
                  <span className="block text-foreground">gkrcoder@gmail.com</span>
                </span>
              </a>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Social
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full border-border/70 bg-background/80 px-4 hover:bg-muted"
                        aria-label={social.ariaLabel}
                      >
                        {social.icon}
                        <span className="ml-2">{social.name}</span>
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 text-center text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {currentYear} GKR. All rights reserved.</p>
          <p></p>
        </div>
      </div>
    </footer>
  );
}
