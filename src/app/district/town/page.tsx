// /src/app/district/town/page.tsx
import Link from 'next/link';
import LocationBlock from '@/components/LocationBlock';

export default function DistrictTownPage() {
  const towns = [
    {
      slug: 'dolyna',
      name: 'Долина',
      image: 'https://www.realestate.if.ua/assets/images/locations/dolyna.jpg',
      listings: [
        { id: 'd1', title: 'Будинок 54 м², ₴754 200', href: '/district/town/dolyna/' },
        { id: 'd2', title: 'Будинок 86 м², ₴957 800', href: '/district/town/dolyna/' },
        { id: 'd3', title: 'Об\'єкт купівлі-продажу - Будинок, $75000', href: '/district/town/dolyna/' },
      ],
      totalCount: 33,
    },
    {
      slug: 'halych',
      name: 'Галич',
      image: 'https://www.realestate.if.ua/assets/images/locations/halych.jpg',
      listings: [
        { id: 'h1', title: 'Квартира 57 м², ₴1 019 400', href: '/district/town/halych/' },
        { id: 'h2', title: 'Частина будинку 60 м², ₴252 600', href: '/district/town/halych/' },
        { id: 'h3', title: 'Об\'єкт купівлі-продажу - Квартира, $55000', href: '/district/town/halych/' },
      ],
      totalCount: 21,
    },
    {
      slug: 'horodenka',
      name: 'Городенка',
      image: 'https://www.realestate.if.ua/assets/images/locations/horodenka.jpg',
      listings: [
        { id: 'r1', title: 'Будинок 100 м², ₴1 054 000', href: '/district/town/horodenka/' },
        { id: 'r2', title: 'Квартира 75 м², ₴1 418 500', href: '/district/town/horodenka/' },
        { id: 'r3', title: 'Об\'єкт купівлі-продажу - Будинок, $88000', href: '/district/town/horodenka/' },
      ],
      totalCount: 25,
    },
    {
      slug: 'kosiv',
      name: 'Косів',
      image: 'https://www.realestate.if.ua/assets/images/locations/kosiv.jpg',
      listings: [
        { id: 's1', title: 'Квартира 45 м², ₴854 800', href: '/district/town/kosiv/' },
        { id: 's2', title: 'Частина будинку 110 м², ₴3 854 800', href: '/district/town/kosiv/' },
        { id: 's3', title: 'Об\'єкт купівлі-продажу - Квартира, $75000', href: '/district/town/kosiv/' },
      ],
      totalCount: 25,
    },
    {
      slug: 'nadvirna',
      name: 'Надвірна',
      image: 'https://www.realestate.if.ua/assets/images/locations/nadvirna.jpg',
      listings: [
        { id: 'n1', title: 'Будинок 120 м², ₴5 007 000', href: '/district/town/nadvirna/' },
        { id: 'n2', title: 'Квартира 60 м², ₴1 258 000', href: '/district/town/nadvirna/' },
        { id: 'n3', title: 'Об\'єкт купівлі-продажу - Будинок, $95000', href: '/district/town/nadvirna/' },
      ],
      totalCount: 37,
    },
    {
      slug: 'rohatyn',
      name: 'Рогатин',
      image: 'https://www.realestate.if.ua/assets/images/locations/rohatyn.jpg',
      listings: [
        { id: 't1', title: 'Будинок 61 м², ₴565 650', href: '/district/town/rohatyn/' },
        { id: 't2', title: 'Будинок 70 м², ₴691 350', href: '/district/town/rohatyn/' },
        { id: 't3', title: 'Об\'єкт купівлі-продажу - Будинок, $79000', href: '/district/town/rohatyn/' },
      ],
      totalCount: 21,
    },
    {
      slug: 'sniatyn',
      name: 'Снятин',
      image: 'https://www.realestate.if.ua/assets/images/locations/sniatyn.jpg',
      listings: [
        { id: 'a1', title: 'Будинок 120 м², ₴1 258 000', href: '/district/town/sniatyn/' },
        { id: 'a2', title: 'Квартира 45 м², ₴754 800', href: '/district/town/sniatyn/' },
        { id: 'a3', title: 'Об\'єкт купівлі-продажу - Будинок, $82000', href: '/district/town/sniatyn/' },
      ],
      totalCount: 41,
    },
    {
      slug: 'tlumach',
      name: 'Тлумач',
      image: 'https://www.realestate.if.ua/assets/images/locations/tlumach.jpg',
      listings: [
        { id: 'u1', title: 'Будинок 88 м², ₴586 600', href: '/district/town/tlumach/' },
        { id: 'u2', title: 'Квартира 50 м², ₴854 800', href: '/district/town/tlumach/' },
        { id: 'u3', title: 'Об\'єкт купівлі-продажу - Будинок, $65000', href: '/district/town/tlumach/' },
      ],
      totalCount: 16,
    },
    {
      slug: 'tysmenytsya',
      name: 'Тисмениця',
      image: 'https://www.realestate.if.ua/assets/images/locations/tysmenytsya.jpg',
      listings: [
        { id: 'v1', title: 'Будинок 114 м², ₴5 363 200', href: '/district/town/tysmenytsya/' },
        { id: 'v2', title: 'Квартира 60 м², ₴1 379 400', href: '/district/town/tysmenytsya/' },
        { id: 'v3', title: 'Об\'єкт купівлі-продажу - Будинок, $110000', href: '/district/town/tysmenytsya/' },
      ],
      totalCount: 29,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Заголовок */}
      <header className="bg-white shadow-sm py-8 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          Нерухомість в містах районного значення
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Оберіть місто, щоб переглянути доступні пропозиції
        </p>
      </header>

      {/* Головний контейнер з відступами — як на всіх основних сторінках */}
      <div className="py-12 px-4 max-w-7xl mx-auto space-y-16">
        {/* Список міст районного значення */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {towns.map((town) => (
            <LocationBlock
              key={town.slug}
              slug={town.slug}
              name={town.name}
              image={town.image}
              listings={town.listings}
              totalCount={town.totalCount}
              baseUrl="/district/town"
            />
          ))}
        </div>
      </div>

      {/* Підвал */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} reifua.vercel.app — Нерухомість у Івано-Франківській області
      </footer>
    </div>
  );
}