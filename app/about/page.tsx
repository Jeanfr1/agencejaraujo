'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, Globe, Users, Lightbulb, Code, Palette, Rocket } from 'lucide-react';
import Link from 'next/link';

const timeline = [
  {
    country: 'Brazil',
    period: 'Early Years',
    description: 'Where it all began - from managing a franchise restaurant to training professionals in software implementation.',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325'
  },
  {
    country: 'Ireland',
    period: 'Growth Period',
    description: 'Diverse roles at global companies like Microsoft, mastering English and multicultural work environments.',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e'
  },
  {
    country: 'France',
    period: 'Transformation',
    description: 'Technical expertise meets creativity at HPE, leading to the vision of Agence Jaraujo.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'
  }
];

const values = [
  { icon: Globe, title: 'Global Perspective', description: 'Drawing insights from three different continents' },
  { icon: Users, title: 'Client-Centric', description: 'Understanding and exceeding client expectations' },
  { icon: Lightbulb, title: 'Innovation', description: 'Pushing boundaries in technology and design' },
  { icon: Code, title: 'Technical Excellence', description: 'Mastery in development and implementation' },
  { icon: Palette, title: 'Creative Vision', description: 'Blending aesthetics with functionality' },
  { icon: Rocket, title: 'Forward Thinking', description: 'Always staying ahead of industry trends' }
];

export default function About() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-8 left-4"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-white/90 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
          >
            The Story of Agence Jaraujo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-center text-gray-300 max-w-3xl mx-auto"
          >
            A Journey Across Borders, Shaping Digital Excellence
          </motion.p>
        </div>
      </div>

      {/* Timeline Section */}
      <div ref={timelineRef} className="container mx-auto px-4 py-20">
        <div className="space-y-20">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
                  <img
                    src={item.image}
                    alt={item.country}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  {item.country}
                </h3>
                <h4 className="text-xl text-gray-300">{item.period}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div ref={valuesRef} className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
                <div className="w-16 h-16 mb-6 bg-gradient-to-r from-purple-400 to-pink-600 p-0.5 rounded-lg">
                  <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}