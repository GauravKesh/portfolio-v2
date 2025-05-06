"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    // Trigger the animation after component mounts
    setIsVisible(true);
    
    // Add a small bouncing animation to draw attention to the buttons
    const interval = setInterval(() => {
      setIsHovering(prev => !prev);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Generate random coordinates for the floating elements
  const generateCoordinates = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      x: (i * 20) % 100,            // Spread x evenly
      y: ((i * 10) % 100),          // Spread y with a different step
      size: 20 + (i % 3) * 10,      // Size: 20, 30, 40 repeating
      duration: 15 + (i % 5) * 2,   // Duration: 15, 17, 19, 21, 23
      delay: (i % 3) * 1.5          // Delay: 0, 1.5, 3 repeating
    }));
  };
  

  const floatingElements = generateCoordinates(15);

  // Background animation variants
  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground overflow-hidden relative"
      initial={{ backgroundSize: '200% 200%' }}
      animate="animate"
      variants={backgroundVariants}
    >
      {/* Background gradient overlay - works with any theme */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background opacity-40" />
      
      {/* Floating background elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary opacity-5 dark:opacity-10"
          style={{ 
            width: el.size, 
            height: el.size,
            left: `${el.x}%`,
            top: `${el.y}%`,
          }}
          animate={{ 
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: el.duration, 
            repeat: Infinity, 
            repeatType: "mirror",
            delay: el.delay
          }}
        />
      ))}

      {/* Main content container */}
      <div className="relative z-10 max-w-md w-full mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">404</h1>
        </motion.div>
        
        {/* Staggered appearance for text elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-sm sm:text-base text-muted-foreground">The page you are looking for doesn't exist or has been moved.</p>
        </motion.div>
        
        {/* Animated icon with bounce effect */}
        <motion.div 
          initial={{ rotateY: 0 }}
          animate={{ 
            rotateY: 360,
            y: isHovering ? -12 : 0
          }}
          transition={{ 
            rotateY: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut", repeatDelay: 1 },
            y: { duration: 0.8, ease: "easeInOut" }
          }}
          className="mb-6 sm:mb-8"
        >
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-accent flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-12 sm:w-12 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12a4 4 0 110-8 4 4 0 010 8z" />
            </svg>
          </div>
        </motion.div>
        
        {/* Animated buttons - responsive layout */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-md font-medium shadow-md flex items-center justify-center"
            onClick={() => window.history.back()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-secondary text-secondary-foreground rounded-md font-medium shadow-md flex items-center justify-center"
            onClick={() => window.location.href = "/"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7 7 7-7m-14 0l2-2" />
            </svg>
            Home
          </motion.button>
        </div>

        {/* Animated decorative line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={isVisible ? { width: "100%", opacity: 0.5 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="h-px bg-border mt-8 sm:mt-10"
        />

        {/* Subtle tip text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-xs text-muted-foreground mt-4 sm:mt-6"
        >
          Try searching or navigating to another page
        </motion.p>
      </div>
    </motion.div>
  );
}