import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const warehouseLocations = t('footer.warehouses.locations');
  if (!Array.isArray(warehouseLocations)) {
    console.error('Warehouse locations is not an array');
    return null;
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('footer.about.title')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.about.description')}
            </p>
            <p className="text-gray-400">
              {t('footer.about.fullDescription')}
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contacts.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.contacts.phone')}: +86 123 456 7890</li>
              <li>Email: info@cargo-china.com</li>
              <li>
                {t('footer.contacts.addressLine1')}
                <br />
                {t('footer.contacts.addressLine2')}
              </li>
            </ul>
          </div>

          {/* Наши склады */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.warehouses.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              {warehouseLocations.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>

          {/* Социальные сети */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.social.title')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://t.me/cargo_china"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaTelegramPlane className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/cargo_china"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 mt-4">
              {t('footer.social.description')}
            </p>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;