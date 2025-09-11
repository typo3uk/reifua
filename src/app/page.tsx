import Image from "next/image";

// src/app/page.tsx
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

      {/* Нерухомість у містах обласного значення */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
          Нерухомість в містах обласного значення Івано-Франківської області
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Карточка: Болехів */}
          <CityCard
            city="Болехів"
            image="https://www.realestate.if.ua/assets/images/locations/bolekhiv.jpg"
            listings={[
              "Продається будинок 32.4 м², 628 500 ₴",
              "Продається будинок 66.6 м², 628 500 ₴",
            ]}
            count={19}
          />

          {/* Карточка: Бурштин */}
          <CityCard
            city="Бурштин"
            image="https://www.realestate.if.ua/assets/images/locations/burshtyn.jpg"
            listings={[
              "Продаж будинку 112 м², 921 800 ₴",
              "Продаю квартиру 87 м², 1 759 800 ₴",
            ]}
            count={26}
          />

          {/* Карточка: Івано-Франківськ */}
          <CityCard
            city="Івано-Франківськ"
            image="https://www.realestate.if.ua/assets/images/locations/ivano-frankivsk.jpg"
            listings={[
              "Продаж квартири 45.4 м², 1 801 700 ₴",
              "Продається будинок 590 м², 25 140 000 ₴",
            ]}
            count={483}
          />

          {/* Карточка: Калуш */}
          <CityCard
            city="Калуш"
            image="https://www.realestate.if.ua/assets/images/locations/kalush.jpg"
            listings={[
              "Продаю будинок 119 м², 3 310 100 ₴",
              "Продаж будинку 147 м², 1 257 000 ₴",
            ]}
            count={61}
          />

          {/* Карточка: Коломия */}
          <CityCard
            city="Коломия"
            image="https://www.realestate.if.ua/assets/images/locations/kolomyia.jpg"
            listings={[
              "Продаю будинок 122 м², 5 447 000 ₴",
              "Продаж квартири 81 м², 2 095 000 ₴",
            ]}
            count={86}
          />

          {/* Карточка: Яремче */}
          <CityCard
            city="Яремче"
            image="https://www.realestate.if.ua/assets/images/locations/yaremche.jpg"
            listings={[
              "Продаю земельну ділянку 1191 м², 3 992 232 ₴",
              "Продаю будинок 90 м², 6 704 000 ₴",
            ]}
            count={37}
          />
        </div>
      </section>

      {/* Підвал */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} reifua.vercel.app — Нерухомість у Івано-Франківській області
      </footer>
    </div>
  );
}

// Компонент карточки міста
function CityCard({ city, image, listings, count }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <img src={image} alt={`Нерухомість у місті ${city}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-3">Нерухомість у місті {city}</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {listings.map((item, i) => (
            <li key={i} className="before:content-['•'] before:mr-2">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-blue-600 font-medium">
          Інші <strong>{count}</strong> пропозицій
        </p>
      </div>
    </div>
  );
}

/*
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
*/