// /src/app/district/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Дані про райони Івано-Франківської області
const districtsData = {
  'ivano-frankivskyy': {
    name: 'Івано-Франківський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivskyy.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Будинок, ціна $8800, Івано-Франківський район',
      'Продаж будинку площею 25 м², одна кімната, один поверх, с. Жураки, вул. Зелена, 21, ціна 368 720 ₴',
      'Продається квартира площею 49.1 м², одна кімната, м. Яремче, вул. Поленина, 69, ціна 1 550 300 ₴',
      'Продаж частини будинку площею 117 м², три кімнати, с. Павлівка, вул. Дачна, 19, ціна 2 136 900 ₴',
      'Продаю ділянку землі площею 1329 м², с. Павлівка, вул. Устима Кармелюка, ціна 708 110 ₴',
    ],
    count: 75,
  },
  'kaluskyy': {
    name: 'Калуський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kaluskyy.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Будинок, ціна $25000, Калуський район',
      'Продаю будинок площею 76.6 м², три кімнати, с. Вільхівка, вул. Шкільна, 5, ціна 1 047 500 ₴',
      'Продаж будинку площею 150 м², п’ять кімнат, с.м.т. Рожнятів, вул. Степана Бандери, 3, ціна 1 965 110 ₴',
      'Продається будинок площею 212 м², п’ять кімнат, с.м.т. Войнилів, вул. Лесі Українки, 45, ціна 2 349 200 ₴',
    ],
    count: 46,
  },
  'kolomyyskyy': {
    name: 'Коломийський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kolomyyskyy.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Будинок, ціна $39900, Коломийський район',
      'Продаю будинок площею 210 м², п’ять кімнат, с.м.т. Заболотів, вул. Нова, 15, ціна 1 671 810 ₴',
      'Продаж будинку площею 78 м², три кімнати, с. Мишин, вул. Січових Стрільців, 136, ціна 1 257 000 ₴',
    ],
    count: 86,
  },
  'kosivskyy': {
    name: 'Косівський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kosivskyy.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Будинок, ціна $35000, Косівський район',
      'Продаю будинок площею 120 м², чотири кімнати, с. Косів, вул. Тараса Шевченка, 15, ціна 1 854 800 ₴',
      'Продаж квартири площею 60 м², три кімнати, с. Косів, вул. Гонти, 10, ціна 1 258 000 ₴',
    ],
    count: 20,
  },
  'nadvirnyanskyy': {
    name: 'Надвірнянський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/nadvirnyanskyy.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Будинок, ціна $48000, Надвірнянський район',
      'Продаються квартири у м. Надвірна, вул. Ольги Кобилянської, 27, ціна від 3 980 500 ₴',
      'Продаю будинок площею 134 м², п’ять кімнат, м. Надвірна, вул. Вишнева, 9, ціна 2 011 200 ₴',
    ],
    count: 37,
  },
  'verkhovynskyy': {
    name: 'Верховинський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/verkhovynskyy.jpg',
    listings: [
      'Об\'єкт купівлі-продажу - Будинок, ціна $1400000, Верховинський район',
      'Продаж будинку площею 1500 м², 27 кімнат, с. Верхній Ясенів, присілок Печіще, 7, ціна 58 660 000 ₴',
      'Продаю нежитлове приміщення площею 195 м², с. Черемошна, присілок Центр, 3, ціна 1 131 300 ₴',
    ],
    count: 37,
  },
} as const;

type DistrictSlug = keyof typeof districtsData;

export default function DistrictPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as DistrictSlug;
  const district = districtsData[slug];

  if (!district) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Заголовок */}
      <header className="bg-gradient-to-r from-green-50 to-emerald-100 py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Нерухомість у {district.name}
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Пропозиції продажу та оренди будинків, квартир, землі та комерційних приміщень
        </p>
      </header>

      {/* Основний контент */}
      <main className="py-10 px-6 max-w-4xl mx-auto space-y-8">
        {district.listings.map((listing, i) => (
          <div key={i} className="border-l-4 border-green-500 pl-4 py-2 bg-gray-50 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed text-sm md:text-base">{listing}</p>
          </div>
        ))}

        {/* Кількість пропозицій */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            Всього в {district.name.toLowerCase()} — <strong>{district.count}</strong> пропозицій
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