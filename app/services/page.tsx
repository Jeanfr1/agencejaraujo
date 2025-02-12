'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Palette, Globe, Smartphone, Layers, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Creating stunning, responsive websites that captivate and convert. From simple landing pages to complex web applications.",
    features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Integration"],
    gradient: "from-purple-400 to-pink-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Building native and cross-platform mobile applications that provide seamless user experiences across all devices.",
    features: ["iOS Development", "Android Development", "Cross-platform Solutions", "Mobile UI/UX Design"],
    gradient: "from-pink-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful user interfaces that enhance user engagement and satisfaction.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    gradient: "from-purple-600 to-pink-500",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2264&auto=format&fit=crop"
  },
  {
    icon: Code,
    title: "Custom Solutions",
    description: "Developing tailored software solutions that address your unique business challenges and requirements.",
    features: ["Enterprise Software", "CRM Systems", "Automation Tools", "Integration Services"],
    gradient: "from-pink-500 to-purple-400",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2340&auto=format&fit=crop"
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
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
        </motion.div>

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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-center text-gray-300 max-w-3xl mx-auto"
          >
            Transforming ideas into digital excellence through innovative solutions and cutting-edge technology
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-600/10 blur-2xl transform rotate-45" />
                
                <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${service.gradient} p-0.5 rounded-lg`}>
                  <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: fIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-400"
                    >
                      <Zap className="w-4 h-4 mr-2 text-purple-400" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-white/90 hover:text-white transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          Our Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Layers, title: "Discovery", description: "We dive deep into understanding your needs and objectives" },
            { icon: Palette, title: "Design", description: "Creating intuitive and engaging user experiences" },
            { icon: Code, title: "Development", description: "Building robust and scalable solutions" }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-pink-600 p-0.5 rounded-full">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}