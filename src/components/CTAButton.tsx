import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
  label: string;
  Icon: LucideIcon;
  color: "red" | "blue" | "yellow" | "black";
  href: string;
}

const colorClasses = {
  red: "bg-bauhaus-red text-bauhaus-white",
  blue: "bg-bauhaus-blue text-bauhaus-white",
  yellow: "bg-bauhaus-yellow text-foreground",
  black: "bg-foreground text-bauhaus-white",
};

const CTAButton = ({ label, Icon, color, href }: CTAButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`press-effect inline-flex items-center gap-3 px-8 py-4 border-4 border-foreground ${colorClasses[color]} text-lg font-bold uppercase tracking-wider`}
    >
      <Icon className="w-6 h-6" />
      <span>{label}</span>
    </a>
  );
};

export default CTAButton;
