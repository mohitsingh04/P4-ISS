"use client";
import API from "@/contexts/API";
import { generateSlug } from "@/contexts/Callbacks";
import { ExamProps } from "@/types/types";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
// import {
//   LuAward,
//   LuBookOpen,
//   LuCalendar,
//   LuClock,
//   LuFileText,
//   LuMap,
//   LuUsers,
// } from "react-icons/lu";
import RelatedExams from "../_exam_components/RelatedExams";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import Loader from "@/components/Loader/Loader";
import Image from "next/image";

export default function Exam() {
  const { exam_slug } = useParams();
  const [exams, setExams] = useState<ExamProps[]>([]);
  const [mainExams, setMainExams] = useState<ExamProps | null>(null);
  const [loading, setLoading] = useState(true);

  const getExams = useCallback(async () => {
    setLoading(true);
    try {
      const examsRes = await API.get<ExamProps[]>(`/exam`);

      const examsData = examsRes.data || [];

      // Filter out the current exam
      const filteredExams = examsData.filter(
        (item) => generateSlug(item.exam_name) !== exam_slug
      );

      // Shuffle exams
      const shuffledExams = filteredExams.sort(() => Math.random() - 0.5);

      // Pick 6 random exams
      const randomSixExams = shuffledExams.slice(0, 6);

      setExams(randomSixExams);

      // Set main exam
      setMainExams(
        examsData.find((item) => generateSlug(item.exam_name) === exam_slug) ??
          null
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [exam_slug]);

  useEffect(() => {
    getExams();
  }, [getExams]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-indigo-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb
          items={[
            { label: "Exams" },
            { label: mainExams?.exam_name || "Exmas Name" },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative mb-8">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 relative group cursor-pointer shadow-sm hover:shadow-sm hover:shadow-indigo-200">
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={
                      mainExams?.featured_image?.[0]
                        ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/exam/${mainExams?.featured_image?.[0]}`
                        : `/images/exam_banner.png`
                    }
                    alt="Exam Preview"
                    fill
                    className="object-cover"
                    priority // if above the fold, else remove
                  />
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="bg-indigo-100 from-indigo-600 hover:shadow-sm hover:shadow-indigo-200  rounded-2xl p-8 text-gray-600 relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl text-indigo-600 font-bold mb-2 leading-tight">
                  {mainExams?.exam_name}
                </h1>

                <p className="text-lg text-gray-700 mb-6 font-medium">
                  {mainExams?.exam_short_name}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  {/* <div className="flex items-center space-x-1">
                    <LuClock className="w-4 h-4" />
                    <span>{mainExams?.duration}</span>
                  </div> */}

                  {/* <div className="flex items-center space-x-1">
                    <LuAward className="w-4 h-4" />
                    <span>{mainExams?.certification_type}</span>
                  </div> */}
                </div>
              </div>
            </div>

            {!!mainExams?.description && (
              <div className="bg-white shadow-sx hover:shadow-sm shadow-indigo-200 rounded-2xl mb-8">
                <div className="p-8">
                  {mainExams?.description && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-gray-800">
                        Exam Overview
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: mainExams?.description,
                        }}
                        className="text-gray-700 mb-8 leading-relaxed text-lg"
                      />
                    </div>
                  )}

                  {/* <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {(mainExams?.requirements?.length || 0) > 0 && (
                      <div>
                        <h4 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                          <LuFileText className="w-5 h-5 text-indigo-500 mr-2" />
                          Requirements
                        </h4>
                        <div className="space-y-3">
                          {mainExams?.requirements?.map(
                            (requirement, index) => (
                              <div
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">
                                  {requirement}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                    {(mainExams?.best_for?.length || 0) > 0 && (
                      <div>
                        <h4 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                          <LuUsers className="w-5 h-5 text-indigo-500 mr-2" />
                          Perfect For
                        </h4>
                        <div className="space-y-3 mb-8">
                          {mainExams?.best_for?.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div> */}
                </div>
              </div>
            )}
            {/* Related Exams */}
            <RelatedExams relatedexams={exams} />
          </div>

          {/* Right Sidebar */}
          {/* <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white shadow-sm rounded-2xl overflow-hidden">
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <LuCalendar className="w-4 h-4 text-indigo-500" />
                      <div>
                        <div className="text-gray-600">Duration:</div>
                        <div className="font-semibold">
                          {mainExams?.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <LuBookOpen className="w-4 h-4 text-indigo-500" />
                      <div>
                        <div className="text-gray-600">Certificate Type:</div>
                        <div className="font-semibold">
                          {mainExams?.certification_type}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <LuAward className="w-4 h-4 text-indigo-500" />
                      <div>
                        <div className="text-gray-600">Type:</div>
                        <div className="font-semibold">
                          {mainExams?.exam_type}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <LuMap className="w-4 h-4 text-indigo-500" />
                      <div>
                        <div className="text-gray-600">Level:</div>
                        <div className="font-semibold">
                          {mainExams?.exam_level}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
