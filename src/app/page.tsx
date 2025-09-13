// /src/app/page.tsx
import LocationBlock from '@/components/LocationBlock';

// --- Міста обласного значення ---
const citiesRegional = [
  {
    slug: 'bolekhiv',
    name: 'Болехів',
    image: 'https://www.realestate.if.ua/assets/images/locations/bolekhiv.jpg',
    listings: [],
    totalCount: 19,
  },
  {
    slug: 'burshtyn',
    name: 'Бурштин',
    image: 'https://www.realestate.if.ua/assets/images/locations/burshtyn.jpg',
    listings: [],
    totalCount: 26,
  },
  {
    slug: 'ivano-frankivsk',
    name: 'Івано-Франківськ',
    image: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivsk.jpg',
    listings: [],
    totalCount: 483,
  },
  {
    slug: 'kalush',
    name: 'Калуш',
    image: 'https://www.realestate.if.ua/assets/images/locations/kalush.jpg',
    listings: [],
    totalCount: 61,
  },
  {
    slug: 'kolomyia',
    name: 'Коломия',
    image: 'https://www.realestate.if.ua/assets/images/locations/kolomyia.jpg',
    listings: [],
    totalCount: 86,
  },
  {
    slug: 'yaremche',
    name: 'Яремче',
    image: 'https://www.realestate.if.ua/assets/images/locations/yaremche.jpg',
    listings: [],
    totalCount: 37,
  },
];

// --- Міста районного значення ---
const townsDistrict = [
  {
    slug: 'dolyna',
    name: 'Долина',
    image: 'https://www.realestate.if.ua/assets/images/locations/dolyna.jpg',
    listings: [],
    totalCount: 33,
  },
  {
    slug: 'halych',
    name: 'Галич',
    image: 'https://www.realestate.if.ua/assets/images/locations/halych.jpg',
    listings: [],
    totalCount: 21,
  },
  {
    slug: 'horodenka',
    name: 'Городенка',
    image: 'https://www.realestate.if.ua/assets/images/locations/horodenka.jpg',
    listings: [],
    totalCount: 25,
  },
  {
    slug: 'kosiv',
    name: 'Косів',
    image: 'https://www.realestate.if.ua/assets/images/locations/kosiv.jpg',
    listings: [],
    totalCount: 25,
  },
  {
    slug: 'nadvirna',
    name: 'Надвірна',
    image: 'https://www.realestate.if.ua/assets/images/locations/nadvirna.jpg',
    listings: [],
    totalCount: 37,
  },
  {
    slug: 'rohatyn',
    name: 'Рогатин',
    image: 'https://www.realestate.if.ua/assets/images/locations/rohatyn.jpg',
    listings: [],
    totalCount: 21,
  },
  {
    slug: 'sniatyn',
    name: 'Снятин',
    image: 'https://www.realestate.if.ua/assets/images/locations/sniatyn.jpg',
    listings: [],
    totalCount: 41,
  },
  {
    slug: 'tlumach',
    name: 'Тлумач',
    image: 'https://www.realestate.if.ua/assets/images/locations/tlumach.jpg',
    listings: [],
    totalCount: 16,
  },
  {
    slug: 'tysmenytsya',
    name: 'Тисмениця',
    image: 'https://www.realestate.if.ua/assets/images/locations/tysmenytsya.jpg',
    listings: [],
    totalCount: 29,
  },
];

// --- Райони області ---
const districts = [
  {
    slug: 'ivano-frankivskyy',
    name: 'Івано-Франківський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivskyy.jpg',
    listings: [],
    totalCount: 75,
  },
  {
    slug: 'kaluskyy',
    name: 'Калуський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kaluskyy.jpg',
    listings: [],
    totalCount: 46,
  },
  {
    slug: 'kolomyyskyy',
    name: 'Коломийський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kolomyyskyy.jpg',
    listings: [],
    totalCount: 86,
  },
  {
    slug: 'kosivskyy',
    name: 'Косівський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kosivskyy.jpg',
    listings: [],
    totalCount: 20,
  },
  {
    slug: 'nadvirnyanskyy',
    name: 'Надвірнянський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/nadvirnyanskyy.jpg',
    listings: [],
    totalCount: 37,
  },
  {
    slug: 'verkhovynskyy',
    name: 'Верховинський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/verkhovynskyy.jpg',
    listings: [],
    totalCount: 37,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 max-w-7xl mx-auto space-y-16">
      {/* Заголовок */}
      <header className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          Оголошення про продаж і оренду нерухомого майна
          <br />
          <span className="text-blue-600">в містах та районах Івано-Франківської області</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Виберіть місцевість, де б ви хотіли знайти, купити чи продати нерухомість
        </p>
      </header>

      {/* Секція: Міста обласного значення */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
          Нерухомість в містах обласного значення
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {citiesRegional.map((city) => (
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

      {/* Секція: Міста районного значення */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
          Нерухомість в містах районного значення
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {townsDistrict.map((town) => (
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
      </section>

      {/* Секція: Райони */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
          Нерухомість в районах Івано-Франківської області
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

      {/* Підвал */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm rounded-t-lg mt-16">
        &copy; {new Date().getFullYear()} reifua.vercel.app — Нерухомість у Івано-Франківській області
      </footer>
    </div>
  );
}