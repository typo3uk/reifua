// src/app/page.tsx
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
  {
    slug: 'burshtyn',
    name: 'Бурштин',
    image: 'https://www.realestate.if.ua/assets/images/locations/burshtyn.jpg',
    listings: [
      { id: 'b1', title: 'Продаж будинку 112 м², ₴921 800', href: '/region/city/burshtyn/#listing-1' },
      { id: 'b2', title: 'Квартира 87 м², ₴1 759 800', href: '/region/city/burshtyn/#listing-2' },
      { id: 'b3', title: 'Об\'єкт купівлі-продажу - Будинок, $79000', href: '/region/city/burshtyn/#listing-3' },
    ],
    totalCount: 26,
  },
  {
    slug: 'ivano-frankivsk',
    name: 'Івано-Франківськ',
    image: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivsk.jpg',
    listings: [
      { id: 'i1', title: 'Квартира 45.4 м², ₴1 801 700', href: '/region/city/ivano-frankivsk/#listing-1' },
      { id: 'i2', title: 'Будинок 590 м², ₴25 140 000', href: '/region/city/ivano-frankivsk/#listing-2' },
      { id: 'i3', title: 'Об\'єкт купівлі-продажу - Квартира, $45000', href: '/region/city/ivano-frankivsk/#listing-3' },
    ],
    totalCount: 483,
  },
  {
    slug: 'kalush',
    name: 'Калуш',
    image: 'https://www.realestate.if.ua/assets/images/locations/kalush.jpg',
    listings: [
      { id: 'k1', title: 'Будинок 119 м², ₴3 310 100', href: '/region/city/kalush/#listing-1' },
      { id: 'k2', title: 'Будинок 147 м², ₴1 257 000', href: '/region/city/kalush/#listing-2' },
      { id: 'k3', title: 'Об\'єкт купівлі-продажу - Будинок, $85000', href: '/region/city/kalush/#listing-3' },
    ],
    totalCount: 61,
  },
  {
    slug: 'kolomyia',
    name: 'Коломия',
    image: 'https://www.realestate.if.ua/assets/images/locations/kolomyia.jpg',
    listings: [
      { id: 'o1', title: 'Будинок 122 м², ₴5 447 000', href: '/region/city/kolomyia/#listing-1' },
      { id: 'o2', title: 'Квартира 81 м², ₴2 095 000', href: '/region/city/kolomyia/#listing-2' },
      { id: 'o3', title: 'Об\'єкт купівлі-продажу - Будинок, $135000', href: '/region/city/kolomyia/#listing-3' },
    ],
    totalCount: 86,
  },
  {
    slug: 'yaremche',
    name: 'Яремче',
    image: 'https://www.realestate.if.ua/assets/images/locations/yaremche.jpg',
    listings: [
      { id: 'y1', title: 'Земельна ділянка 1191 м², ₴3 992 232', href: '/region/city/yaremche/#listing-1' },
      { id: 'y2', title: 'Будинок 90 м², ₴6 704 000', href: '/region/city/yaremche/#listing-2' },
      { id: 'y3', title: 'Об\'єкт купівлі-продажу - Земельна ділянка, $95000', href: '/region/city/yaremche/#listing-3' },
    ],
    totalCount: 37,
  },
];

