'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Figma, Globe, Laptop, Palette, Smartphone, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

const technologies = [
  { icon: Code2, label: 'Development', gradient: 'from-purple-400 to-pink-500', delay: 0 },
  { icon: Palette, label: 'Design', gradient: 'from-pink-500 to-purple-600', delay: 0.1 },
  { icon: Globe, label: 'Web', gradient: 'from-purple-600 to-purple-400', delay: 0.2 },
  { icon: Smartphone, label: 'Mobile', gradient: 'from-purple-400 to-pink-500', delay: 0.3 },
  { icon: Laptop, label: 'Desktop', gradient: 'from-pink-500 to-purple-600', delay: 0.4 },
  { icon: Figma, label: 'UI/UX', gradient: 'from-purple-600 to-purple-400', delay: 0.5 },
];

export default function TechStack() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
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
    initial: { scale: 1, rotate: 0 },
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
    initial: { opacity: 0.3, scale: 1 },
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
    initial: { backgroundPosition: "0% 50%" },
    hover: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const floatingParticles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Floating particles */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute z-0 text-purple-500/10"
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0
          }}
          animate={{
            x: [`${particle.x}%`, `${(particle.x + 20) % 100}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${(particle.y + 20) % 100}%`, `${particle.y}%`],
            opacity: [0, 0.8, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        >
          <Sparkles size={particle.size} />
        </motion.div>
      ))}

      {/* Background glow effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-purple-600/5 blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-pink-600/5 blur-[100px]"
      />

      {/* Section title */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
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
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto"
        >
          Transforming ideas into digital excellence through innovative solutions and cutting-edge technology
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              initial="initial"
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
                className="relative flex flex-col items-center justify-center p-8 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden hover:border-purple-500/50 transition-colors duration-300 shadow-lg"
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                {/* Animated background particles */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`particle-${index}-${i}`}
                      className="absolute rounded-full bg-white/10"
                      style={{
                        width: Math.random() * 6 + 2,
                        height: Math.random() * 6 + 2,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30],
                        x: [0, Math.random() * 10 - 5],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Icon container with gradient border and 3D effect */}
                <motion.div
                  className={`w-16 h-16 mb-4 bg-gradient-to-r ${tech.gradient} p-0.5 rounded-lg relative transform transition-transform duration-300 hover:translate-z-10`}
                  style={{
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                  whileHover={{
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
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

                {/* Label with gradient text and animation */}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-medium relative z-10"
                  variants={{
                    initial: { scale: 1 },
                    hover: {
                      scale: 1.1,
                      textShadow: "0 0 8px rgba(236, 72, 153, 0.3)",
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
