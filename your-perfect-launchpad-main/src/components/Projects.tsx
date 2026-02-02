import { Folder, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'HR Management System',
    description:
      'A complete HR Management System built with Java implementing strong OOP principles and design patterns. Features include employee data management, attendance tracking, and leave management with a modular, scalable architecture.',
    tech: ['Java', 'OOP', 'Design Patterns', 'MySQL'],
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio website built with React and Tailwind CSS showcasing projects, skills, and professional experience with smooth animations and responsive design.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`relative bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 card-glow group ${
                project.featured ? 'md:p-10' : ''
              }`}
            >
              {project.featured && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-primary/20 text-primary text-xs mono rounded-full">
                  Featured
                </span>
              )}

              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Folder className="text-primary" size={28} />
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 rounded-md text-xs mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            More projects coming soon as I continue building and learning!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
