import { Code2, Database, Cloud, Palette } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java"],
    },
    {
      title: "Web & Frameworks",
      icon: Palette,
      skills: ["Angular", "React/Next", "GraphQL", "Node.js", "Three.js", "UI/UX"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Amazon DynamoDB"],
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Git", "Gulp", "Postman", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <p className="text-muted-foreground">Technical Expertise</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover-lift p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
