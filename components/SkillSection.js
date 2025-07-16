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