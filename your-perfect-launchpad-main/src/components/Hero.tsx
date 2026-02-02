import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="opacity-0 animate-fade-up stagger-1">
          <p className="text-primary mono text-sm md:text-base mb-4">Hi, My Name is</p>
        </div>

        <div className="opacity-0 animate-fade-up stagger-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Fathima Farween
          </h1>
        </div>

        <div className="opacity-0 animate-fade-up stagger-3">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
            I build things for the web.
          </h2>
        </div>

        <div className="opacity-0 animate-fade-up stagger-4">
          <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed">
            I'm a Software Engineering student passionate about creating beautiful, 
            functional digital experiences. Currently focused on frontend development 
            and seeking internship opportunities.
          </p>
        </div>

        <div className="opacity-0 animate-fade-up stagger-5 flex flex-wrap items-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all hover-glow"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors"
          >
            View My Work
          </a>
        </div>

        <div className="opacity-0 animate-fade-up stagger-5 flex items-center gap-6">
          <a
            href="mailto:fathimafarween1128@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/fathima-farween-0681b5356"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
