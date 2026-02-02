import { GraduationCap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Motivated and detail-oriented Software Engineering student with a strong 
              foundation in programming, algorithms, and software development principles. 
              Skilled in Java, Python, and web technologies, with hands-on experience in 
              academic projects and collaborative team environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about solving real-world problems through innovative software 
              solutions and eager to contribute to challenging projects while continuously 
              learning new technologies.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Target className="text-primary" size={24} />
              <div>
                <p className="font-medium text-foreground">Career Interest</p>
                <p className="text-muted-foreground text-sm">
                  Software Engineering Intern • Frontend Developer
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 card-glow border border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Education</h3>
                <p className="text-sm text-muted-foreground">Academic Background</p>
              </div>
            </div>

            <div className="border-l-2 border-primary/30 pl-4 ml-6 mt-6">
              <h4 className="font-medium text-foreground">
                B.Sc (Hons) in Software Engineering
              </h4>
              <p className="text-primary mono text-sm mt-1">KIU University</p>
              <p className="text-muted-foreground text-sm mt-1">
                Expected Graduation: 2027
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-medium text-foreground mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                  Tamil — Native
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                  Sinhala — Fluent
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                  English — Good
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
