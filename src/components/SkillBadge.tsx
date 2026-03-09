interface SkillBadgeProps {
  skill: string;
  color: "red" | "blue" | "yellow";
}

const colorClasses = {
  red: "bg-bauhaus-red text-bauhaus-white",
  blue: "bg-bauhaus-blue text-bauhaus-white",
  yellow: "bg-bauhaus-yellow text-foreground",
};

const SkillBadge = ({ skill, color }: SkillBadgeProps) => {
  return (
    <span className={`inline-block px-4 py-2 border-4 border-foreground font-bold uppercase tracking-wider text-sm ${colorClasses[color]} shadow-bauhaus`}>
      {skill}
    </span>
  );
};

export default SkillBadge;
