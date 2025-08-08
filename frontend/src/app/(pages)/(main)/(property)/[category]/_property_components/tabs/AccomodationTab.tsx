"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import { AccommodationProps } from "@/types/types";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_MEDIA_URL;

const AccommodationItem = ({ item }: { item: AccommodationProps }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const webpImages =
    item?.accomodation_images?.filter((img) => img.endsWith(".webp")) || [];

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white shadow-sx rounded md:p-10 p-6 mb-10 transition hover:shadow-sm border border-indigo-100">
      <div className="flex justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-800">
          {item?.accomodation_name}
        </h2>
        <p className="text-gray-700 text-lg font-medium mt-2">
          {item?.accomodation_price?.[0]?.DOLLAR
            ? `₹${item.accomodation_price[0].DOLLAR}`
            : "Price not available"}
        </p>
      </div>
      <div
        className="text-gray-600 mt-3"
        dangerouslySetInnerHTML={{
          __html: item?.accomodation_description || "",
        }}
      />

      {/* Gallery */}
      {webpImages.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {webpImages.map((img, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden shadow rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(index)}
            >
              <div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
                <Image
                  src={`${baseUrl}/${img}`}
                  alt={`${item?.accomodation_name} photo ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">
          No images available for this accommodation.
        </p>
      )}

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={selectedIndex}
        slides={webpImages.map((img) => ({
          src: `${baseUrl}/${img}`,
          alt: img,
          title: img.split("/").pop(),
        }))}
        plugins={[Thumbnails, Zoom, Fullscreen, Slideshow, Counter]}
      />
    </div>
  );
};

const AccommodationTab = ({
  accommodations,
}: {
  accommodations: AccommodationProps[];
}) => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-indigo-900">
            Our Accommodations
          </h1>
          <p className="text-gray-600 mt-4 text-lg sm:text-xl">
            Comfortable stays handpicked for your journey
          </p>
        </div>

        {accommodations?.map((item, idx) => (
          <AccommodationItem key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AccommodationTab;
