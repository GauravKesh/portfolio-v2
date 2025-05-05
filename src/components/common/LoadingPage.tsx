'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function LoadingPage() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setLoading(false)
          }, 500) // Delay before removing loader
          return 100
        }
        return Math.min(prev + Math.random() * 8, 100)
      })
    }, 100)

    // Clean up interval
    return () => clearInterval(interval)
  }, [])

  // After loader disappears, show content with delay
  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        setShowContent(true)
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [loading])

  // Text items for the loading screen
  const loadingTexts = [
    'Just a moment…',
    'Getting things ready for you',
    'Final touches happening now',
    'Almost there!'
  ];
  
  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              {/* Logo animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="mb-8"
              >
                <motion.div
                  className="relative h-24 w-24"
                  // animate={{
                  //   rotate: [0, 360],
                  // }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-t-4 border-primary"
                    style={{ borderRadius: "100%" }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.5,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  ></motion.div>
                  
                  {/* Your initials or icon could go here */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold tracking-wider text-primary">GKR</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Progress bar */}
              <div className="relative mb-4 h-1 w-64 overflow-hidden rounded-full bg-primary/10">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Loading text animation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <p className="text-sm text-muted-foreground">
                  {loadingTexts[Math.min(
                    Math.floor((progress / 100) * loadingTexts.length),
                    loadingTexts.length - 1
                  )]}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {Math.round(progress)}%
                </p>
              </motion.div>

              {/* Floating particles */}
              {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={cn(
                      "absolute h-2 w-2 rounded-full",
                      i % 3 === 0 ? "bg-primary" : "bg-secondary",
                      i % 5 === 0 ? "opacity-20" : "opacity-10"
                    )}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, Math.random() * -50 - 20],
                      x: [0, (Math.random() - 0.5) * 30],
                      scale: [1, Math.random() * 0.5 + 0.5],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content fade in */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="min-h-screen"
          >
            {/* This is where your main content would go */}
            {/* You can use props.children here to render the actual page content */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}