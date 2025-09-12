// /src/app/district/town/page.tsx
import Link from 'next/link';

const towns = [
  {
    slug: 'dolyna',
    name: 'Долина',
    image: 'https://www.realestate.if.ua/assets/images/locations/dolyna.jpg',
    count: 33,
  },
  {
    slug: 'halych',
    name: 'Галич',
    image: 'https://www.realestate.if.ua/assets/images/locations/halych.jpg',
    count: 21,
  },
  {
    slug: 'horodenka',
    name: 'Городенка',
    image: 'https://www.realestate.if.ua/assets/images/locations/horodenka.jpg',
    count: 25,
  },
  {
    slug: 'kosiv',
    name: 'Косів',
    image: 'https://www.realestate.if.ua/assets/images/locations/kosiv.jpg',
    count: 25,
  },
  {
    slug: 'nadvirna',
    name: 'Надвірна',
    image: 'https://www.realestate.if.ua/assets/images/locations/nadvirna.jpg',
    count: 37,
  },
  {
    slug: 'rohatyn',
    name: 'Рогатин',
    image: 'https://www.realestate.if.ua/assets/images/locations/rohatyn.jpg',
    count: 21,
  },
  {
    slug: 'sniatyn',
    name: 'Снятин',
    image: 'https://www.realestate.if.ua/assets/images/locations/sniatyn.jpg',
    count: 41,
  },
  {
    slug: 'tlumach',
    name: 'Тлумач',
    image: 'https://www.realestate.if.ua/assets/images/locations/tlumach.jpg',
    count: 16,
  },
  {
    slug: 'tysmenytsya',
    name: 'Тисмениця',
    image: 'https://www.realestate.if.ua/assets/images/locations/tysmenytsya.jpg',
    count: 29,
  },
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
      <main className="py-10 px-6 max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {towns.map((town) => (
          <Link key={town.slug} href={`/town/${town.slug}/`} className="block">
            <img
              src={town.image}
              alt={`Нерухомість у місті ${town.name}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-b-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{town.name}</h3>
              <p className="text-blue-600 font-medium">
                Інші <strong>{town.count}</strong> пропозицій
              </p>
            </div>
          </Link>
        ))}
      </main>

      {/* Підвал */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} reifua.vercel.app — Нерухомість у Івано-Франківській області
      </footer>
    </div>
  );
}