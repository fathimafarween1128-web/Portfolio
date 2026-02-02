import { Award, BookOpen, Users } from 'lucide-react';

const courses = [
  'Machine Learning with Python: Basic to Advanced Analytics',
  'HTML, CSS & JavaScript for Beginners',
  'The Complete Mathematics Software Developer Course',
  'Complete Linux Training Course',
  'Build a Backend REST API with Node.js from Scratch',
  'Essentials User Experience Design (Adobe XD UI/UX)',
  'Fundamentals of Network Security',
  'Exploring Computer Science Basics Using AI',
  'JavaScript & jQuery Certification Course',
];

const workshops = [
  { title: 'Salesforce Cloud Workshop', org: 'KIU' },
  { title: 'Jump Start Your Career Workshop', speaker: 'Mr. Bimal Gunapala', org: 'KIU' },
  { title: 'Research Workshop', speaker: 'Ms. Vishaka Nanayakkara', org: 'KIU' },
  { title: 'Research Workshop', speaker: 'Mr. Chanuka Wattegama', org: 'KIU' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">Certifications & Training</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Online Courses */}
          <div className="bg-card rounded-lg p-6 border border-border card-glow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Online Courses</h3>
                <p className="text-sm text-muted-foreground">Udemy Certifications</p>
              </div>
            </div>

            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Award className="text-primary shrink-0 mt-0.5" size={14} />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshops */}
          <div className="bg-card rounded-lg p-6 border border-border card-glow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Workshops & Seminars</h3>
                <p className="text-sm text-muted-foreground">Professional Development</p>
              </div>
            </div>

            <ul className="space-y-4">
              {workshops.map((workshop, index) => (
                <li
                  key={index}
                  className="border-l-2 border-accent/30 pl-4 py-1"
                >
                  <p className="font-medium text-foreground text-sm">
                    {workshop.title}
                  </p>
                  {workshop.speaker && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Speaker: {workshop.speaker}
                    </p>
                  )}
                  <p className="text-xs text-accent mt-1">{workshop.org}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
