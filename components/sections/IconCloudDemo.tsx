"use client"

import { IconCloud } from "@/components/ui/interactive-icon-cloud"

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
  return (
    <div suppressHydrationWarning className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-gray-800/50 bg-black/50 backdrop-blur-sm px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}