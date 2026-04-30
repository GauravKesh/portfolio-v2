'use client'

import Link from 'next/link'
import { motion} from 'framer-motion'
import { Button } from '@/components/ui/button'

import { 
  ArrowUpRight, 
} from 'lucide-react'

export default function CallToAction() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      }
  return (
    <div>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work and open to discussing
              new opportunities. Let's create something amazing together!
            </p>
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-6 shadow-md shadow-primary/20 hover:opacity-9"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
