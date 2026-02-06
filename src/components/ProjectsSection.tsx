
import { Button } from "@/components/ui/button";
import Commerce from "../assets/p1.png";
import Buss from "../assets/p2.png";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment gateway integration.",
    image: Commerce,
    tags: ["React", "Nest.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Bus Ticket Booking Platform",
    description:
      "SeatScape is a modern, responsive web application designed to simplify intercity bus ticket booking. The goal is to create a user-friendly interface where users can search, view, and book bus journeys with minimal effort. The UI emphasizes clarity, accessibility, and seamless user interaction.",
    image: Buss,
    tags: [
      "React",
      "TypeScript",
      "React Router DOM",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that displays current conditions and forecasts based on location, with data visualization using Chart.js.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
    tags: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Personal Blog CMS",
    description:
      "A content management system for publishing articles and blog posts with categorization, tagging, and search functionality.",
    image: "https://images.unsplash.com/photo-1499750310159-5b600aaf0320?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, ranging from web applications to full-stack platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
          >
            <a
              href="https://github.com/sanujan98"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on GitHub <ArrowRight className="ml-2 h-4 w-4"/>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
