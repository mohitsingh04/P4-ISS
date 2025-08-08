import { formatTo12Hour } from "@/contexts/Callbacks";
import { WorkingHoursProps } from "@/types/types";
import React from "react";
import { LuCircleCheck, LuClock } from "react-icons/lu";

const WorkingHoursTab = ({
  workingHours,
}: {
  workingHours: WorkingHoursProps[];
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-xs overflow-hidden">
        <div className="bg-indigo-600 text-white p-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <LuClock className="w-5 h-5" />
            Working Hours
          </h3>
        </div>

        <div className="divide-y divide-indigo-200">
          {workingHours?.map((schedule) => (
            <div
              key={schedule.day}
              className="p-4 flex items-center justify-between hover:bg-indigo-50"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium text-gray-900 w-20">
                  {schedule.day}
                </span>
                {schedule.isOpen ? (
                  <LuCircleCheck className="w-5 h-5 text-green-600" />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                )}
              </div>

              <div className="text-right">
                {schedule.isOpen ? (
                  <div className="text-gray-700">
                    <span className="font-medium">
                      {formatTo12Hour(schedule.openTime)}
                    </span>
                    <span className="mx-2">-</span>
                    <span className="font-medium">
                      {formatTo12Hour(schedule.closeTime)}
                    </span>
                  </div>
                ) : (
                  <span className="text-red-600 font-medium">Closed</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingHoursTab;
