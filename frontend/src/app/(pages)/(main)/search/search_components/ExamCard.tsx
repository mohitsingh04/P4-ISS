import { generateSlug } from "@/contexts/Callbacks";
import { ExamProps } from "@/types/types";
import Link from "next/link";
import React from "react";
import { LuBookOpenText, LuGraduationCap } from "react-icons/lu";

export default function ExamCard({ exam }: { exam: ExamProps }) {
  return (
    <section>
      <div className="bg-white p-6 rounded-2xl shadow-xs flex justify-between items-start mt-2">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center">
            <LuBookOpenText className="w-6 h-6 text-indigo-700" />
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href={`/exam/${generateSlug(exam?.exam_name)}`}
              className="text-lg font-semibold text-indigo-600 hover:text-indigo-800"
            >
              {exam?.exam_name}{" "}
              {exam?.exam_short_name && <>- {exam?.exam_short_name}</>}
            </Link>

            {/* <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
              <LuTrendingUp className="w-4 h-4 text-indigo-500" />
              <span>{exam?.exam_level}</span>
            </div> */}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <LuGraduationCap className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl font-bold text-indigo-800">exam</h3>
        </div>
      </div>
    </section>
  );
}
