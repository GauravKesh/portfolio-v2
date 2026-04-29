export interface Project {
  id: string;
  slug?: string;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  doc_url?: string;

  category: "systems" | "backend" | "frontend" | "fullstack" | "ai" | "infra";
  doc_type?: "readme";

  tags: string[];
  features: string[];
}

export const projectsData: Project[] = [


  // ⚙️ INFRA / SYSTEMS (ONLY IN DOC1)


  {
    id: "project-100",
    title: "API Gateway with Rate Limiting", 
    slug: "api-gateway-rate-limiting",

    description:
      "High-performance API gateway with centralized routing and distributed rate limiting.",
    image: "/images/webp/system.webp",
    githubUrl: "https://github.com/your-repo",
    doc_url: "https://github.com/your-repo",
    category: "infra",
    doc_type: "readme",
    tags: ["Go", "Redis", "Distributed Systems"],
    features: [
      "Centralized request routing",
      "Distributed rate limiting using Redis",
      "High concurrency design",
    ],
  },

  {
    id: "project-101",
    title: "Custom Document Database (MongoDB-like)",
         slug: "custom-document-database",

    description:
      "Lightweight document-oriented database with in-memory storage and persistence.",
    image: "/images/webp/system.webp",
    githubUrl: "https://github.com/GauravKesh/database",
    doc_url: "https://github.com/GauravKesh/database",
    category: "systems",
    doc_type: "readme",
    tags: ["C++", "Storage Engine"],
    features: [
      "Flexible schema storage",
      "JSON persistence",
      "Custom query engine",
    ],
  },

  {
    id: "project-102",
    title: "Multithreaded TCP Server",
      slug: "multithreaded-tcp-server",

    description:
      "Concurrent TCP server with thread pool and efficient socket handling.",
   
    image: "/images/webp/system.webp",
    githubUrl: "https://github.com/GauravKesh/cpp-multithreaded-tcp-server",
    doc_url: "https://github.com/GauravKesh/cpp-multithreaded-tcp-server",
    
    category: "systems",
    doc_type: "readme",
    tags: ["C++", "Sockets", "Concurrency"],
    features: [
      "Thread pool architecture",
      "Efficient I/O handling",
      "Low latency communication",
    ],
  },

  {
    id: "project-103",
    title: "IoT Real-Time Security Monitoring",
      slug: "iot-realtime-security-monitoring",

    description:
      "Edge-based system for real-time monitoring and anomaly detection.",
    image: "/images/webp/system.webp",
    category: "systems",
    tags: ["IoT", "Edge Computing", "Realtime"],
    features: [
      "Real-time sensor processing",
      "Low latency pipeline",
      "Alerting system",
    ],
  },


  // 🤖 AI


  {
    id: "project-0",
    title: "Devmate",
    slug: "devmate",
    description:
      "AI-driven collaboration platform for finding teammates and hackathon collaboration.",
    image: "/images/webp/devmate.webp",
    demoUrl: "https://dev-mate-seven.vercel.app/",
    githubUrl: "",
    category: "ai",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "AI/ML",
    ],
    features: [
      "AI teammate matching",
      "Hackathon discovery",
      "Real-time collaboration",
      "Privacy-first communication",
      "Personalized recommendations",
    ],
  },


  // 🌐 FULLSTACK


  {
    id: "project-1",
    title: "E-Patrol",
    slug: "E-Patrol",
    description:
      "Centralized police beat management system with tracking and incident handling.",
    image: "/images/webp/e-patrol.webp",
    demoUrl: "https://e-patrol.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/e-patrol",
    doc_url: "https://github.com/GauravKesh/e-patrol",
    category: "fullstack",
    doc_type: "readme",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "GeoTracking",
    ],
    features: [
      "RBAC system",
      "GPS tracking",
      "Incident reporting",
      "Admin dashboard",
      "REST APIs",
    ],
  },

  {
    id: "project-2",
    title: "Complaint Management System",
    slug: "Complaint-Management",
    description:
      "Full-stack complaint management platform with role-based workflows.",
    image: "/images/webp/complaint.webp",
    demoUrl: "https://conciliation-complain.vercel.app/home",
    githubUrl: "https://github.com/GauravKesh/Conciliation-Frontend",
    doc_url: "https://github.com/GauravKesh/Conciliation-Frontend",
    category: "fullstack",
    doc_type: "readme",
    tags: ["React", "Node.js", "MongoDB", "Next.js"],
    features: [
      "Authentication & authorization",
      "Real-time updates",
      "Admin analytics",
      "Scalable architecture",
    ],
  },

  {
    id: "project-4",
    title: "URL Shortner",
    slug: "URL-Shortner",
    description: "Scalable URL shortening service.",
    image: "/images/webp/gshort.webp",
    demoUrl: "https://gshort.vercel.app/",
    category: "fullstack",
    tags: ["Node.js", "Redis", "MongoDB"],
    features: [
      "Short URL generation",
      "Analytics tracking",
      "Low latency redirects",
    ],
  },


  // 🎨 FRONTEND


  {
    id: "project-3",
    title: "GDG-Website",
    slug: "GDG-Website",
    description: "Community platform website.",
    image: "/images/webp/gdg.webp",
    demoUrl: "https://gdgpu.vercel.app/",
    githubUrl: "https://github.com/username/social-dashboard",
    doc_url: "https://github.com/username/social-dashboard",
    category: "frontend",
    doc_type: "readme",
    tags: ["Next.js", "React", "TailwindCSS"],
    features: ["Event tracking", "Team page"],
  },

  {
    id: "project-10",
    title: "Portfolio v1",
    slug: "portfolio-v1",
    description: "Personal portfolio website.",
    image: "/images/webp/portfoliov1.webp",
    demoUrl: "https://pers-portfolio-v1.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/personalPortfolio",
    doc_url: "https://github.com/GauravKesh/personalPortfolio",
    category: "frontend",
    doc_type: "readme",
    tags: ["React", "Tailwind"],
    features: ["Landing page", "Project showcase"],
  },

  {
    id: "project-5",
    title: "Github Clone",
    slug: "github-clone",
    description: "GitHub profile visualization tool.",
    image: "/images/webp/github.webp",
    demoUrl: "https://searchgithubprofilegkr.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/Github_profile_search",
    doc_url: "https://github.com/GauravKesh/Github_profile_search",
    category: "frontend",
    doc_type: "readme",
    tags: ["React"],
    features: ["Profile search", "Data visualization"],
  },

  {
    id: "project-6",
    title: "TO-DO",
    slug: "to-do",
    description: "Task management app.",
    image: "/images/webp/todo.webp",
    demoUrl: "https://todo-gkr.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/ToDo",
    doc_url: "https://github.com/GauravKesh/ToDo",
    category: "frontend",
    doc_type: "readme",
    tags: ["React"],
    features: ["Task tracking"],
  },

  {
    id: "project-7",
    title: "Text-Transform",
    slug: "text-transform",
    description: "Text utility tool.",
    image: "/images/webp/text.webp",
    demoUrl: "https://gauravkesh.github.io/Text-Transform/",
    githubUrl: "https://github.com/GauravKesh/Text-Transform",
    doc_url: "https://github.com/GauravKesh/Text-Transform",
    category: "frontend",
    doc_type: "readme",
    tags: ["React"],
    features: ["Text transform", "Text analysis"],
  },

  {
    id: "project-8",
    title: "UI-UX",
    slug: "ui-ux",
    description: "UI design practice.",
    image: "/images/webp/ui-ux.webp",
    demoUrl: "https://onyx-mocha.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/onyx",
    doc_url: "https://github.com/GauravKesh/onyx",
    category: "frontend",
    doc_type: "readme",
    tags: ["HTML", "CSS"],
    features: ["UI components"],
  },

  {
    id: "project-9",
    title: "Portfolio-V0",
    slug: "portfolio-v0",
    description: "First portfolio version.",
    image: "/images/webp/portfoliov0.webp",
    demoUrl: "https://gkrwebdev.vercel.app/",
    githubUrl: "https://github.com/GauravKesh/GauravKesh.github.io",
    doc_url: "https://github.com/GauravKesh/GauravKesh.github.io",
    category: "frontend",
    doc_type: "readme",
    tags: ["HTML", "CSS"],
    features: ["Basic portfolio"],
  },
];