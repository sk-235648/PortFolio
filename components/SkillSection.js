"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaDatabase, FaJava, FaPython
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiCplusplus, SiC, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-400 text-5xl" />, description: 'Markup for web pages' },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-400 text-5xl" />, description: 'Styling and layout design' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-5xl" />, description: 'Dynamic client-side logic' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 text-5xl" />, description: 'Typed superset of JavaScript' },
  { name: 'React', icon: <FaReact className="text-blue-300 text-5xl" />, description: 'UI Library for SPAs' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white text-5xl" />, description: 'React framework with SSR' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, description: 'Utility-first CSS' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-5xl" />, description: 'Backend runtime' },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300 text-5xl" />, description: 'Minimal backend framework' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-5xl" />, description: 'NoSQL document database' },
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-5xl" />, description: 'Version control system' },
  { name: 'SQL', icon: <FaDatabase className="text-orange-300 text-5xl" />, description: 'Relational database language' },
  { name: 'Python', icon: <FaPython className="text-yellow-300 text-5xl" />, description: 'Versatile high-level programming language' },
  { name: 'Java', icon: <FaJava className="text-red-400 text-5xl" />, description: 'Robust OOP language used in backend & Android' },
  { name: 'C++', icon: <SiCplusplus className="text-blue-500 text-5xl" />, description: 'Object-oriented language for performance' },
  { name: 'C', icon: <SiC className="text-gray-200 text-5xl" />, description: 'Procedural language for system-level programming' },
];

