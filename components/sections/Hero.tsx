'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {isLoaded && <Navbar />}
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

      <div className="relative z-10 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Agence Jaraujo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-white font-medium"
        >
          Where Innovation Meets Design
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="animate-bounce"
        >
          <ArrowDownCircle className="w-12 h-12" />
        </motion.div>
      </div>
    </section>
  );
}