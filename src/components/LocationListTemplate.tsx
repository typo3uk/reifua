// /src/components/LocationListTemplate.tsx
import Link from 'next/link';

type Listing = {
  id: string;
  title: string;
  href: string;
};

export type LocationData = {
  slug: string;
  name: string;
  image: string;
  listings: Listing[];
  totalCount: number;
};

type LocationListTemplateProps = {
  title: string;
  description?: string;
  locations: LocationData[];
  baseUrl: string; // наприклад: '/region/city', '/district'
  sectionTitle?: string;
};

export default function LocationListTemplate({
  title,
  description,
  locations,
  baseUrl,
  sectionTitle = 'Нерухомість',
}: LocationListTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Заголовок */}
      <header className="bg-white shadow-sm py-8 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">{description}</p>
        )}
      </header>

      {/* Головний контейнер */}
      <div className="py-12 px-4 max-w-7xl mx-auto space-y-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`${baseUrl}/${loc.slug}/`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <img
                  src={loc.image}
                  alt={`Нерухомість у ${loc.name}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <h3 className="font-semibold text-lg text-gray-800 p-4 border-b bg-gray-50">
                  {sectionTitle} у {loc.name}
                </h3>
                <div className="p-4 pt-0">
                  <p className="text-blue-600 font-medium text-sm">
                    Інші <strong>{loc.totalCount}</strong> пропозицій
                  </p>
                </div>
              </div>
            </Link>
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