const SkillSection = () => {
  return (
    <section id='skills' className="bg-gray-950 py-20 px-6 md:px-12 text-white min-h-screen relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-orange-500 mb-4"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
        >
          From clean, semantic HTML to full-stack magic with the MERN stack — and even lower-level programming when needed.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <div>{skill.icon}</div>
              <p className="text-sm text-gray-300">{skill.name}</p>

              {/* Tooltip at the bottom */}
              <div className="absolute top-full mt-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 whitespace-nowrap shadow-lg">
                {skill.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path fill="#1f2937" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default SkillSection;

// "use client"
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// const SkillsSection = () => {
//   const skills = [
//     { name: 'React', icon: '/images/react-icon.png', level: 90 },
//     { name: 'Next.js', icon: '/images/nextjs-icon.png', level: 85 },
//     { name: 'Node.js', icon: '/images/nodejs-icon.png', level: 80 },
//     { name: 'Express', icon: '/images/express-icon.png', level: 75 },
//     { name: 'MongoDB', icon: '/images/mongodb-icon.png', level: 80 },
//     { name: 'JavaScript', icon: '/images/js-icon.png', level: 90 },
//     { name: 'TypeScript', icon: '/images/typescript-icon.png', level: 75 },
//     { name: 'HTML/CSS', icon: '/images/html-icon.png', level: 95 },
//     { name: 'Tailwind CSS', icon: '/images/tailwind-icon.png', level: 85 },
//     { name: 'Git', icon: '/images/git-icon.png', level: 80 },
//   ]

//   return (
//     <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden">
//       {/* Bottom Wave */}
//       <div className="absolute bottom-0 left-0 right-0 w-full z-0">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
//           <path fill="#1f2937" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//         </svg>
//       </div>

//       <div className="max-w-[80%] md:max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 z-10">
//         <motion.h2 
//           className="text-4xl font-bold text-orange-500 mb-12 text-center"
//           initial={{ y: -50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           My Skills
//         </motion.h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-orange-500/20 transition duration-300 border border-gray-700 hover:border-orange-500/30"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex flex-col items-center">
//                 <div className="relative w-16 h-16 mb-4">
//                   <Image
//                     src={skill.icon}
//                     alt={skill.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <h3 className="text-xl font-medium text-white mb-2">{skill.name}</h3>
//                 <div className="w-full bg-gray-700 rounded-full h-2.5">
//                   <div 
//                     className="bg-orange-500 h-2.5 rounded-full" 
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//                 <span className="text-orange-400 text-sm mt-2">{skill.level}%</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div 
//           className="mt-16 text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-semibold text-white mb-4">And many more...</h3>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             I'm constantly expanding my skill set to stay at the forefront of web development.
//             Currently exploring <span className="text-orange-400">Web3</span>, <span className="text-orange-400">Three.js</span>, 
//             and advanced <span className="text-orange-400">React patterns</span>.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default SkillsSection

// "use client"
// import { motion, useAnimation, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
// import { useEffect, useState, useRef } from 'react'

// const SkillsSection = () => {
//   const skills = [
//     { 
//       name: 'React', 
//       icon: '/images/react-icon.png', 
//       description: 'Building interactive UIs with hooks and context API' 
//     },
//     { 
//       name: 'Next.js', 
//       icon: '/images/nextjs-icon.png', 
//       description: 'SSR, SSG, and API route implementation' 
//     },
//     { 
//       name: 'Node.js', 
//       icon: '/images/nodejs-icon.png', 
//       description: 'Creating efficient backend services and APIs' 
//     },
//     { 
//       name: 'Express', 
//       icon: '/images/express-icon.png', 
//       description: 'RESTful API development and middleware integration' 
//     },
//     { 
//       name: 'MongoDB', 
//       icon: '/images/mongodb-icon.png', 
//       description: 'NoSQL database design and aggregation pipelines' 
//     },
//     { 
//       name: 'JavaScript', 
//       icon: '/images/js-icon.png', 
//       description: 'ES6+ features and modern asynchronous patterns' 
//     },
//     { 
//       name: 'TypeScript', 
//       icon: '/images/typescript-icon.png', 
//       description: 'Type-safe development and interface design' 
//     },
//     { 
//       name: 'HTML/CSS', 
//       icon: '/images/html-icon.png', 
//       description: 'Semantic markup and responsive design principles' 
//     },
//     { 
//       name: 'Tailwind CSS', 
//       icon: '/images/tailwind-icon.png', 
//       description: 'Utility-first styling and component theming' 
//     },
//     { 
//       name: 'Python', 
//       icon: '/images/python-icon.png', 
//       description: 'Scripting, automation, and data processing' 
//     },
//     { 
//       name: 'Java', 
//       icon: '/images/java-icon.png', 
//       description: 'OOP principles and algorithm implementation' 
//     },
//     { 
//       name: 'C++', 
//       icon: '/images/cpp-icon.png', 
//       description: 'Memory management and performance optimization' 
//     },
//     { 
//       name: 'C', 
//       icon: '/images/c-icon.png', 
//       description: 'Low-level programming and system development' 
//     },
//     { 
//       name: 'Git', 
//       icon: '/images/git-icon.png', 
//       description: 'Version control and collaborative workflows' 
//     }
//   ]

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const controls = useAnimation()
//   const carouselRef = useRef(null)
//   const [isHovered, setIsHovered] = useState(false)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHovered) {
//         setCurrentIndex(prev => (prev + 1) % skills.length)
//       }
//     }, 3000)

//     return () => clearInterval(interval)
//   }, [isHovered, skills.length])

//   useEffect(() => {
//     controls.start({
//       x: `-${currentIndex * 100}%`,
//       transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
//     })
//   }, [currentIndex, controls])

//   const visibleSkills = [...skills, ...skills] // Duplicate for infinite effect

//   return (
//     <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden py-16">
//       {/* Bottom Wave */}
//       <div className="absolute bottom-0 left-0 right-0 w-full z-0">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
//           <path fill="#1f2937" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//         </svg>
//       </div>

//       <div className="max-w-[80%] md:max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
//         <motion.h2 
//           className="text-4xl font-bold text-orange-500 mb-12 text-center"
//           initial={{ y: -50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           My Skills
//         </motion.h2>

//         <div 
//           className="relative w-full overflow-hidden"
//           ref={carouselRef}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <motion.div
//             className="flex"
//             animate={controls}
//           >
//             {visibleSkills.map((skill, index) => (
//               <motion.div
//                 key={`${skill.name}-${index}`}
//                 className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4"
//               >
//                 <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-orange-500/20 transition duration-300 border border-gray-700 hover:border-orange-500/30 h-full">
//                   <div className="flex flex-col items-center h-full">
//                     <div className="relative w-16 h-16 mb-4">
//                       <Image
//                         src={skill.icon}
//                         alt={skill.name}
//                         fill
//                         className="object-contain"
//                       />
//                     </div>
//                     <h3 className="text-xl font-medium text-white mb-2">{skill.name}</h3>
//                     <p className="text-gray-300 text-center text-sm md:text-base">
//                       {skill.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="flex justify-center mt-8 gap-2">
//           {skills.slice(0, 6).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full ${currentIndex % skills.length === index ? 'bg-orange-500' : 'bg-gray-600'}`}
//             />
//           ))}
//         </div>

//         <motion.div 
//           className="mt-16 text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-semibold text-white mb-4">Continuously Learning</h3>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             I'm constantly expanding my skills in <span className="text-orange-400">Web3</span>, 
//             <span className="text-orange-400"> Three.js</span>, and <span className="text-orange-400">cloud architectures</span>.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default SkillsSection