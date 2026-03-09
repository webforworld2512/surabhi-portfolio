interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  color: "red" | "blue" | "yellow";
}

const colorClasses = {
  red: "border-bauhaus-red",
  blue: "border-bauhaus-blue",
  yellow: "border-bauhaus-yellow",
};

const barColors = {
  red: "bg-bauhaus-red",
  blue: "bg-bauhaus-blue",
  yellow: "bg-bauhaus-yellow",
};

const ExperienceCard = ({ title, company, location, period, bullets, color }: ExperienceCardProps) => {
  return (
    <div className={`press-effect bg-bauhaus-white border-4 border-foreground p-6`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-black uppercase">{title}</h3>
          <p className="text-lg font-medium">{company}</p>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">{location}</p>
        </div>
        <div className={`px-4 py-2 ${barColors[color]} border-4 border-foreground`}>
          <span className="text-sm font-bold uppercase tracking-wider text-bauhaus-white">{period}</span>
        </div>
      </div>
      <ul className={`space-y-2 pl-4 border-l-4 ${colorClasses[color]}`}>
        {bullets.map((bullet, index) => (
          <li key={index} className="body-text text-base">{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
