import { motion } from "framer-motion";
import React from "react";

export default function BackgroundUILayer() {
  return (
    <div>
      {/* ── Background layer ── */}
      <div className="absolute inset-0 -z-10">
        {/* Soft primary glow top-left */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        {/* Secondary glow bottom-right */}
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl" />

        {/* Subtle dot-grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Floating accent rings */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full border border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full border border-secondary/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}
