// 'use client'

// import { useRef } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { Badge } from '@/components/ui/badge'
// import { 
//   Github, 
//   Linkedin, 
//   Twitter, 
//   Mail, 
//   Download, 
//   ArrowRight, 
//   Code, 
//   Monitor, 
//   Lightbulb,
//   Database,
//   Layers
// } from 'lucide-react'
// import CallToAction from '@/components/sections/CallToAction'

// // Define your skills and experiences
// // You would replace these with your actual information
// const skills = [
//   { name: 'Frontend', icon: <Monitor className="h-5 w-5" />, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
//   { name: 'Backend', icon: <Database className="h-5 w-5" />, items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'] },
//   { name: 'DevOps', icon: <Layers className="h-5 w-5" />, items: ['Docker', 'CI/CD', 'AWS', 'Vercel', 'Git'] },
//   { name: 'Design', icon: <Lightbulb className="h-5 w-5" />, items: ['Figma', 'UI/UX', 'Responsive Design', 'Design Systems'] },
// ]

// const experiences = [
//   {
//     title: 'Senior Frontend Developer',
//     company: 'Tech Innovations Inc.',
//     period: '2022 - Present',
//     description: 'Led the development of a next-generation web application using React, TypeScript, and GraphQL. Improved site performance by 40% and implemented CI/CD pipelines.',
//   },
//   {
//     title: 'Full Stack Developer',
//     company: 'Digital Solutions',
//     period: '2019 - 2022',
//     description: 'Designed and built RESTful APIs, implemented user authentication systems, and developed responsive interfaces for client projects.',
//   },
//   {
//     title: 'Junior Web Developer',
//     company: 'Creative Agency',
//     period: '2017 - 2019',
//     description: 'Collaborated with designers to implement pixel-perfect layouts and animations. Maintained and updated existing client websites.',
//   },
// ]

// export default function AboutPage() {
//   // References for scroll animations
//   const containerRef = useRef<HTMLDivElement>(null)
//   const bioRef = useRef<HTMLDivElement>(null)
  
//   // Parallax scrolling effect
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   })
  
//   const y = useTransform(scrollYProgress, [0, 1], [0, 200])
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 8])
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   }
  
//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       }
//     }
//   }
  
//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 15
//       }
//     }
//   }
  
//   const decorativeItemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: (custom: number) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: custom * 0.1,
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     })
//   }

//   return (
//     <div className="relative" ref={containerRef}>
//       {/* Decorative background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
//         <motion.div 
//           className="absolute right-[10%] top-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
//           style={{ y, scale }}
//         />
//         <motion.div 
//           className="absolute left-[5%] bottom-[30%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
//           style={{ y: y.velocity, rotate }}
//         />
//       </div>
      
//       {/* Hero Section */}
//       <section className="relative py-20 md:py-32 px-4 overflow-hidden">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//               className="order-2 lg:order-1"
//             >
//               <motion.span 
//                 className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-6"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 About Me
//               </motion.span>
              
