import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const InstituteDetailLoader: React.FC = () => {
  const tabs = [
    "Overview",
    "Exams",
    "Gallery",
    "Accommodation",
    "Amenities",
    "Working Hours",
    "Teachers",
    "Reviews",
  ];

  return (
    <SkeletonTheme>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section - Dark Background */}
        <div className="bg-gray-700 text-white relative">
          {/* Compare Button */}
          <div className="absolute top-4 right-4 z-10">
            <div className="w-20 h-8">
              <Skeleton height={32} />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-start space-x-6">
              {/* Institute Logo */}
              <div className="w-20 h-20 rounded-full bg-white flex-shrink-0">
                <div className="w-full h-full rounded-full">
                  <Skeleton circle width="100%" height="100%" />
                </div>
              </div>

              {/* Institute Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    {/* Institute Name */}
                    <div className="w-full h-10 mb-2">
                      <Skeleton height={40} />
                    </div>
                    {/* Institute Type */}
                    <div className="w-24 h-5">
                      <Skeleton height={20} />
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="flex items-center space-x-8 mt-8">
                  {/* Rating */}
                  <div className="text-center">
                    <div className="w-6 h-6 mx-auto mb-2">
                      <Skeleton width="100%" height="100%" />
                    </div>
                    <div className="w-8 h-6 mx-auto mb-1">
                      <Skeleton height={24} />
                    </div>
                    <div className="w-12 h-4 mx-auto">
                      <Skeleton height={16} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 mx-auto mb-2">
                      <Skeleton width="100%" height="100%" />
                    </div>
                    <div className="w-8 h-6 mx-auto mb-1">
                      <Skeleton height={24} />
                    </div>
                    <div className="w-16 h-4 mx-auto">
                      <Skeleton height={16} />
                    </div>
                  </div>
                  {/* Reviews */}
                  <div className="text-center">
                    <div className="w-6 h-6 mx-auto mb-2">
                      <Skeleton width="100%" height="100%" />
                    </div>
                    <div className="w-8 h-6 mx-auto mb-1">
                      <Skeleton height={24} />
                    </div>
                    <div className="w-16 h-4 mx-auto">
                      <Skeleton height={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {/* Navigation Arrows */}
              <div className="flex items-center py-4">
                <div className="w-6 h-6 mr-4">
                  <Skeleton width="100%" height="100%" />
                </div>
              </div>

              {tabs.map((tab, index) => (
                <div key={index} className="py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4">
                      <Skeleton width="100%" height="100%" />
                    </div>
                    <div className={`w-${16 + (index % 3) * 4} h-5`}>
                      <Skeleton height={20} />
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex items-center py-4">
                <div className="w-6 h-6 ml-4">
                  <Skeleton width="100%" height="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About Section */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-48 h-6 mb-4">
                  <Skeleton height={24} />
                </div>
                <div className="space-y-2">
                  <Skeleton height={16} />
                  <Skeleton height={16} width="60%" />
                </div>
              </div>

              {/* Property Details */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 mr-2">
                    <Skeleton width="100%" height="100%" />
                  </div>
                  <div className="w-32 h-6">
                    <Skeleton height={24} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-12 h-4 mr-4">
                      <Skeleton height={16} />
                    </div>
                    <div className="w-16 h-4">
                      <Skeleton height={16} />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 h-4 mr-4">
                      <Skeleton height={16} />
                    </div>
                    <div className="w-20 h-4">
                      <Skeleton height={16} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Send Enquiry Form */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-32 h-6 mb-6">
                  <Skeleton height={24} />
                </div>

                {/* Form Fields Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="w-20 h-4 mb-2">
                      <Skeleton height={16} />
                    </div>
                    <Skeleton height={40} />
                  </div>
                  <div>
                    <div className="w-24 h-4 mb-2">
                      <Skeleton height={16} />
                    </div>
                    <Skeleton height={40} />
                  </div>
                </div>

                {/* Form Fields Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="w-28 h-4 mb-2">
                      <Skeleton height={16} />
                    </div>
                    <div className="flex">
                      <div className="w-16 h-10 mr-2">
                        <Skeleton height={40} />
                      </div>
                      <div className="flex-1">
                        <Skeleton height={40} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-32 h-4 mb-2">
                      <Skeleton height={16} />
                    </div>
                    <Skeleton height={40} />
                  </div>
                </div>

                {/* Form Fields Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="w-28 h-4 mb-2">
                      <Skeleton height={16} />
                    </div>
                    <Skeleton height={40} />
                  </div>
                  <div>
                    <div className="w-8 h-4 mb-2">
                      <Skeleton height={16} />
                    </div>
                    <Skeleton height={40} />
                  </div>
                </div>

                {/* Submit Button */}
                <Skeleton height={48} />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-36 h-6 mb-6">
                  <Skeleton height={24} />
                </div>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg">
                        <Skeleton width="100%" height="100%" />
                      </div>
                      <div className="flex-1">
                        <div className="w-32 h-4 mb-1">
                          <Skeleton height={16} />
                        </div>
                        <div className="w-16 h-3">
                          <Skeleton height={12} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default InstituteDetailLoader;
