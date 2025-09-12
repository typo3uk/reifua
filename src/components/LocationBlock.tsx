// /src/components/LocationBlock.tsx
import Image from 'next/image';
import Link from 'next/link';

type Listing = {
  id: string;
  title: string;
  href: string;
};

type LocationBlockProps = {
  slug: string;
  name: string;
  image: string;
  listings: Listing[];
  totalCount: number;
  baseUrl: string; // Наприклад: '/region/city', '/district/town', '/district'
};

export default function LocationBlock({
  slug,
  name,
  image,
  listings,
  totalCount,
  baseUrl,
}: LocationBlockProps) {
  const pageUrl = `${baseUrl}/${slug}/`;

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Фото + заголовок — одне посилання */}
      <Link href={pageUrl}>
        <Image
          src={image}
          alt={`Нерухомість у місті ${name}`}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <h3 className="font-semibold text-lg text-gray-800 p-4 border-b bg-gray-50">
          Нерухомість у місті {name}
        </h3>
      </Link>

      {/* Останні 3 об'єкти */}
      <div className="p-4 space-y-3">
        {listings.slice(0, 3).map((listing) => (
          <div key={listing.id} className="text-sm">
            <Link
              href={listing.href}
              className="text-gray-700 leading-relaxed hover:text-blue-600 block"
            >
              {listing.title}
            </Link>
          </div>
        ))}
      </div>

      {/* Кнопка "Інші X пропозицій" */}
      <div className="p-4 pt-0">
        <Link
          href={pageUrl}
          className="text-blue-600 font-medium text-sm hover:underline"
        >
          Інші <strong>{totalCount}</strong> пропозицій
        </Link>
      </div>
    </div>
  );
}