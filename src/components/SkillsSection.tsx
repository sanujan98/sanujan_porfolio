import { CheckCircle2 } from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "HTML5/CSS3", "Tailwind CSS"],
    },
    { category: "Backend", skills: ["Node.js", "Express", "Nest.js"] },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Netlify/Vercel"],
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Technical Communication",
    "Leadership",
    "Project Management",
    "Adaptability",
    "Time Management",
    "Work Ethic",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold mb-4 text-portfolio-blue">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-portfolio-teal mr-2" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
