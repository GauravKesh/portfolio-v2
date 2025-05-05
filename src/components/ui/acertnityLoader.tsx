'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AcernityLoaderProps {
  /**
   * Class names to apply to the container
   */
  className?: string
  /**
   * Color variant
   * @default "primary"
   */
  variant?: 'primary' | 'secondary'
  /**
   * Size of the spinner
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether to show a text indicator
   * @default false
   */
  showText?: boolean
  /**
   * Whether the loader is fullscreen
   * @default false
   */
  fullScreen?: boolean
}

export default function AcernityLoader({
  className,
  variant = 'primary',
  size = 'md',
  showText = false,
  fullScreen = false
}: AcernityLoaderProps) {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return Math.min(prev + Math.random() * 8, 100)
      })
    }, 100)

    // Clean up interval
    return () => clearInterval(interval)
  }, [])

  // Calculate size values
  const sizes = {
    sm: {
      outerCircle: 'h-12 w-12',
      textSize: 'text-xs',
      barWidth: 'w-32'
    },
    md: {
      outerCircle: 'h-20 w-20',
      textSize: 'text-sm',
      barWidth: 'w-48'
    },
    lg: {
      outerCircle: 'h-32 w-32',
      textSize: 'text-base',
      barWidth: 'w-64'
    }
  }

  // Get color values
  const colors = {
    primary: {
      border: 'border-primary',
      bg: 'bg-primary',
      text: 'text-primary'
    },
    secondary: {
      border: 'border-secondary',
      bg: 'bg-secondary',
      text: 'text-secondary'
    }
  }

  const containerClasses = cn(
    'flex flex-col items-center justify-center',
    fullScreen && 'fixed inset-0 z-50 bg-background',
    className
  )

  return (
    <div className={containerClasses}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-4 flex flex-col items-center"
      >
        <motion.div
          className={cn("relative", sizes[size].outerCircle)}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className={cn("absolute inset-0 rounded-full border-4 border-opacity-20", colors[variant].border)}></div>
          <motion.div
            className={cn("absolute inset-0 rounded-full border-t-4", colors[variant].border)}
            style={{ borderRadius: "100%" }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              ease: "linear",
              repeat: Infinity,
            }}
          ></motion.div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={cn("font-bold tracking-wider", colors[variant].text, sizes[size].textSize)}>
              {progress.toFixed(0)}%
            </span>
          </div>
        </motion.div>
        
        {showText && (
          <div className={cn("relative mt-4 h-1 overflow-hidden rounded-full bg-opacity-10", colors[variant].bg, sizes[size].barWidth)}>
            <motion.div
              className={cn("absolute left-0 top-0 h-full", colors[variant].bg)}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        )}
      </motion.div>
    </div>
  )
}