"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Image from "next/image";

const CertificationTab = ({ images }: { images: string[] }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const baseUrl = process.env.NEXT_PUBLIC_MEDIA_URL;

  const webpImages =
    images?.filter((img) => img.toLowerCase().endsWith(".webp")) || [];

  const slides = webpImages.map((img) => ({
    src: `${baseUrl}/${img}`,
    alt: img,
    title: img.split("/").pop(),
  }));

  const handleImageClick = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Certifications
        </h2>
        <p className="text-gray-600">
          Take a visual tour of our certifications
        </p>
      </div>

      {webpImages.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {webpImages.map((img, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden shadow rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleImageClick(i)}
            >
              <div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
                <Image
                  src={`${baseUrl}/${img}`}
                  alt={img}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No certification images available at the moment.
          </p>
        </div>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Thumbnails, Zoom, Fullscreen, Slideshow, Counter]}
      />
    </div>
  );
};

export default CertificationTab;
