"use client"

import { IconCloud } from "@/components/ui/interactive-icon-cloud"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

export default function IconCloudDemo() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      } : {}}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-gray-800/50 bg-black/50 backdrop-blur-sm px-20 pb-20 pt-8"
    >
      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg opacity-0"
        animate={{
          opacity: isHovered ? 0.5 : 0,
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          opacity: { duration: 0.3 },
          backgroundPosition: {
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-transparent"
        animate={{
          borderColor: isHovered ? ['rgba(168, 85, 247, 0.3)', 'rgba(236, 72, 153, 0.3)', 'rgba(168, 85, 247, 0.3)'] : 'transparent',
          boxShadow: isHovered ? [
            '0 0 0px rgba(168, 85, 247, 0)',
            '0 0 15px rgba(236, 72, 153, 0.3)',
            '0 0 0px rgba(168, 85, 247, 0)'
          ] : 'none'
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Corner accents */}
      {[
        'top-0 left-0 border-t-2 border-l-2 rounded-tl-lg w-8 h-8',
        'top-0 right-0 border-t-2 border-r-2 rounded-tr-lg w-8 h-8',
        'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-lg w-8 h-8',
        'bottom-0 right-0 border-b-2 border-r-2 rounded-br-lg w-8 h-8'
      ].map((className, index) => (
        <motion.div
          key={index}
          className={`absolute ${className} border-purple-500/30`}
          animate={isHovered ? {
            borderColor: ['rgba(168, 85, 247, 0.3)', 'rgba(236, 72, 153, 0.3)', 'rgba(168, 85, 247, 0.3)']
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.2
          }}
        />
      ))}

      {/* Title */}
      <motion.h3
        className="absolute top-4 text-xl font-medium bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        animate={inView ? {
          opacity: 1,
          y: 0,
          textShadow: ["0 0 0px rgba(236, 72, 153, 0)", "0 0 10px rgba(236, 72, 153, 0.3)", "0 0 0px rgba(236, 72, 153, 0)"]
        } : { opacity: 0, y: 10 }}
        transition={{
          opacity: { duration: 0.5 },
          y: { duration: 0.5 },
          textShadow: {
            repeat: Infinity,
            duration: 2
          }
        }}
      >
        Tech Stack
      </motion.h3>

      <div suppressHydrationWarning className="relative">
        <IconCloud iconSlugs={slugs} />
      </div>
    </motion.div>
  )
}
