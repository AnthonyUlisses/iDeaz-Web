import React, { useState, useCallback } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import debounce from 'lodash/debounce';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Debounce para scroll events
  const handleScroll = useCallback(
    debounce(() => {
      // scroll logic
      const scrollPosition = window.scrollY;
      // Adicione sua lógica de scroll aqui se necessário
    }, 100),
    []
  );

  // Adicionar event listener para scroll
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel(); // Limpa o debounce quando o componente é desmontado
    };
  }, [handleScroll]);

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent">
      <div className="mx-4 mt-2 sm:mt-4">
        <div className="container mx-auto bg-black/30 sm:bg-black/20 backdrop-blur-lg border border-white/20 rounded-2xl">
          <div className="flex items-center justify-between h-16 sm:h-18 px-4 sm:px-6">
            {/* Left side */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/ideaz_web/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </a>
              <a 
                href="#features"
                onClick={(e) => handleClick(e, '#features')}
                className="hidden md:block text-white text-base font-medium px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                Saiba mais
              </a>
            </div>

            {/* Center - Logo */}
            <div className="flex items-center">
              <a 
                href="#inicio"
                onClick={(e) => handleClick(e, '#inicio')}
                className="logo-text text-2xl sm:text-3xl font-bold text-white hover:text-[#ff4d6d] transition-colors"
              >
                iDeaz
              </a>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="text-white text-base font-medium hover:text-[#ff4d6d] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden px-4 py-4 border-t border-white/20">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="text-white text-base font-medium hover:text-[#ff4d6d] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;