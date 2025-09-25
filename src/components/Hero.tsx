import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Power, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-industrial pt-24 md:pt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(59,130,246,0.1)_50%,rgba(59,130,246,0.1)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border-2 border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-primary/30 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <header className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient-power">Sync PowerTech Pvt Ltd</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-industrial font-medium">
                Synchronization of Power Technologies
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              <span className="text-primary font-semibold">Leading Power Solutions Provider in Bhopal, India</span>
              <br className="hidden sm:block" />
              <span className="text-base sm:text-lg md:text-xl">Transformers, Switchgear, EPC Services & Industrial Automation</span>
            </p>
          </header>

          {/* Sub-headline */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              <span className="text-primary font-semibold">Unlock the Attributes of Power.</span>
              <br className="hidden sm:block" />
              Providing innovative power solutions that transform the way we manage energy.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-power hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-full group"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Features Preview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:shadow-power hover:border-primary/30 transition-all duration-300 hover-lift">
              <div className="w-16 h-16 bg-gradient-power rounded-full flex items-center justify-center mb-4 animate-power-pulse">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Technology-Focused</h3>
              <p className="text-muted-foreground text-center">AI, IoT, and cloud-based solutions for predictive analytics</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:shadow-power hover:border-primary/30 transition-all duration-300 hover-lift">
              <div className="w-16 h-16 bg-gradient-power rounded-full flex items-center justify-center mb-4 animate-power-pulse" style={{ animationDelay: '0.5s' }}>
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customer-Centric</h3>
              <p className="text-muted-foreground text-center">Tailored solutions with end-to-end support</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:shadow-power hover:border-primary/30 transition-all duration-300 hover-lift">
              <div className="w-16 h-16 bg-gradient-power rounded-full flex items-center justify-center mb-4 animate-power-pulse" style={{ animationDelay: '1s' }}>
                <Power className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sustainability-Focused</h3>
              <p className="text-muted-foreground text-center">Eco-friendly technologies for a greener future</p>
            </div>
          </section>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;