import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "AI Research Assistant",
      company: "Fowler College of Business, SDSU",
      location: "San Diego, CA",
      period: "Jan 2025 – Present",
      achievements: [
        "Developed a system to reduce LLM hallucinations by 14% using RAG and Agentic AI (e.g., AutoGen)",
        "Built an NLP model for phishing detection, improving email threat detection accuracy by 30%",
        "Fine-tuned deep learning models (AlexNet/CNN) in MATLAB for image classification achieving 90% accuracy",
      ],
      tech: ["RAG", "AutoGen", "NLP", "Deep Learning", "MATLAB"],
    },
    {
      title: "Software Engineer",
      company: "JSat Automation Inc.",
      location: "India",
      period: "Sep 2022 – Aug 2024",
      achievements: [
        "Designed e-workflow validation software & cleaning scheduler; led research & prototyping in Figma",
        "Built scheduling system with Angular + REST API for pharma cleaning tasks",
        "Optimized containerized remote view screen (TypeScript) to boost usability by 60%",
        "Digitized workflows via Python, reducing paper usage and streamlining processes by 80%",
        "Angular UI with RxJS state management; Docker for containerization & reliability",
        "PostgreSQL performance tuning; microservices architecture for scalability",
        "Gulp for JS/CSS/image pipelines, cutting build time by 40%",
        "Three.js/WebGL interactive 3D models for immersive interfaces",
      ],
      tech: ["Angular", "TypeScript", "Python", "PostgreSQL", "Docker", "Three.js", "RxJS", "Gulp"],
    },
    {
      title: "Software Engineer Intern",
      company: "Qualys India",
      location: "India",
      period: "Mar 2022 – Aug 2022",
      achievements: [
        "Automation scripts in Java/Spring Boot, improving efficiency by 40%",
        "Deployed microservices to AWS (EC2, Lambda), S3 storage, RDS databases",
        "Identified CVEs to improve security posture and risk mitigation",
      ],
      tech: ["Java", "Spring Boot", "AWS", "EC2", "Lambda", "S3"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <p className="text-muted-foreground">Professional Journey</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-lift p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-accent" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-lg text-muted-foreground">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm leading-relaxed flex gap-2">
                          <span className="text-accent mt-1 flex-shrink-0">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
