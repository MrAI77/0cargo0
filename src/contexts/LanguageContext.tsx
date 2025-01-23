import React, { createContext, useContext, useState } from 'react';

type Language = 'ru' | 'en';

interface Translations {
  [key: string]: {
    ru: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  nav_home: {
    ru: "Главная",
    en: "Home",
  },
  nav_services: {
    ru: "Услуги",
    en: "Services",
  },
  nav_warehouses: {
    ru: "Склады",
    en: "Warehouses",
  },
  nav_advantages: {
    ru: "Преимущества",
    en: "Advantages",
  },
  nav_contact: {
    ru: "Заявка",
    en: "Contact",
  },
  // Hero section
  hero_title: {
    ru: "Грузо-Авиа перевозки из Китая",
    en: "Cargo and Air Transportation from China",
  },
  hero_subtitle: {
    ru: "в любую точку мира",
    en: "to anywhere in the world",
  },
  hero_description: {
    ru: "Мы предлагаем комплексные логистические решения с собственной сетью складов во всех крупных городах Китая. Наша компания обеспечивает надежную и быструю доставку грузов любого объема, используя оптимальные маршруты и комбинируя авиа и автоперевозки для максимальной эффективности.",
    en: "We offer comprehensive logistics solutions with our own warehouse network in all major cities of China. Our company ensures reliable and fast delivery of cargo of any volume, using optimal routes and combining air and road transportation for maximum efficiency.",
  },
  // Services
  services_title: {
    ru: "Наши услуги",
    en: "Our Services",
  },
  services_description: {
    ru: "Предоставляем полный спектр логистических услуг для вашего бизнеса. От консолидации грузов до срочной доставки - мы обеспечим оптимальное решение для любых задач. Наша команда профессионалов гарантирует качественное выполнение каждого заказа.",
    en: "We provide a full range of logistics services for your business. From cargo consolidation to express delivery - we will provide the optimal solution for any task. Our team of professionals guarantees quality execution of each order.",
  },
  // Calculator
  calculator_title: {
    ru: "Калькулятор стоимости доставки",
    en: "Delivery Cost Calculator",
  },
  // Map
  map_title: {
    ru: "Наши склады в Китае",
    en: "Our Warehouses in China",
  },
  // Advantages
  advantages_title: {
    ru: "Почему выбирают нас",
    en: "Why Choose Us",
  },
  // Contact
  contact_title: {
    ru: "Заявка на товар",
    en: "Product Request",
  },
  // Footer
  footer_about_title: {
    ru: "О компании",
    en: "About Company",
  },
  footer_contacts_title: {
    ru: "Контакты",
    en: "Contacts",
  },
  footer_warehouses_title: {
    ru: "Наши склады",
    en: "Our Warehouses",
  },
  footer_social_title: {
    ru: "Мы в соцсетях",
    en: "Social Media",
  },
  footer_rights: {
    ru: "Все права защищены",
    en: "All rights reserved",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};