import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What types of power treatment solutions do you offer?",
      answer: "We offer comprehensive power solutions including transformers (auto, distribution, furnace, locomotive), switchgear (EHV and MV), drives & automation systems, SCADA solutions, and specialized equipment for power generation, transmission, and distribution applications."
    },
    {
      question: "How do your SCADA systems help optimize power distribution?",
      answer: "Our SCADA (Supervisory Control and Data Acquisition) systems provide real-time monitoring, control, and data management for power networks. They enable predictive analytics, fault detection, load optimization, and remote control capabilities, ensuring efficient and reliable power distribution with minimal downtime."
    },
    {
      question: "Do you offer custom solutions to meet specific needs?",
      answer: "Absolutely! With our 40+ years of combined experience from Rajat Engineering and Orbit Engineering, we specialize in designing and implementing tailored EPC solutions. Our team works closely with clients to understand their unique requirements and deliver customized power technology solutions."
    },
    {
      question: "How do you determine pricing for your products and services?",
      answer: "Our pricing is based on several factors including project scope, technical specifications, equipment ratings, installation requirements, and ongoing support needs. We provide detailed quotations after conducting thorough site assessments and understanding your specific power requirements."
    },
    {
      question: "How can I contact your customer support team?",
      answer: "You can reach our customer support team through multiple channels: Phone: +91 94250 05008, +91 81093 50901, +91 70241 28029 | Email: info@synchwatertech.com | Address: 12/1 Shalimar Enclave, E-3 Area Colony, Arera Colony, Bhopal, Madhya Pradesh - 462016. We provide 24/7 technical support for critical power systems."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve diverse industries including power generation, transmission & distribution, railways, manufacturing, chemical processing, steel & metals, cement, mining, renewable energy, and infrastructure development sectors with specialized power solutions."
    },
    {
      question: "Do you provide maintenance and after-sales support?",
      answer: "Yes, we offer comprehensive maintenance services, preventive maintenance programs, spare parts supply, technical training, and 24/7 emergency support to ensure optimal performance and longevity of your power systems."
    },
    {
      question: "What is your project delivery timeline?",
      answer: "Project timelines vary based on complexity and scope. Typically, standard equipment delivery ranges from 8-16 weeks, while complex EPC projects may take 6-18 months. We provide detailed project schedules during the planning phase and maintain transparent communication throughout."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-primary">FAQ</span>
                <span className="text-industrial"> – Power Solutions</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Frequently asked questions about Sync PowerTech's power solutions and services
            </p>
            <div className="w-24 h-1 bg-gradient-power mx-auto rounded-full mt-6"></div>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-primary/10 rounded-xl px-6 py-2 bg-card/50 backdrop-blur-sm hover:shadow-power hover:border-primary/30 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300 hover:no-underline text-base md:text-lg font-semibold py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our technical experts are ready to help you with any power solution inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919425005008"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-power text-white rounded-lg hover:shadow-glow hover:scale-105 transition-all duration-300 font-medium"
                >
                  Call Us: +91 94250 05008
                </a>
                <a 
                  href="mailto:info@synchwatertech.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;