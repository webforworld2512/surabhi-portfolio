import { GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Information Systems",
      institution: "San Diego State University",
      location: "USA",
      period: "Aug 2024 – Present",
      gpa: "3.3/4",
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Savitribai Phule Pune University",
      location: "India",
      period: "May 2018 – Apr 2022",
      gpa: "3.8/4",
    },
  ];

  return (
    <section id="education" className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            <p className="text-muted-foreground">Academic Background</p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover-lift p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-lg text-muted-foreground">
                          {edu.institution}, {edu.location}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground md:text-right">
                        <p>{edu.period}</p>
                        <p className="font-semibold text-primary">GPA: {edu.gpa}</p>
                      </div>
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

export default Education;
