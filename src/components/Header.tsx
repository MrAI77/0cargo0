import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-primary">CARGO</div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="hover:text-primary transition-colors">{t('nav_home')}</a>
            <a href="#services" className="hover:text-primary transition-colors">{t('nav_services')}</a>
            <a href="#map" className="hover:text-primary transition-colors">{t('nav_warehouses')}</a>
            <a href="#advantages" className="hover:text-primary transition-colors">{t('nav_advantages')}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t('nav_contact')}</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2">
                <Globe className="w-6 h-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('ru')}>
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a 
              href="#hero" 
              onClick={handleLinkClick} 
              className="block hover:text-primary transition-colors"
            >
              {t('nav_home')}
            </a>
            <a 
              href="#services" 
              onClick={handleLinkClick} 
              className="block hover:text-primary transition-colors"
            >
              {t('nav_services')}
            </a>
            <a 
              href="#map" 
              onClick={handleLinkClick} 
              className="block hover:text-primary transition-colors"
            >
              {t('nav_warehouses')}
            </a>
            <a 
              href="#advantages" 
              onClick={handleLinkClick} 
              className="block hover:text-primary transition-colors"
            >
              {t('nav_advantages')}
            </a>
            <a 
              href="#contact" 
              onClick={handleLinkClick} 
              className="block hover:text-primary transition-colors"
            >
              {t('nav_contact')}
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2">
                <Globe className="w-6 h-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('ru')}>
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;