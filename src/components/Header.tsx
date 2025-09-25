import { useState, useEffect } from 'react';
import syncLogo from '@/assets/sync-logo.png';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll with offset for fixed header
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 shadow-power border-b border-primary/10' 
          : 'bg-background/60'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-up flex-shrink-0">
            <img 
              src={syncLogo} 
              alt="Sync PowerTech Pvt Ltd Logo - Power Solutions Company Bhopal India" 
              title="Sync PowerTech - Synchronization of Power Technologies"
              className="h-9 md:h-12 w-auto animate-float"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-primary leading-tight">
                Sync PowerTech
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground hidden sm:block leading-tight">
                Synchronization of Power Technologies
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group animate-fade-up px-3 py-2 text-sm xl:text-base whitespace-nowrap"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-power transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden relative z-10 hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-power border-t border-primary/10 transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-4'
          }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium py-3 px-4 rounded-lg transform transition-transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: isMenuOpen ? `${index * 0.1}s` : '0s'
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;