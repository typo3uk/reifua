// /src/app/district/page.tsx
import Link from 'next/link';

const districts = [
  { slug: 'ivano-frankivskyy', name: 'Івано-Франківський район' },
  { slug: 'kolomyyskyy', name: 'Коломийський район' },
  { slug: 'kaluskyy', name: 'Калуський район' },
  { slug: 'kosivskyy', name: 'Косівський район' },
  { slug: 'nadvirnyanskyy', name: 'Надвірнянський район' },
  { slug: 'verkhovynskyy', name: 'Верховинський район' },
];

export default function DistrictPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-green-50 to-emerald-100 py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Нерухомість в районах Івано-Франківської області
        </h1>
        <p className="mt-4 text-gray-600">
          Оберіть район, щоб переглянути доступні пропозиції
        </p>
      </header>

      <main className="py-10 px-6 max-w-4xl mx-auto space-y-4">
        {districts.map((dist) => (
          <div key={dist.slug} className="border-l-4 border-green-500 pl-4 py-3 bg-gray-50 rounded-r-lg">
            <Link href={`/district/town/${dist.slug}`} className="text-lg font-medium text-gray-800 hover:underline">
              Нерухомість у {dist.name}
            </Link>
          </div>
        ))}
      </main>

      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} reifua.vercel.app — Нерухомість у Івано-Франківській області
      </footer>
    </div>
  );
}