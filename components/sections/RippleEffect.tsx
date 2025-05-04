"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RippleEffect = () => {
  const [ripples, setRipples] = useState<{ x: number; y: number }[]>([]);

  // Handle adding new ripple and remove old ones after animation
  const handleClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRipples((prev) => [
      ...prev,
      { x: x - 30, y: y - 30 }, // Adjust the -30 to center the ripple
    ]);
  };

  // Cleanup ripples using useEffect (remove after animation ends)
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1)); // Remove the oldest ripple
      }, 600); // Matches the duration of the ripple animation

      return () => clearTimeout(timer); // Cleanup timeout when the component unmounts
    }
  }, [ripples]);

  return (
    <div
      onClick={handleClick}
      className="relative overflow-hidden w-full h-full"
    >
      {ripples.map((ripple, index) => (
        <motion.div
          key={index}
          className="absolute bg-gray-800 rounded-full opacity-50"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 60, // Adjust size of the ripple
            height: 60, // Adjust size of the ripple
          }}
          initial={{ scale: 0 }}
          animate={{
            scale: 4,
            opacity: 0,
          }}
          transition={{ duration: 0.6, ease: "ease-out" }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;
