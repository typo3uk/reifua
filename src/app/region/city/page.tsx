// /src/app/region/city/page.tsx
import Link from 'next/link';
import LocationBlock from '@/components/LocationBlock';

export default function RegionCityPage() {
  const cities = [
    {
      slug: 'bolekhiv',
      name: 'Болехів',
      image: 'https://www.realestate.if.ua/assets/images/locations/bolekhiv.jpg',
      listings: [
        { id: 'c1', title: 'Продається будинок 32.4 м², ₴628 500', href: '/region/city/bolekhiv/' },
        { id: 'c2', title: 'Продається будинок 66.6 м², ₴628 500', href: '/region/city/bolekhiv/' },
        { id: 'c3', title: 'Нежитлове приміщення, $150000', href: '/region/city/bolekhiv/' },
      ],
      totalCount: 19,
    },
    // ... решта міст
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 max-w-7xl mx-auto">
      {/* Заголовок сторінки */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Нерухомість в містах обласного значення
        </h1>
        <p className="mt-4 text-gray-600">
          Оберіть місто, щоб переглянути доступні пропозиції
        </p>
      </header>

      {/* Список міст */}
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

      {/* Підвал */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm mt-16 rounded-t-lg">
        &copy; {new Date().getFullYear()} reifua.vercel.app — Нерухомість у Івано-Франківській області
      </footer>
    </div>
  );
}