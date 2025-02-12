'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code } from 'lucide-react';

export default function BigText() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const words = ['Creating', 'Digital', 'Excellence'];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: 45
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    },
  };

  return (
    <section ref={ref} className="py-32 bg-black overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0,
              y: -20,
              x: `${Math.random() * 100}vw`
            }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: '110vh',
              rotate: [0, 360],
            }}
            transition={{
              duration: 7 + Math.random() * 7,
              repeat: Infinity,
              delay: index * 0.5,
              ease: 'linear'
            }}
            className="absolute top-0 text-purple-400/30"
          >
            <Code size={24} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center perspective-1000"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={`text-6xl md:text-8xl font-bold mr-6 mb-4 block bg-gradient-to-r ${
                index === 0
                  ? 'from-purple-400 to-pink-500'
                  : index === 1
                  ? 'from-pink-500 to-purple-600'
                  : 'from-purple-600 to-purple-400'
              } bg-clip-text text-transparent`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut"
            }
          } : {}}
          className="text-xl text-gray-400 max-w-2xl mx-auto text-center mt-8"
        >
          Pushing the boundaries of digital innovation with cutting-edge solutions and creative excellence.
        </motion.p>
      </div>
    </section>
  );
}