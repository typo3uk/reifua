// /src/app/region/city/[slug]/page.tsx
import { notFound } from 'next/navigation';

// Тимчасова база даних міст (потім замінимо на CMS)
const citiesData = {
  bolekhiv: {
    name: "Болехів",
    image: "https://www.realestate.if.ua/assets/images/locations/bolekhiv.jpg",
    listings: [
      "Продається будинок площею 32.4 м², дві кімнати, один поверх, м. Болехів, вул. Назарія Яремчука, 5А, ціна 628 500 ₴",
      "Продається будинок площею 66.6 м², три кімнати, один поверх і горище, м. Болехів, вул. Данила Галицького, 123, ціна 628 500 ₴",
      "Об'єкт купівлі-продажу - Нежитлове приміщення, ціна $150000, м. Болехів"
    ],
    count: 19,
  },
  kalush: {
    name: "Калуш",
    image: "https://www.realestate.if.ua/assets/images/locations/kalush.jpg",
    listings: [
      "Продаю будинок площею 119 м², чотири кімнати, один поверх і горище, м. Калуш, вул. Гната Мартинця, 29, ціна 3 310 100 ₴",
      "Продаж будинку площею 147 м², чотири кімнати, один поверх, м. Калуш, вул. Козоріса, 43, ціна 1 257 000 ₴",
    ],
    count: 61,
  },
  // Додай інші міста за потреби
};

export default function CityPage({ params }: { params: { slug: string } }) {
  const cityKey = params.slug;
  const city = citiesData[cityKey];

  if (!city) {
    notFound(); // Повертає 404, якщо місто не знайдено
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Заголовок */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
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

        {/* Інші пропозиції */}
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