import dynamic from 'next/dynamic';

const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false });
const BigText = dynamic(() => import('@/components/sections/BigText'), { ssr: false });
const TechStack = dynamic(() => import('@/components/sections/TechStack'), { ssr: false });
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false });
const LoadingScreen = dynamic(() => import('@/components/sections/LoadingScreen'), { ssr: false });
const IconCloudDemo = dynamic(() => import('@/components/sections/IconCloudDemo'), { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <Hero />
      <TechStack />
      <Projects />
      <BigText />
      <div className="bg-black py-20">
        <div className="container mx-auto flex justify-center">
          <IconCloudDemo />
        </div>
      </div>
    </main>
  );
}