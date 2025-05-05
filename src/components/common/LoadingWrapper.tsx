'use client'

import { useEffect, useState } from 'react'
import LoadingPage from './LoadingPage'

interface LoadingWrapperProps {
  children: React.ReactNode
  /**
   * Minimum loading time in milliseconds
   * @default 2000
   */
  minLoadTime?: number
}

export default function LoadingWrapper({
  children,
  minLoadTime = 2000
}: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Ensure loading state stays for at least minLoadTime
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, minLoadTime)

    return () => clearTimeout(timer)
  }, [minLoadTime])

  return isLoading ? <LoadingPage /> : <>{children}</>
}