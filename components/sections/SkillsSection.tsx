/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillsData } from "@/data/skills";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3 tracking-tight">My Tech Stack</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
            Continuously evolving — here are the tools and technologies I build with.
          </p>
        </motion.div>

        <div className="space-y-20">
          {skillsData.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-center md:text-left mb-6">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    whileHover={{ scale: 1.08, rotate: 1 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="relative backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg rounded-2xl p-4 w-full max-w-[100px] h-[110px] flex flex-col items-center justify-center transition-all"
                  >
                    <Tooltip.Provider>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 object-contain mb-2"
                          />
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content className="text-gray-900 rounded px-3 py-1 text-xs shadow-lg z-50">
                            {skill.name}
                            <Tooltip.Arrow className="fill-gray-900" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>
                    <p className="text-xs font-medium text-center ">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
