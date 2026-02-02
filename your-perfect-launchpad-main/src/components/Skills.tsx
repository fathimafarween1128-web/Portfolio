import { Code, Globe, Wrench, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: ['HTML', 'CSS', 'React', 'Node.js'],
  },
  {
    title: 'Tools & Design',
    icon: Wrench,
    skills: ['Figma', 'Git', 'VS Code', 'Adobe XD'],
  },
  {
    title: 'Other Skills',
    icon: Layers,
    skills: ['OOP', 'REST APIs', 'UI/UX Design', 'Linux'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">Skills & Technologies</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors card-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary rounded-md text-sm text-secondary-foreground mono hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
