import Image from "next/image";
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

      <div className="py-12 px-4 max-w-7xl mx-auto">

        {/* --- Міста обласного значення --- */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
            Нерухомість в містах обласного значення
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: 'bolekhiv', name: 'Болехів', count: 19, img: 'https://www.realestate.if.ua/assets/images/locations/bolekhiv.jpg' },
              { slug: 'burshtyn', name: 'Бурштин', count: 26, img: 'https://www.realestate.if.ua/assets/images/locations/burshtyn.jpg' },
              { slug: 'ivano-frankivsk', name: 'Івано-Франківськ', count: 483, img: 'https://www.realestate.if.ua/assets/images/locations/ivano-frankivsk.jpg' },
              { slug: 'kalush', name: 'Калуш', count: 61, img: 'https://www.realestate.if.ua/assets/images/locations/kalush.jpg' },
              { slug: 'kolomyia', name: 'Коломия', count: 86, img: 'https://www.realestate.if.ua/assets/images/locations/kolomyia.jpg' },
              { slug: 'yaremche', name: 'Яремче', count: 37, img: 'https://www.realestate.if.ua/assets/images/locations/yaremche.jpg' }
            ].map((city) => (
              <Link key={city.slug} href="/region/city/" className="block">
                <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 overflow-hidden">
                  <Image src={city.img} width={400} height={300}alt={`Нерухомість у місті ${city.name}`} className="w-full h-48 object-cover rounded-t-lg" priority={false}/>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-3">Нерухомість у місті {city.name}</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Продається будинок, 32.4 м², ₴628 500</li>
                      <li>• Продається будинок, 66.6 м², ₴628 500</li>
                    </ul>
                    <p className="mt-3 text-blue-600 font-medium">
                      Інші <strong>{city.count}</strong> пропозицій
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* --- Міста районного значення --- */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
            Нерухомість в містах районного значення
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: 'dolyna', name: 'Долина', count: 33, img: 'https://www.realestate.if.ua/assets/images/locations/dolyna.jpg' },
              { slug: 'halych', name: 'Галич', count: 21, img: 'https://www.realestate.if.ua/assets/images/locations/halych.jpg' },
              { slug: 'horodenka', name: 'Городенка', count: 25, img: 'https://www.realestate.if.ua/assets/images/locations/horodenka.jpg' },
              { slug: 'kosiv', name: 'Косів', count: 25, img: 'https://www.realestate.if.ua/assets/images/locations/kosiv.jpg' },
              { slug: 'nadvirna', name: 'Надвірна', count: 37, img: 'https://www.realestate.if.ua/assets/images/locations/nadvirna.jpg' },
              { slug: 'rohatyn', name: 'Рогатин', count: 21, img: 'https://www.realestate.if.ua/assets/images/locations/rohatyn.jpg' },
              { slug: 'sniatyn', name: 'Снятин', count: 41, img: 'https://www.realestate.if.ua/assets/images/locations/sniatyn.jpg' },
              { slug: 'tlumach', name: 'Тлумач', count: 16, img: 'https://www.realestate.if.ua/assets/images/locations/tlumach.jpg' },
              { slug: 'tysmenytsya', name: 'Тисмениця', count: 29, img: 'https://www.realestate.if.ua/assets/images/locations/tysmenytsya.jpg' }
            ].map((town) => (
              <Link key={town.slug} href="/district/town/" className="block">
                <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 overflow-hidden">
                  <Image src={town.img} width={400} height={300}alt={`Нерухомість у місті ${town.name}`} className="w-full h-48 object-cover rounded-t-lg" priority={false} />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-3">Нерухомість у місті {town.name}</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Продається квартира, 45.4 м², ₴1 801 700</li>
                      <li>• Продається будинок, 590 м², ₴25 140 000</li>
                    </ul>
                    <p className="mt-3 text-blue-600 font-medium">
                      Інші <strong>{town.count}</strong> пропозицій
                    </p>
                  </div>
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Івано-Франківський',
              'Коломийський',
              'Калуський',
              'Косівський',
              'Надвірнянський',
              'Верховинський',
              'Городенківський',
              'Рожнятівський',
              'Тлумацький',
              'Долинський',
              'Снятинський'
            ].map((district) => (
              <Link key={district} href={`/district/${district.toLowerCase().replace('ій', 'yy')}/`} className="block">
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-center">
                  <h3 className="font-medium text-gray-800">Нерухомість у {district} районі</h3>
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