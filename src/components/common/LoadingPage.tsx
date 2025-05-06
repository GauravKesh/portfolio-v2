"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LoadingPage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [scope, animate] = useAnimate();
  const pathRef = useRef<SVGPathElement>(null);

  // Current animation state
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + Math.random() * 5 + 1, 100);

        // Update text based on progress
        if (newProgress > 25 && currentText === 0) setCurrentText(1);
        if (newProgress > 50 && currentText === 1) setCurrentText(2);
        if (newProgress > 75 && currentText === 2) setCurrentText(3);
        if (newProgress > 95 && currentText === 3) setCurrentText(4);

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 800); // Delay before removing loader
          return 100;
        }
        return newProgress;
      });
    }, 100);

    // Clean up interval
    return () => clearInterval(interval);
  }, [currentText]);

  // After loader disappears, show content with delay
  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        setShowContent(true);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  // Animation for code path
  useEffect(() => {
    if (!pathRef.current) return;

    // Get the total length of the path
    const length = pathRef.current.getTotalLength();

    // Set up the initial animation
    pathRef.current.style.strokeDasharray = `${length} ${length}`;
    pathRef.current.style.strokeDashoffset = `${length}`;

    // Animate the path drawing
    const animatePath = () => {
      if (pathRef.current) {
        const drawProgress = 1 - progress / 100;
        pathRef.current.style.strokeDashoffset = String(length * drawProgress);
      }
    };

    animatePath();
  }, [progress]);

  // Text items for the loading screen
  const loadingTexts = ["Loading", "Preparing", "Almost done", "Hang tight"];

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              filter: "blur(10px)",
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
            ref={scope}
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              {/* Central animated logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  // rotateY: [0, 360],
                  transition: {
                    rotateY: {
                      repeat: Infinity,
                      duration: 12,
                      ease: "linear",
                    },
                    scale: {
                      duration: 1,
                      ease: [0.34, 1.56, 0.64, 1],
                    },
                  },
                }}
                className="mb-12 perspective"
              >
                <div className="relative flex h-32 w-32 items-center justify-center">
                  {/* Outer rotating ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-primary/20"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />

                  {/* Middle pulsing ring */}
                  <motion.div
                    className="absolute h-24 w-24 rounded-full border-2 border-dashed border-secondary/40"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.8, 0.4],
                      rotate: [0, -180],
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />

                  {/* Inner content - SVG code icon */}
                  <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-background shadow-lg">
                    <svg
                      viewBox="0 0 24 24"
                      className="absolute inset-0 h-full w-full p-1 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <motion.path
                        ref={pathRef}
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: progress / 100 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    </svg>

                    {/* Animated dots */}
                    <motion.div
                      className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-secondary"
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1 left-1 h-1.5 w-1.5 rounded-full bg-secondary"
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0,
                      }}
                    />
                    <motion.div
                      className="absolute top-1 left-1 h-1.5 w-1.5 rounded-full bg-secondary"
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 1,
                      }}
                    />
                  </div>

                  {/* Orbiting particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={cn(
                        "absolute h-2 w-2 rounded-full",
                        i % 2 === 0 ? "bg-primary" : "bg-secondary"
                      )}
                      animate={{
                        x: Math.cos(i * ((Math.PI * 2) / 3)) * 60,
                        y: Math.sin(i * ((Math.PI * 2) / 3)) * 60,
                      }}
                      transition={{
                        duration: 3,
                        ease: "linear",
                        repeat: Infinity,
                        delay: i * 0.5,
                        repeatType: "loop",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
              {/* Previous lgog */}

              {/* Text and progress indicator */}
              <div className="relative text-center">
                {/* Progress bar */}
                <div className="relative mx-auto mb-8 h-1 w-64 overflow-hidden rounded-full bg-primary/10">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-primary"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>

                {/* Animated text */}
                <div className="h-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentText}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <p className="flex justify-center text-sm text-muted-foreground">
                        {loadingTexts[currentText]}
                        <div className="flex">
                          {[0, 1, 2].map((dot) => (
                            <motion.span
                              key={dot}
                              className="text-primary"
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: dot * 0.2,
                                ease: "easeInOut",
                              }}
                            >
                              .
                            </motion.span>
                          ))}
                        </div>
                      </p>
                      <div className="mt-4 flex items-center justify-center space-x-1">
                        <span className="text-foreground">
                          {/* {Math.round(progress)}% */}
                        </span>
                        {/* <div className="flex">
                          {[0, 1, 2].map((dot) => (
                            <motion.span
                              key={dot}
                              className="text-primary"
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: dot * 0.2,
                                ease: "easeInOut",
                              }}
                            >
                              .
                            </motion.span>
                          ))}
                        </div> */}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Background animated elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Grid pattern */}
                <svg
                  className="absolute inset-0 h-full w-full opacity-[0.02]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Floating particles */}
                {/* <div className="pointer-events-none absolute inset-0">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={cn(
                        "absolute h-1 w-1 rounded-full",
                        i % 4 === 0 ? "bg-primary" : "bg-secondary",
                        i % 5 === 0 ? "opacity-20" : "opacity-10"
                      )}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, Math.random() * -80 - 20],
                        x: [0, (Math.random() - 0.5) * 40],
                        scale: [1, Math.random() * 0.4 + 0.2],
                        opacity: [Math.random() * 0.3 + 0.1, 0],
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

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content fade in */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
            className="min-h-screen"
          >
            {/* This is where your main content would go */}
            {/* You can use props.children here to render the actual page content */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
// 'use client'

// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { cn } from '@/lib/utils'

// export default function LoadingPage() {
//   const [loading, setLoading] = useState(true)
//   const [progress, setProgress] = useState(0)
//   const [showContent, setShowContent] = useState(false)

//   useEffect(() => {
//     // Simulate loading progress
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(interval)
//           setTimeout(() => {
//             setLoading(false)
//           }, 500) // Delay before removing loader
//           return 100
//         }
//         return Math.min(prev + Math.random() * 8, 100)
//       })
//     }, 100)

//     // Clean up interval
//     return () => clearInterval(interval)
//   }, [])

//   // After loader disappears, show content with delay
//   useEffect(() => {
//     if (!loading) {
//       const timeout = setTimeout(() => {
//         setShowContent(true)
//       }, 600)
//       return () => clearTimeout(timeout)
//     }
//   }, [loading])

//   // Text items for the loading screen
//   const loadingTexts = [
//     'Just a moment…',
//     'Getting things ready for you',
//     'Final touches happening now',
//     'Almost there!'
//   ];

//   return (
//     <>
//       <AnimatePresence mode="wait">
//         {loading && (
//           <motion.div
//             key="loader"
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: 'easeInOut' }}
//             className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
//           >
//             <div className="relative flex h-full w-full flex-col items-center justify-center">
//               {/* Logo animation */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, ease: 'easeOut' }}
//                 className="mb-8"
//               >
//                 <motion.div
//                   className="relative h-24 w-24"
//                   // animate={{
//                   //   rotate: [0, 360],
//                   // }}
//                   transition={{
//                     duration: 8,
//                     ease: "linear",
//                     repeat: Infinity,
//                   }}
//                 >
//                   <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
//                   <motion.div
//                     className="absolute inset-0 rounded-full border-t-4 border-primary"
//                     style={{ borderRadius: "100%" }}
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       duration: 1.5,
//                       ease: "linear",
//                       repeat: Infinity,
//                     }}
//                   ></motion.div>

