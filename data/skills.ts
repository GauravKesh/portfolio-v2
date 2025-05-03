export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TailwindCSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "GraphQL", level: 75 },
      { name: "RESTful APIs", level: 90 },
      { name: "Firebase", level: 80 },
      { name: "Supabase", level: 75 },
    ],
  },
  {
    name: "Others",
    skills: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "CI/CD", level: 75 },
      { name: "Jest", level: 80 },
      { name: "Cypress", level: 72 },
      { name: "Figma", level: 68 },
      { name: "Agile/Scrum", level: 85 },
    ],
  },
];