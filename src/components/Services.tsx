import { Truck, Plane, Package, Clock, Building2, FileCheck, Shield, Users, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "Грузоперевозки",
      description: "Организуем доставку грузов автотранспортом по оптимальным маршрутам с полным отслеживанием движения. Наши опытные водители и современный автопарк гарантируют безопасность и своевременность доставки вашего груза. Предоставляем услуги по консолидации грузов для оптимизации стоимости перевозки.",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      icon: <Plane className="w-12 h-12 text-primary" />,
      title: "Авиаперевозки",
      description: "Быстрая доставка грузов воздушным транспортом. Идеально для срочных отправлений и ценных грузов. Работаем с ведущими авиакомпаниями, обеспечивая оптимальные тарифы и максимальную скорость доставки. Предоставляем услуги по упаковке и оформлению необходимой документации.",
      image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      icon: <Package className="w-12 h-12 text-primary" />,
      title: "Складское хранение",
      description: "Современные складские комплексы во всех крупных городах Китая с системой учета и контроля температурного режима. Предоставляем услуги по маркировке, упаковке и консолидации грузов. Наши склады оборудованы системами видеонаблюдения и охраны для обеспечения сохранности вашего груза.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Срочная доставка",
      description: "Экспресс-доставка срочных грузов в кратчайшие сроки с гарантией своевременной доставки. Индивидуальный подход к каждому заказу и возможность отслеживания груза в режиме реального времени. Оперативное решение любых возникающих вопросов.",
      image: "https://st.depositphotos.com/1555678/4876/i/600/depositphotos_48761077-stock-photo-3d-express-delivery-concept.jpg"
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Консолидация грузов",
      description: "Объединяем несколько мелких партий в одну для оптимизации стоимости доставки. Профессиональная упаковка и маркировка каждой партии груза. Предоставляем услуги по временному хранению и подготовке сборных грузов к отправке.",
      image: "https://chinatoday.ru/wp-content/uploads/2023/09/keys180923-1-min.jpg"
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "Таможенное оформление",
      description: "Полное сопровождение при прохождении таможенных процедур и оформлении необходимой документации. Наши специалисты помогут подготовить все требуемые документы и обеспечат быстрое прохождение таможенного контроля.",
      image: "https://avatars.mds.yandex.net/get-altay/2068435/2a0000016f1cec0be3791c169e372f08423a/XXXL"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Страхование грузов",
      description: "Предоставляем полное страховое покрытие для всех типов грузов. Работаем с ведущими страховыми компаниями, обеспечивая максимальную защиту ваших интересов. Оперативное урегулирование страховых случаев.",
      image: "https://one-group.ru/upload/iblock/eae/2vw2g86tjd9eapxeykfc54953hinahqt.jpg"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Персональный менеджер",
      description: "Выделяем персонального менеджера для сопровождения вашего груза на всех этапах перевозки. Круглосуточная поддержка и консультации по всем вопросам. Индивидуальный подход к каждому клиенту.",
      image: "https://www.w2you.ru/admin/imgai4/6.webp"
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Отслеживание",
      description: "С помощью современных технологий и нашей системы мониторинга вы всегда можете отслеживать движение вашего груза в реальном времени, получать уведомления о статусе доставки и оперативно реагировать на любые изменения.",
      image: "https://ukrevro.com/wp-content/uploads/2024/01/cargo-tracking.jpg"
    }
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Проверяем при загрузке
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 animate-fade-in">
          Наши услуги
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fade-in [animation-delay:200ms]">
          Предоставляем полный спектр логистических услуг для вашего бизнеса. 
          От консолидации грузов до срочной доставки - мы обеспечим оптимальное решение для любых задач.
          Наша команда профессионалов гарантирует качественное выполнение каждого заказа.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                isMobile ? '' : 'hover:-translate-y-2'
              }`}
            >
              <div className="absolute inset-0">
                {service.image && (
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              </div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className={`mb-4 transform transition-transform duration-300 ${
                  isMobile ? '' : 'group-hover:scale-110'
                } flex items-center justify-center`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className={`text-gray-200 leading-relaxed ${
                  isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                } transition-opacity duration-300`}>
                  {service.description}
                </p>
              </div>
              {isMobile && (
                <style>{`
                  @keyframes float {
                    0%, 100% {
                      transform: translateY(0);
                    }
                    50% {
                      transform: translateY(-10px);
                    }
                  }
                  .group {
                    animation: float 3s ease-in-out infinite;
                  }
                `}</style>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;