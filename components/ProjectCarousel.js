'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ProjectCarousel = () => {
  const projects = [
    {
      id: 1,
      title: "EzMart",
      description: "Full-featured eCommerce platform with product catalog, cart system, and secure checkout process.",
      image: "/Project/EzMart.png",
      url: "https://ezmart1.vercel.app/",
      tools: "Next.js, Tailwind CSS, MongoDB, Stripe API"
    },
    {
      id: 2,
      title: "LocaLite",
      description: "Local discovery platform helping users find and book unique experiences in their city.",
      image: "/Project/Localite.png",
      url: "https://localite-xzyk.vercel.app/",
      tools: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB"
    },
    {
      id: 3,
      title: "BitLinks",
      description: "URL shortening service with analytics dashboard and custom alias creation.",
      image: "/Project/BitLinks.avif",
      url: "https://bitlinks-demo.vercel.app/",
      tools: "Next.js, Tailwind CSS, MongoDB, Redis"
    },
    {
      id: 4,
      title: "PassOP",
      description: "Password manager with military-grade encryption and cross-device synchronization.",
      image: "/Project/Password.jpeg",
      url: "https://securevault-demo.vercel.app/",
      tools: "React, Tailwind CSS, Express.js, MongoDB, Crypto.js"
    },
    {
      id: 5,
      title: "VirtualR",
      description: "Interactive single-page application for virtual reality equipment showcase.",
      image: "/Project/VirtualR.png",
      url: "https://virtualr-demo.vercel.app/",
      tools: "React, Tailwind CSS, Three.js"
    },
    {
      id: 6,
      title: "Spotify Clone",
      description: "Music streaming interface with playlist creation and audio visualization.",
      image: "/Project/spotify.jpg",
      url: "https://musichub-demo.vercel.app/",
      tools: "HTML, CSS, JavaScript, Web Audio API"
    },
    {
      id: 7,
      title: "To Do List",
      description: "Productivity application with drag-and-drop task management and progress tracking.",
      image: "/Project/todolist.jpg",
      url: "https://taskmaster-demo.vercel.app/",
      tools: "React, Tailwind CSS, Firebase"
    },
    {
      id: 8,
      title: "BitTree",
      description: "Customizable link aggregation page for social media and digital presence.",
      image: "/Project/BitTree.png",
      url: "https://linkhub-demo.vercel.app/",
      tools: "Next.js, Tailwind CSS, MongoDB"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerSlide, setProjectsPerSlide] = useState(3);
  const [isHovering, setIsHovering] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setProjectsPerSlide(1);
      else if (window.innerWidth < 1024) setProjectsPerSlide(2);
      else setProjectsPerSlide(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const visibleProjects = () => {
    const start = currentIndex * projectsPerSlide;
    return projects.slice(start, start + projectsPerSlide);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-medium mb-2 block">PORTFOLIO</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my collection of web applications showcasing innovative solutions and clean code practices.
          </p>
        </div>

        <div className="relative group">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects().map((project) => (
              <div 
                key={project.id}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                onMouseEnter={() => setIsHovering(project.id)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-500 ${isHovering === project.id ? 'scale-105' : 'scale-100'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 ${isHovering === project.id ? 'opacity-100' : ''}`} />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <div className="flex space-x-2">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                        aria-label="Live project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.split(', ').map((tool, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous projects"
          >
            <ChevronLeft className="text-gray-800 dark:text-white" size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next projects"
          >
            <ChevronRight className="text-gray-800 dark:text-white" size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;