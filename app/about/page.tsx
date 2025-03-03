'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowLeft, Globe, Users, Lightbulb, Code, Palette, Rocket,
  Cpu, Database, Bot, Workflow, Sparkles, Braces, Server,
  BarChart, Blocks, Layers
} from 'lucide-react';
import Link from 'next/link';

const experience = [
  {
    company: 'Kasst',
    period: 'December 2024 - Present',
    role: 'Frontend Developer | React | TypeScript | Web3 Enthusiast | UX/UI',
    description: 'Developing modern and scalable frontend architectures using React, TypeScript, and Node.js. Integrating Web3 solutions with Ethers.js, Hardhat, and smart contracts to build decentralized applications (dApps) and DEX UIs. Translating UI/UX designs into pixel-perfect, responsive interfaces.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80'
  },
  {
    company: 'Agence Jaraujo',
    period: 'April 2024 - November 2024',
    role: 'AI Developer | Fullstack Engineer | Automation Specialist',
    description: 'Developed AI-driven tools to automate repetitive tasks, reducing manual workload by 40%. Integrated data analysis pipelines using AI models for predictive insights, improving decision-making speed by 35%. Implemented smart automation workflows that enhanced project delivery efficiency by 25%.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80'
  },
  {
    company: 'Agence Jaraujo',
    period: 'October 2023 - April 2024',
    role: 'Fullstack Developer & Technical Advisor',
    description: 'Developed scalable, responsive web applications using React, Node.js, and Tailwind CSS. Collaborated with design teams to implement intuitive interfaces. Integrated AI-driven tools and automation processes to streamline development workflows.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80'
  },
  {
    company: 'Previous Experience',
    period: 'Career Foundation',
    description: 'At Microsoft, supported business technology projects that streamlined processes, reducing operational costs by 18%. At HP (HPE Flex Offers Program), led strategic outreach and training initiatives, contributing to a 20% increase in program adoption across France.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80'
  }
];

const skills = [
  { icon: Bot, title: 'AI & Automation', description: 'Creating intelligent solutions that transform businesses' },
  { icon: Braces, title: 'Frontend Development', description: 'React, TypeScript, responsive UI/UX implementation' },
  { icon: Server, title: 'Backend Development', description: 'Node.js, API development & integration' },
  { icon: Blocks, title: 'Web3 Technologies', description: 'Ethers.js, Hardhat, smart contracts, dApps' },
  { icon: Workflow, title: 'Workflow Optimization', description: 'Streamlining processes with smart automation' },
  { icon: Database, title: 'Data Integration', description: 'Building data pipelines for predictive insights' },
  { icon: Cpu, title: 'Machine Learning', description: 'Implementing ML fundamentals for business solutions' },
  { icon: Layers, title: 'Fullstack Expertise', description: 'End-to-end development with modern technologies' },
  { icon: BarChart, title: 'Data Analysis', description: 'Transforming data into actionable business insights' }
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

      {/* Professional Experience Section */}
      <div ref={timelineRef} className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          Professional Journey
        </motion.h2>

        <div className="space-y-20">
          {experience.map((item, index) => (
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
                    alt={item.company}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  {item.company}
                </h3>
                <h4 className="text-xl text-purple-300">{item.role}</h4>
                <h5 className="text-md text-gray-400">{item.period}</h5>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div ref={valuesRef} className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          Expertise & Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
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
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  {skill.title}
                </h3>
                <p className="text-gray-400">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Me Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50"
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              I&apos;m an AI Developer passionate about creating intelligent solutions that transform businesses. With a strong foundation in Fullstack Development (React, Node.js) and a recent pivot to Artificial Intelligence and Automation, I design and implement AI-driven systems that optimize workflows, enhance data analysis, and drive business growth.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              My diverse background includes leading projects in customer service, technical training, and fullstack development across global companies like Microsoft and HP. This unique combination of technical expertise and business acumen enables me to tackle complex challenges with innovative AI solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently, at Agence Jaraujo, I integrate advanced AI tools to automate processes, streamline operations, and deliver data-driven insights, positioning businesses for success in the digital era.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
