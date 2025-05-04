'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Github, Linkedin, Mail, MapPin, PhoneCall, Send, Twitter } from 'lucide-react'

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Let's get in touch! Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={6}
                    className="resize-none"
                  />
                </div>
                <Button type="submit" className="w-full md:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a
                      href="mailto:gkrcoder@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                     gkrcoder@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <PhoneCall className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a
                      href="tel:+917892917825"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +91 789-291-7825
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">
                      Bengaluru, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background hover:bg-accent p-3 rounded-full transition-colors shadow-sm"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background hover:bg-accent p-3 rounded-full transition-colors shadow-sm"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background hover:bg-accent p-3 rounded-full transition-colors shadow-sm"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h4 className="font-semibold mb-2">Availability</h4>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance work and full-time positions.
                If you need help with a project, feel free to reach out!
              </p>
              <div className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-md inline-block">
                Open to opportunities
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}