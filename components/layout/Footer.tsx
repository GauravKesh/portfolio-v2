import Link from "next/link";
import { Github, Linkedin, Twitter, Mail ,Instagram} from "lucide-react";
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
    <footer className="bg-muted/30 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Bio */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Portfolio</h2>
            <p className="text-muted-foreground max-w-md">
              Full-stack developer specializing in building exceptional digital
              experiences. Always looking for new challenges and opportunities
              to grow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/#home"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/#experience"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/#skills"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/#projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/#blog"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/resume"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Resume
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:gkrcoder@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                gkrcoder@gmail.com
              </a>
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  passHref
                  target="_blank"
                >
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label={social.ariaLabel}
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} GKR. All rights reserved.</p>
          {/* <p className="mt-1">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
          </p> */}
        </div>
      </div>
    </footer>
  );
}
