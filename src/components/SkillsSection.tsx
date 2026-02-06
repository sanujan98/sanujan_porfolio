import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Database,
  Layout,
  Settings,
  Terminal,
  Wrench,
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-primary" />,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Shadcn UI",
        "Ant Design",
        "MUI",
        "HTML5/CSS3",
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: [
        "Node.js",
        "Express.js",
        "NestJS",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        ".Net",
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-6 h-6 text-primary" />,
      skills: [
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Jest",
        "Linux",
        "Vercel",
        "Azure",
      ],
    },
    {
      title: "Soft Skills",
      icon: <Terminal className="w-6 h-6 text-primary" />, // Using Terminal as placeholder or maybe User
      skills: [
        "Problem Solving",
        "Team Leadership",
        "Communication",
        "Agile/Scrum",
        "Mentoring",
        "Team Collaboration",
        "Self-Learning & Adaptability",
        "Time Management",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="section-title">Technical Proficiency</h2>
          <p className="text-muted-foreground mt-4">
            A comprehensive overview of my technical expertise and the
            technologies I work with.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow border-muted bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-normal px-3 py-1 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
