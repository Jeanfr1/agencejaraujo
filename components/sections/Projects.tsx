'use client';

import { motion, useAnimation } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'BitcoinPulse',
    description: 'A sleek, modern real-time Bitcoin price tracker with live order book visualization. Built with React, TypeScript, and WebSocket technology.',
    image: '/images/projects/bitcoin-pulse.jpg',
    category: 'Web Development',
    demoLink: 'https://bitcoinpulse.netlify.app',
    githubLink: 'https://github.com/Jeanfr1/bitcoinpulse'
  },
  {
    title: 'FinSnap',
    description: 'A modern expense tracking and management application for teams',
    image: '/images/projects/finsnap.jpg',
    category: 'Financial Technology',
    demoLink: 'https://finsnap.netlify.app',
    githubLink: 'https://github.com/Jeanfr1/finsnap-sharewise'
  },
  {
    title: 'WoodCraftStore',
    description: 'A modern, elegant e-commerce platform built with React, TypeScript, and Supabase, offering a seamless shopping experience',
    image: '/images/projects/woodcraft-store.jpg',
    category: 'E-commerce',
    demoLink: 'https://woodcraftstore.netlify.app',
    githubLink: 'https://github.com/Jeanfr1/cozycraft-home'
  },
  {
    title: 'Moodfy',
    description: 'An innovative web application that suggests music based on your current mood.',
    image: '/images/projects/moodfy.jpg',
    category: 'Music Technology',
    demoLink: 'https://moodfy.netlify.app',
    githubLink: 'https://github.com/Jeanfr1/vibe-harmony-generator'
  },
  {
    title: 'DevConnect',
    description: 'A modern social platform for developers to share knowledge, showcase projects, and build connections.',
    image: '/images/projects/devconnect.jpg',
    category: 'Social Network & Developer Tools',
    demoLink: 'https://devvconnect.netlify.app/',
    githubLink: 'https://github.com/Jeanfr1/DevConnect/'
  },
  {
    title: 'MamaCare',
    description: 'A cutting-edge parenting platform that combines artificial intelligence with expert knowledge to support parents throughout their journey. Our platform offers personalized guidance, development tracking, and AI-powered assistance to ensure the best care for your child.',
    image: '/images/projects/mamacare.jpg',
    category: 'Healthcare & Parenting Technology',
    demoLink: 'https://mamacareapp.netlify.app/',
    githubLink: '#'
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getTransform = (index: number) => {
    const diff = (index - activeIndex + projects.length) % projects.length;
    const translateX = diff * 60 - 30; // Percentage
    const translateZ = -Math.abs(diff * 300); // Increased depth for more dramatic 3D effect
    const rotateY = diff * 45;
    const opacity = 1 - Math.min(Math.abs(diff) * 0.5, 0.8);
    const scale = 1 - Math.abs(diff) * 0.2;

    // Add a slight vertical offset for a more dynamic arrangement
    const translateY = Math.abs(diff) * 10;

    return {
      transform: `translateX(${translateX}%) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: projects.length - Math.abs(diff),
      filter: `blur(${Math.abs(diff) * 2}px)`, // Add blur effect to distant cards
    };
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-black overflow-hidden perspective-1000">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-purple-600/10 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-pink-600/10 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-purple-400/50 to-pink-600/50 blur-sm"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? {
            opacity: 1,
            y: 0,
            textShadow: ["0 0 0px rgba(236, 72, 153, 0)", "0 0 10px rgba(236, 72, 153, 0.5)", "0 0 0px rgba(236, 72, 153, 0)"]
          } : {}}
          transition={{
            duration: 0.6,
            textShadow: {
              repeat: Infinity,
              duration: 2
            }
          }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          Our Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Discover our latest work and innovative solutions
        </motion.p>
      </div>

      <div className="relative h-[600px] flex items-center justify-center">
        {/* Navigation Arrows */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400/20 to-pink-600/20 backdrop-blur-sm border border-gray-800/50 text-white/90 hover:text-white transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400/20 to-pink-600/20 backdrop-blur-sm border border-gray-800/50 text-white/90 hover:text-white transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              animate={{ ...getTransform(index) }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="absolute w-[80%] max-w-[500px] cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Animated glow effect on hover */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-70 blur-md transition-all duration-500"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                />

                {/* Card background with glass effect */}
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 shadow-xl">
                  {/* Image container with parallax effect */}
                  <motion.div
                    className="relative h-[300px] overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={533}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />

                    {/* Overlay with animated gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"
                      whileHover={{
                        background: "linear-gradient(to top, rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.4), transparent)"
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Category badge with glow effect */}
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm border border-purple-500/30"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(168, 85, 247, 0.5)" }}
                    >
                      <span className="text-sm font-medium text-purple-400">{project.category}</span>
                    </motion.div>
                  </motion.div>

                  {/* Content section with staggered animations */}
                  <div className="p-6">
                    <motion.h3
                      className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                      whileHover={{
                        textShadow: "0 0 8px rgba(236, 72, 153, 0.3)",
                        scale: 1.01,
                        x: 2
                      }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex space-x-4">
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/20 text-white/90 hover:text-white transition-all duration-300"
                        whileHover={{
                          x: 5,
                          boxShadow: "0 0 10px rgba(168, 85, 247, 0.3)",
                          borderColor: "rgba(168, 85, 247, 0.5)"
                        }}
                      >
                        <span className="mr-2">View Demo</span>
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.div>
                      </motion.a>

                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/20 text-white/90 hover:text-white transition-all duration-300"
                        whileHover={{
                          x: 5,
                          boxShadow: "0 0 10px rgba(168, 85, 247, 0.3)",
                          borderColor: "rgba(168, 85, 247, 0.5)"
                        }}
                      >
                        <span className="mr-2">GitHub</span>
                        <motion.div
                          animate={{ rotate: [0, 15, 0, -15, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-gradient-to-r from-purple-400 to-pink-600'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
