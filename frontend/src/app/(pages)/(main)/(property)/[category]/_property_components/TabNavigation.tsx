"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import "swiper/css";
import "swiper/css/navigation";
import { TabProps } from "@/types/types";
import type { Swiper as SwiperType } from "swiper";

const TabNavigation = ({ tabs }: { tabs: TabProps[] }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();

  const activeTab = searchParams.get("tab") || tabs[0].id;

  const handleTabChange = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", id);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="container mx-auto px-4 relative">
        {/* Left Button */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-0 top-1/2 ms-3 -translate-y-1/2 z-50 bg-white shadow-md rounded-full p-2 hover:bg-purple-700 transition group"
          aria-label="Previous tabs"
        >
          <LuChevronLeft className="w-4 h-4 text-gray-600 group-hover:text-white" />
        </button>

        {/* Right Button */}
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-0 top-1/2 me-3 -translate-y-1/2 z-50 bg-white shadow-md rounded-full p-2 hover:bg-purple-700 transition group"
          aria-label="Next tabs"
        >
          <LuChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white" />
        </button>

        <div className="mx-12">
          <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView="auto"
            freeMode
            className="tab-swiper"
          >
            {tabs.map(
              (tab) =>
                tab.show === true && (
                  <SwiperSlide key={tab.id} className={`!w-auto`}>
                    <button
                      onClick={() => handleTabChange(tab.id)}
                      className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                        activeTab === tab.id
                          ? "border-purple-600 text-purple-600"
                          : "border-transparent text-gray-500 hover:text-purple-700 hover:border-purple-300"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
