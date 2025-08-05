"use client";

import { useState, useCallback, useEffect } from "react";
import { Briefcase } from "lucide-react";
import SearchSidebar from "./SearchSidebar";
import JobsList from "./JobsList";
import { API } from "../../context/API";
import { useRouter, useSearchParams } from "next/navigation";
import Banner from "./Banner";

export default function HomeClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    search: searchParams?.get("search") || "",
    experience:
      searchParams?.get("experience")?.split(",").filter(Boolean) || [],
    jobType: searchParams?.get("jobType")?.split(",").filter(Boolean) || [],
    city: searchParams?.get("city")?.split(",").filter(Boolean) || [],
    state: searchParams?.get("state")?.split(",").filter(Boolean) || [],
    country: searchParams?.get("country")?.split(",").filter(Boolean) || [],
    salary: searchParams?.get("salary")?.split(",").filter(Boolean) || [],
    skills: searchParams?.get("skills")?.split(",").filter(Boolean) || [],
    category: searchParams?.get("category")?.split(",").filter(Boolean) || [],
    qualifications:
      searchParams?.get("qualifications")?.split(",").filter(Boolean) || [],
    location: searchParams?.get("location") || "",
  });

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getJobs = useCallback(async () => {
    setIsLoading(true);
    try {
      const [hiringResponse, propertyResponse, locationResponse] =
        await Promise.all([
          API.get(`/hiring`),
          API.get(`/property`),
          API.get(`/locations`),
        ]);

      const hiringData = hiringResponse.data;
      const propertyData = propertyResponse.data;
      const locationData = locationResponse.data;

      const propertyMap = propertyData.reduce((acc, property) => {
        acc[property.uniqueId] = property;
        return acc;
      }, {});

      const locationMap = locationData.reduce((acc, location) => {
        acc[location.property_id] = location;
        return acc;
      }, {});

      const enrichedHiringData = hiringData.map((hiring) => ({
        ...hiring,
        property_name: propertyMap[hiring.property_id]?.property_name || null,
        property_address:
          locationMap[hiring.property_id]?.property_address || null,
        property_city: locationMap[hiring.property_id]?.property_city || null,
        property_state: locationMap[hiring.property_id]?.property_state || null,
        property_country:
          locationMap[hiring.property_id]?.property_country || null,
        property_logo: propertyMap[hiring.property_id]?.property_logo || null,
      }));

      const now = new Date();

      const filteredData = enrichedHiringData.filter((item) => {
        if (!item.end_date) {
          return item.status === "Active";
        }
        const endDate = new Date(item.end_date);
        return item.status === "Active" && endDate > now;
      });

      setJobs(filteredData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  useEffect(() => {
    const updateSearchParams = () => {
      const params = new URLSearchParams();

      if (filters.search) params.set("search", filters.search);

      Object.entries(filters).forEach(([key, value]) => {
        if (key !== "search" && Array.isArray(value) && value.length > 0) {
          params.set(key, value.join(","));
        }
      });

      const url = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, "", url);
    };

    updateSearchParams();
  }, [filters]);

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const activeFilters = Object.entries(filters).reduce((acc, [key, value]) => {
    if (key === "search" && value) {
      acc.push(`Search: ${value}`);
    } else if (Array.isArray(value) && value.length > 0) {
      acc.push(...value);
    }
    return acc;
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner component with search functionality */}
      <Banner filters={filters} setFilters={setFilters} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <span
                key={filter}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800 transition-all hover:bg-purple-200"
              >
                {filter}
              </span>
            ))}
          </div>
        )}

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowMobileFilters(true)}
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-center transition-colors"
            >
              <Briefcase size={16} className="mr-2" />
              Filters
            </button>
          </div>

          <div
            className={`
            lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300
            ${
              showMobileFilters
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }
          `}
          >
            <div
              className={`
              fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out
              ${showMobileFilters ? "translate-x-0" : "-translate-x-full"}
            `}
            >
              <div className="h-full overflow-y-auto">
                <div className="p-4">
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="mb-4 text-gray-500 hover:text-gray-700 font-medium flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Close Filters
                  </button>
                  <SearchSidebar
                    jobs={jobs}
                    filters={filters}
                    setFilters={setFilters}
                    closeModal={() => setShowMobileFilters(false)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:block lg:col-span-1">
            <SearchSidebar
              jobs={jobs}
              filters={filters}
              setFilters={setFilters}
              className="sticky top-24"
            />
          </div>

          {/* Jobs List */}
          <div className="lg:col-span-3">
            <JobsList jobs={jobs} filters={filters} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}