// --- Міста районного значення ---
const towns = [
  {
    slug: 'dolyna',
    name: 'Долина',
    image: 'https://www.realestate.if.ua/assets/images/locations/dolyna.jpg',
    listings: [
      { id: 'd1', title: 'Будинок 54 м², ₴754 200', href: '/district/town/dolyna/#listing-1' },
      { id: 'd2', title: 'Будинок 86 м², ₴957 800', href: '/district/town/dolyna/#listing-2' },
      { id: 'd3', title: 'Об\'єкт купівлі-продажу - Будинок, $75000', href: '/district/town/dolyna/#listing-3' },
    ],
    totalCount: 33,
  },
  {
    slug: 'halych',
    name: 'Галич',
    image: 'https://www.realestate.if.ua/assets/images/locations/halych.jpg',
    listings: [
      { id: 'h1', title: 'Квартира 57 м², ₴1 019 400', href: '/district/town/halych/#listing-1' },
      { id: 'h2', title: 'Частина будинку 60 м², ₴252 600', href: '/district/town/halych/#listing-2' },
      { id: 'h3', title: 'Об\'єкт купівлі-продажу - Квартира, $55000', href: '/district/town/halych/#listing-3' },
    ],
    totalCount: 21,
  },
  {
    slug: 'horodenka',
    name: 'Городенка',
    image: 'https://www.realestate.if.ua/assets/images/locations/horodenka.jpg',
    listings: [
      { id: 'r1', title: 'Будинок 100 м², ₴1 054 000', href: '/district/town/horodenka/#listing-1' },
      { id: 'r2', title: 'Квартира 75 м², ₴1 418 500', href: '/district/town/horodenka/#listing-2' },
      { id: 'r3', title: 'Об\'єкт купівлі-продажу - Будинок, $88000', href: '/district/town/horodenka/#listing-3' },
    ],
    totalCount: 25,
  },
  {
    slug: 'kosiv',
    name: 'Косів',
    image: 'https://www.realestate.if.ua/assets/images/locations/kosiv.jpg',
    listings: [
      { id: 's1', title: 'Квартира 45 м², ₴854 800', href: '/district/town/kosiv/#listing-1' },
      { id: 's2', title: 'Частина будинку 110 м², ₴3 854 800', href: '/district/town/kosiv/#listing-2' },
      { id: 's3', title: 'Об\'єкт купівлі-продажу - Квартира, $75000', href: '/district/town/kosiv/#listing-3' },
    ],
    totalCount: 25,
  },
  {
    slug: 'nadvirna',
    name: 'Надвірна',
    image: 'https://www.realestate.if.ua/assets/images/locations/nadvirna.jpg',
    listings: [
      { id: 'n1', title: 'Будинок 120 м², ₴5 007 000', href: '/district/town/nadvirna/#listing-1' },
      { id: 'n2', title: 'Квартира 60 м², ₴1 258 000', href: '/district/town/nadvirna/#listing-2' },
      { id: 'n3', title: 'Об\'єкт купівлі-продажу - Будинок, $95000', href: '/district/town/nadvirna/#listing-3' },
    ],
    totalCount: 37,
  },
  {
    slug: 'rohatyn',
    name: 'Рогатин',
    image: 'https://www.realestate.if.ua/assets/images/locations/rohatyn.jpg',
    listings: [
      { id: 't1', title: 'Будинок 61 м², ₴565 650', href: '/district/town/rohatyn/#listing-1' },
      { id: 't2', title: 'Будинок 70 м², ₴691 350', href: '/district/town/rohatyn/#listing-2' },
      { id: 't3', title: 'Об\'єкт купівлі-продажу - Будинок, $79000', href: '/district/town/rohatyn/#listing-3' },
    ],
    totalCount: 21,
  },
  {
    slug: 'sniatyn',
    name: 'Снятин',
    image: 'https://www.realestate.if.ua/assets/images/locations/sniatyn.jpg',
    listings: [
      { id: 'a1', title: 'Будинок 120 м², ₴1 258 000', href: '/district/town/sniatyn/#listing-1' },
      { id: 'a2', title: 'Квартира 45 м², ₴754 800', href: '/district/town/sniatyn/#listing-2' },
      { id: 'a3', title: 'Об\'єкт купівлі-продажу - Будинок, $82000', href: '/district/town/sniatyn/#listing-3' },
    ],
    totalCount: 41,
  },
  {
    slug: 'tlumach',
    name: 'Тлумач',
    image: 'https://www.realestate.if.ua/assets/images/locations/tlumach.jpg',
    listings: [
      { id: 'u1', title: 'Будинок 88 м², ₴586 600', href: '/district/town/tlumach/#listing-1' },
      { id: 'u2', title: 'Квартира 50 м², ₴854 800', href: '/district/town/tlumach/#listing-2' },
      { id: 'u3', title: 'Об\'єкт купівлі-продажу - Будинок, $65000', href: '/district/town/tlumach/#listing-3' },
    ],
    totalCount: 16,
  },
  {
    slug: 'tysmenytsya',
    name: 'Тисмениця',
    image: 'https://www.realestate.if.ua/assets/images/locations/tysmenytsya.jpg',
    listings: [
      { id: 'v1', title: 'Будинок 114 м², ₴5 363 200', href: '/district/town/tysmenytsya/#listing-1' },
      { id: 'v2', title: 'Квартира 60 м², ₴1 379 400', href: '/district/town/tysmenytsya/#listing-2' },
      { id: 'v3', title: 'Об\'єкт купівлі-продажу - Будинок, $110000', href: '/district/town/tysmenytsya/#listing-3' },
    ],
    totalCount: 29,
  },
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
  {
    slug: 'kaluskyy',
    name: 'Калуський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kaluskyy.jpg',
    listings: [
      { id: 'l1', title: 'Будинок 76.6 м², ₴1 047 500', href: '/district/kaluskyy/#listing-1' },
      { id: 'l2', title: 'Будинок 150 м², ₴1 965 110', href: '/district/kaluskyy/#listing-2' },
      { id: 'l3', title: 'Будинок 212 м², ₴2 349 200', href: '/district/kaluskyy/#listing-3' },
    ],
    totalCount: 46,
  },
  {
    slug: 'kolomyyskyy',
    name: 'Коломийський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kolomyyskyy.jpg',
    listings: [
      { id: 'm1', title: 'Будинок 210 м², ₴1 671 810', href: '/district/kolomyyskyy/#listing-1' },
      { id: 'm2', title: 'Будинок 78 м², ₴1 257 000', href: '/district/kolomyyskyy/#listing-2' },
      { id: 'm3', title: 'Об\'єкт купівлі-продажу - Будинок, $39900', href: '/district/kolomyyskyy/#listing-3' },
    ],
    totalCount: 86,
  },
  {
    slug: 'kosivskyy',
    name: 'Косівський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/kosivskyy.jpg',
    listings: [
      { id: 's1', title: 'Будинок 120 м², ₴1 854 800', href: '/district/kosivskyy/#listing-1' },
      { id: 's2', title: 'Квартира 60 м², ₴1 258 000', href: '/district/kosivskyy/#listing-2' },
      { id: 's3', title: 'Об\'єкт купівлі-продажу - Будинок, $35000', href: '/district/kosivskyy/#listing-3' },
    ],
    totalCount: 20,
  },
  {
    slug: 'nadvirnyanskyy',
    name: 'Надвірнянський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/nadvirnyanskyy.jpg',
    listings: [
      { id: 'n1', title: 'Будинок 134 м², ₴2 011 200', href: '/district/nadvirnyanskyy/#listing-1' },
      { id: 'n2', title: 'Квартири від ₴3 980 500', href: '/district/nadvirnyanskyy/#listing-2' },
      { id: 'n3', title: 'Об\'єкт купівлі-продажу - Будинок, $48000', href: '/district/nadvirnyanskyy/#listing-3' },
    ],
    totalCount: 37,
  },
  {
    slug: 'verkhovynskyy',
    name: 'Верховинський район',
    image: 'https://www.realestate.if.ua/assets/images/locations/verkhovynskyy.jpg',
    listings: [
      { id: 'v1', title: 'Будинок 1500 м², ₴58 660 000', href: '/district/verkhovynskyy/#listing-1' },
      { id: 'v2', title: 'Нежитлове приміщення 195 м², ₴1 131 300', href: '/district/verkhovynskyy/#listing-2' },
      { id: 'v3', title: 'Об\'єкт купівлі-продажу - Будинок, $1400000', href: '/district/verkhovynskyy/#listing-3' },
    ],
    totalCount: 37,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Заголовок */}
      <header className="bg-white shadow-sm py-8 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          Оголошення про продаж і оренду нерухомого майна
          <br />
          <span className="text-blue-600">в містах та районах Івано-Франківської області</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Виберіть місцевість, де б ви хотіли знайти, купити чи продати нерухомість або побудувати чи просто зробити ремонт і облаштувати свою оселю
        </p>
      </header>

      <div className="py-12 px-4 max-w-7xl mx-auto space-y-16">

        {/* --- Міста обласного значення --- */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
            Нерухомість в містах обласного значення
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

        {/* --- Міста районного значення --- */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
            Нерухомість в містах районного значення
          </h2>
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
        </section>

        {/* --- Райони області --- */}
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

      </div>

      {/* Підвал */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} reifua.vercel.app — Нерухомість у Івано-Франківській області
      </footer>
    </div>
  );
}