//               <motion.h1 
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text"
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { 
//                     opacity: 1, 
//                     y: 0, 
//                     transition: {
//                       delay: 0.1,
//                       duration: 0.8,
//                       ease: "easeOut"
//                     }
//                   }
//                 }}
//               >
//                 I'm <span className="text-primary">John Doe</span>,<br />
//                 Full Stack Developer
//               </motion.h1>
              
//               <motion.p 
//                 className="text-lg text-muted-foreground mb-8 max-w-lg"
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { 
//                     opacity: 1, 
//                     y: 0, 
//                     transition: {
//                       delay: 0.3,
//                       duration: 0.8,
//                       ease: "easeOut"
//                     }
//                   }
//                 }}
//               >
//                 I craft modern, high-performance web applications with a focus on user 
//                 experience and clean code. With 6+ years of experience in web development, 
//                 I specialize in React, TypeScript, and modern JavaScript frameworks.
//               </motion.p>
              
//               <motion.div 
//                 className="flex flex-wrap gap-4"
//                 variants={{
//                   hidden: { opacity: 0 },
//                   visible: { 
//                     opacity: 1, 
//                     transition: {
//                       delay: 0.5,
//                       duration: 0.5
//                     }
//                   }
//                 }}
//               >
//                 <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
//                   <Link href="/contact" className="flex items-center gap-2">
//                     <Mail className="h-4 w-4" />
//                     Contact Me
//                   </Link>
//                 </Button>
//                 <Button variant="outline" size="lg" asChild>
//                   <a href="/resume.pdf" download className="flex items-center gap-2">
//                     <Download className="h-4 w-4" />
//                     Download CV
//                   </a>
//                 </Button>
//               </motion.div>
              
//               <motion.div 
//                 className="flex gap-4 mt-8"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.7, duration: 0.5 }}
//               >
//                 <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
//                   <Github className="h-5 w-5" />
//                 </a>
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
//                   <Twitter className="h-5 w-5" />
//                 </a>
//               </motion.div>
//             </motion.div>
            
//             <motion.div 
//               className="relative order-1 lg:order-2"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="relative w-full aspect-square max-w-md mx-auto">
//                 {/* Border animation */}
//                 <motion.div 
//                   className="absolute inset-0 rounded-3xl border-2 border-primary/20"
//                   animate={{ 
//                     rotate: [0, 5, 0],
//                     scale: [1, 1.05, 1],
//                   }}
//                   transition={{ 
//                     duration: 8, 
//                     ease: "easeInOut", 
//                     repeat: Infinity,
//                   }}
//                 />
                
//                 {/* Main image */}
//                 <div className="absolute inset-4 overflow-hidden rounded-2xl bg-muted/20 border border-border">
//                   <Image 
//                     src="https://media.licdn.com/dms/image/v2/D4E03AQFwx9_pSbHGzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715803087891?e=1751500800&v=beta&t=FFBUpPcuiMDUpwmfOA4zW7oFM46OKj1LtIYrY1ycvSE" 
//                     alt="Gaurav Kesh Roushan - Full Stack Developer" 
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
                
//                 {/* Decorative elements */}
//                 <motion.div 
//                   custom={0}
//                   variants={decorativeItemVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="absolute -top-6 -right-6 p-3 bg-background rounded-lg shadow-lg border border-border"
//                 >
//                   <Code className="h-6 w-6 text-primary" />
//                 </motion.div>
                
//                 <motion.div 
//                   custom={1}
//                   variants={decorativeItemVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="absolute -bottom-6 -right-6 p-3 bg-background rounded-lg shadow-lg border border-border"
//                 >
//                   <Monitor className="h-6 w-6 text-secondary" />
//                 </motion.div>
                
//                 <motion.div 
//                   custom={2}
//                   variants={decorativeItemVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="absolute -bottom-6 -left-6 p-3 bg-background rounded-lg shadow-lg border border-border"
//                 >
//                   <Database className="h-6 w-6 text-primary" />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
      
//       {/* Bio Section */}
//       <section className="py-20 px-4" ref={bioRef}>
//         <div className="container mx-auto max-w-6xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={fadeIn}
//             className="text-center mb-16"
//           >
//             <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">
//               Biography
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
//           </motion.div>
          
//           <motion.div 
//             className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={staggerContainer}
//           >
//             <motion.div 
//               className="bg-accent/20 p-8 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
//               variants={item}
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//             >
//               <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
//                 <span className="text-primary">6+</span> Years Experience
//               </h3>
//               <p className="text-muted-foreground">
//                 Creating innovative web solutions for clients across diverse industries.
//               </p>
//             </motion.div>
            
//             <motion.div 
//               className="bg-accent/20 p-8 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
//               variants={item}
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//             >
//               <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
//                 <span className="text-primary">50+</span> Completed Projects
//               </h3>
//               <p className="text-muted-foreground">
//                 Delivering high-quality web applications that exceed client expectations.
//               </p>
//             </motion.div>
            
//             <motion.div 
//               className="bg-accent/20 p-8 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
//               variants={item}
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//             >
//               <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
//                 <span className="text-primary">30+</span> Satisfied Clients
//               </h3>
//               <p className="text-muted-foreground">
//                 From startups to established businesses across the globe.
//               </p>
//             </motion.div>
//           </motion.div>
          
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={fadeIn}
//             className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-16"
//           >
//             <p>
//               I'm a passionate Full Stack Developer with a love for creating elegant, efficient solutions to complex problems. 
//               My journey in web development began 6 years ago, and since then, I've worked with a variety of technologies and frameworks
//               to build responsive, user-friendly applications.
//             </p>
//             <p>
//               With a background in both frontend and backend development, I bring a holistic approach to every project.
//               I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
//               Beyond technical skills, I pride myself on clear communication, problem-solving abilities, and attention to detail.
//             </p>
//             <p>
//               When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
//               or sharing my knowledge through blog posts and community forums.
//             </p>
//           </motion.div>
//         </div>
//       </section>
      
//       {/* Skills Section */}
//       <section className="py-20 px-4 bg-accent/5">
//         <div className="container mx-auto max-w-6xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={fadeIn}
//             className="text-center mb-16"
//           >
//             <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">
//               Expertise
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {skills.map((skill, index) => (
//               <motion.div 
//                 key={skill.name}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-100px" }}
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { 
//                     opacity: 1, 
//                     y: 0, 
//                     transition: { 
//                       delay: index * 0.1,
//                       duration: 0.6
//                     }
//                   }
//                 }}
//                 whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                 className="bg-background rounded-xl border border-border p-6 hover:shadow-lg transition-all"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <span className="p-2 bg-primary/10 text-primary rounded-lg">
//                     {skill.icon}
//                   </span>
//                   <h3 className="text-xl font-bold">{skill.name}</h3>
//                 </div>
                
//                 <div className="flex flex-wrap gap-2">
//                   {skill.items.map((item) => (
//                     <Badge 
//                       key={item} 
//                       className="bg-accent/50 hover:bg-accent text-foreground"
//                     >
//                       {item}
//                     </Badge>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Experience Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={fadeIn}
//             className="text-center mb-16"
//           >
//             <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">
//               Work History
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
//           </motion.div>
          
//           <div className="max-w-3xl mx-auto relative">
//             {/* Timeline line */}
//             <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform md:-translate-x-px top-0"></div>
            
//             {/* Timeline items */}
//             {experiences.map((exp, index) => (
//               <motion.div 
//                 key={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-100px" }}
//                 variants={{
//                   hidden: { opacity: 0, y: 50 },
//                   visible: { 
//                     opacity: 1, 
//                     y: 0, 
//                     transition: { 
//                       delay: index * 0.2,
//                       duration: 0.6,
//                       ease: "easeOut"
//                     }
//                   }
//                 }}
//                 className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${
//                   index % 2 === 0 ? 'md:flex-row-reverse' : ''
//                 }`}
//               >
//                 {/* Timeline marker */}
//                 <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2">
//                   <div className="w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
//                 </div>
                
//                 {/* Content */}
//                 <div className={`md:col-span-1 ${
//                   index % 2 === 0 ? 'md:col-start-2 md:text-left' : 'md:text-right'
//                 }`}>
//                   <span className="text-sm text-primary font-medium">{exp.period}</span>
//                   <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
//                   <p className="text-muted-foreground text-sm mt-1">{exp.company}</p>
//                 </div>
                
//                 <div className={`md:col-span-1 ${
//                   index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:text-left'
//                 }`}>
//                   <div className="bg-accent/20 p-6 rounded-xl border border-border/50">
//                     <p>{exp.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* CTA Section */}
//      <CallToAction/>
//     </div>
//   )
// }