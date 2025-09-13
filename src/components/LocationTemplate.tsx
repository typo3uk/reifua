// /src/components/LocationTemplate.tsx
import Link from 'next/link';
import LocationBlock from './LocationBlock'; // Імпортуємо LocationBlock

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

type LayoutSection = {
  title: string;
  description?: string;
  locations: LocationData[];
  baseUrl: string;
};

type LayoutTemplateProps = {
  title: string;
  description?: string;
  sections: LayoutSection[];
};

export default function LocationTemplate({ title, description, sections }: LayoutTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Заголовок сторінки */}
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
        {sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
              {section.title}
            </h2>
            {section.description && (
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
                {section.description}
              </p>
            )}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {section.locations.map((loc) => (
                <LocationBlock
                  key={loc.slug}
                  slug={loc.slug}
                  name={loc.name}
                  image={loc.image}
                  listings={loc.listings}
                  totalCount={loc.totalCount}
                  baseUrl={section.baseUrl}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Підвал */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} reifua.vercel.app — Нерухомість у Івано-Франківській області
      </footer>
    </div>
  );
}