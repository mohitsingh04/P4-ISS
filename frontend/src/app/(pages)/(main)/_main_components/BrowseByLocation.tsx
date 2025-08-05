import {
  PropertyProps,
  SimpleLocationProps,
  TopLocationProps,
} from "@/types/types";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { LuBuilding2 } from "react-icons/lu";

export default function BrowseByLocation({
  unqieLocations,
  properties,
}: {
  unqieLocations: SimpleLocationProps[];
  properties: PropertyProps[];
}) {
  // location section
  const locationsImages = [
    "/images/bbl1.jpg",
    "/images/bbl2.jpg",
    "/images/bbl3.jpg",
    "/images/bbl4.jpg",
    "/images/bbl5.jpg",
    "/images/bbl6.jpg",
    "/images/bbl7.jpg",
    "/images/bbl8.jpg",
  ];

  const propertyCountMap: Record<string, number> = properties.reduce(
    (acc, property) => {
      const city = property.property_city;
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const locationsWithCount: TopLocationProps[] = unqieLocations
    .filter((loc): loc is SimpleLocationProps => !!loc.city)
    .map((loc) => ({
      city: loc.city!,
      state: loc.state,
      country: loc.country,
      count: propertyCountMap[loc.city!] || 0,
    }));

  const topLocations: TopLocationProps[] = locationsWithCount
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return (
    <section className="pt-16 pb-30 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">
        Browse by <span className="text-purple-600">Location</span>
      </h2>
      <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
        Photography spots in {"India`s"} most breathtaking travel destinations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 cursor-pointer gap-6 max-w-6xl mx-auto">
        {topLocations?.map((location, index) => (
          <Link
            href={`/yoga-institutes?country=${location.country}&state=${location.state}&city=${location.city}`}
            key={index}
            className="relative overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative w-full h-56 group">
              <Image
                src={locationsImages[index]}
                alt={location.city}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent px-4 py-4 text-left">
              <h3 className="text-white font-semibold text-lg">
                {location.city}
              </h3>
              <p className="text-gray-300 text-sm">{location.country}</p>
              <div className="text-gray-300 text-sm flex items-center gap-2 mt-1">
                <LuBuilding2 className="h-4 w-4 text-gray-300" />
                <span>{location?.count}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
