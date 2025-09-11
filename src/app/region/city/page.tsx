// /src/app/region/city/page.tsx
import Link from 'next/link';

const cities = [
  { slug: 'bolekhiv', name: 'Болехів', count: 19 },
  { slug: 'burshtyn', name: 'Бурштин', count: 26 },
  { slug: 'ivano-frankivsk', name: 'Івано-Франківськ', count: 483 },
  { slug: 'kalush', name: 'Калуш', count: 61 },
  { slug: 'kolomyia', name: 'Коломия', count: 86 },
  { slug: 'yaremche', name: 'Яремче', count: 37 },
];

export default function RegionCityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Заголовок */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Нерухомість в містах обласного значення
        </h1>
        <p className="mt-4 text-gray-600">
          Виберіть місто, щоб переглянути доступні пропозиції
        </p>
      </header>

      {/* Список міст */}
      <main className="py-10 px-6 max-w-4xl mx-auto space-y-4">
        {cities.map((city) => (
          <div key={city.slug} className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded-r-lg">
            <Link href={`/region/city/${city.slug}`} className="text-lg font-medium text-gray-800 hover:underline">
              Нерухомість у місті {city.name}
            </Link>
            <p className="text-sm text-gray-600 mt-1">Інші <strong>{city.count}</strong> пропозицій</p>
          </div>
        ))}
      </main>

      {/* Підвал */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} reifua.vercel.app — Нерухомість у Івано-Франківській області
      </footer>
    </div>
  );
}