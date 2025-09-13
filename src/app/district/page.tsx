// /src/app/district/page.tsx
import LocationTemplate, { LocationData } from '@/components/LocationTemplate';

const districts: LocationData[] = [
  {
    slug: 'ivano-frankivskyy',
    name: 'Івано-Франківський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivskyy.jpg',
    listings: [
      { id: 'f1', title: 'Будинок 25 м², ₴368 720', href: '/district/ivano-frankivskyy/' },
      { id: 'f2', title: 'Квартира 49.1 м², ₴1 550 300', href: '/district/ivano-frankivskyy/' },
      { id: 'f3', title: 'Частина будинку 117 м², ₴2 136 900', href: '/district/ivano-frankivskyy/' },
    ],
    totalCount: 75,
  },
  {
    slug: 'kaluskyy',
    name: 'Калуський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kaluskyy.jpg',
    listings: [
      { id: 'l1', title: 'Будинок 76.6 м², ₴1 047 500', href: '/district/kaluskyy/' },
      { id: 'l2', title: 'Будинок 150 м², ₴1 965 110', href: '/district/kaluskyy/' },
      { id: 'l3', title: 'Будинок 212 м², ₴2 349 200', href: '/district/kaluskyy/' },
    ],
    totalCount: 46,
  },
  {
    slug: 'kolomyyskyy',
    name: 'Коломийський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kolomyyskyy.jpg',
    listings: [
      { id: 'm1', title: 'Будинок 210 м², ₴1 671 810', href: '/district/kolomyyskyy/' },
      { id: 'm2', title: 'Будинок 78 м², ₴1 257 000', href: '/district/kolomyyskyy/' },
      { id: 'm3', title: 'Об\'єкт купівлі-продажу - Будинок, $39900', href: '/district/kolomyyskyy/' },
    ],
    totalCount: 86,
  },
  {
    slug: 'kosivskyy',
    name: 'Косівський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kosivskyy.jpg',
    listings: [
      { id: 's1', title: 'Будинок 120 м², ₴1 854 800', href: '/district/kosivskyy/' },
      { id: 's2', title: 'Квартира 60 м², ₴1 258 000', href: '/district/kosivskyy/' },
      { id: 's3', title: 'Об\'єкт купівлі-продажу - Будинок, $35000', href: '/district/kosivskyy/' },
    ],
    totalCount: 20,
  },
  {
    slug: 'nadvirnyanskyy',
    name: 'Надвірнянський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/nadvirnyanskyy.jpg',
    listings: [
      { id: 'n1', title: 'Будинок 134 м², ₴2 011 200', href: '/district/nadvirnyanskyy/' },
      { id: 'n2', title: 'Квартири від ₴3 980 500', href: '/district/nadvirnyanskyy/' },
      { id: 'n3', title: 'Об\'єкт купівлі-продажу - Будинок, $48000', href: '/district/nadvirnyanskyy/' },
    ],
    totalCount: 37,
  },
  {
    slug: 'verkhovynskyy',
    name: 'Верховинський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/verkhovynskyy.jpg',
    listings: [
      { id: 'v1', title: 'Будинок 1500 м², ₴58 660 000', href: '/district/verkhovynskyy/' },
      { id: 'v2', title: 'Нежитлове приміщення 195 м², ₴1 131 300', href: '/district/verkhovynskyy/' },
      { id: 'v3', title: 'Об\'єкт купівлі-продажу - Будинок, $1400000', href: '/district/verkhovynskyy/' },
    ],
    totalCount: 37,
  },
];

export default function DistrictsPage() {
  return (
    <LocationTemplate
      title="Нерухомість в районах Івано-Франківської області"
      description="Оберіть місцевість для перегляду пропозицій"
      sections={[
        {
          title: 'Нерухомість в районах Івано-Франківської області',
          locations: districts,
          baseUrl: '/district',
        },
      ]}
    />
  );
}