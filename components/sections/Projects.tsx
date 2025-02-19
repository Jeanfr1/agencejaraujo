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
    const translateZ = -Math.abs(diff * 200);
    const rotateY = diff * 45;
    const opacity = 1 - Math.min(Math.abs(diff) * 0.5, 0.8);
    const scale = 1 - Math.abs(diff) * 0.2;

    return {
      transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: projects.length - Math.abs(diff),
    };
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-black overflow-hidden perspective-1000">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-2xl transform group-hover:scale-105 transition-all duration-500" />
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50">
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={533}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-purple-400">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white/90 hover:text-white transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-2">View Demo</span>
                        <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white/90 hover:text-white transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-2">GitHub</span>
                        <Github className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
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
