"use client";

import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

interface ParticleBackgroundProps {
  id?: string;
  className?: string;
}

export default function ParticleBackground({
  id = "tsparticles",
  className = "",
}: ParticleBackgroundProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (!isClient) return null;

  return (
    <Particles
      id={id}
      className={`absolute inset-0 z-0 ${className}`}
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#9333ea", "#ec4899", "#8b5cf6"],
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
}
