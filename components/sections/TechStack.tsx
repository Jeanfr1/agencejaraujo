'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Figma, Globe, Laptop, Palette, Smartphone } from 'lucide-react';

const technologies = [
  { icon: Code2, label: 'Development', gradient: 'from-purple-400 to-pink-500' },
  { icon: Palette, label: 'Design', gradient: 'from-pink-500 to-purple-600' },
  { icon: Globe, label: 'Web', gradient: 'from-purple-600 to-purple-400' },
  { icon: Smartphone, label: 'Mobile', gradient: 'from-purple-400 to-pink-500' },
  { icon: Laptop, label: 'Desktop', gradient: 'from-pink-500 to-purple-600' },
  { icon: Figma, label: 'UI/UX', gradient: 'from-purple-600 to-purple-400' },
];

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }
    },
    tap: {
      scale: 0.9,
      rotate: -45,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const glowVariants = {
    hover: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundVariants = {
    hover: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="py-20 bg-black">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative group"
            >
              {/* Glow effect */}
              <motion.div
                variants={glowVariants}
                className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-600/30 rounded-xl blur-xl"
              />
              
              {/* Card background with animation */}
              <motion.div
                variants={backgroundVariants}
                className="relative flex flex-col items-center justify-center p-8 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden hover:border-purple-500/50 transition-colors duration-300"
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                {/* Icon container with gradient border */}
                <motion.div 
                  className={`w-16 h-16 mb-4 bg-gradient-to-r ${tech.gradient} p-0.5 rounded-lg relative`}
                >
                  <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
                    <motion.div
                      variants={iconVariants}
                      className="relative z-10"
                    >
                      <tech.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Label with gradient text */}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-medium relative z-10"
                  variants={{
                    hover: {
                      scale: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }
                  }}
                >
                  {tech.label}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}