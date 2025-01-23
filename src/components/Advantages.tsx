import { Shield, Clock, DollarSign, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Advantages = () => {
  const { t } = useLanguage();
  
  const advantages = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: t('advantages_reliability_title'),
      description: t('advantages_reliability_description')
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: t('advantages_speed_title'),
      description: t('advantages_speed_description')
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: t('advantages_prices_title'),
      description: t('advantages_prices_description')
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: t('advantages_team_title'),
      description: t('advantages_team_description')
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('advantages_title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-orange-50 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;