export interface ExperienceItem {
  title: string;
  company: string;
  logo?:string
  location: string;
  period: string;
  description: string[];
  skills: string[];
}
export const experienceData: ExperienceItem[] = [
{
  title: "Full Stack Developer Intern",
  company: "Deloitte",
  location: "Bengaluru, Karnataka, India",
  period: "June 2026 - August 2026",
  description: [
    "Contributed to Deloitte's internal enterprise platform, developing scalable features using microservices and micro-frontend architectures.",
    "Built and integrated frontend modules with backend microservices, focusing on modularity, scalability, and seamless application workflows.",
    "Worked with AWS and modern development practices to support application development, testing, debugging, and deployment."
  ],
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Microservices",
    "Micro Frontends",
    "AWS",
    "REST APIs",
    "Git"
  ],
},
  {
    title: "SDE Intern",
    company: "CliniChat.ai",
    location: "Rome, Latium, Italy · Remote",
    period: "April 2025 - April 2026",
    description: [
      "Contributing to the development of healthcare SaaS solutions using Django, Next.js, and PostgreSQL.",
      "Implemented secure and scalable REST APIs using Django REST Framework.",
      "Collaborated on full-stack features, integrating MongoDB for document-based storage needs."
    ],
    skills: ["Django", "Django REST Framework", "Next.js", "PostgreSQL", "MongoDB", "React.js", "TypeScript", "Git"],
  },

  {
    title: "SDE Intern",
    company: "Eloquente AI",
    location: "Bengaluru, Karnataka, India · Remote",
    period: "February 2025 - April 2025",
    description: [
      "Built and integrated full-stack modules using Django, PostgreSQL, and React.js.",
      "Contributed to RESTful API development and implemented responsive UI with Tailwind CSS.",
      "Participated in code reviews and collaborated on improving frontend performance."
    ],
    skills: ["Django", "PostgreSQL", "React.js", "TypeScript", "REST APIs", "Tailwind CSS"],
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Accura Tequipment",
    location: "Bengaluru, Karnataka, India · On-site",
    period: "June 2024 - September 2024",
    description: [
      "Led backend development for a custom LMS using Node.js and MongoDB.",
      "Improved website SEO by 50% and integrated frontend with backend services.",
      "Deployed both frontend and backend and conducted extensive API testing using Postman."
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "Next.js", "TypeScript", "React.js", "SEO", "Tailwind CSS"],
  },
  
];
