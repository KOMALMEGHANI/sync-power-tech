import { Button } from '@/components/ui/button';
import { Construction, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-industrial">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-power">Our</span>
              <span className="text-industrial"> Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-power mx-auto rounded-full"></div>
          </div>

          {/* Coming Soon Content */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-12 border border-primary/10 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-24 h-24 bg-gradient-power rounded-full flex items-center justify-center mx-auto mb-8 animate-power-pulse">
              <Construction className="h-12 w-12 text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Exciting Projects Coming Soon
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We're currently working on showcasing our impressive portfolio of power solution projects. 
              Our team is preparing detailed case studies that highlight our expertise in delivering 
              complex EPC solutions and innovative power technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <CounterCard label="Years of Combined Experience" from={0} to={40} suffix="+" colorClass="text-primary" />
              <CounterCard label="Projects Delivered" from={0} to={500} suffix="+" colorClass="text-accent" />
              <StaticCard value="24/7" label="Technical Support" colorClass="text-primary" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-power hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => window.open('tel:+919425005008', '_self')}
              >
                Call Us Today
              </Button>
            </div>
          </div>

          {/* Future Projects Teaser */}
          <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-muted-foreground">
              Stay tuned for detailed project showcases including:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                'Industrial Power Plants',
                'Railway Electrification',
                'Smart Grid Solutions',
                'Renewable Energy Integration',
                'Automation Systems'
              ].map((project, index) => (
                <span 
                  key={project}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-slide-in-right"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

type CounterProps = { label: string; from?: number; to: number; durationMs?: number; suffix?: string; colorClass?: string };
const CounterCard = ({ label, from = 0, to, durationMs = 1500, suffix = '', colorClass = 'text-primary' }: CounterProps) => {
  const [value, setValue] = useState(from);
  const rafIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset for new animation
    setValue(from);
    startTimeRef.current = null;

    const step = (t: number) => {
      if (startTimeRef.current === null) startTimeRef.current = t;
      const elapsed = t - startTimeRef.current;
      const progress = Math.min(1, elapsed / durationMs);
      const current = Math.floor(from + (to - from) * progress);
      setValue(current);
      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(step);
      } else {
        setValue(to);
      }
    };

    rafIdRef.current = requestAnimationFrame(step);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [from, to, durationMs]);

  return (
    <div className="p-6 bg-background/50 rounded-xl border border-primary/10">
      <div className={`text-3xl font-bold mb-2 ${colorClass}`}>{value}{suffix}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

type StaticProps = { value: string; label: string; colorClass?: string };
const StaticCard = ({ value, label, colorClass = 'text-primary' }: StaticProps) => (
  <div className="p-6 bg-background/50 rounded-xl border border-primary/10">
    <div className={`text-3xl font-bold mb-2 ${colorClass}`}>{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);