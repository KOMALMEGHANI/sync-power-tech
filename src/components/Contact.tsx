import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:marketing@syncpowertech.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Form Submitted",
      description: "Your email client should now open with the pre-filled message.",
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 94250 05008', '+91 81093 50901', '+91 70241 28029'],
      action: 'tel:+919425005008'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['marketing@syncpowertech.com'],
      action: 'mailto:marketing@syncpowertech.com'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['12/1 Shalimar Enclave, E-3 Area Colony', 'Arera Colony, Bhopal', 'Madhya Pradesh, India – 462016'],
      action: 'https://maps.google.com/?q=12/1+Shalimar+Enclave+E-3+Area+Colony+Arera+Colony+Bhopal+Madhya+Pradesh+462016'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', '24/7 Emergency Support Available'],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-industrial">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-power">Contact</span>
              <span className="text-industrial"> Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our power solution experts in Bhopal, India. We're here to help you with all your power technology needs, transformers, switchgear, and industrial automation requirements.
            </p>
            <div className="w-24 h-1 bg-gradient-power mx-auto rounded-full mt-6"></div>
          </header>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Ready to discuss your power solution requirements? Our team of experts is standing by to help you 
                  design and implement the perfect power technology solution for your needs.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className="hover:shadow-power hover:border-primary/30 transition-all duration-300 hover-lift border-primary/10 animate-scale-in cursor-pointer"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    onClick={() => info.action && window.open(info.action, info.action.startsWith('http') ? '_blank' : '_self')}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-primary text-lg">
                        <info.icon className="h-5 w-5 mr-3" />
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm leading-relaxed break-words whitespace-normal text-left">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
                <h4 className="text-lg font-semibold text-primary mb-4">Follow Us</h4>
                <a 
                  href="https://www.linkedin.com/company/syncpowertech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#005885] transition-colors duration-300 hover:scale-105 transform"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <Card className="border-primary/10 shadow-power">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="border-primary/20 focus:border-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-primary/20 focus:border-primary"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-primary/20 focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-primary/20 focus:border-primary"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-primary/20 focus:border-primary resize-none"
                        placeholder="Tell us about your power solution requirements..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-power hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg py-6 group"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;