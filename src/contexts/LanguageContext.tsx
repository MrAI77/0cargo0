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
  hero_plane_description: {
    ru: "Быстрая доставка за 3-5 дней с полным отслеживанием груза",
    en: "Fast delivery in 3-5 days with full cargo tracking"
  },
  hero_truck_description: {
    ru: "Экономичная доставка за 15-20 дней с оптимальными маршрутами",
    en: "Economic delivery in 15-20 days with optimal routes"
  },
  hero_feature_1: {
    ru: "Персональный менеджер 24/7",
    en: "Personal manager 24/7"
  },
  hero_feature_2: {
    ru: "Оформление всех необходимых документов",
    en: "Processing of all necessary documents"
  },
  hero_feature_3: {
    ru: "Таможенное оформление под ключ",
    en: "Turnkey customs clearance"
  },
  hero_feature_4: {
    ru: "Страхование грузов",
    en: "Cargo insurance"
  },
  hero_feature_5: {
    ru: "Складское хранение в любом городе Китая",
    en: "Warehouse storage in any city in China"
  },
  hero_image_1_alt: {
    ru: "Логистический центр",
    en: "Logistics center"
  },
  hero_image_2_alt: {
    ru: "Морской порт",
    en: "Seaport"
  },
  // Services section
  services_title: {
    ru: "Наши услуги",
    en: "Our Services",
  },
  services_description: {
    ru: "Предоставляем полный спектр логистических услуг для вашего бизнеса. От консолидации грузов до срочной доставки - мы обеспечим оптимальное решение для любых задач. Наша команда профессионалов гарантирует качественное выполнение каждого заказа.",
    en: "We provide a full range of logistics services for your business. From cargo consolidation to express delivery - we will provide the optimal solution for any task. Our team of professionals guarantees quality execution of each order.",
  },
  services_truck_title: {
    ru: "Грузоперевозки",
    en: "Cargo Transportation"
  },
  services_truck_description: {
    ru: "Организуем доставку грузов автотранспортом по оптимальным маршрутам с полным отслеживанием движения",
    en: "We organize cargo delivery by road transport along optimal routes with full movement tracking"
  },
  services_plane_title: {
    ru: "Авиаперевозки",
    en: "Air Transportation"
  },
  services_plane_description: {
    ru: "Быстрая доставка грузов воздушным транспортом. Идеально для срочных отправлений",
    en: "Fast cargo delivery by air transport. Perfect for urgent shipments"
  },
  // Calculator
  calculator_title: {
    ru: "Калькулятор стоимости доставки",
    en: "Delivery Cost Calculator",
  },
  calculator_weight: {
    ru: "Вес груза (кг):",
    en: "Cargo weight (kg):",
  },
  calculator_volume: {
    ru: "Объем груза (м³):",
    en: "Cargo volume (m³):",
  },
  calculator_length: {
    ru: "Длина груза (м):",
    en: "Cargo length (m):",
  },
  calculator_width: {
    ru: "Ширина груза (м):",
    en: "Cargo width (m):",
  },
  calculator_height: {
    ru: "Высота груза (м):",
    en: "Cargo height (m):",
  },
  calculator_truck: {
    ru: "Грузовик",
    en: "Truck",
  },
  calculator_plane: {
    ru: "Самолет",
    en: "Plane",
  },
  calculator_small_cargo: {
    ru: "Малый груз",
    en: "Small cargo",
  },
  calculator_large_cargo: {
    ru: "Большой груз",
    en: "Large cargo",
  },
  calculator_calculate: {
    ru: "Рассчитать стоимость",
    en: "Calculate cost",
  },
  // Map
  map_title: {
    ru: "Наши склады в Китае",
    en: "Our Warehouses in China",
  },
  map_description: {
    ru: "Мы располагаем современными складскими комплексами во всех ключевых городах Китая, что позволяет нам обеспечивать быструю обработку и отправку грузов по любому направлению.",
    en: "We have modern warehouse complexes in all key cities of China, allowing us to provide fast processing and shipping of cargo in any direction.",
  },
  // Advantages
  advantages_title: {
    ru: "Почему выбирают нас",
    en: "Why Choose Us",
  },
  advantages_reliability_title: {
    ru: "Надежность",
    en: "Reliability"
  },
  advantages_reliability_description: {
    ru: "Гарантируем сохранность вашего груза на всех этапах перевозки",
    en: "We guarantee the safety of your cargo at all stages of transportation"
  },
  advantages_speed_title: {
    ru: "Скорость",
    en: "Speed"
  },
  advantages_speed_description: {
    ru: "Оптимальные маршруты и сроки доставки для вашего груза",
    en: "Optimal routes and delivery times for your cargo"
  },
  advantages_prices_title: {
    ru: "Выгодные цены",
    en: "Competitive prices"
  },
  advantages_prices_description: {
    ru: "Конкурентные тарифы и индивидуальный подход к каждому клиенту",
    en: "Competitive rates and individual approach to each client"
  },
  advantages_team_title: {
    ru: "Опытная команда",
    en: "Experienced team"
  },
  advantages_team_description: {
    ru: "Профессионалы с многолетним опытом в логистике",
    en: "Professionals with many years of experience in logistics"
  },
  // Contact
  contact_title: {
    ru: "Заявка на товар",
    en: "Product Request",
  },
  contact_name: {
    ru: "Ваше имя",
    en: "Your Name",
  },
  contact_phone: {
    ru: "Номер телефона",
    en: "Phone Number",
  },
  contact_message: {
    ru: "Сообщение",
    en: "Message",
  },
  contact_submit: {
    ru: "Отправить заявку",
    en: "Submit Request",
  },
  // Footer
  footer_about_description_1: {
    ru: "Профессиональные грузоперевозки из Китая с собственными складами в крупнейших городах",
    en: "Professional cargo transportation from China with own warehouses in major cities"
  },
  footer_about_description_2: {
    ru: "Мы предоставляем полный спектр логистических услуг, включая доставку, таможенное оформление и складирование",
    en: "We provide a full range of logistics services, including delivery, customs clearance and warehousing"
  },
  footer_contacts_title: {
    ru: "Контакты",
    en: "Contacts"
  },
  footer_phone: {
    ru: "Телефон",
    en: "Phone"
  },
  footer_email: {
    ru: "Email",
    en: "Email"
  },
  footer_address: {
    ru: "Адрес",
    en: "Address"
  },
  footer_address_details: {
    ru: "Международный логистический центр",
    en: "International Logistics Center"
  },
  footer_warehouses_title: {
    ru: "Наши склады",
    en: "Our Warehouses"
  },
  footer_warehouse_guangzhou: {
    ru: "Гуанчжоу",
    en: "Guangzhou"
  },
  footer_warehouse_shenzhen: {
    ru: "Шэньчжэнь",
    en: "Shenzhen"
  },
  footer_warehouse_shanghai: {
    ru: "Шанхай",
    en: "Shanghai"
  },
  footer_warehouse_beijing: {
    ru: "Пекин",
    en: "Beijing"
  },
  footer_warehouse_yiwu: {
    ru: "Иу",
    en: "Yiwu"
  },
  footer_warehouse_xiamen: {
    ru: "Сямынь",
    en: "Xiamen"
  },
  footer_warehouse_khorgos: {
    ru: "Хоргос",
    en: "Khorgos"
  },
  footer_social_title: {
    ru: "Мы в соцсетях",
    en: "Social Media"
  },
  footer_social_description: {
    ru: "Подписывайтесь на наши социальные сети, чтобы быть в курсе последних новостей и акций",
    en: "Follow our social media to stay up to date with the latest news and promotions"
  },
  footer_rights: {
    ru: "Все права защищены",
    en: "All rights reserved"
  },
  // System messages
  success_message: {
    ru: "Заявка успешно отправлена!",
    en: "Request successfully sent!",
  },
  error_message: {
    ru: "Произошла ошибка при отправке заявки.",
    en: "An error occurred while sending the request.",
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