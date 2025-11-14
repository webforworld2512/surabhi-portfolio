import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import projectRoomImage from "@/assets/project-room.jpg";
import projectCompilerImage from "@/assets/project-compiler.jpg";

const Projects = () => {
  const projects = [
    {
      title: "ROOM",
      description: "Zoom-like platform for secure auth, meeting creation/management",
      image: projectRoomImage,
      features: [
        "Integrated Clerk for social/email auth & authorization",
        "Features: recording, screen sharing, scheduling for seamless UX",
      ],
      tech: ["Next.js", "TypeScript", "Clerk", "getstream", "shadcn", "Tailwind CSS"],
      github: "https://github.com/webforworld2512/Room",
      live: "#",
    },
    {
      title: "Web Dev Compiler",
      description: "Online HTML/CSS/JS compiler like CodePen",
      image: projectCompilerImage,
      features: [
        "Persistent login & auth via cookies",
        "RTK Query for API, CRUD, and caching",
      ],
      tech: ["React", "TypeScript", "Redux", "Vite", "shadcn", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <p className="text-muted-foreground">Featured Work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex gap-2">
                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </a>
                    </Button>
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

export default Projects;
