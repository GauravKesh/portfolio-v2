export interface Project {
  id: string;
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
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/username/ecommerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    features: [
      "User authentication and profile management",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order tracking and history",
    ],
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/username/task-app",
    tags: ["React", "TypeScript", "Firebase", "TailwindCSS", "Zustand"],
    features: [
      "Task creation, editing, and categorization",
      "Project management and team assignment",
      "Calendar view and deadline tracking",
      "Real-time collaboration",
      "Customizable dashboard",
    ],
  },
  {
    id: "project-3",
    title: "Social Media Dashboard",
    description: "A comprehensive analytics dashboard for monitoring and managing social media presence across multiple platforms.",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/username/social-dashboard",
    tags: ["Next.js", "GraphQL", "TailwindCSS", "Chart.js", "OAuth"],
    features: [
      "Integration with multiple social media APIs",
      "Real-time analytics and reporting",
      "Content scheduling and publishing",
      "Audience insights and engagement metrics",
      "Customizable widget-based dashboard",
    ],
  },
  {
    id: "project-4",
    title: "Weather Forecast App",
    description: "A beautiful weather application that provides current conditions and forecasts using geolocation and weather APIs.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com/username/weather-app",
    tags: ["React", "OpenWeather API", "Geolocation", "PWA", "CSS Modules"],
    features: [
      "Current weather conditions and 7-day forecast",
      "Location-based weather using geolocation",
      "Search functionality for any location",
      "Interactive weather maps and radar",
      "Weather alerts and notifications",
    ],
  },
  {
    id: "project-5",
    title: "Fitness Tracking Platform",
    description: "A comprehensive fitness application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    image: "https://images.pexels.com/photos/3756042/pexels-photo-3756042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://example.com/demo5",
    githubUrl: "https://github.com/username/fitness-app",
    tags: ["React Native", "Firebase", "Redux", "Health APIs", "Charts"],
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
    title: "Personal Finance Manager",
    description: "A financial management application for tracking expenses, budgeting, and financial goal setting with visualization tools.",
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://example.com/demo6",
    githubUrl: "https://github.com/username/finance-app",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Recharts", "Auth0"],
    features: [
      "Income and expense tracking",
      "Budget creation and management",
      "Financial goal setting and tracking",
      "Interactive charts and reports",
      "Bank account integration and reconciliation",
    ],
  },
];