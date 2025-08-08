"use client";

import { PropertyProps } from "@/types/types";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import {
  LuChevronDown,
  LuBookOpen,
  LuGraduationCap,
  LuBook,
  LuPen,
} from "react-icons/lu";

export default function ExamTable({
  selectedProperties,
}: {
  selectedProperties: PropertyProps[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const allExams = useMemo(() => {
    const seen = new Set<string>();
    const exams: { id: string; name: string }[] = [];
    selectedProperties.forEach((prop) => {
      prop.exams?.forEach((exam) => {
        if (exam?.exam_name && !seen.has(exam.exam_name)) {
          seen.add(exam.exam_name);
          exams.push({
            id: exam.exam_name,
            name: exam.exam_name,
          });
        }
      });
    });
    return exams;
  }, [selectedProperties]);

  const [selectedExamsId, setSelectedExamsId] = useState<string>("");

  useEffect(() => {
    if (!selectedExamsId && allExams.length > 0) {
      setSelectedExamsId(allExams[0].id);
    }
  }, [allExams, selectedExamsId]);

  const examFields = [
    { key: "Exam Name", label: "Exam Name", icon: LuBook },
    { key: "Short Name", label: "Short Name", icon: LuPen },
  ];

  return (
    <div className="bg-white shadow-sm border-x border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div
        className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 cursor-pointer px-6 py-3 transition-all duration-200 hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800 relative overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 right-10 w-8 h-8 bg-white rounded-full blur-lg"></div>
          <div className="absolute bottom-2 left-10 w-6 h-6 bg-white rounded-full blur-md"></div>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-sm">
              <LuBookOpen size={16} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-0.5">
                Exams Comparison
              </h2>
              <p className="text-indigo-100 text-xs">
                Compare Exams across {selectedProperties.length} colleges
              </p>
            </div>
          </div>
          <div
            className={`p-2 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-110 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <LuChevronDown size={16} className="text-white" />
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-none opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="p-0">
          {allExams.length > 0 ? (
            <>
              <div className="px-6 py-4 bg-indigo-50 border-b border-indigo-100">
                <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <LuGraduationCap size={16} className="text-indigo-600" />
                  Select Exam to Compare:
                </label>
                <div className="relative">
                  <select
                    value={selectedExamsId}
                    onChange={(e) => setSelectedExamsId(e.target.value)}
                    className="w-full max-w-md px-4 py-2.5 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white shadow-sm transition-all duration-200 text-sm font-medium appearance-none cursor-pointer"
                  >
                    {allExams.map((exam) => (
                      <option key={exam.id} value={exam.id}>
                        {exam.name}
                      </option>
                    ))}
                  </select>
                  <LuChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-500 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              {/* Tabular Comparison */}
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-b border-indigo-200">
                      <th className="text-left p-4 font-semibold text-gray-800 border-r border-indigo-200 min-w-[160px] text-sm">
                        Exam Details
                      </th>
                      {selectedProperties.map((prop, idx) => (
                        <th
                          key={idx}
                          className="text-center p-4 font-semibold text-gray-800 border-r border-indigo-200 last:border-r-0 min-w-[200px]"
                        >
                          <div className="flex flex-col items-center">
                            {!prop?.property_logo?.[0] ? (
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center mb-2 shadow-sm">
                                <span className="text-indigo-600 font-bold text-sm">
                                  {prop.property_name.charAt(0)}
                                </span>
                              </div>
                            ) : (
                              <div className="relative w-14 h-14 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 mb-3 overflow-hidden">
                                <Image
                                  src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${prop.property_logo?.[0]}`}
                                  alt={prop.property_name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <span className="text-sm font-medium break-words text-center leading-tight">
                              {prop.property_name}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {examFields.map((field, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-indigo-25 transition-colors duration-200"
                      >
                        <td className="font-semibold p-4 text-gray-700 bg-gradient-to-r from-gray-50 to-indigo-25 border-r border-indigo-200">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                              <span className="text-sm">
                                {<field.icon className="text-indigo-600" />}
                              </span>
                            </div>
                            <span className="text-sm break-words">
                              {field.label}
                            </span>
                          </div>
                        </td>
                        {selectedProperties.map((prop, pIdx) => {
                          const exam = prop.exams?.find(
                            (c) => c.exam_name === selectedExamsId
                          );
                          let displayValue = "Not Available";
                          if (exam) {
                            switch (field.key) {
                              case "Exam Name":
                                displayValue = exam.exam_name || "N/A";
                                break;
                              case "Short Name":
                                displayValue = exam.exam_short_name || "N/A";
                                break;
                            }
                          }
                          return (
                            <td
                              key={pIdx}
                              className="p-4 text-center border-r border-gray-100 last:border-r-0"
                            >
                              <span
                                className={`inline-block px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm break-words ${
                                  displayValue === "Not Available" ||
                                  displayValue === "N/A"
                                    ? "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600"
                                    : "bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800"
                                }`}
                              >
                                {displayValue}
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <LuBookOpen size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                No exams Available
              </h3>
              <p className="text-gray-500 text-sm">
                No exams available for comparison
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
