import { MotionValue, motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroBackgroundProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

interface Particle {
  id: number;
  top: number;
  left: number;
  rotation: number;
  color: string;
  width: number;
  height: number;
  depth: number;
}

const colors = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-blue-500",
  "bg-emerald-500",
  "bg-pink-500",
];

export const HeroBackground = ({ mouseX, mouseY }: HeroBackgroundProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: Math.random() * 15 + 5, // 5px to 20px
      height: Math.random() * 4 + 2, // 2px to 6px
      depth: (Math.random() - 0.5) * 0.1, // Random movement factor
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <ParticleItem
          key={particle.id}
          particle={particle}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  );
};

const ParticleItem = ({
  particle,
  mouseX,
  mouseY,
}: {
  particle: Particle;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) => {
  const x = useTransform(mouseX, (val) => val * particle.depth);
  const y = useTransform(mouseY, (val) => val * particle.depth);

  return (
    <motion.div
      className={`absolute rounded-full ${particle.color} opacity-40`}
      style={{
        top: `${particle.top}%`,
        left: `${particle.left}%`,
        width: particle.width,
        height: particle.height,
        rotate: particle.rotation,
        x,
        y,
      }}
    />
  );
};
