// import React from 'react'

// export default function usefulComponent() {
//   return (
//     <div>      <section className="py-20 px-4" ref={bioRef}>
//     <div className="container mx-auto max-w-6xl">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={fadeIn}
//         className="text-center mb-16"
//       >
//         <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">
//           Biography
//         </span>
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
//         <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
//       </motion.div>

//       <motion.div
//         className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={staggerContainer}
//       >
//         <motion.div
//           className="bg-accent/20 p-8 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
//           variants={item}
//           whileHover={{ y: -5, transition: { duration: 0.2 } }}
//         >
//           <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
//             <span className="text-primary">6+</span> Years Experience
//           </h3>
//           <p className="text-muted-foreground">
//             Creating innovative web solutions for clients across diverse industries.
//           </p>
//         </motion.div>

//         <motion.div
//           className="bg-accent/20 p-8 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
//           variants={item}
//           whileHover={{ y: -5, transition: { duration: 0.2 } }}
//         >
//           <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
//             <span className="text-primary">50+</span> Completed Projects
//           </h3>
//           <p className="text-muted-foreground">
//             Delivering high-quality web applications that exceed client expectations.
//           </p>
//         </motion.div>

//         <motion.div
//           className="bg-accent/20 p-8 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
//           variants={item}
//           whileHover={{ y: -5, transition: { duration: 0.2 } }}
//         >
//           <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
//             <span className="text-primary">30+</span> Satisfied Clients
//           </h3>
//           <p className="text-muted-foreground">
//             From startups to established businesses across the globe.
//           </p>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={fadeIn}
//         className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-16"
//       >
//         <p>
//           I'm a passionate Full Stack Developer with a love for creating elegant, efficient solutions to complex problems.
//           My journey in web development began 6 years ago, and since then, I've worked with a variety of technologies and frameworks
//           to build responsive, user-friendly applications.
//         </p>
//         <p>
//           With a background in both frontend and backend development, I bring a holistic approach to every project.
//           I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
//           Beyond technical skills, I pride myself on clear communication, problem-solving abilities, and attention to detail.
//         </p>
//         <p>
//           When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
//           or sharing my knowledge through blog posts and community forums.
//         </p>
//       </motion.div>
//     </div>
//   </section>

//   {/* Skills Section */}
//   <section className="py-20 px-4 bg-accent/5">
//     <div className="container mx-auto max-w-6xl">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={fadeIn}
//         className="text-center mb-16"
//       >
//         <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">
//           Expertise
//         </span>
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
//         <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={skill.name}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: {
//                   delay: index * 0.1,
//                   duration: 0.6
//                 }
//               }
//             }}
//             whileHover={{ y: -5, transition: { duration: 0.2 } }}
//             className="bg-background rounded-xl border border-border p-6 hover:shadow-lg transition-all"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <span className="p-2 bg-primary/10 text-primary rounded-lg">
//                 {skill.icon}
//               </span>
//               <h3 className="text-xl font-bold">{skill.name}</h3>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {skill.items.map((item) => (
//                 <Badge
//                   key={item}
//                   className="bg-accent/50 hover:bg-accent text-foreground"
//                 >
//                   {item}
//                 </Badge>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>

//   {/* Experience Section */}
//   <section className="py-20 px-4">
//     <div className="container mx-auto max-w-6xl">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={fadeIn}
//         className="text-center mb-16"
//       >
//         <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">
//           Work History
//         </span>
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
//         <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
//       </motion.div>

//       <div className="max-w-3xl mx-auto relative">
//         {/* Timeline line */}
//         <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform md:-translate-x-px top-0"></div>

//         {/* Timeline items */}
//         {experiences.map((exp, index) => (
//           <motion.div
//             key={index}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={{
//               hidden: { opacity: 0, y: 50 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: {
//                   delay: index * 0.2,
//                   duration: 0.6,
//                   ease: "easeOut"
//                 }
//               }
//             }}
//             className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${
//               index % 2 === 0 ? 'md:flex-row-reverse' : ''
//             }`}
//           >
//             {/* Timeline marker */}
//             <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2">
//               <div className="w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
//             </div>

//             {/* Content */}
//             <div className={`md:col-span-1 ${
//               index % 2 === 0 ? 'md:col-start-2 md:text-left' : 'md:text-right'
//             }`}>
//               <span className="text-sm text-primary font-medium">{exp.period}</span>
//               <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
//               <p className="text-muted-foreground text-sm mt-1">{exp.company}</p>
//             </div>

//             <div className={`md:col-span-1 ${
//               index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:text-left'
//             }`}>
//               <div className="bg-accent/20 p-6 rounded-xl border border-border/50">
//                 <p>{exp.description}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>

//   {/* CTA Section */}
//   <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
//     <div className="container mx-auto max-w-4xl">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={fadeIn}
//         className="text-center"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
//         <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
//           I'm currently available for freelance work and open to discussing new opportunities.
//           Let's create something amazing together!
//         </p>
//         <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
//           <Link href="/contact" className="flex items-center gap-2">
//             Get in Touch
//             <ArrowRight className="h-4 w-4" />
//           </Link>
//         </Button>
//       </motion.div>
//     </div>
//   </section></div>
//   )
// }

{
  /* <motion.div
              className="bg-accent/20 p-8 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-primary">6+</span> Years Experience
              </h3>
              <p className="text-muted-foreground">
                Creating innovative web solutions for clients across diverse
                industries.
              </p>
            </motion.div>

            <motion.div
              className="bg-accent/20 p-8 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-primary">50+</span> Completed Projects
              </h3>
              <p className="text-muted-foreground">
                Delivering high-quality web applications that exceed client
                expectations.
              </p>
            </motion.div>

            <motion.div
              className="bg-accent/20 p-8 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-primary">30+</span> Satisfied Clients
              </h3>
              <p className="text-muted-foreground">
                From startups to established businesses across the globe.
              </p>
            </motion.div> */
}
