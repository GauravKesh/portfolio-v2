'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
]

const navVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              GKR
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <motion.nav
            className="hidden md:flex items-center space-x-1"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Theme toggle and Hire Me */}
            <motion.div className="flex items-center space-x-2" variants={itemVariants}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="transition-transform hover:scale-110"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Link href="/#contact">
                <Button className="ml-1">Hire Me</Button>
              </Link>
            </motion.div>
          </motion.nav>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="mr-2 transition-transform hover:scale-110"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="transition-transform hover:scale-110"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-4">
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className="flex flex-col space-y-4"
              >
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 text-lg rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="flex space-x-4 pt-4 border-t border-border"
                  variants={itemVariants}
                >
                  {[Github, Linkedin, Twitter].map((Icon, idx) => (
                    <Button key={idx} size="icon" variant="ghost" className="hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </Button>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link href="/#contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full mt-4">Hire Me</Button>
                  </Link>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
