export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Presidency University Bengaluru",
    location: "Bengaluru Karnataka, IN",
    period: "2023 - 2027",
    description:
      "Completed coursework in algorithms, data structures, systems programming, and software engineering.",
    achievements: [
      "Dean's List all semesters",
      "Developed an open-source library for real-time data visualization",
      "Led the university's web development club"
    ],
  },
  {
    degree: "Secondry High School",
    institution: "Kendriya Vidyalaya Karwar",
    location: "Karwar",
    period: "2015-2022",
    description:
      "Intensive 12-week program focused on modern web development technologies and best practices.",
    achievements: [
      "Built 5 full-stack projects",
      "Mentored peer students",
      "Received Excellence in Coding award"
    ],
  }
];