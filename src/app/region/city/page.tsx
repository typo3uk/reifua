// /src/app/region/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function RegionPage() {
  // --- Міста обласного значення ---
  const cities = [
    { slug: 'bolekhiv', name: 'Болехів', img: 'https://www.realestate.if.ua/assets/images/locations/bolekhiv.jpg', count: 19 },
    { slug: 'burshtyn', name: 'Бурштин', img: 'https://www.realestate.if.ua/assets/images/locations/burshtyn.jpg', count: 26 },
    { slug: 'ivano-frankivsk', name: 'Івано-Франківськ', img: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivsk.jpg', count: 483 },
    { slug: 'kalush', name: 'Калуш', img: 'https://www.realestate.if.ua/assets/images/locations/kalush.jpg', count: 61 },
    { slug: 'kolomyia', name: 'Коломия', img: 'https://www.realestate.if.ua/assets/images/locations/kolomyia.jpg', count: 86 },
    { slug: 'yaremche', name: 'Яремче', img: 'https://www.realestate.if.ua/assets/images/locations/yaremche.jpg', count: 37 },
  ];

  // --- Райони області ---
  const districts = [
    { slug: 'ivano-frankivskyy', name: 'Івано-Франківський район', img: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivskyy.jpg', count: 75 },
    { slug: 'kaluskyy', name: 'Калуський район', img: 'https://www.realestate.if.ua/assets/images/locations/kaluskyy.jpg', count: 46 },
    { slug: 'kolomyyskyy', name: 'Коломийський район', img: 'https://www.realestate.if.ua/assets/images/locations/kolomyyskyy.jpg', count: 86 },
    { slug: 'kosivskyy', name: 'Косівський район', img: 'https://www.realestate.if.ua/assets/images/locations/kosivskyy.jpg', count: 20 },
    { slug: 'nadvirnyanskyy', name: 'Надвірнянський район', img: 'https://www.realestate.if.ua/assets/images/locations/nadvirnyanskyy.jpg', count: 37 },
    { slug: 'verkhovynskyy', name: 'Верховинський район', img: 'https://www.realestate.if.ua/assets/images/locations/verkhovynskyy.jpg', count: 37 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Заголовок */}
      <header className="bg-white shadow-sm py-8 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          Нерухомість в містах та районах Івано-Франківської області
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Виберіть місцевість, де б ви хотіли знайти, купити чи продати нерухомість
        </p>
      </header>

      <div className="py-12 px-4 max-w-7xl mx-auto space-y-16">

        {/* --- Міста обласного значення --- */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
            Міста обласного значення
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </section>

        {/* --- Райони області --- */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
            Райони Івано-Франківської області
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {districts.map((dist) => (
              <Link key={dist.slug} href={`/district/${dist.slug}/`} className="block">
                <Image
                  src={dist.img}
                  alt={`Нерухомість у ${dist.name}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
                <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-b-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{dist.name}</h3>
                  <p className="text-blue-600 font-medium">
                    Інші <strong>{dist.count}</strong> пропозицій
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* Підвал */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} reifua.vercel.app — Нерухомість у Івано-Франківській області
      </footer>
    </div>
  );
}