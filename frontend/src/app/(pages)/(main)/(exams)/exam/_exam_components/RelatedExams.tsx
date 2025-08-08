import { generateSlug } from "@/contexts/Callbacks";
import { ExamProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RelatedExams({
  relatedexams,
}: {
  relatedexams: ExamProps[];
}) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Related Exams You Might Love
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {relatedexams?.map((exam, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-sm shadow-indigo-200 hover:shadow-md hover:shadow-indigo-200 transition-all overflow-hidden flex flex-col transform hover:-translate-y-1"
          >
            <div className="relative overflow-hidden h-48">
              <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/exam_banner.png"
                  alt="exam Image"
                  fill
                  className="object-cover"
                />
              </div>
              {/* <span className="absolute top-3 right-3 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                {exam.exam_type}
              </span> */}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <Link
                href={`/exam/${generateSlug(exam?.exam_name)}`}
                className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors leading-tight"
              >
                {exam?.exam_name}
              </Link>
              {/* <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <span className="ml-1">{exam?.exam_level}</span>
                </div>
              </div> */}
              {/* <div className="flex items-center justify-between text-sm text-gray-700 mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-1">
                  <LuClock className="w-4 h-4" />
                  <span>{exam.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <LuBookOpen className="w-4 h-4" />
                  <span>{exam?.cetification_type}</span>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
