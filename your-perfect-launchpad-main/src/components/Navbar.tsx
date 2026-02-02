import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="text-2xl font-bold text-gradient mono">
          Fathima Farween
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link mono text-sm">
                {link.name}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/Fathima_Farween_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors mono text-sm"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <ul className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link mono text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
