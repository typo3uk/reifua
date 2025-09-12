// /src/app/district/page.tsx
import Link from 'next/link';

const districts = [
  {
    slug: 'ivano-frankivskyy',
    name: 'Івано-Франківський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivskyy.jpg',
    count: 75,
  },
  {
    slug: 'kaluskyy',
    name: 'Калуський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kaluskyy.jpg',
    count: 46,
  },
  {
    slug: 'kolomyyskyy',
    name: 'Коломийський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kolomyyskyy.jpg',
    count: 86,
  },
  {
    slug: 'kosivskyy',
    name: 'Косівський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kosivskyy.jpg',
    count: 20,
  },
  {
    slug: 'nadvirnyanskyy',
    name: 'Надвірнянський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/nadvirnyanskyy.jpg',
    count: 37,
  },
  {
    slug: 'verkhovynskyy',
    name: 'Верховинський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/verkhovynskyy.jpg',
    count: 37,
  },
];

export default function DistrictPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Заголовок */}
      <header className="bg-gradient-to-r from-green-50 to-emerald-100 py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Нерухомість в районах Івано-Франківської області
        </h1>
        <p className="mt-4 text-gray-600">
          Оберіть район, щоб переглянути доступні пропозиції
        </p>
      </header>

      {/* Список районів */}
      <main className="py-10 px-6 max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {districts.map((dist) => (
          <Link key={dist.slug} href={`/district/${dist.slug}/`} className="block">
            <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <img
                src={dist.image}
                alt={`Нерухомість у ${dist.name}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">{dist.name}</h3>
                <p className="text-blue-600 font-medium">
                  Інші <strong>{dist.count}</strong> пропозицій
                </p>
              </div>
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