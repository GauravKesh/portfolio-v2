import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedCodeIcon() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let step = 0;
    const totalDuration = 2000; // ms
    const intervalDelay = 40; // ms (50 updates in 2s)
    const totalSteps = totalDuration / intervalDelay;
  
    const interval = setInterval(() => {
      step++;
  
      let increment = 0;
      if (step < totalSteps * 0.3) {
        increment = 1; // Slow start
      } else if (step < totalSteps * 0.7) {
        increment = 2; // Medium
      } else {
        increment = 3; // Faster end
      }
  
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalDelay);
  
    return () => clearInterval(interval);
  }, []);
  

  // Path drawing animations with more dramatic formation
  const leftBracketVariants = {
    hidden: { pathLength: 0, opacity: 0, stroke: "rgba(0,0,0,0)" },
    visible: {
      pathLength: 1,
      opacity: 1,
      stroke: "currentColor",
      transition: {
        pathLength: { duration: 0.5, ease: "easeOut" },
        opacity: { duration: 0.3 },
        stroke: { duration: 0.5 },
      },
    },
  };

  const rightBracketVariants = {
    hidden: { pathLength: 0, opacity: 0, stroke: "rgba(0,0,0,0)" },
    visible: {
      pathLength: 1,
      opacity: 1,
      stroke: "currentColor",
      transition: {
        pathLength: { duration: 0.6, delay: 0.4, ease: "easeOut" },
        opacity: { duration: 0.6, delay: 0.4 },
        stroke: { duration: 0.6, delay: 0.4 },
      },
    },
  };
  
  const slashVariants = {
    hidden: { pathLength: 0, opacity: 0, stroke: "rgba(0,0,0,0)" },
    visible: {
      pathLength: 1,
      opacity: 1,
      stroke: "currentColor",
      transition: {
        pathLength: { duration: 1.2, delay: 2.0, ease: "easeOut" },
        opacity: { duration: 0.8, delay: 2.0 },
        stroke: { duration: 1.2, delay: 2.0 },
      },
    },
  };
  
  const containerVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0.5,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.2,
        staggerChildren: 1.0, // 3 children * 1s = 3s total
      },
    },
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="relative flex h-32 w-32 items-center justify-center">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-primary/20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        />
        {/* Spinner */}
        <motion.div
          className="absolute inset-0 rounded-full border-t-4 border-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, ease: "linear", repeat: Infinity }}
        />
        {/* Middle pulsing ring */}
        <motion.div
          className="absolute h-24 w-24 rounded-full border-2 border-dashed border-secondary/40"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, -180],
          }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        />
        {/* Animated dots */}
        <motion.div
          className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-secondary"
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        />
        {/* ... repeat for other dots with delay 0, 0.4 */}
        {/* Orbiting particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute h-2 w-2 rounded-full ${
              i % 2 === 0 ? "bg-primary" : "bg-secondary"
            }`}
            animate={{
              x: Math.cos(i * ((Math.PI * 2) / 3)) * 60,
              y: Math.sin(i * ((Math.PI * 2) / 3)) * 60,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        {/* /* Progress bar transition */}
        <motion.div
          className="absolute left-0 top-0 h-full bg-primary"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
        />
      </div>

      {/* Loading text with status messages */}
      <motion.p
        className="flex justify-center text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {progress < 33 ? (
          <span>
            Forming code brackets
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0,
                ease: "easeInOut",
              }}
              className="text-primary"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.2,
                ease: "easeInOut",
              }}
              className="text-primary"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.4,
                ease: "easeInOut",
              }}
              className="text-primary"
            >
              .
            </motion.span>
          </span>
        ) : progress < 66 ? (
          <span>
            Rendering syntax
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0,
                ease: "easeInOut",
              }}
              className="text-primary"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.2,
                ease: "easeInOut",
              }}
              className="text-primary"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.4,
                ease: "easeInOut",
              }}
              className="text-primary"
            >
              .
            </motion.span>
          </span>
        ) : progress < 100 ? (
          <span>
            Finalizing icon
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0,
                ease: "easeInOut",
              }}
              className="text-primary"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.2,
                ease: "easeInOut",
              }}
              className="text-primary"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.4,
                ease: "easeInOut",
              }}
              className="text-primary"
            >
              .
            </motion.span>
          </span>
        ) : (
          <span className="text-primary">Icon ready</span>
        )}
      </motion.p>
    </div>
  );
}
