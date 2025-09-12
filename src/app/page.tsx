import LocationBlock from '@/components/LocationBlock';

// Дані про міста
const cities = [
  {
    slug: 'ivano-frankivsk',
    name: 'Івано-Франківськ',
    image: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivsk.jpg',
    listings: [
      {
        id: '1',
        title: 'Продається квартира 45.4 м², 1 801 700 ₴',
        href: '/region/city/ivano-frankivsk/#listing-123',
      },
      {
        id: '2',
        title: 'Продається будинок 590 м², 25 140 000 ₴',
        href: '/region/city/ivano-frankivsk/#listing-124',
      },
      {
        id: '3',
        title: 'Продаю комерційне приміщення, 12 500 000 ₴',
        href: '/region/city/ivano-frankivsk/#listing-125',
      },
    ],
    totalCount: 483,
  },
  // ... інші міста
];

// У розмітці:
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