import BauhausCompositionBox from "@/components/BauhausCompositionBox";
import ProjectCard from "@/components/ProjectCard";
import CTAButton from "@/components/CTAButton";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";
import SkillBadge from "@/components/SkillBadge";
import { 
  Video, 
  Code2, 
  Shield, 
  Bug, 
  Github, 
  Linkedin, 
  Mail, 
  FileDown,
  BookOpen,
  ExternalLink
} from "lucide-react";

const Index = () => {
  const highlights = ["3+ years experience", "Angular / React", "RAG & Agentic AI", "REST APIs"];

  return (
    <div className="min-h-screen perspective-container py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto tilted-plane">
        
        {/* Hero Section */}
        <section className="mb-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Name Stack */}
          <div className="flex-1">
            <div className="mb-4">
              <h1 className="text-5xl md:text-7xl mb-2">SURABHI</h1>
              <h1 className="text-5xl md:text-7xl">CHAVAN</h1>
            </div>
            <div className="flex items-center gap-4 mt-6 mb-6">
              <div className="h-4 w-24 bg-foreground" />
              <span className="text-accent-wide text-muted-foreground">Information Systems @ SDSU · Software Engineer</span>
            </div>
            
            <p className="body-text max-w-lg mb-8 border-l-4 border-bauhaus-red pl-4">
              Full-Stack Developer with 3+ years of experience building end-to-end web applications — from reactive Angular/React frontends to scalable Node.js backends. Skilled at optimizing UI performance, designing clean REST APIs, and integrating AI-driven features into production products.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((highlight, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-bauhaus-yellow border-4 border-foreground text-sm font-bold uppercase tracking-wider shadow-bauhaus"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="press-effect inline-flex items-center gap-3 px-8 py-4 border-4 border-foreground bg-bauhaus-red text-bauhaus-white text-lg font-bold uppercase tracking-wider">
                View Projects
              </a>
              <a href="/Surabhi_Chavan_Resume.pdf" download className="press-effect inline-flex items-center gap-3 px-8 py-4 border-4 border-foreground bg-bauhaus-white text-foreground text-lg font-bold uppercase tracking-wider">
                <FileDown className="w-5 h-5" />
                Download Résumé
              </a>
            </div>
          </div>
          
          {/* Right Side - Bauhaus Composition */}
          <div className="flex-shrink-0">
            <BauhausCompositionBox />
          </div>
        </section>

        {/* About Section */}
        <section className="mb-24" id="about">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-5xl mb-4">ABOUT</h2>
              <div className="h-6 w-24 bg-bauhaus-blue" />
            </div>
            
            <div className="md:w-2/3 space-y-6">
              <p className="body-text pl-6 border-l-4 border-bauhaus-red">
                Surabhi is an Information Systems graduate student at San Diego State University with over two years of hands-on development experience. She specializes in building scalable web applications and crafting intuitive, user-centered solutions.
              </p>
              <p className="body-text pl-6 border-l-4 border-bauhaus-yellow">
                Her technical expertise spans modern front-end frameworks, backend systems, and cloud databases, complemented by strong collaboration skills across diverse teams.
              </p>
              <p className="body-text pl-6 border-l-4 border-bauhaus-blue">
                Outside of academics and professional work, she enjoys community involvement, experimenting with new recipes, and spending time with her cat.
              </p>
              <div className="mt-8 px-6 py-4 bg-bauhaus-yellow border-4 border-foreground inline-block shadow-bauhaus">
                <span className="font-bold uppercase tracking-wider">"Actively seeking software engineering opportunities."</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-24" id="education">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-5xl">EDUCATION</h2>
            <div className="h-6 flex-1 max-w-32 bg-bauhaus-blue" />
          </div>
          
          <EducationCard
            school="San Diego State University"
            degree="Master of Science in Information Systems"
            period="Aug 2024 – Present"
            gpa="3.5 / 4.0"
            location="USA"
          />
        </section>

        {/* Experience Section */}
        <section className="mb-24" id="experience">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-5xl">EXPERIENCE</h2>
            <div className="h-6 flex-1 max-w-32 bg-bauhaus-red" />
          </div>
          
          <div className="space-y-8">
            <ExperienceCard
              title="Software Development Intern"
              company="Donald Hans"
              location="Los Angeles, CA"
              period="Jan 2026 – Present"
              color="red"
              bullets={[
                "Built an LLM-based data transformation pipeline on Cloudflare Workers enabling low-latency edge inference via OpenRouter API.",
                "Implemented a vector embedding pipeline for RAG, generating embeddings, storing them in a vector index, and enabling semantic search for chatbot responses.",
                "Improved pipeline reliability by 30% through async orchestration, retry logic, and multi-environment debugging."
              ]}
            />
            
            <ExperienceCard
              title="AI Research Assistant"
              company="Fowler College of Business, SDSU"
              location="San Diego, CA"
              period="Jan 2025 – Dec 2025"
              color="blue"
              bullets={[
                "Reduced LLM hallucinations by 14% using RAG and Agentic AI frameworks such as AutoGen.",
                "Built an NLP phishing detection model improving email threat detection accuracy by 30%.",
                "Fine-tuned deep learning models (AlexNet/CNN) in MATLAB for image classification achieving 90% accuracy."
              ]}
            />
            
            <ExperienceCard
              title="Software Engineer"
              company="JSat Automation Inc."
              location="Bluebell, PA"
              period="Sep 2022 – Aug 2024"
              color="yellow"
              bullets={[
                "Built a scalable scheduling system with Angular, REST APIs, and AWS Lambda/API Gateway for high-availability planning.",
                "Optimized real-time system performance by reducing latency 35% and improving usability 60% via TypeScript/RxJS reactive pipelines, refining async execution paths, and using CloudWatch metrics.",
                "Reduced build times by 40% through Gulp automation for transpilation, CSS preprocessing, and image pipeline enhancements.",
                "Boosted PostgreSQL query performance by 45% through indexing, plan tuning, and refined connection-pool management.",
                "Improved scalability by deploying Dockerized microservices with centralized logging and environment-specific configurations.",
                "Designed e-workflow and scheduling UX prototypes in Figma, enabling cross-functional stakeholder alignment before development, reducing rework cycles by 25%."
              ]}
            />

            <ExperienceCard
              title="Software Engineer Intern"
              company="Qualys Security"
              location="India"
              period="Mar 2022 – Aug 2022"
              color="red"
              bullets={[
                "Improved vulnerability detection accuracy by 40% by automating CVE-CPE mapping through CISA API integration and repository synchronization.",
                "Built automation using the Shodan API to identify affected hosts and IPs, strengthening external attack surface monitoring.",
                "Developed scripts to compare technology repositories and generate CSV reports for missing CPEs and outdated entries."
              ]}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24" id="skills">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-5xl">SKILLS</h2>
            <div className="h-6 flex-1 max-w-32 bg-bauhaus-yellow" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase border-b-4 border-bauhaus-red pb-2">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript (ES6+)", "TypeScript", "Python"].map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="red" />
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase border-b-4 border-bauhaus-blue pb-2">Web & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["Angular", "React/Next.js", "GraphQL", "Node.js", "Three.js", "UI/UX"].map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="blue" />
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase border-b-4 border-bauhaus-yellow pb-2">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "PostgreSQL"].map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="yellow" />
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase border-b-4 border-foreground pb-2">Cloud & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "GitHub Actions", "CI/CD", "Git", "Postman", "Figma"].map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="red" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mb-24" id="projects">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-5xl">PROJECTS</h2>
            <div className="h-6 flex-1 max-w-32 bg-bauhaus-red" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="ROOM"
              description="Built a Zoom-like platform with secure authentication, meeting management, recording, screen sharing, and scheduling features."
              tags={["Next.js", "TypeScript", "Clerk", "GetStream"]}
              Icon={Video}
              color="red"
              href="https://room-surabhi.vercel.app/"
            />
            <ProjectCard
              title="Web Dev Compiler"
              description="Online HTML/CSS/JS compiler similar to CodePen with persistent login, authentication using cookies, and RTK Query for API management."
              tags={["React", "TypeScript", "Redux", "Vite"]}
              Icon={Code2}
              color="blue"
              href="https://github.com/webforworld2512/web-dev-compiler"
            />
            <ProjectCard
              title="AI for Finance"
              description="Achieved 92% fraud detection accuracy using XGBoost. Reduced false positives by 15% through feature engineering and hyperparameter tuning."
              tags={["XGBoost", "Python", "AWS SageMaker"]}
              Icon={Shield}
              color="yellow"
              href="https://github.com/webforworld2512/AI-for-Finance"
            />
            <ProjectCard
              title="Bug Tracker"
              description="Secure bug-tracking API with JWT authentication, role-based access control, nested GET endpoints with computed metrics and pagination."
              tags={["TypeScript", "Node.js", "Express", "JWT"]}
              Icon={Bug}
              color="red"
              href="https://bug-tracker-api-surabhi.vercel.app/"
            />
          </div>
        </section>

        {/* Writing Section */}
        <section className="mb-24" id="writing">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-5xl">WRITING</h2>
            <div className="h-6 flex-1 max-w-32 bg-bauhaus-blue" />
          </div>
          
          <a 
            href="https://medium.com/@surabhichavan2512" 
            target="_blank" 
            rel="noopener noreferrer"
            className="press-effect inline-flex items-center gap-4 bg-bauhaus-white border-4 border-foreground p-6"
          >
            <BookOpen className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-black uppercase">Medium Blog</h3>
              <p className="text-muted-foreground">Read my articles on software development and technology</p>
            </div>
            <ExternalLink className="w-6 h-6 ml-4" />
          </a>
        </section>

        {/* Connect Section */}
        <section className="mb-12" id="contact">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-5xl">CONNECT</h2>
            <div className="h-6 flex-1 max-w-32 bg-bauhaus-yellow" />
          </div>
          
          <div className="flex flex-wrap gap-6">
            <CTAButton label="GitHub" Icon={Github} color="red" href="https://github.com/webforworld2512" />
            <CTAButton label="LinkedIn" Icon={Linkedin} color="blue" href="https://www.linkedin.com/in/surabhi-chavan-1b508b1aa/" />
            <CTAButton label="Email" Icon={Mail} color="yellow" href="mailto:surabhichavan2512@gmail.com" />
            <CTAButton label="Medium" Icon={BookOpen} color="black" href="https://medium.com/@surabhichavan2512" />
          </div>
          
          <p className="mt-8 body-text text-muted-foreground">
            Phone: <a href="tel:+16196662309" className="underline">+1 619 666 2309</a>
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-foreground pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-accent-wide text-muted-foreground">
            © 2026 SURABHI CHAVAN. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-bauhaus-red" />
            <div className="w-4 h-4 bg-bauhaus-blue" />
            <div className="w-4 h-4 bg-bauhaus-yellow" />
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Index;