import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";
import CountUp from "react-countup";

const bannerData = [
  {
    title: "Jobs Available",
    count: 1000,
  },
  {
    title: "Companies",
    count: 500,
  },
  {
    title: "Industries",
    count: 50,
  },
  {
    title: "Successful Placements",
    count: 10000,
  },
];

const Banner = ({ filters, setFilters }) => {
  const [searchInput, setSearchInput] = useState(filters.search);
  const [locationInput, setLocationInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    setFilters((prev) => ({
      ...prev,
      search: searchInput,
      city: locationInput,
    }));
  };

  return (
    <div className="bg-gradient-to-r from-purple-800 to-purple-700 pb-8 pt-16 px-4 sm:px-6 lg:px-8 mb-8 relative overflow-hidden">
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-600 mix-blend-multiply blur-xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-purple-500 mix-blend-multiply blur-xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-purple-500 mix-blend-multiply blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Find Your Dream Job Today
          </h1>
          <p className="text-purple-100 text-lg md:text-xl max-w-2xl mx-auto">
            Discover thousands of job opportunities with all the information you
            need.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 max-w-4xl mx-auto transform transition-all hover:shadow-2xl">
          <form
            className="flex flex-col md:flex-row gap-3"
            onSubmit={handleSearch}
          >
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Job title or company"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="relative md:w-1/3">
              <MapPin
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="City, state, or country"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
            >
              <Search size={20} className="mr-2" />
              Search Jobs
            </button>
          </form>
        </div>
      </div>

      {/* Job stats */}
      <div className="max-w-7xl mx-auto mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bannerData.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4 text-center"
            >
              <p className="text-purple-900 text-2xl font-bold">
                {item?.count > 1999 ? (
                  <>
                    <CountUp end={item?.count / 1000} />
                    K+
                  </>
                ) : (
                  <>
                    <CountUp end={item?.count} />+
                  </>
                )}
              </p>

              <p className="text-purple-400">{item?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
