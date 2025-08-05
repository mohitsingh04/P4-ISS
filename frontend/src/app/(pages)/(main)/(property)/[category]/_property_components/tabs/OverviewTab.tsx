import { PropertyProps } from "@/types/types";
import React from "react";
import { LuBuilding, LuGlobe, LuMapPin } from "react-icons/lu";

const OverviewTab = ({
  institute,
  getCategoryById,
}: {
  institute: PropertyProps;
  getCategoryById: (id: string) => string | undefined;
}) => {
  const rawDescription = institute?.property_description || "";

  return (
    <div className="space-y-8 p-4 sm:p-6 md:p-8 bg-white">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About {institute?.property_name}
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: rawDescription }}
          className="text-gray-700 leading-relaxed text-lg"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {(institute?.address ||
          institute?.state ||
          institute?.city ||
          institute?.pincode ||
          institute?.country) && (
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <LuMapPin className="w-5 h-5 text-purple-600" />
              Location
            </h3>
            <div className="space-y-2 text-gray-700 text-base">
              {institute?.address && <p>{institute?.address}</p>}
              {(institute?.state || institute?.city || institute?.pincode) && (
                <p>
                  {institute?.city}, {institute?.state} {institute?.pincode}
                </p>
              )}
              {institute?.country && (
                <p className="flex items-center gap-2">
                  <LuGlobe className="w-4 h-4" />
                  {institute?.country}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <LuBuilding className="w-5 h-5 text-purple-600" />
            Property Details
          </h3>
          <div className="space-y-2 text-gray-700 text-base">
            <p>
              <span className="font-medium">Type:</span>{" "}
              {getCategoryById(institute?.property_type)}
            </p>
            <p>
              <span className="font-medium">Academic Type:</span>{" "}
              {getCategoryById(institute?.category)}
            </p>
            {institute?.est_year && (
              <p>
                <span className="font-medium">Established:</span>{" "}
                {institute?.est_year}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverviewTab;