//                   {/* Your initials or icon could go here */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-xl font-bold tracking-wider text-primary">GKR</span>
//                   </div>
//                 </motion.div>
//               </motion.div>

//               {/* Progress bar */}
//               <div className="relative mb-4 h-1 w-64 overflow-hidden rounded-full bg-primary/10">
//                 <motion.div
//                   className="absolute left-0 top-0 h-full bg-primary"
//                   initial={{ width: "0%" }}
//                   animate={{ width: `${progress}%` }}
//                   transition={{ ease: "easeOut" }}
//                 />
//               </div>

//               {/* Loading text animation */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-center"
//               >
//                 <p className="text-sm text-muted-foreground">
//                   {loadingTexts[Math.min(
//                     Math.floor((progress / 100) * loadingTexts.length),
//                     loadingTexts.length - 1
//                   )]}
//                 </p>
//                 <p className="mt-2 text-sm font-medium text-foreground">
//                   {Math.round(progress)}%
//                 </p>
//               </motion.div>

//               {/* Floating particles */}
//               {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
//                 {Array.from({ length: 20 }).map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className={cn(
//                       "absolute h-2 w-2 rounded-full",
//                       i % 3 === 0 ? "bg-primary" : "bg-secondary",
//                       i % 5 === 0 ? "opacity-20" : "opacity-10"
//                     )}
//                     style={{
//                       left: `${Math.random() * 100}%`,
//                       top: `${Math.random() * 100}%`,
//                     }}
//                     animate={{
//                       y: [0, Math.random() * -50 - 20],
//                       x: [0, (Math.random() - 0.5) * 30],
//                       scale: [1, Math.random() * 0.5 + 0.5],
//                       opacity: [1, 0],
//                     }}
//                     transition={{
//                       duration: Math.random() * 3 + 2,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "easeInOut",
//                       delay: Math.random() * 5,
//                     }}
//                   />
//                 ))}
//               </div> */}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Content fade in */}
//       <AnimatePresence>
//         {showContent && (
//           <motion.div
//             key="content"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, ease: 'easeInOut' }}
//             className="min-h-screen"
//           >
//             {/* This is where your main content would go */}
//             {/* You can use props.children here to render the actual page content */}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }
