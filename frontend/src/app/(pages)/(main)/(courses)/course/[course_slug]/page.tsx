"use client";
import API from "@/contexts/API";
import { generateSlug } from "@/contexts/Callbacks";
import { CourseProps } from "@/types/types";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import {
  LuAward,
  LuBookOpen,
  LuCalendar,
  LuCircleCheck,
  LuClock,
  LuFileText,
  LuMap,
  LuUsers,
} from "react-icons/lu";
import RelatedCourses from "../_course_components/RelatedCourses";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import Loader from "@/components/Loader/Loader";
import Image from "next/image";

export default function Course() {
  const { course_slug } = useParams();
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [mainCourse, setMainCourse] = useState<CourseProps | null>(null);
  const [loading, setLoading] = useState(true);

  const getCourses = useCallback(async () => {
    setLoading(true);
    try {
      const results = await Promise.allSettled([
        API.get<CourseProps[]>(`/course`),
        API.get<{ uniqueId: number; requirment: string }[]>(`/requirment/all`),
        API.get<{ uniqueId: number; key_outcome: string }[]>(
          `/key-outcome/all`
        ),
        API.get<{ uniqueId: number; category_name: string }[]>(`/category`),
      ]);

      const [coursesRes, requirementsRes, keyOutcomesRes, categoryRes] =
        results;

      if (coursesRes.status !== "fulfilled") {
        console.error("Failed to fetch courses:", coursesRes.reason);
        return;
      }

      const coursesData = coursesRes.value.data;
      const requirementsData =
        requirementsRes.status === "fulfilled"
          ? requirementsRes.value.data
          : [];
      const keyOutcomesData =
        keyOutcomesRes.status === "fulfilled" ? keyOutcomesRes.value.data : [];
      const categoryData =
        categoryRes.status === "fulfilled" ? categoryRes.value.data : [];

      // Create lookup maps
      const requirementMap = new Map<number, string>();
      requirementsData.forEach((req) => {
        requirementMap.set(req.uniqueId, req.requirment);
      });

      const keyOutcomeMap = new Map<number, string>();
      keyOutcomesData.forEach((ko) => {
        keyOutcomeMap.set(ko.uniqueId, ko.key_outcome);
      });

      const categoryMap = new Map<number, string>();
      categoryData.forEach((cat) => {
        categoryMap.set(cat.uniqueId, cat.category_name);
      });

      const populatedCourses: CourseProps[] = coursesData.map((item) => {
        const populatedRequirements =
          (item.requirements
            ?.map((id) => requirementMap.get(Number(id)))
            .filter(Boolean) as string[]) ?? [];

        const populatedKeyOutcomes =
          (item.key_outcomes
            ?.map((id) => keyOutcomeMap.get(Number(id)))
            .filter(Boolean) as string[]) ?? [];

        return {
          ...item,
          requirements: populatedRequirements,
          key_outcomes: populatedKeyOutcomes,
          course_type:
            categoryMap.get(Number(item.course_type)) ?? item.course_type,
          course_level:
            categoryMap.get(Number(item.course_level)) ?? item.course_level,
          certification_type:
            categoryMap.get(Number(item.certification_type)) ??
            item.certification_type,
        };
      });

      const filteredCourses = populatedCourses.filter(
        (item) => generateSlug(item.course_name) !== course_slug
      );

      const shuffledCourses = filteredCourses.sort(() => Math.random() - 0.5);

      const randomSixCourses = shuffledCourses.slice(0, 6);

      setCourses(randomSixCourses);

      setMainCourse(
        populatedCourses.find(
          (item) => generateSlug(item.course_name) === course_slug
        ) ?? null
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [course_slug]);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-purple-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb
          items={[
            { label: "Courses" },
            { label: mainCourse?.course_name || "Course Name" },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative mb-8">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 relative group cursor-pointer shadow-sm hover:shadow-sm hover:shadow-purple-200">
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={
                      mainCourse?.image?.[0]
                        ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${mainCourse?.image?.[0]}`
                        : `/images/course_banner.png`
                    }
                    alt="Course Preview"
                    fill
                    className="object-cover"
                    priority // if above the fold, else remove
                  />
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="bg-purple-100 from-purple-600 hover:shadow-sm hover:shadow-purple-200  rounded-2xl p-8 text-gray-600 relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl text-purple-600 font-bold mb-2 leading-tight">
                  {mainCourse?.course_name}
                </h1>

                <p className="text-lg text-gray-700 mb-6 font-medium">
                  {mainCourse?.course_short_name}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <LuClock className="w-4 h-4" />
                    <span>{mainCourse?.duration}</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <LuAward className="w-4 h-4" />
                    <span>{mainCourse?.certification_type}</span>
                  </div>
                </div>
              </div>
            </div>

            {(!!mainCourse?.description ||
              (mainCourse?.key_outcomes?.length ?? 0) > 0 ||
              (mainCourse?.best_for?.length ?? 0) > 0) && (
              <div className="bg-white shadow-sx hover:shadow-sm shadow-purple-200 rounded-2xl mb-8">
                <div className="p-8">
                  {mainCourse?.description && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-gray-800">
                        Course Overview
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: mainCourse?.description,
                        }}
                        className="text-gray-700 mb-8 leading-relaxed text-lg"
                      />
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {(mainCourse?.requirements?.length || 0) > 0 && (
                      <div>
                        <h4 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                          <LuFileText className="w-5 h-5 text-purple-500 mr-2" />
                          Requirements
                        </h4>
                        <div className="space-y-3">
                          {mainCourse?.requirements?.map(
                            (requirement, index) => (
                              <div
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">
                                  {requirement}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                    {(mainCourse?.best_for?.length || 0) > 0 && (
                      <div>
                        <h4 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                          <LuUsers className="w-5 h-5 text-purple-500 mr-2" />
                          Perfect For
                        </h4>
                        <div className="space-y-3 mb-8">
                          {mainCourse?.best_for?.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            {/* Related Courses */}
            <RelatedCourses relatedCourses={courses} />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white shadow-sm rounded-2xl overflow-hidden">
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <LuCalendar className="w-4 h-4 text-purple-500" />
                      <div>
                        <div className="text-gray-600">Duration:</div>
                        <div className="font-semibold">
                          {mainCourse?.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <LuBookOpen className="w-4 h-4 text-purple-500" />
                      <div>
                        <div className="text-gray-600">Certificate Type:</div>
                        <div className="font-semibold">
                          {mainCourse?.certification_type}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <LuAward className="w-4 h-4 text-purple-500" />
                      <div>
                        <div className="text-gray-600">Type:</div>
                        <div className="font-semibold">
                          {mainCourse?.course_type}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <LuMap className="w-4 h-4 text-purple-500" />
                      <div>
                        <div className="text-gray-600">Level:</div>
                        <div className="font-semibold">
                          {mainCourse?.course_level}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Highlights Card */}
              {(mainCourse?.key_outcomes?.length || 0) > 0 && (
                <div className="bg-white shadow-md rounded-2xl">
                  <div className="p-6">
                    <h4 className="font-semibold mb-4 text-gray-800">
                      What Will You Achieve
                    </h4>
                    <div className="space-y-3 text-sm">
                      {mainCourse?.key_outcomes?.map((item, index) => (
                        <div
                          className="flex items-center space-x-3"
                          key={index}
                        >
                          <LuCircleCheck className="w-4 h-4 text-purple-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
