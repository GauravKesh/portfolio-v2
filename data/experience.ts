export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "January 2022 - Present",
    description:
      "Lead developer for the company's flagship SaaS platform. Implemented new features, improved performance, and mentored junior developers. Reduced load times by 40% through code optimization and modern rendering techniques.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "TailwindCSS"],
  },
  {
    title: "Full Stack Developer",
    company: "InnovateSoft",
    location: "Boston, MA",
    period: "March 2020 - December 2021",
    description:
      "Worked on multiple projects across the stack, from designing database schemas to building responsive user interfaces. Collaborated closely with design and product teams to deliver high-quality software solutions.",
    skills: ["JavaScript", "Node.js", "MongoDB", "Express", "React", "AWS"],
  },
  {
    title: "Web Developer",
    company: "CreativeDigital",
    location: "Remote",
    period: "June 2018 - February 2020",
    description:
      "Developed websites and web applications for various clients across multiple industries. Ensured responsiveness across devices and browsers while maintaining clean, maintainable code.",
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
  },
  {
    title: "Junior Developer",
    company: "StartupHub",
    location: "Austin, TX",
    period: "January 2017 - May 2018",
    description:
      "Started as an intern and quickly grew into a full-time role. Assisted in the development of a customer-facing web application and contributed to the company's internal tools.",
    skills: ["JavaScript", "jQuery", "Bootstrap", "PHP", "Git"],
  },
];