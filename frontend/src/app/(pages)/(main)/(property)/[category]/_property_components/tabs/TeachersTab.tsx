import { TeacherProps } from "@/types/types";
import Image from "next/image";

import React from "react";
import { LuClock, LuMapPin } from "react-icons/lu";

const TeachersTab = ({ teachers }: { teachers: TeacherProps[] }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Our Expert Teachers
        </h2>
        <p className="text-gray-600">Meet our experienced instructors</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {teachers?.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="relative w-full h-64 cursor-pointer">
              <Image
                src={
                  teacher.profile?.[0]
                    ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${teacher.profile?.[0]}`
                    : "/images/course_banner.png"
                }
                alt={teacher.teacher_name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {teacher.teacher_name}
              </h3>
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <LuMapPin className="w-4 h-4 mr-1 text-purple-600" />
                {teacher.designation}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <LuClock className="w-4 h-4 mr-1 text-purple-600" />
                {teacher.experience} of experience
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersTab;
