// /src/app/region/page.tsx
import LocationBlock from '@/components/LocationBlock';

// --- Міста обласного значення ---
const cities = [
  {
    slug: 'bolekhiv',
    name: 'Болехів',
    image: 'https://www.realestate.if.ua/assets/images/locations/bolekhiv.jpg',
    listings: [
      { id: 'c1', title: 'Продається будинок 32.4 м², ₴628 500', href: '/region/city/bolekhiv/#listing-1' },
      { id: 'c2', title: 'Продається будинок 66.6 м², ₴628 500', href: '/region/city/bolekhiv/#listing-2' },
      { id: 'c3', title: 'Нежитлове приміщення, $150000', href: '/region/city/bolekhiv/#listing-3' },
    ],
    totalCount: 19,
  },
  // ... решта міст (Бурштин, Івано-Франківськ, Калуш, Коломия, Яремче)
];

// --- Райони області ---
const districts = [
  {
    slug: 'ivano-frankivskyy',
    name: 'Івано-Франківський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivskyy.jpg',
    listings: [
      { id: 'f1', title: 'Будинок 25 м², ₴368 720', href: '/district/ivano-frankivskyy/#listing-1' },
      { id: 'f2', title: 'Квартира 49.1 м², ₴1 550 300', href: '/district/ivano-frankivskyy/#listing-2' },
      { id: 'f3', title: 'Частина будинку 117 м², ₴2 136 900', href: '/district/ivano-frankivskyy/#listing-3' },
    ],
    totalCount: 75,
  },
  // ... решта районів (Калуський, Коломийський, Косівський, Надвірнянський, Верховинський)
];

export default function RegionPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 max-w-7xl mx-auto space-y-16">
      <header className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Нерухомість в містах та районах Івано-Франківської області
        </h1>
      </header>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">
          Міста обласного значення
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <LocationBlock
              key={city.slug}
              slug={city.slug}
              name={city.name}
              image={city.image}
              listings={city.listings}
              totalCount={city.totalCount}
              baseUrl="/region/city"
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">
          Райони Івано-Франківської області
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {districts.map((dist) => (
            <LocationBlock
              key={dist.slug}
              slug={dist.slug}
              name={dist.name}
              image={dist.image}
              listings={dist.listings}
              totalCount={dist.totalCount}
              baseUrl="/district"
            />
          ))}
        </div>
      </section>
    </div>
  );
}