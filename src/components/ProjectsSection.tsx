
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment gateway integration.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/johndoe/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/johndoe/task-app",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current conditions and forecasts based on location, with data visualization.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/johndoe/weather-app",
  },
  {
    title: "Personal Blog",
    description: "A content management system for publishing articles and blog posts with categorization, tagging, and search functionality.",
    image: "/placeholder.svg",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/johndoe/blog",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-56 bg-gray-200 relative">
                {/* Replace with actual project image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium text-lg">
                  {project.title} Screenshot
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-gray-50 text-portfolio-darkGray">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-portfolio-blue hover:text-portfolio-darkBlue transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-portfolio-blue hover:text-portfolio-darkBlue transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-portfolio-blue hover:bg-portfolio-darkBlue">
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
