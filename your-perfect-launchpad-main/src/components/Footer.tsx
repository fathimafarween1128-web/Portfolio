import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-sm text-center flex items-center gap-2">
            Designed & Built by Fathima Farween
          </p>
          <p className="text-muted-foreground/60 text-xs mono">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
