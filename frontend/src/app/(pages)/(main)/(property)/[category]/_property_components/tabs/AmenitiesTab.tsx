"use client";
import { AmenitiesProps } from "@/types/types";
import React, { useState, useEffect } from "react";
import { LuCircleCheck } from "react-icons/lu";

const AmenitiesTab = ({ amenities }: { amenities: AmenitiesProps }) => {
  const [activeCategory, setActiveCategory] = useState("");
  useEffect(() => {
    if (amenities && Object.keys(amenities).length > 0 && !activeCategory) {
      setActiveCategory(Object.keys(amenities)[0]);
    }
  }, [amenities, activeCategory]);

  if (!amenities || Object.keys(amenities).length === 0) {
    return (
      <div className="p-6 text-center text-gray-500 bg-gray-50 rounded-lg border border-gray-200">
        No amenities available for this accommodation.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Left: Tabs */}
      <div>
        {Object.keys(amenities).map((category) => (
          <div
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer flex justify-between items-center border-b p-4 transition ${
              activeCategory === category
                ? "border-purple-500 shadow-sm"
                : "border-gray-200"
            }`}
          >
            <h3 className="text-base font-semibold text-gray-800">
              {category}
            </h3>
            <p className="text-sm text-gray-500">
              {amenities[category].length}
            </p>
          </div>
        ))}
      </div>

      {/* Right: Facilities */}
      <div className="md:col-span-2 bg-white shadow-md p-6 rounded-xl border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-xl font-semibold text-gray-900">
            {activeCategory}
          </h4>
          <span className="text-sm text-gray-500">
            {amenities[activeCategory]?.length} items
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {amenities[activeCategory]?.map((item, idx) => {
            const key = Object.keys(item)[0];
            const value = item[key];

            return (
              <div
                key={idx}
                className="bg-gray-50 hover:bg-white transition-all border border-gray-200 hover:shadow rounded-lg p-4 flex justify-between items-center"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                  <LuCircleCheck className="w-4 h-4 text-purple-600" />
                  {key}
                </div>

                {/* Value badge(s) */}
                {Array.isArray(value) ? (
                  <div className="flex gap-1 flex-wrap">
                    {value.map((option, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-2 py-0.5 rounded-full text-purple-800 bg-purple-100`}
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                ) : value === true ? null : (
                  <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
                    {String(value)}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesTab;
