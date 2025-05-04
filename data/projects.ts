export interface Project {
  id: string;
  slug?: string;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  features: string[];
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "E-Patrol",
    slug: "E-Patrol",
    description: "E-Patrol is a centralized police beat management system designed to streamline patrolling operations. It enables efficient beat assignment, real-time tracking, duty monitoring, and incident reporting to enhance field visibility and operational efficiency for law enforcement agencies.",
    image: "/images/webp/e-patrol.webp",
    demoUrl: "https://e-patrol.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/e-patrol",
    tags: ["React", "Node.js", "MongoDB", "Next.js", "Tailwind CSS", "REST APIs", "GeoTracking"],
    features: [
      "Role-Based Access Control (Admin, Officer)",
      "Secure User Authentication and Profile Management",
      "Beat Assignment and Patrol Scheduling Interface",
      "Real-time GPS Tracking of Field Officers",
      "Check-in/Check-out Logging with Timestamps",
      "Incident Reporting and Escalation Handling",
      "Interactive Map View using Google Maps API",
      "Admin Dashboard for Monitoring and Analytics",
      "RESTful API Architecture using Express.js and MongoDB",
      "Responsive Design with Next.js and Tailwind CSS"
    ]
  },
  {
    id: "project-2",
    title: "Complaint Management System",
    slug: "Complaint-Management",
    description: "The Complaint Management System (CMS) is a robust full-stack web application that simplifies the process of lodging, managing, and resolving complaints. It supports multiple user roles with secure access control, real-time updates, and a modern UI, making it ideal for institutions or organizations that handle internal or external grievance workflows.",
    image: "/images/webp/complaint.webp",
    demoUrl: "https://conciliation-complain.vercel.app/home",
    githubUrl: "https://github.com/GauravKesh/Conciliation-Frontend",
    tags: ["React", "Node.js", "MongoDB", "Next.js", "Tailwind CSS", "REST APIs"],
    features: [
      "Role-Based Access Control for Admins, Officers, and Users",
      "Secure Authentication and Authorization using JWT",
      "Modern, Responsive UI built with Tailwind CSS and React",
      "Real-time Complaint Updates and Status Tracking",
      "Complaint Creation, Assignment, and Resolution Workflow",
      "Admin Dashboard with Complaint Metrics and Analytics",
      "Advanced Filtering and Search Functionality",
      "RESTful API Architecture with Express and MongoDB",
      "Scalable and Modular Codebase for Future Enhancements",
      "Optimized for Performance and Mobile Accessibility"
    ],
  },
  
  {
    id: "project-3",
    title: "GDG-Website",
    slug: "GDG-Website",
    description: "A Community platform website to showcase event, member and events.",
    image: "/images/webp/gdg.webp",
    demoUrl: "https://gdgpu.vercel.app/",
    githubUrl: "https://github.com/username/social-dashboard",
    tags: ["Next.js", "React js", "TailwindCSS", "Google Appscript",],
    features: [
      "Tracking Events",
      "Team page",
      // "Content scheduling and publishing",
      // "Audience insights and engagement metrics",
      // "Customizable widget-based dashboard",
    ],
  },
  {
    id: "project-4",
    title: "URL Shortner",
    slug: "URL-Shortner",
    description: "A web application to shorten url for better readability and sharable ",
    image: "/images/webp/gshort.webp",
    demoUrl: "https://gshort.vercel.app/",
    githubUrl: "",
    tags: ["React", "Nodejs", "MongoDB", "Nextjs", "Tailwindcss"],
    features: [
      "Shortening url",
      "Tracking url hits",
      "Storing it for longer use",
      "Faster execution",
    ],
  },
  {
    id: "project-10",
    title: "Portfolio v1",
    slug: "portfolio-v1",
    description: "A comprehensive Portfolio to showcase my work ,skills and achievements.",
    image: "/images/webp/portfoliov1.webp",
    demoUrl: "https://pers-portfolio-v1.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/personalPortfolio",
    tags: ["React js", "Tailwind css",],
    features: [
      "Landing Page",
      " Tracking projects ",
    ],
  },
  {
    id: "project-5",
    title: "Github Clone",
    slug: "github-clone",
    description: "A comprehensive fitness application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    image: "/images/webp/github.webp",
    demoUrl: "https://searchgithubprofilegkr.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/Github_profile_search",
    tags: ["React js", "Tailwind css", "Github API's",],
    features: [
      "Workout planning and tracking",
      "Nutrition logging and analysis",
      "Health metrics and progress visualization",
      "Personalized workout recommendations",
      "Community features and challenges",
    ],
  },
  {
    id: "project-6",
    title: "TO-DO",
    slug: "to-do",
    description: "A Task management application for tracking tasks, and goal setting with visualization .",
    image: "/images/webp/todo.webp",
    demoUrl: "https://todo-gkr.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/ToDo",
    tags: ["React js", "Tailwind css", "DOM manipulation", "Bootstrap"],
    features: [
      "Managing Daily Task",
      "Browse History",
    ],
  },
  {
    id: "project-7",
    title: "Text-Transform",
    slug: "text-transform",
    description: "A application to transform your text into desired way",
    image: "/images/webp/text.webp",
    demoUrl: "https://gauravkesh.github.io/Text-Transform/",
    githubUrl: "https://github.com/GauravKesh/Text-Transform",
    tags: ["React", "Bootstrap", "HTML", "CSS",],
    features: [
      "Transforming text",
      "Analyzing Text count",

    ],
  },
  {
    id: "project-8",
    title: "UI-UX",
    slug: "ui-ux",
    description: "I made this particular ui design  to enhance my skills",
    image: "/images/webp/ui-ux.webp",
    demoUrl: "https://onyx-mocha.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/onyx",
    tags: ["HTML", "CSS",],
    features: [
      "UI design",
      // "Budget creation and management",
      // "Financial goal setting and tracking",
      // "Interactive charts and reports",
      // "Bank account integration and reconciliation",
    ],
  },

  {
    id: "project-9",
    title: "Portfolio-V0",
    slug: "portfolio-v0",
    description: "My first portfolio that  i made ",
    image: "/images/webp/portfoliov0.webp",
    demoUrl: "https://gkrwebdev.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/GauravKesh.github.io",
    tags: ["HTML", "CSS",],
    features: [
      "A normal Portfolio",
      "Detect Location",
      // "Financial goal setting and tracking",
      // "Interactive charts and reports",
      // "Bank account integration and reconciliation",
    ],
  },
];