"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import { GalleryProps, SlidProps } from "@/types/types";
import Image from "next/image";

const GalleryTab = ({ galleries }: { galleries: GalleryProps[] }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState<SlidProps[]>([]);

  console.log(galleries);

  const baseUrl = process.env.NEXT_PUBLIC_MEDIA_URL;

  const handleImageClick = (galleryImages: string[], i: number) => {
    const slides = galleryImages
      .filter((img) => img.endsWith(".webp"))
      .map((img) => ({
        src: `${baseUrl}/${img}`,
        alt: img,
        title: img.split("/").pop(),
      }));
    setCurrentSlides(slides);
    setIndex(i);
    setOpen(true);
  };

  const hasWebpImages = galleries?.some((galleryGroup) =>
    galleryGroup.gallery?.some((img: string) => img.endsWith(".webp"))
  );

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Institute Gallery
        </h2>
        <p className="text-gray-600">Take a visual tour of our facilities</p>
      </div>

      {hasWebpImages ? (
        galleries.map((galleryGroup, gIndex) => {
          const webpImages =
            galleryGroup.gallery?.filter((img: string) =>
              img.endsWith(".webp")
            ) || [];
          if (webpImages.length === 0) return null;

          return (
            <div key={gIndex} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {galleryGroup.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {webpImages.map((img: string, i: number) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden shadow rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick(webpImages, i)}
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
            </div>
          );
        })
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No gallery images found at the moment. Please check back later!
          </p>
        </div>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={currentSlides}
        plugins={[Thumbnails, Zoom, Fullscreen, Slideshow, Counter]}
      />
    </div>
  );
};

export default GalleryTab;
