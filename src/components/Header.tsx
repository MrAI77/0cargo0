import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для закрытия мобильного меню при клике на ссылку
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-primary">CARGO</div>
          
          {/* Кнопка мобильного меню */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Десктопное меню */}
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="hover:text-primary transition-colors">Главное</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#map" className="hover:text-primary transition-colors">Склады</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="hover:text-primary transition-colors">Заявка</a>
          </nav>
        </div>

        {/* Мобильное меню */}
        {isOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a 
              href="#hero" 
              onClick={handleLinkClick} 
              className="block hover:text-primary transition-colors"
            >
              Главное
            </a>
            <a 
              href="#services" 
              onClick={handleLinkClick} 
              className="block hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a 
              href="#map" 
              onClick={handleLinkClick} 
              className="block hover:text-primary transition-colors"
            >
              Склады
            </a>
            <a 
              href="#advantages" 
              onClick={handleLinkClick} 
              className="block hover:text-primary transition-colors"
            >
              Преимущества
            </a>
            <a 
              href="#contact" 
              onClick={handleLinkClick} 
              className="block hover:text-primary transition-colors"
            >
              Заявка
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;