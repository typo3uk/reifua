// /src/app/district/town/page.tsx
import Link from 'next/link';

const towns = [
  { slug: 'dolyna', name: 'Долина', count: 33 },
  { slug: 'halych', name: 'Галич', count: 21 },
  { slug: 'horodenka', name: 'Городенка', count: 25 },
  { slug: 'kosiv', name: 'Косів', count: 25 },
  { slug: 'nadvirna', name: 'Надвірна', count: 37 },
  { slug: 'rohatyn', name: 'Рогатин', count: 21 },
  { slug: 'sniatyn', name: 'Снятин', count: 41 },
  { slug: 'tlumach', name: 'Тлумач', count: 16 },
  { slug: 'tysmenytsya', name: 'Тисмениця', count: 29 },
];

export default function DistrictTownPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Заголовок */}
      <header className="bg-gradient-to-r from-green-50 to-emerald-100 py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Нерухомість в містах районного значення
        </h1>
        <p className="mt-4 text-gray-600">
          Оберіть місто районного значення, щоб переглянути доступні пропозиції
        </p>
      </header>

      {/* Список міст */}
      <main className="py-10 px-6 max-w-4xl mx-auto space-y-4">
        {towns.map((town) => (
          <div key={town.slug} className="border-l-4 border-green-500 pl-4 py-3 bg-gray-50 rounded-r-lg">
            <Link href={`/town/${town.slug}`} className="text-lg font-medium text-gray-800 hover:underline">
              Нерухомість у місті {town.name}
            </Link>
            <p className="text-sm text-gray-600 mt-1">Інші <strong>{town.count}</strong> пропозицій</p>
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