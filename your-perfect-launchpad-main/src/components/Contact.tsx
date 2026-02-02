import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-primary mono text-sm mb-4"> What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
          I'm currently looking for internship opportunities in software engineering 
          and frontend development. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        <a
          href="mailto:fathimafarween1128@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all hover-glow"
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="text-primary" size={20} />
            </div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <a
              href="tel:+94760291851"
              className="text-foreground hover:text-primary transition-colors mono text-sm"
            >
              +94 760291851
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="text-primary" size={20} />
            </div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a
              href="mailto:fathimafarween1128@gmail.com"
              className="text-foreground hover:text-primary transition-colors text-sm break-all"
            >
              fathimafarween1128@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Linkedin className="text-primary" size={20} />
            </div>
            <p className="text-sm text-muted-foreground">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/fathima-farween-0681b5356"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors text-sm"
            >
              Fathima Farween
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
