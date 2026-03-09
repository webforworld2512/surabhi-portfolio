interface EducationCardProps {
  school: string;
  degree: string;
  period: string;
  gpa?: string;
  location: string;
}

const EducationCard = ({ school, degree, period, gpa, location }: EducationCardProps) => {
  return (
    <div className="press-effect bg-bauhaus-white border-4 border-foreground p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-black uppercase">{school}</h3>
          <p className="text-lg font-medium">{degree}</p>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">{location}</p>
          {gpa && <p className="text-sm font-bold mt-2">GPA: {gpa}</p>}
        </div>
        <div className="px-4 py-2 bg-bauhaus-blue border-4 border-foreground">
          <span className="text-sm font-bold uppercase tracking-wider text-bauhaus-white">{period}</span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
