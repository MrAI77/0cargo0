import { Truck, Plane, Package, Clock, Building2, FileCheck, Shield, Users, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: t('services_truck_title'),
      description: t('services_truck_description'),
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      icon: <Plane className="w-12 h-12 text-primary" />,
      title: t('services_plane_title'),
      description: t('services_plane_description'),
      image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      icon: <Package className="w-12 h-12 text-primary" />,
      title: t('services_storage_title'),
      description: t('services_storage_description'),
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: t('services_express_title'),
      description: t('services_express_description'),
      image: "https://st.depositphotos.com/1555678/4876/i/600/depositphotos_48761077-stock-photo-3d-express-delivery-concept.jpg"
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: t('services_consolidation_title'),
      description: t('services_consolidation_description'),
      image: "https://chinatoday.ru/wp-content/uploads/2023/09/keys180923-1-min.jpg"
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: t('services_customs_title'),
      description: t('services_customs_description'),
      image: "https://avatars.mds.yandex.net/get-altay/2068435/2a0000016f1cec0be3791c169e372f08423a/XXXL"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: t('services_insurance_title'),
      description: t('services_insurance_description'),
      image: "https://one-group.ru/upload/iblock/eae/2vw2g86tjd9eapxeykfc54953hinahqt.jpg"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: t('services_manager_title'),
      description: t('services_manager_description'),
      image: "https://www.w2you.ru/admin/imgai4/6.webp"
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: t('services_tracking_title'),
      description: t('services_tracking_description'),
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
          {t('services_title')}
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fade-in [animation-delay:200ms]">
          {t('services_description')}
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