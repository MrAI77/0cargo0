import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Симуляция анимации загрузки (например, 3 секунды)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (!isLoading && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Ошибка при воспроизведении видео:", error);
      });
    }
  }, [isLoading]);

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Левая часть (текст и кнопки) */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold">
              Грузо-Авиа перевозки из Китая
              <span className="text-primary block animate-slide-in-right">в любую точку мира</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы предлагаем комплексные логистические решения с собственной сетью складов во всех крупных городах Китая.
              Наша компания обеспечивает надежную и быструю доставку грузов любого объема, используя оптимальные маршруты
              и комбинируя авиа и автоперевозки для максимальной эффективности.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="font-semibold text-xl mb-3 text-primary">Авиаперевозки</h3>
                <p className="text-gray-600">Быстрая доставка за 3-5 дней с полным отслеживанием груза</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="font-semibold text-xl mb-3 text-secondary">Грузоперевозки</h3>
                <p className="text-gray-600">Экономичная доставка за 15-20 дней с оптимальными маршрутами</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li className="animate-fade-in [animation-delay:200ms]">Персональный менеджер 24/7</li>
              <li className="animate-fade-in [animation-delay:400ms]">Оформление всех необходимых документов</li>
              <li className="animate-fade-in [animation-delay:600ms]">Таможенное оформление под ключ</li>
              <li className="animate-fade-in [animation-delay:800ms]">Страхование грузов</li>
              <li className="animate-fade-in [animation-delay:1000ms]">Складское хранение в любом городе Китая</li>
            </ul>
            <div className="flex gap-4">
              <a
                href="#calculator"
                className="inline-block bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Рассчитать стоимость
              </a>
              <a
                href="#map"
                className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg transition-all md:hover:-translate-y-1 md:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Наши склады
              </a>
            </div>
          </div>

          {/* Правая часть (изображения) */}
          <div className="flex-1 relative">
            {!isLoading && (
              <video
                ref={videoRef}
                className="w-full h-auto rounded-lg shadow-xl animate-float"
                loop
                muted
                playsInline
              >
                <source src="https://www.cargo.uz/images/4214151-Норм%20вариант%20(2).mp4" type="video/mp4" />
              </video>
            )}
            <img
              src="https://www.rsholod.ru/images/stroitelstvo-logisticheskih-tsentrov-rsholod-1.jpg"
              alt="Логистический центр"
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full border-4 border-white shadow-lg animate-float [animation-delay:500ms] object-cover"
              loading="eager"
            />
            <img
              src="https://www.scat-tv.ru/wp-content/uploads/2023/11/dc0780fda408b1013cef24828b7be5e1694b4509.jpg"
              alt="Морской порт"
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full border-4 border-white shadow-lg animate-float [animation-delay:1000ms] object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
