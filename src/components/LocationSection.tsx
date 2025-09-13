// /src/components/LocationSection.tsx
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

type LocationSectionProps = {
  title: string;
  description?: string;
  locations: LocationData[];
  baseUrl: string;
  sectionTitle?: string; // наприклад: "Нерухомість у місті"
};

export default function LocationSection({
  title,
  description,
  locations,
  baseUrl,
  sectionTitle = 'Нерухомість',
}: LocationSectionProps) {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto space-y-16">
      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
          {title}
        </h2>

        {description && (
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            {description}
          </p>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <Link key={loc.slug} href={`${baseUrl}/${loc.slug}/`} className="block">
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
      </section>
    </div>
  );
}