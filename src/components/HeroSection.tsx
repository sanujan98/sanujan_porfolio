import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "./TypewriterText";
import { HeroBackground } from "./HeroBackground";

const HeroSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(clientX - rect.left);
        y.set(clientY - rect.top);
      }}
    >
      {/* Interactive Particle Background */}
      <HeroBackground mouseX={xSpring} mouseY={ySpring} />

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
              Available for Hire
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Hi, I&apos;m <span className="text-primary">Sanujan Sri</span>
              <br />
              {/* <span className="text-foreground/80 text-3xl sm:text-4xl md:text-6xl mt-2 block">
                Frontend Architect
              </span> */}
              <TypewriterText
                words={[
                  "Software Developer",
                  "Full Stack Developer",
                  "Frontend Engineer",
                  "Backend Engineer",
                ]}
              />
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              I build exceptional, pixel-perfect, and accessible digital
              experiences. Specialized in modern web technologies including
              React, TypeScript, and NestJS.
            </p>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              "React",
              "TypeScript",
              "Node.js",
              "NestJS",
              "MongoDB",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-secondary/50 text-secondary-foreground text-sm font-medium backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6 pt-8 text-muted-foreground"
          >
            <a
              href="https://github.com/sanujan98"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sri-sanujan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/0 via-muted-foreground/50 to-muted-foreground/0" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
