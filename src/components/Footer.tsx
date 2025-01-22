import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-2xl font-bold mb-4">CARGO</h3>
            <p className="text-gray-400 mb-4">
              Профессиональные грузоперевозки из Китая с собственными складами в крупнейших городах.
            </p>
            <p className="text-gray-400">
              Мы предоставляем полный спектр логистических услуг, включая доставку, таможенное оформление и складирование.
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Телефон: +86 123 456 7890</li>
              <li>Email: info@cargo-china.com</li>
              <li>
                Адрес: Гуанчжоу, Китай
                <br />
                Международный логистический центр
              </li>
            </ul>
          </div>

          {/* Наши склады */}
          <div>
            <h4 className="font-semibold mb-4">Наши склады</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Гуанчжоу</li>
              <li>Шэньчжэнь</li>
              <li>Шанхай</li>
              <li>Пекин</li>
              <li>Иу</li>
              <li>Сямынь</li>
              <li>Хоргос</li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
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
              Подписывайтесь на наши социальные сети, чтобы быть в курсе последних новостей и акций.
            </p>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CARGO. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;