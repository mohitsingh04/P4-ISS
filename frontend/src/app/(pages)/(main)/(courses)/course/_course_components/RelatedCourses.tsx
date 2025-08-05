import { generateSlug } from "@/contexts/Callbacks";
import { CourseProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuBookOpen, LuClock } from "react-icons/lu";

export default function RelatedCourses({
  relatedCourses,
}: {
  relatedCourses: CourseProps[];
}) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Related Courses You Might Love
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {relatedCourses?.map((course, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-sm shadow-purple-200 hover:shadow-md hover:shadow-purple-200 transition-all overflow-hidden flex flex-col transform hover:-translate-y-1"
          >
            <div className="relative overflow-hidden h-48">
              <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/course_banner.png"
                  alt="Course Image"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                {course.course_type}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <Link
                href={`/course/${generateSlug(course?.course_name)}`}
                className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors leading-tight"
              >
                {course?.course_name}
              </Link>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <span className="ml-1">{course?.course_level}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-700 mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-1">
                  <LuClock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <LuBookOpen className="w-4 h-4" />
                  <span>{course?.certification_type}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
