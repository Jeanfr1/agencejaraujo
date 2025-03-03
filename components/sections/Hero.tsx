'use client';

import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowDownCircle, Sparkles } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';
import ParticleBackground from '@/components/ui/particle-background';
import { gsap } from 'gsap';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded && titleRef.current && subtitleRef.current) {
      // Create a text reveal animation with GSAP
      const title = titleRef.current;
      const subtitle = subtitleRef.current;

      gsap.fromTo(
        title,
        {
          backgroundPosition: "-100% 0",
          opacity: 0.7
        },
        {
          backgroundPosition: "0% 0",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        }
      );

      // Animate each character of the subtitle
      const chars = subtitle.innerText.split("");
      subtitle.innerHTML = "";
      chars.forEach((char, index) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        subtitle.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.1,
          delay: 1.5 + index * 0.03,
          ease: "power2.out"
        });
      });
    }
  }, [isLoaded]);

  if (!isMounted) return null;

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {isLoaded && <Navbar />}

      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Particle Background */}
      <ParticleBackground className="z-1 opacity-60" />

      {/* Floating Elements */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              opacity: [0, 0.7, 0],
              x: [null, Math.random() * 200 - 100],
              y: [null, Math.random() * 200 - 100],
              scale: [null, Math.random() * 0.5 + 0.5],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
            className="absolute text-purple-400/30"
          >
            <Sparkles size={24 + Math.random() * 24} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-white text-center"
        style={{ y, opacity }}
      >
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-[size:200%]"
        >
          Agence Jaraujo
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-white font-medium"
        >
          Where Innovation Meets Design
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            y: isLoaded ? [0, 10, 0] : 0
          }}
          transition={{
            duration: 2,
            delay: 0.6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-600/30 blur-xl"
          />
          <ArrowDownCircle className="w-12 h-12 relative z-10" />
        </motion.div>
      </motion.div>
    </section>
  );
}
