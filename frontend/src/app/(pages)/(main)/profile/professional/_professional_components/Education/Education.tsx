import { AllDegreeAndInstituteProps, UserProps } from "@/types/types";
import React, { useState } from "react";
import { LuCalendar, LuPen, LuTarget } from "react-icons/lu";
import EducationModal from "./EducationModal";
import { getDegreeById, getInstituteById } from "@/contexts/Callbacks";

export default function EducationSection({
  profile,
  allDegreeAndInstitute,
  getProfile,
}: {
  profile: UserProps | null;
  allDegreeAndInstitute: AllDegreeAndInstituteProps | null;
  getProfile: () => void;
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-purple-100 hover:shadow-md border border-purple-100 overflow-hidden">
      <div className="bg-purple-50 to-indigo-50 px-6 py-4 border-b border-purple-100">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
            <LuTarget className="h-5 w-5 text-purple-600" />
            <span>Education</span>
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
              {profile?.education?.length}
            </span>
          </h2>
          <button
            onClick={() => setShowEditModal(true)}
            className="text-purple-600 hover:text-purple-700 hover:bg-purple-100 p-2 rounded-lg transition-all"
          >
            <LuPen className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-6">
        {(profile?.education?.length || 0) > 0 ? (
          <div className="space-y-4">
            {profile?.education?.map((edu, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-100"
              >
                <div className="w-14 h-14 bg-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {allDegreeAndInstitute &&
                      getInstituteById(
                        edu?.institute || 0,
                        allDegreeAndInstitute
                      )}
                  </h3>
                  <p className="text-purple-600 font-medium">
                    {allDegreeAndInstitute &&
                      getDegreeById(edu.degree || 0, allDegreeAndInstitute)}
                  </p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <LuCalendar className="h-4 w-4" />
                      <span>
                        {new Date(edu.start_date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        -{" "}
                        {edu.currentlyStuding
                          ? "Present"
                          : new Date(edu.end_date).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <LuTarget className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 italic">
              Add your education details to highlight your academic
              background...
            </p>
            <button
              onClick={() => setShowEditModal(true)}
              className="mt-4 bg-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              Add Education
            </button>
          </div>
        )}
      </div>
      {showEditModal && (
        <EducationModal
          profile={profile}
          onClose={() => setShowEditModal(false)}
          allDegreeAndInstitute={allDegreeAndInstitute}
          getProfile={getProfile}
        />
      )}
    </div>
  );
}
