import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, Settings, Cpu, Gauge, Wrench } from 'lucide-react';
import autoTransformerImg from '@/assets/auto-transformer.png';
import distributionTransformerImg from '@/assets/distribution-transformer.jpg';
import chlorinatorImg from '@/assets/pumps.webp';
import furnaceTransformerImg from '@/assets/furance-transformer.jpg';
import locomotiveTransformerImg from '@/assets/locomotive-and-tracside-power-transformer.png';
import shuntReactorsImg from '@/assets/shunt-reactors.png';
import aisSf6BreakerImg from '@/assets/ais- sf6- circuit- breaker- up -to -800kv.png';
import disconnectorImg from '@/assets/disconnector.png';
import gis245Img from '@/assets/gis-up-to-245-kv.png';
import ais405Img from '@/assets/ais-up-to-40.5 kv.png';
import gis66Img from '@/assets/gis-66kv.png';
import numericRelayImg from '@/assets/numeric -protection -relay- scada.png';
import plcImg from '@/assets/plc.webp';
import cranesImg from '@/assets/cranes.jpg';
import industrialApplicationsImg from '@/assets/industrial-applications.webp';
import wasteWaterImg from '@/assets/waste-water.jpg';

const Products = () => {
  const productCategories = [
    {
      id: 'power-transfer',
      title: 'Power Transfer & Reactors',
      icon: Zap,
      products: [
        {
          name: 'Auto Transformers',
          description: 'Autotransformers are frequently used in power applications to interconnect systems operating at different voltage classes, for example, 400 kV to 220 kV for transmission.',
          features: ['Better short circuit strength', 'Compact design', 'Durability', 'Optimum losses', 'KEMA Tested'],
          specs: 'VOLTAGE: 132 to 765 kV | RATINGS: 50 to 1500 MVA | STANDARD: ANSI',
          image: autoTransformerImg
        },
        {
          name: 'Chlorinator',
          description: 'Chlorinator adds chlorine to drinking water to eliminate parasites, bacteria, and viruses. Also used for swimming pool water odor control.',
          features: ['Water purification', 'Odor control', 'Marine growth prevention', 'Service water systems'],
          specs: 'Various capacity options available for different applications',
          image: chlorinatorImg
        },
        {
          name: 'Furnace Transformers',
          description: 'Specially designed to handle heavy-duty electrical loads required in arc furnaces and induction furnaces.',
          features: ['High efficiency', 'Stable power supply', 'Extreme operating conditions', 'Durability'],
          specs: 'Custom ratings based on furnace requirements',
          image: furnaceTransformerImg
        },
        {
          name: 'Locomotive & Trackside Power Transformers',
          description: 'Provide reliable and efficient power solutions for railway operations, engineered to withstand dynamic loads.',
          features: ['Dynamic load resistance', 'Smooth traction', 'Continuous operation', 'Railway safety compliance'],
          specs: 'Railway grade specifications and standards',
          image: locomotiveTransformerImg
        },
        {
          name: 'Shunt Reactors',
          description: 'Used to improve power system stability by absorbing excess reactive power in high-voltage transmission lines.',
          features: ['Voltage regulation', 'Loss reduction', 'Grid stability', 'Efficient performance'],
          specs: 'High voltage transmission line applications',
          image: shuntReactorsImg
        }
      ]
    },
    {
      id: 'distribution',
      title: 'Distribution Transformers',
      icon: Settings,
      products: [
        {
          name: 'Distribution Transformers',
          description: 'High-efficiency distribution transformers designed for reliable power distribution in residential, commercial, and industrial applications.',
          features: ['High efficiency', 'Low losses', 'Compact design', 'Environmentally friendly', 'Long service life'],
          specs: 'Various voltage levels and power ratings available to meet specific requirements',
          image: distributionTransformerImg
        }
      ]
    },
    {
      id: 'ehv-switchgear',
      title: 'EHV Switchgear',
      icon: Cpu,
      products: [
        {
          name: 'AIS (SF6) Circuit Breaker Up To 800 kV',
          description: 'Air Insulated Switchgear with SF6 circuit breakers providing reliable switching operations for extra high voltage systems.',
          features: ['High breaking capacity', 'Reliable operation', 'Low maintenance', 'Environmental protection'],
          specs: 'Up to 800 kV operating voltage with various current ratings',
          image: aisSf6BreakerImg
        },
        {
          name: 'Disconnector',
          description: 'High-voltage switching devices used to safely isolate electrical equipment for maintenance or inspection.',
          features: ['Operational safety', 'High reliability', 'Easy maintenance', 'Uninterrupted power system performance'],
          specs: 'Various voltage and current ratings for different applications',
          image: disconnectorImg
        },
        {
          name: 'GIS Up To 245 kV',
          description: 'Gas Insulated Switchgear offering compact, reliable, and high-performance power distribution solutions.',
          features: ['Compact design', 'High reliability', 'Minimal space requirements', 'Enhanced safety'],
          specs: 'Up to 245 kV with optimized footprint for urban installations',
          image: gis245Img
        }
      ]
    },
    {
      id: 'mv-switchgear',
      title: 'MV Switchgear',
      icon: Gauge,
      products: [
        {
          name: 'AIS Up To 40.5 kV',
          description: 'Air Insulated Switchgear delivering safe, reliable, and cost-effective power distribution for medium-voltage networks.',
          features: ['Cost-effective', 'Easy maintenance', 'Reliable operation', 'Long service life'],
          specs: 'Medium voltage applications up to 40.5 kV',
          image: ais405Img
        },
        {
          name: 'GIS Up To 66 kV',
          description: 'Gas Insulated Switchgear offering compact, reliable, and high-performance power distribution with minimal space requirements.',
          features: ['Compact design', 'Enhanced safety', 'High reliability', 'Long-term performance'],
          specs: 'Up to 66 kV for demanding industrial environments',
          image: gis66Img
        },
        {
          name: 'Numeric Protection Relay and SCADA',
          description: 'Intelligent monitoring and control systems providing fast fault detection and real-time data management.',
          features: ['Fast fault detection', 'Real-time monitoring', 'Data management', 'Grid security'],
          specs: 'Advanced digital protection and automation systems',
          image: numericRelayImg
        },
        {
          name: 'RMU Up To 36 kV',
          description: 'Ring Main Unit offering safe, compact, and reliable medium-voltage power distribution for urban and industrial networks.',
          features: ['Uninterrupted supply', 'Easy maintenance', 'Operational safety', 'Compact design'],
          specs: 'Up to 36 kV for ring main applications'
        },
        {
          name: 'Vacuum Interrupter',
          description: 'High-performance switching devices for safe current interruption in medium and high-voltage systems.',
          features: ['Reliable operation', 'Long service life', 'Minimal maintenance', 'Safe current interruption'],
          specs: 'Various voltage and current ratings available'
        }
      ]
    },
    {
      id: 'drives-automation',
      title: 'Drives & Automation',
      icon: Wrench,
      products: [
        {
          name: 'Industrial Equipment',
          description: 'Complete range of industrial automation and drive solutions including blowers, centrifuges, compressors, cranes, crushers, fans, lifts, mills, mixers, and pumps.',
          features: ['High efficiency', 'Reliable operation', 'Industrial grade', 'Comprehensive solutions'],
          specs: 'Various capacity and performance specifications available',
          image: industrialApplicationsImg
        },
        {
          name: 'PLC Systems',
          description: 'Programmable Logic Controllers for advanced automation with precision control, reliability, and real-time monitoring.',
          features: ['Precision control', 'Real-time monitoring', 'Enhanced efficiency', 'Operational safety'],
          specs: 'Industrial automation and process control applications',
          image: plcImg
        },
        {
          name: 'Water & Wastewater Solutions',
          description: 'Efficient treatment, purification, and management systems ensuring sustainable water use and environmental compliance.',
          features: ['Sustainable operation', 'Environmental compliance', 'Efficient treatment', 'Reliable management'],
          specs: 'Industrial and municipal water treatment applications',
          image: wasteWaterImg
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-5 leading-tight tracking-tight">
              <span className="text-gradient-power">Power Solution</span>
              <span className="text-industrial"> Products</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-1">
              Comprehensive range of power technology solutions designed to meet diverse industrial and commercial needs in Bhopal, India. Transformers, switchgear, EPC services, and industrial automation equipment.
            </p>
            <div className="w-24 md:w-32 h-1 bg-gradient-power mx-auto rounded-full mt-5 md:mt-7"></div>
          </header>

          {/* Products Tabs */}
          <Tabs defaultValue="power-transfer" className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Tab Navigation */}
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-16 bg-card/60 backdrop-blur-sm p-3 rounded-2xl border border-primary/10 gap-2">
              {productCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center justify-center p-3 md:p-4 text-[11px] md:text-sm leading-snug tracking-tight text-center whitespace-normal break-words min-h-[68px] md:min-h-[80px] data-[state=active]:bg-gradient-power data-[state=active]:text-white transition-all duration-500 hover:bg-primary/5 rounded-xl"
                >
                  <category.icon className="h-4 w-4 md:h-5 md:w-5 mb-2 flex-shrink-0" />
                  <span className="text-center leading-tight font-medium">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            {productCategories.map((category, categoryIndex) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {category.products.map((product, productIndex) => (
                    <Card 
                      key={product.name} 
                      className="group hover:shadow-power hover:border-primary/30 transition-all duration-500 hover-lift animate-scale-in border-primary/10 bg-card/50 backdrop-blur-sm h-full flex flex-col"
                      style={{ animationDelay: `${productIndex * 0.1}s` }}
                    >
                      <CardHeader className="pb-4 flex-shrink-0">
                        {product.image && (
                          <div className="w-full h-56 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center border border-primary/5 group-hover:border-primary/20 transition-all duration-500">
                            <img 
                              src={product.image} 
                              alt={`${product.name} - Power Solutions by Sync PowerTech Bhopal India`}
                              title={`${product.name} - Industrial Power Equipment`}
                              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <CardTitle className="text-primary flex items-start gap-3 text-lg md:text-xl leading-tight mb-3">
                          <category.icon className="h-6 w-6 flex-shrink-0 mt-0.5" />
                          <span className="flex-1">{product.name}</span>
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0 flex-grow flex flex-col">
                        {/* Features */}
                        <div className="mb-6 flex-grow">
                          <h4 className="font-semibold text-sm mb-3 text-industrial">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature, index) => (
                              <Badge 
                                key={index} 
                                variant="secondary" 
                                className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 px-3 py-1"
                              >
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Specifications */}
                        <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/50 rounded-xl border border-primary/5">
                          <h4 className="font-semibold text-sm mb-2 text-accent">Specifications:</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{product.specs}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-power/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-industrial/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Products;