// /src/app/region/city/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Дані про міста обласного значення
const citiesData = {
  bolekhiv: {
    name: 'Болехів',
    image: 'https://www.realestate.if.ua/assets/images/locations/bolekhiv.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Нежитлове приміщення, ціна $150000, м. Болехів',
      'Продається будинок площею 32.4 м², дві кімнати, один поверх, м. Болехів, вул. Назарія Яремчука, 5А, ціна 628 500 ₴',
      'Продається будинок площею 66.6 м², три кімнати, один поверх і горище, м. Болехів, вул. Данила Галицького, 123, ціна 628 500 ₴',
    ],
    count: 19,
  },
  burshtyn: {
    name: 'Бурштин',
    image: 'https://www.realestate.if.ua/assets/images/locations/burshtyn.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Будинок, ціна $79000, м. Бурштин',
      'Продаж будинку площею 112 м², чотири кімнати, два поверхи, м. Бурштин, вул. Шевченка, 12, ціна 921 800 ₴',
      'Продаю квартиру площею 87 м², три кімнати, м. Бурштин, вул. Лесі Українки, 15, ціна 1 759 800 ₴',
    ],
    count: 26,
  },
  'ivano-frankivsk': {
    name: 'Івано-Франківськ',
    image: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivsk.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Квартира, ціна $45000, м. Івано-Франківськ',
      'Продаж квартири площею 45.4 м², дві кімнати, м. Івано-Франківськ, вул. Героїв Майдану, 15, ціна 1 801 700 ₴',
      'Продається будинок площею 590 м², шість кімнат, два поверхи, м. Івано-Франківськ, вул. Героїв Майдану, 1, ціна 25 140 000 ₴',
    ],
    count: 483,
  },
  kalush: {
    name: 'Калуш',
    image: 'https://www.realestate.if.ua/assets/images/locations/kalush.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Будинок, ціна $85000, м. Калуш',
      'Продаю будинок площею 119 м², чотири кімнати, один поверх, м. Калуш, вул. Гната Мартинця, 29, ціна 3 310 100 ₴',
      'Продаж будинку площею 147 м², чотири кімнати, один поверх, м. Калуш, вул. Козоріса, 43, ціна 1 257 000 ₴',
    ],
    count: 61,
  },
  kolomyia: {
    name: 'Коломия',
    image: 'https://www.realestate.if.ua/assets/images/locations/kolomyia.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Будинок, ціна $135000, м. Коломия',
      'Продаю будинок площею 122 м², чотири кімнати, два поверхи, м. Коломия, вул. Тараса Шевченка, 1, ціна 5 447 000 ₴',
      'Продаж квартири площею 81 м², три кімнати, м. Коломия, вул. Лесі Українки, 10, ціна 2 095 000 ₴',
    ],
    count: 86,
  },
  yaremche: {
    name: 'Яремче',
    image: 'https://www.realestate.if.ua/assets/images/locations/yaremche.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Земельна ділянка, ціна $95000, м. Яремче',
      'Продаю земельну ділянку площею 1191 м², м. Яремче, вул. Карпатська, 1, ціна 3 992 232 ₴',
      'Продаю будинок площею 90 м², три кімнати, м. Яремче, вул. Карпатська, 1, ціна 6 704 000 ₴',
    ],
    count: 37,
  },
} as const;

type CitySlug = keyof typeof citiesData;

export default function CityPage({ params }: { params: { slug: string } }) {
  const cityKey = params.slug as CitySlug;
  const city = citiesData[cityKey];

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Заголовок */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Нерухомість у місті {city.name}
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Пропозиції продажу та оренди будинків, квартир, землі та комерційних приміщень
        </p>
      </header>

      {/* Основний контент */}
      <main className="py-10 px-6 max-w-4xl mx-auto space-y-8">
        {city.listings.map((listing, i) => (
          <div key={i} className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 rounded-r-lg shadow-sm">
            <p className="text-gray-800 leading-relaxed text-sm md:text-base">{listing}</p>
          </div>
        ))}

        {/* Кількість пропозицій */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            Всього в місті {city.name} — <strong>{city.count}</strong> пропозицій
          </p>
        </div>
      </main>

      {/* Підвал */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} reifua.vercel.app — Нерухомість у Івано-Франківській області
      </footer>
    </div>
  );
}