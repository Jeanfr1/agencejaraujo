'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Sparkles, Zap, Star, Cpu } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function BigText() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');

      // GSAP animation for the text glow effect
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.querySelectorAll('.word'),
          {
            textShadow: "0px 0px 0px rgba(168, 85, 247, 0)",
          },
          {
            textShadow: "0px 0px 20px rgba(168, 85, 247, 0.5)",
            stagger: 0.2,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
          }
        );
      }
    }
  }, [controls, inView]);

  const words = ['Creating', 'Digital', 'Excellence'];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: 45,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.215, 0.61, 0.355, 1],
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
  };

  // Generate random floating elements
  const floatingElements = [
    { icon: Code, color: "text-purple-500/30" },
    { icon: Sparkles, color: "text-pink-500/30" },
    { icon: Zap, color: "text-purple-400/30" },
    { icon: Star, color: "text-pink-400/30" },
    { icon: Cpu, color: "text-purple-600/30" },
  ];

  const floatingItems = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    icon: floatingElements[i % floatingElements.length].icon,
    color: floatingElements[i % floatingElements.length].color,
    size: Math.random() * 20 + 15,
    x: Math.random() * 100,
    y: Math.random() * -50,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    rotate: Math.random() * 360,
  }));

  return (
    <section ref={ref} className="py-32 bg-black overflow-hidden relative">
      {/* Background glow effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="absolute top-1/3 left-1/4 w-1/2 h-1/2 rounded-full bg-purple-600/5 blur-[150px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 rounded-full bg-pink-600/5 blur-[150px]"
      />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: item.y,
              x: `${item.x}vw`,
              rotate: item.rotate
            }}
            animate={{
              opacity: [0, 0.7, 0],
              y: '110vh',
              rotate: [item.rotate, item.rotate + 360],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: 'linear'
            }}
            className={`absolute top-0 ${item.color}`}
          >
            <item.icon size={item.size} />
          </motion.div>
        ))}
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={textRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap justify-center perspective-1000"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={`word text-6xl md:text-8xl font-bold mr-6 mb-4 block bg-gradient-to-r ${
                index === 0
                  ? 'from-purple-400 via-purple-500 to-pink-500'
                  : index === 1
                  ? 'from-pink-500 via-purple-500 to-purple-600'
                  : 'from-purple-600 via-pink-500 to-purple-400'
              } bg-clip-text text-transparent bg-[size:200%] relative`}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              {/* Animated background position for gradient text */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent opacity-0"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                {word}
              </motion.span>

              {word}

              {/* Glow effect on hover */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-pink-500/20 to-purple-600/0 blur-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
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
              delay: 1.2,
              ease: "easeOut"
            }
          } : {}}
          className="text-xl text-gray-300 max-w-2xl mx-auto text-center mt-8 leading-relaxed"
        >
          Pushing the boundaries of digital innovation with cutting-edge solutions and creative excellence.
        </motion.p>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? {
            width: "100px",
            opacity: 1,
            transition: {
              duration: 1,
              delay: 1.5,
              ease: "easeOut"
            }
          } : {}}
          className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mx-auto mt-8"
        />
      </div>
    </section>
  );
}
