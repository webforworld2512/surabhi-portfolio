import { LucideIcon, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  Icon: LucideIcon;
  color: "red" | "blue" | "yellow";
  href?: string;
}

const colorClasses = {
  red: "bg-bauhaus-red",
  blue: "bg-bauhaus-blue",
  yellow: "bg-bauhaus-yellow",
};

const tagColors = {
  red: "bg-bauhaus-red/20 border-bauhaus-red",
  blue: "bg-bauhaus-blue/20 border-bauhaus-blue",
  yellow: "bg-bauhaus-yellow/20 border-bauhaus-yellow",
};

const ProjectCard = ({ title, description, tags, Icon, color, href }: ProjectCardProps) => {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper {...wrapperProps} className="press-effect bg-bauhaus-white border-4 border-foreground block">
      {/* Header with Icon */}
      <div className={`h-32 ${colorClasses[color]} flex items-center justify-center border-b-4 border-foreground`}>
        <Icon className="w-16 h-16 text-bauhaus-white" strokeWidth={2.5} />
      </div>
      
      {/* Body */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl">{title}</h3>
          {href && <ExternalLink className="w-5 h-5 text-muted-foreground" />}
        </div>
        <p className="body-text opacity-80 mb-4">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-xs uppercase font-bold tracking-wider border-2 ${tagColors[color]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
