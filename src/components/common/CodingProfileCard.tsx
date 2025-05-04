"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type CodingProfile = {
  name: string;
  url: string;
  image: string;
};

interface Props {
  profile: CodingProfile;
}

export default function CodingProfileCard({ profile }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.08, rotate: 2 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg rounded-2xl p-4 w-full max-w-[140px] h-[160px] flex flex-col items-center justify-center cursor-pointer"
    >
      <div className="relative">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-12 h-12 object-contain mb-4"
        />
        <motion.div
          className="absolute inset-0"
          animate={
            isHovered
              ? { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-primary opacity-0"></div>
        </motion.div>
      </div>
      <p className="text-sm font-medium text-center mb-2">{profile.name}</p>
    </motion.a>
  );
}
