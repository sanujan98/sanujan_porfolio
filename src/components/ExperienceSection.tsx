
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "IYKONS Pvt Ltd",
    period: "Sep 2024 - Present",
    description:
      "Led the development of the company's flagship product, improving performance by 40%. Mentored junior developers and introduced modern CI/CD practices.",
    achievements: [
      "Redesigned the application architecture reducing load time by 35%",
      "Implemented automated testing increasing code coverage to 90%",
      "Spearheaded the migration from Angular to React, improving developer productivity",
    ],
    technologies: ["React", "TypeScript", "Redux", "Vite", "Jest", "Nest.js"],
  },
  {
    title: "Intern Software Engineer",
    company: "IYKONS Pvt Ltd",
    period: "Mar 2023 - Aug 2024",
    description:
      "Developed responsive web applications for clients across various industries. Collaborated with designers and backend developers to deliver high-quality products.",
    achievements: [
      "Built 15+ responsive websites for enterprise clients",
      "Created a reusable component library reducing development time by 25%",
      "Optimized existing applications improving lighthouse scores by an average of 30 points",
    ],
    technologies: [
      "JavaScript",
      "SCSS",
      "Webpack",
      "RESTful APIs",
      "Node.js",
      "Less",
      "Tailwindcss",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-transparent">
      <div className="section-container">
        <h2 className="section-title mb-16">Work Experience</h2>

        <div className="max-w-3xl mx-auto relative">
           {/* Vertical Line */}
           <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border md:block hidden" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative md:pl-20"
              >
                 {/* Icon */}
                 <div className="absolute left-0 md:left-4 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg z-10 md:flex hidden">
                    <Briefcase className="w-4 h-4" />
                 </div>

                <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                        <p className="text-primary font-medium mt-1 text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>

                    <div className="space-y-2">
                       <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Key Achievements</h4>
                       <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                         {exp.achievements.map((achievement, i) => (
                           <li key={i}>{achievement}</li>
                         ))}
                       </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
