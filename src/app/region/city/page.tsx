// /src/app/region/city/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function RegionCityPage() {
  const cities = [
    { slug: 'bolekhiv', name: 'Болехів', img: 'https://www.realestate.if.ua/assets/images/locations/bolekhiv.jpg', count: 19 },
    { slug: 'burshtyn', name: 'Бурштин', img: 'https://www.realestate.if.ua/assets/images/locations/burshtyn.jpg', count: 26 },
    { slug: 'ivano-frankivsk', name: 'Івано-Франківськ', img: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivsk.jpg', count: 483 },
    { slug: 'kalush', name: 'Калуш', img: 'https://www.realestate.if.ua/assets/images/locations/kalush.jpg', count: 61 },
    { slug: 'kolomyia', name: 'Коломия', img: 'https://www.realestate.if.ua/assets/images/locations/kolomyia.jpg', count: 86 },
    { slug: 'yaremche', name: 'Яремче', img: 'https://www.realestate.if.ua/assets/images/locations/yaremche.jpg', count: 37 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Заголовок */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Нерухомість в містах обласного значення
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Оберіть місто обласного значення, щоб переглянути доступні пропозиції
        </p>
      </header>

      {/* Список міст */}
      <main className="py-10 px-6 max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <Link key={city.slug} href={`/region/city/${city.slug}/`} className="block">
            <Image
              src={city.img}
              alt={`Нерухомість у місті ${city.name}`}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded-b-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Нерухомість у місті {city.name}</h3>
              <p className="text-blue-600 font-medium">
                Інші <strong>{city.count}</strong> пропозицій
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