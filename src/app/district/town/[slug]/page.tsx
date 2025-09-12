// /src/app/district/town/[slug]/page.tsx
import { notFound } from 'next/navigation';

// Дані про міста районного значення (як на https://www.realestate.if.ua/district/town/)
const townsData = {
  dolyna: {
    name: 'Долина',
    image: 'https://www.realestate.if.ua/assets/images/locations/dolyna.jpg',
    listings: [
      'Продаж будинку площею 54 м², три кімнати, один поверх, м. Долина, вул. Сумська, 1, ціна 754 200 ₴',
      'Продаю будинок площею 86 м², чотири кімнати, один поверх і горище, м. Долина, вул. Незалежності, 103, ціна 957 800 ₴',
    ],
    count: 33,
  },
  halych: {
    name: 'Галич',
    image: 'https://www.realestate.if.ua/assets/images/locations/halych.jpg',
    listings: [
      'Продається квартира площею 57 м², дві кімнати, м. Галич, вул. Лесі Українки, 15, ціна 1 019 400 ₴',
      'Продаж частини будинку, площа 60 м², дві кімнати, м. Галич, вул. Миру, 7, ціна 252 600 ₴',
    ],
    count: 21,
  },
  horodenka: {
    name: 'Городенка',
    image: 'https://www.realestate.if.ua/assets/images/locations/horodenka.jpg',
    listings: [
      'Продаю будинок площею 100 м², п’ять кімнат, два поверхи, м. Городенка, вул. Святої Параскеви, 21, ціна 1 054 000 ₴',
      'Продаж квартири площею 75 м², три кімнати, м. Городенка, вул. Галицька, 12, ціна 1 418 500 ₴',
    ],
    count: 25,
  },
  kosiv: {
    name: 'Косів',
    image: 'https://www.realestate.if.ua/assets/images/locations/kosiv.jpg',
    listings: [
      'Продається квартира площею 45 м², дві кімнати, м. Косів, вул. Тараса Шевченка, 15, ціна 854 800 ₴',
      'Продаж частини будинку площею 110 м², п’ять кімнат, м. Косів, вул. Тараса Шевченка, 1, ціна 3 854 800 ₴',
    ],
    count: 25,
  },
  nadvirna: {
    name: 'Надвірна',
    image: 'https://www.realestate.if.ua/assets/images/locations/nadvirna.jpg',
    listings: [
      'Продаж будинку площею 120 м², шість кімнат, один поверх і горище, м. Надвірна, вул. Гетьмана Мазепи, 15, ціна 5 007 000 ₴',
      'Продаю квартиру площею 60 м², три кімнати, м. Надвірна, вул. Лесі Українки, 8, ціна 1 258 000 ₴',
    ],
    count: 37,
  },
  rohatyn: {
    name: 'Рогатин',
    image: 'https://www.realestate.if.ua/assets/images/locations/rohatyn.jpg',
    listings: [
      'Продаж будинку площею 61 м², дві кімнати, один поверх, м. Рогатин, вул. Гончарівка, 257, ціна 565 650 ₴',
      'Продаю будинок площею 70 м², три кімнати, один поверх, м. Рогатин, вул. Двір, 4, ціна 691 350 ₴',
    ],
    count: 21,
  },
  sniatyn: {
    name: 'Снятин',
    image: 'https://www.realestate.if.ua/assets/images/locations/sniatyn.jpg',
    listings: [
      'Продається будинок площею 120 м², шість кімнат, два поверхи, м. Снятин, вул. Святої Параскеви, 17, ціна 1 258 000 ₴',
      'Продаж квартири площею 45 м², дві кімнати, м. Снятин, вул. Миру, 12, ціна 754 800 ₴',
    ],
    count: 41,
  },
  tlumach: {
    name: 'Тлумач',
    image: 'https://www.realestate.if.ua/assets/images/locations/tlumach.jpg',
    listings: [
      'Продаж будинку площею 88 м², чотири кімнати, один поверх, м. Тлумач, вул. Кучерівка, 44, ціна 586 600 ₴',
      'Продаю квартиру площею 50 м², дві кімнати, м. Тлумач, вул. Лесі Українки, 10, ціна 854 800 ₴',
    ],
    count: 16,
  },
  tysmenytsya: {
    name: 'Тисмениця',
    image: 'https://www.realestate.if.ua/assets/images/locations/tysmenytsya.jpg',
    listings: [
      'Продається будинок площею 114 м², шість кімнат, два поверхи, м. Тисмениця, вул. Гетьмана Сагайдачного, 23, ціна 5 363 200 ₴',
      'Продаж квартири площею 60 м², три кімнати, м. Тисмениця, вул. Миру, 15, ціна 1 379 400 ₴',
    ],
    count: 29,
  },
} as const;

type TownSlug = keyof typeof townsData;

export default function TownPage({ params }: { params: { slug: string } }) {
  const townKey = params.slug as TownSlug;
  const town = townsData[townKey];

  if (!town) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Заголовок */}
      <header className="bg-gradient-to-r from-green-50 to-emerald-100 py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Нерухомість у місті {town.name}
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Пропозиції продажу та оренди будинків, квартир, землі та комерційних приміщень
        </p>
      </header>

      {/* Основний контент */}
      <main className="py-10 px-6 max-w-4xl mx-auto space-y-8">
        {town.listings.map((listing, i) => (
          <div key={i} className="border-l-4 border-green-500 pl-4 py-2 bg-gray-50 rounded-r-lg shadow-sm">
            <p className="text-gray-800 leading-relaxed text-sm md:text-base">{listing}</p>
          </div>
        ))}

        {/* Кількість пропозицій */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            Всього в місті {town.name} — <strong>{town.count}</strong> пропозицій
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