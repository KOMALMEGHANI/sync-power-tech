import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import syncLogo from '@/assets/sync-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 94250 05008',
      action: 'tel:+919425005008'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'marketing@syncpowertech.com',
      action: 'mailto:marketing@syncpowertech.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Bhopal, Madhya Pradesh',
      action: 'https://maps.google.com/?q=12/1+Shalimar+Enclave+E-3+Area+Colony+Arera+Colony+Bhopal+Madhya+Pradesh+462016'
    }
  ];

  return (
    <footer className="bg-industrial text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 animate-fade-up">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={syncLogo} 
                  alt="Sync PowerTech Pvt Ltd Logo - Power Solutions Company Bhopal India" 
                  title="Sync PowerTech - Synchronization of Power Technologies"
                  className="h-10 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary">
                    Sync PowerTech
                  </span>
                  <span className="text-sm text-gray-300">
                    Synchronization of Power Technologies
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Leading provider of innovative power solutions with 40+ years of legacy. 
                Specializing in transformers, switchgear, and automation systems for a sustainable future.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/syncpowertech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
              <ul className="space-y-4">
                {contactDetails.map((contact, index) => (
                  <li key={contact.label}>
                    <a 
                      href={contact.action}
                      target={contact.action.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-start space-x-3 text-gray-300 hover:text-primary transition-colors duration-300 group"
                    >
                      <contact.icon className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="text-sm font-medium text-white">{contact.label}</div>
                        <div className="text-sm break-words whitespace-normal text-left">{contact.value}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Additional Contact Numbers */}
              <div className="mt-4 text-sm text-gray-400">
                <div>+91 81093 50901</div>
                <div>+91 70241 28029</div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-600 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Sync PowerTech Pvt Ltd. All Rights Reserved
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Quality Policy
              </a>
            </div>
          </div>

          {/* Company Legacy Note */}
          <div className="mt-8 pt-8 border-t border-gray-600 text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-gray-400 text-sm">
              Built on the foundation of <span className="text-accent">Rajat Engineering</span> and 
              <span className="text-accent"> Orbit Engineering</span> - Excellence since 1984
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;