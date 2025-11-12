import { Card } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-muted-foreground">Background & Journey</p>
          </div>

          <Card className="glass-card p-8 space-y-6">
            <p className="text-lg leading-relaxed">
              Information Systems graduate student at SDSU with 2 years of hands-on development experience. 
              Skilled in building scalable web applications and crafting intuitive solutions that enhance user experience.
            </p>

            <p className="text-lg leading-relaxed">
              Technical background spans front-end frameworks, backend systems, and cloud databases, complemented by 
              cross-cultural collaboration. Currently seeking software engineering roles.
            </p>

            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground italic">
                Outside of academics, I enjoy community involvement, experimenting with new recipes, 
                and spending quality time with my cat.
              </p>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium">Open to Opportunities</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
