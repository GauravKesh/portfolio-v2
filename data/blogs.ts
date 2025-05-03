export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
  category: string;
  readTime: string;
  url: string;
}

export const blogData: BlogPost[] = [
  {
    id: "blog-1",
    title: "How to Build a High-Performance React Application",
    excerpt: "Learn the strategies and techniques for optimizing your React applications for better performance and user experience.",
    date: "April 15, 2023",
    image: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "John Developer",
    category: "React",
    readTime: "8 min read",
    url: "#",
  },
  {
    id: "blog-2",
    title: "Getting Started with TypeScript in 2023",
    excerpt: "A comprehensive guide to setting up and using TypeScript in your modern web development projects.",
    date: "March 22, 2023",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "John Developer",
    category: "TypeScript",
    readTime: "6 min read",
    url: "#",
  },
  {
    id: "blog-3",
    title: "The Power of Server Components in Next.js",
    excerpt: "Exploring the benefits and implementation details of React Server Components in Next.js applications.",
    date: "February 10, 2023",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "John Developer",
    category: "Next.js",
    readTime: "10 min read",
    url: "#",
  },
  {
    id: "blog-4",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Best practices for designing and implementing robust RESTful APIs using Node.js and Express.",
    date: "January 5, 2023",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "John Developer",
    category: "Backend",
    readTime: "7 min read",
    url: "#",
  },
];