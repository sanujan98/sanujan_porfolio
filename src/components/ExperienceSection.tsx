
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2022 - Present",
    description: "Led the development of the company's flagship product, improving performance by 40%. Mentored junior developers and introduced modern CI/CD practices.",
    achievements: [
      "Redesigned the application architecture reducing load time by 35%",
      "Implemented automated testing increasing code coverage to 90%",
      "Spearheaded the migration from Angular to React, improving developer productivity"
    ],
    technologies: ["React", "TypeScript", "Redux", "GraphQL", "Jest"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations",
    period: "Mar 2020 - Dec 2021",
    description: "Developed responsive web applications for clients across various industries. Collaborated with designers and backend developers to deliver high-quality products.",
    achievements: [
      "Built 15+ responsive websites for enterprise clients",
      "Created a reusable component library reducing development time by 25%",
      "Optimized existing applications improving lighthouse scores by an average of 30 points"
    ],
    technologies: ["JavaScript", "Vue.js", "SCSS", "Webpack", "RESTful APIs"]
  },
  {
    title: "Web Developer Intern",
    company: "StartUp Hub",
    period: "Jun 2019 - Feb 2020",
    description: "Assisted in the development of web applications and gained hands-on experience with modern development practices.",
    achievements: [
      "Contributed to an open-source project with 5K+ GitHub stars",
      "Developed a dashboard for internal use, saving 10+ hours of manual work weekly",
      "Implemented responsive designs from Figma mockups"
    ],
    technologies: ["HTML/CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-portfolio-blue"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-portfolio-blue font-medium">{exp.company}</p>
                  </div>
                  <p className="text-gray-500 mt-2 md:mt-0">{exp.period}</p>
                </div>
                
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700">{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-gray-50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
