import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import profileImage from "@/assets/pp.jpeg";
import resumePdf from "@/assets/Surabhi_Chavan_resume.pdf";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Surabhi_Chavan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { label: "2+ yrs experience", value: "Experience" },
    { label: "RAG & Agentic AI", value: "AI" },
    { label: "Cloud Databases", value: "Cloud" },
  ];

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Surabhi Chavan
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Information Systems @ SDSU · Software Engineer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Information Systems grad student with 2 years of hands-on development experience. I build scalable web apps 
              and intuitive solutions across front end, back end, and cloud.
            </p>

            <div className="flex flex-wrap gap-3">
              {stats.map((stat) => (
                <Badge key={stat.value} variant="secondary" className="px-4 py-2 text-sm">
                  {stat.label}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View Projects
              </Button>
              <Button size="lg" variant="outline" onClick={handleDownloadResume}>
                Download Résumé
                <FileText className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-4">
              <a 
                href="mailto:schavan2264@sdsu.edu"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/surabhi-chavan-1b508b1aa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/webforworld2512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://medium.com/@surabhichavan2512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Medium"
              >
                <ExternalLink className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-delayed">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30" />
              <img
                src={profileImage}
                alt="Surabhi Chavan - Software Engineer"
                className="relative w-full max-w-md rounded-full shadow-2xl aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
