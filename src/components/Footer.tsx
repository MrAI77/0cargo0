import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CARGO</h3>
            <p className="text-gray-400 mb-4">
              {t('footer_about_description_1')}
            </p>
            <p className="text-gray-400">
              {t('footer_about_description_2')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer_contacts_title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer_phone')}: +86 123 456 7890</li>
              <li>{t('footer_email')}: info@cargo-china.com</li>
              <li>
                {t('footer_address')}:
                <br />
                {t('footer_address_details')}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer_warehouses_title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer_warehouse_guangzhou')}</li>
              <li>{t('footer_warehouse_shenzhen')}</li>
              <li>{t('footer_warehouse_shanghai')}</li>
              <li>{t('footer_warehouse_beijing')}</li>
              <li>{t('footer_warehouse_yiwu')}</li>
              <li>{t('footer_warehouse_xiamen')}</li>
              <li>{t('footer_warehouse_khorgos')}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer_social_title')}</h4>
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
              {t('footer_social_description')}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CARGO. {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;