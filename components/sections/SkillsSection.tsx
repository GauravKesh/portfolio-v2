/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillsData } from "@/data/skills";

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] =  useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    if (inView && skillsData.length > 0) {
      setActiveCategory(skillsData[0].name);
    }
  }, [inView]);

  // Calculate minimum height needed for container to prevent layout shifts
  const getMinContainerHeight = () => {
    let maxSkillsCount = 0;
    skillsData.forEach(category => {
      if (category.skills.length > maxSkillsCount) {
        maxSkillsCount = category.skills.length;
      }
    });
    // Calculate rows needed (5 items per row on large screens) and multiply by item height + gap
    return Math.ceil(maxSkillsCount / 5) * 180; // 180px accounts for item height (160px) + gap
  };

  return (
    <section
      id="skills"
      className="scroll-mt-28 relative min-h-screen flex items-center justify-center py-20 px-4 md:px-6 overflow-hidden pt-[100px]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary blur-3xl"></div>
      </div>

      <div className="container mx-auto z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3 tracking-tight">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
            Continuously evolving — here are the tools and technologies I build with.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {skillsData.map((category, index) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-primary text-background shadow-lg"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Fixed height container to prevent layout shifts */}
        <div style={{ minHeight: `${getMinContainerHeight()}px` }} className="relative">
          <AnimatePresence mode="wait">
            {skillsData.map((category) => {
              if (category.name !== activeCategory) return null;
              
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={`${skill.name}-${index}`}
                        whileHover={{ 
                          scale: 1.08, 
                          rotate: 2,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                        }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="relative backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg rounded-2xl p-4 w-full max-w-[140px] h-[160px] flex flex-col items-center justify-center transition-all cursor-pointer"
                      >
                        <div className="relative">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-12 h-12 object-contain mb-4"
                          />
                          <motion.div 
                            className="absolute inset-0"
                            animate={hoveredSkill === skill.name ? { 
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3]
                            } : {}}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <div className="absolute inset-0 rounded-full bg-primary opacity-0"></div>
                          </motion.div>
                        </div>
                        
                        <p className="text-sm font-medium text-center mb-2">
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}