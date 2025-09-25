import { Building2, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Technology-Focused",
      description: "Leveraging AI, IoT, cloud-based solutions for predictive analytics and proactive optimization"
    },
    {
      icon: Users,
      title: "Customer-Centric", 
      description: "Tailored solutions, end-to-end support from design → implementation → maintenance"
    },
    {
      icon: Award,
      title: "40+ Years Legacy",
      description: "Built on the foundation of Rajat Engineering and Orbit Engineering's excellence since 1984"
    },
    {
      icon: TrendingUp,
      title: "Sustainability-Focused",
      description: "Eco-friendly technologies, reducing environmental impact, promoting greener practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-industrial">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-power">Efficient Power Solutions:</span>
              <br />
              <span className="text-industrial">Tailored to Your Needs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Leading power solutions provider in Bhopal, India with 40+ years of expertise in transformers, switchgear, and industrial automation
            </p>
            <div className="w-24 h-1 bg-gradient-power mx-auto rounded-full"></div>
          </header>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6 text-foreground">
                  <span className="font-semibold text-primary">Sync PowerTech</span> is your partner for innovative power solutions. We specialize in designing, implementing, and managing cutting-edge systems that optimize power usage, improve efficiency, and ensure sustainability.
                </p>
                
                <p className="text-lg leading-relaxed mb-6 text-foreground">
                  Born from the merger of <span className="font-semibold text-accent">Rajat Engineering</span> and <span className="font-semibold text-accent">Orbit Engineering</span> with a legacy of excellence since 1984. Our merged entity brings together the best of Engineering Procurement & Commissioning (EPC) expertise with cutting-edge power technology innovation.
                </p>
                
                <p className="text-lg leading-relaxed mb-6 text-foreground">
                  At Sync PowerTech, we harness the power of advanced power solutions to address the world's most pressing power challenges. Our team of seasoned experts, with decades of experience, delivers tailored EPC services and revolutionary power technologies that transform the way we manage this precious resource.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground">
                  With a rich history of delivering complex projects and a passion for innovation, we are dedicated to providing sustainable, efficient, and effective power solutions that make a difference. Our mission is to <span className="font-semibold text-primary">synchronize human ingenuity with power technology</span>, creating a better future for all.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <aside className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="p-6 bg-card rounded-xl border border-primary/10 hover:shadow-power hover:border-primary/30 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-power rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </aside>
          </div>

          {/* Mission Statement */}
          <div className="text-center bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/10 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-xl md:text-2xl font-medium text-primary mb-4">
              "At Sync PowerTech, we're not just synchronizing technology and power"
            </p>
            <p className="text-lg text-muted-foreground">
              – we're synchronizing a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;