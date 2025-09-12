// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

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

      <div className="py-12 px-4 max-w-7xl mx-auto space-y-12">

        {/* --- Міста обласного значення --- */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
            Нерухомість в містах обласного значення
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: 'bolekhiv', name: 'Болехів', img: 'https://www.realestate.if.ua/assets/images/locations/bolekhiv.jpg', count: 19 },
              { slug: 'burshtyn', name: 'Бурштин', img: 'https://www.realestate.if.ua/assets/images/locations/burshtyn.jpg', count: 26 },
              { slug: 'ivano-frankivsk', name: 'Івано-Франківськ', img: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivsk.jpg', count: 483 },
              { slug: 'kalush', name: 'Калуш', img: 'https://www.realestate.if.ua/assets/images/locations/kalush.jpg', count: 61 },
              { slug: 'kolomyia', name: 'Коломия', img: 'https://www.realestate.if.ua/assets/images/locations/kolomyia.jpg', count: 86 },
              { slug: 'yaremche', name: 'Яремче', img: 'https://www.realestate.if.ua/assets/images/locations/yaremche.jpg', count: 37 }
            ].map((city) => (
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

        {/* --- Міста районного значення --- */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
            Нерухомість в містах районного значення
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: 'dolyna', name: 'Долина', img: 'https://www.realestate.if.ua/assets/images/locations/dolyna.jpg', count: 33 },
              { slug: 'halych', name: 'Галич', img: 'https://www.realestate.if.ua/assets/images/locations/halych.jpg', count: 21 },
              { slug: 'horodenka', name: 'Городенка', img: 'https://www.realestate.if.ua/assets/images/locations/horodenka.jpg', count: 25 },
              { slug: 'kosiv', name: 'Косів', img: 'https://www.realestate.if.ua/assets/images/locations/kosiv.jpg', count: 25 },
              { slug: 'nadvirna', name: 'Надвірна', img: 'https://www.realestate.if.ua/assets/images/locations/nadvirna.jpg', count: 37 },
              { slug: 'rohatyn', name: 'Рогатин', img: 'https://www.realestate.if.ua/assets/images/locations/rohatyn.jpg', count: 21 },
              { slug: 'sniatyn', name: 'Снятин', img: 'https://www.realestate.if.ua/assets/images/locations/sniatyn.jpg', count: 41 },
              { slug: 'tlumach', name: 'Тлумач', img: 'https://www.realestate.if.ua/assets/images/locations/tlumach.jpg', count: 16 },
              { slug: 'tysmenytsya', name: 'Тисмениця', img: 'https://www.realestate.if.ua/assets/images/locations/tysmenytsya.jpg', count: 29 }
            ].map((town) => (
              <Link key={town.slug} href={`/district/town/${town.slug}/`} className="block">
                <Image
                  src={town.img}
                  alt={`Нерухомість у місті ${town.name}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
                <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-b-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Нерухомість у місті {town.name}</h3>
                  <p className="text-blue-600 font-medium">
                    Інші <strong>{town.count}</strong> пропозицій
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* --- Райони області --- */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
            Нерухомість в районах Івано-Франківської області
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: 'ivano-frankivskyy', name: 'Івано-Франківський район', img: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivskyy.jpg', count: 75 },
              { slug: 'kaluskyy', name: 'Калуський район', img: 'https://www.realestate.if.ua/assets/images/locations/kaluskyy.jpg', count: 46 },
              { slug: 'kolomyyskyy', name: 'Коломийський район', img: 'https://www.realestate.if.ua/assets/images/locations/kolomyyskyy.jpg', count: 86 },
              { slug: 'kosivskyy', name: 'Косівський район', img: 'https://www.realestate.if.ua/assets/images/locations/kosivskyy.jpg', count: 20 },
              { slug: 'nadvirnyanskyy', name: 'Надвірнянський район', img: 'https://www.realestate.if.ua/assets/images/locations/nadvirnyanskyy.jpg', count: 37 },
              { slug: 'verkhovynskyy', name: 'Верховинський район', img: 'https://www.realestate.if.ua/assets/images/locations/verkhovynskyy.jpg', count: 37 }
            ].map((dist) => (
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