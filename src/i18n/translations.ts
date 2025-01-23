export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      warehouses: "Warehouses",
      benefits: "Benefits",
      application: "Application"
    },
    hero: {
      title: "Professional cargo delivery from China",
      subtitle: "Own warehouses in major Chinese cities",
      cta: "Calculate delivery"
    },
    services: {
      title: "Our Services",
      logistics: "Logistics",
      customs: "Customs Clearance",
      storage: "Storage",
      delivery: "Delivery"
    },
    advantages: {
      title: "Our Benefits",
      experience: "Years of Experience",
      network: "Warehouse Network",
      support: "24/7 Support",
      tracking: "Real-time Tracking"
    },
    contact: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send"
    },
    footer: {
      about: {
        title: "CARGO",
        description: "Professional cargo delivery from China with own warehouses in major Chinese cities.",
        fullDescription: "We provide a full range of logistics services: delivery, customs clearance and warehouse storage."
      },
      contacts: {
        title: "Contacts",
        phone: "Phone",
        address: "Address",
        addressLine1: "Guangzhou, China",
        addressLine2: "International Logistics Center"
      },
      warehouses: {
        title: "Our Warehouses",
        locations: ["Guangzhou", "Shenzhen", "Shanghai", "Beijing", "Yiwu", "Xiamen", "Khorgos"]
      },
      social: {
        title: "Follow Us",
        description: "Follow our social media to stay updated with latest news and promotions."
      },
      copyright: "© 2024 CARGO. All rights reserved."
    }
  },
  ru: {
    nav: {
      home: "Главное",
      services: "Услуги",
      warehouses: "Склады",
      benefits: "Преимущества",
      application: "Заявка"
    },
    hero: {
      title: "Профессиональные грузоперевозки из Китая",
      subtitle: "Собственные склады в крупнейших городах КНР",
      cta: "Рассчитать доставку"
    },
    services: {
      title: "Наши Услуги",
      logistics: "Логистика",
      customs: "Таможенное оформление",
      storage: "Хранение",
      delivery: "Доставка"
    },
    advantages: {
      title: "Наши Преимущества",
      experience: "Годы опыта",
      network: "Сеть складов",
      support: "Поддержка 24/7",
      tracking: "Отслеживание в реальном времени"
    },
    contact: {
      title: "Связаться с нами",
      name: "Имя",
      email: "Email",
      message: "Сообщение",
      submit: "Отправить"
    },
    footer: {
      about: {
        title: "CARGO",
        description: "Профессиональные грузоперевозки из Китая с собственными складами в крупнейших городах КНР.",
        fullDescription: "Мы предоставляем полный спектр логистических услуг: доставку, таможенное оформление и складское хранение."
      },
      contacts: {
        title: "Контакты",
        phone: "Телефон",
        address: "Адрес",
        addressLine1: "Гуанчжоу, Китай",
        addressLine2: "Международный логистический центр"
      },
      warehouses: {
        title: "Наши склады",
        locations: ["Гуанчжоу", "Шэньчжэнь", "Шанхай", "Пекин", "Иу", "Сямынь", "Хоргос"]
      },
      social: {
        title: "Мы в соцсетях",
        description: "Подписывайтесь на наши социальные сети, чтобы быть в курсе последних новостей и акций."
      },
      copyright: "© 2024 CARGO. Все права защищены."
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;