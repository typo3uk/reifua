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
    {
      slug: 'burshtyn',
      name: 'Бурштин',
      image: 'https://www.realestate.if.ua/assets/images/locations/burshtyn.jpg',
      listings: [
        { id: 'b1', title: 'Продаж будинку 112 м², ₴921 800', href: '/region/city/burshtyn/' },
        { id: 'b2', title: 'Квартира 87 м², ₴1 759 800', href: '/region/city/burshtyn/' },
        { id: 'b3', title: 'Об\'єкт купівлі-продажу - Будинок, $79000', href: '/region/city/burshtyn/' },
      ],
      totalCount: 26,
    },
    {
      slug: 'ivano-frankivsk',
      name: 'Івано-Франківськ',
      image: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivsk.jpg',
      listings: [
        { id: 'i1', title: 'Квартира 45.4 м², ₴1 801 700', href: '/region/city/ivano-frankivsk/' },
        { id: 'i2', title: 'Будинок 590 м², ₴25 140 000', href: '/region/city/ivano-frankivsk/' },
        { id: 'i3', title: 'Об\'єкт купівлі-продажу - Квартира, $45000', href: '/region/city/ivano-frankivsk/' },
      ],
      totalCount: 483,
    },
    {
      slug: 'kalush',
      name: 'Калуш',
      image: 'https://www.realestate.if.ua/assets/images/locations/kalush.jpg',
      listings: [
        { id: 'k1', title: 'Будинок 119 м², ₴3 310 100', href: '/region/city/kalush/' },
        { id: 'k2', title: 'Будинок 147 м², ₴1 257 000', href: '/region/city/kalush/' },
        { id: 'k3', title: 'Об\'єкт купівлі-продажу - Будинок, $85000', href: '/region/city/kalush/' },
      ],
      totalCount: 61,
    },
    {
      slug: 'kolomyia',
      name: 'Коломия',
      image: 'https://www.realestate.if.ua/assets/images/locations/kolomyia.jpg',
      listings: [
        { id: 'o1', title: 'Будинок 122 м², ₴5 447 000', href: '/region/city/kolomyia/' },
        { id: 'o2', title: 'Квартира 81 м², ₴2 095 000', href: '/region/city/kolomyia/' },
        { id: 'o3', title: 'Об\'єкт купівлі-продажу - Будинок, $135000', href: '/region/city/kolomyia/' },
      ],
      totalCount: 86,
    },
    {
      slug: 'yaremche',
      name: 'Яремче',
      image: 'https://www.realestate.if.ua/assets/images/locations/yaremche.jpg',
      listings: [
        { id: 'y1', title: 'Земельна ділянка 1191 м², ₴3 992 232', href: '/region/city/yaremche/' },
        { id: 'y2', title: 'Будинок 90 м², ₴6 704 000', href: '/region/city/yaremche/' },
        { id: 'y3', title: 'Об\'єкт купівлі-продажу - Земельна ділянка, $95000', href: '/region/city/yaremche/' },
      ],
      totalCount: 37,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 max-w-7xl mx-auto">
      {/* Заголовок сторінки */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Нерухомість в містах обласного значення
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
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