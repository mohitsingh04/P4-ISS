"use client";
import API from "@/contexts/API";
import { generateSlug } from "@/contexts/Callbacks";
import { CategoryProps, LocationProps, PropertyProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

const RelatedInstitutesDetails = ({
  mainProperty,
  category,
}: {
  mainProperty: PropertyProps | null;
  category: CategoryProps[];
}) => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);

  const getCategoryById = useCallback(
    (id: string) => {
      const cat = category?.find((item) => item.uniqueId === Number(id));
      return cat?.category_name;
    },
    [category]
  );

  const getProperties = useCallback(async () => {
    if (!mainProperty) return;

    try {
      const [propertyRes, locationRes] = await Promise.all([
        API.get(`/property`),
        API.get(`/locations`),
      ]);

      const allProperties: PropertyProps[] = propertyRes.data;
      const allLocations: LocationProps[] = locationRes.data;

      const merged = allProperties.map((property) => {
        const locationMatch = allLocations.find(
          (loc) => Number(loc.property_id) === Number(property.uniqueId)
        );

        return {
          ...property,
          category: getCategoryById(property?.category) || "Unknown",
          property_type: getCategoryById(property?.property_type) || "Unknown",
          city: locationMatch?.property_city || "Unknown",
          state: locationMatch?.property_state || "Unknown",
          country: locationMatch?.property_country || "Unknown",
        };
      });

      let selected: PropertyProps[] = [];
      const selectedIds = new Set<number | string>();

      const addProperties = (filterFn: (p: PropertyProps) => boolean) => {
        if (selected.length >= 5) return;
        const needed = 5 - selected.length;

        const filtered = merged
          .filter(
            (p) =>
              filterFn(p) &&
              p.uniqueId !== mainProperty.uniqueId &&
              !selectedIds.has(p.uniqueId)
          )
          .sort(() => 0.5 - Math.random())
          .slice(0, needed);

        filtered.forEach((p) => selectedIds.add(p.uniqueId));
        selected = [...selected, ...filtered];
      };

      addProperties((p) => p.city === mainProperty.property_city);
      addProperties((p) => p.category === mainProperty.category);
      addProperties((p) => p.state === mainProperty.property_state);
      addProperties((p) => p.property_type === mainProperty.property_type);
      addProperties((p) => p.country === mainProperty.property_country);

      if (selected.length < 5) {
        const needed = 5 - selected.length;
        const randomFill = merged
          .filter(
            (p) =>
              p.uniqueId !== mainProperty.uniqueId &&
              !selectedIds.has(p.uniqueId)
          )
          .sort(() => 0.5 - Math.random())
          .slice(0, needed);
        selected = [...selected, ...randomFill];
      }

      setProperties((prev) => {
        if (JSON.stringify(prev) !== JSON.stringify(selected)) {
          return selected;
        }
        return prev;
      });
    } catch (error) {
      console.error(error);
    }
  }, [getCategoryById, mainProperty]);

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-purple-700 mb-4">
        Related Institutes
      </h2>
      <div className="space-y-4">
        {properties?.map((institute) => (
          <div
            key={institute.uniqueId}
            className="flex items-start gap-4 p-4 rounded-lg shadow-xs hover:shadow-sm transition-all hover:shadow-purple-200"
          >
            <Link
              href={`/${generateSlug(institute.category)}/${
                institute?.property_slug
              }`}
              className="block"
            >
              <div className="relative w-16 h-16 rounded-md shadow overflow-hidden">
                <Image
                  src={
                    institute?.property_logo?.[0]
                      ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${institute?.property_logo?.[0]}`
                      : "/images/property_banner.webp"
                  }
                  alt={institute.property_name}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="flex flex-col justify-between">
              <Link
                href={`/${generateSlug(institute.category)}/${
                  institute?.property_slug
                }`}
                className="text-md font-semibold text-gray-900 hover:text-purple-600 transition-all duration-300"
              >
                {institute.property_name}
              </Link>
              {institute?.city !== "Unknown" && (
                <div className="text-sm text-gray-500">{institute.city}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedInstitutesDetails;
