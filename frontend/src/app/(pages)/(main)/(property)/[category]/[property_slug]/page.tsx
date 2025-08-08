"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import InstituteBanner from "../_property_components/Institutebanner";
import TabNavigation from "../_property_components/TabNavigation";
import EnquiryForm from "../_property_components/EnquiryForm";
import RelatedInstitutesDetails from "../_property_components/RelatedInstitute";
import {
  LuBadgePercent,
  LuBed,
  LuBookOpen,
  LuCircleHelp,
  LuClock,
  LuImage,
  LuInfo,
  LuSettings,
  LuStar,
  LuUsers,
} from "react-icons/lu";
import { notFound } from "next/navigation";
import {
  CategoryProps,
  ExamProps,
  PropertyExam,
  PropertyProps,
} from "@/types/types";
import API from "@/contexts/API";
import OverviewTab from "../_property_components/tabs/OverviewTab";
import ExamsTab from "../_property_components/tabs/ExamsTab";
import GalleryTab from "../_property_components/tabs/GalleryTab";
import AccommodationTab from "../_property_components/tabs/AccomodationTab";
import AmenitiesTab from "../_property_components/tabs/AmenitiesTab";
import WorkingHoursTab from "../_property_components/tabs/WorkingHours";
import TeachersTab from "../_property_components/tabs/TeachersTab";
import FAQTab from "../_property_components/tabs/FaqTab";
import ReviewsTab from "../_property_components/tabs/ReviewTab";
import CouponsTab from "../_property_components/tabs/CouponsTab";
import { transformWorkingHours } from "@/contexts/Callbacks";
import { AxiosError, AxiosResponse } from "axios";
import InstituteDetailLoader from "@/components/Loader/Property/PropertyDetail";

const mergeExamData = (propertyexams: PropertyExam[], exams: ExamProps[]) => {
  return propertyexams.map((pc) => {
    const matchingExams = exams.find((c) => c.uniqueId === pc.exam_id);
    if (!matchingExams) return pc;

    const merged = { ...pc };
    for (const key in matchingExams) {
      if (!(key in pc)) {
        merged[key] = matchingExams[key];
      }
    }
    return merged;
  });
};

const Property = () => {
  const searchParams = useSearchParams();
  const { property_slug } = useParams();
  const tabParam = searchParams.get("tab") || "overview";
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [category, setCategory] = useState<CategoryProps[]>([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/slug/${property_slug}`);
      if (!response.data) {
        setHasError(true);
        return;
      }
      return response.data;
    } catch (error: unknown) {
      const err = error as AxiosError<{ error: string }>;
      console.log(err.response?.data.error);
    }
  }, [property_slug]);

  const getCategories = useCallback(async () => {
    try {
      const response = await API.get(`/category`);
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const getPropertyData = useCallback(async () => {
    setLoading(true);
    try {
      const propertyData = await getProperty();

      if (!propertyData || !propertyData.uniqueId) {
        console.warn("Property Not Found.");
        return;
      }

      const uniqueId = propertyData.uniqueId;

      const requests = [
        API.get(`/property/location/${uniqueId}`),
        API.get(`/review/property/${uniqueId}`),
        API.get(`/property/property-exam/${uniqueId}`),
        API.get(`/exam`),
        API.get(`/property/gallery/${uniqueId}`),
        API.get(`/accomodation/${uniqueId}`),
        API.get(`/property/amenities/${uniqueId}`),
        API.get(`/business-hours/${uniqueId}`),
        API.get(`/teacher/property/${uniqueId}`),
        API.get(`/property/faq/${uniqueId}`),
        API.get(`/coupons/property/${uniqueId}`),
      ];

      const [
        locRes,
        reviewRes,
        propertyExamsRes,
        allExamsRes,
        galleryRes,
        accomodationRes,
        amenityRes,
        hoursRes,
        teacherRes,
        faqRes,
        couponRes,
      ] = await Promise.allSettled(requests);

      const getData = <T,>(
        result: PromiseSettledResult<AxiosResponse<T>>,
        fallback: T
      ): T => (result.status === "fulfilled" ? result.value.data : fallback);

      const mergedExams: ExamProps[] =
        propertyExamsRes.status === "fulfilled" &&
        allExamsRes.status === "fulfilled"
          ? (mergeExamData(
              propertyExamsRes.value?.data,
              allExamsRes.value?.data
            ) as unknown as ExamProps[])
          : [];

      const locationData = getData(locRes, {});

      const finalData: PropertyProps = {
        ...propertyData,
        address: locationData.property_address,
        pincode: locationData.property_pincode,
        city: locationData.property_city,
        state: locationData.property_state,
        country: locationData.property_country,
        reviews: getData(reviewRes, {}),
        exams: mergedExams,
        gallery: getData(galleryRes, []),
        accomodation: getData(accomodationRes, []),
        amenities:
          getData(amenityRes, { selectedAmenities: [{}] })
            .selectedAmenities[0] || {},
        working_hours: transformWorkingHours(getData(hoursRes, [])),
        teachers: getData(teacherRes, []),
        faqs: getData(faqRes, []),
        coupons: getData(couponRes, []),
      };

      setProperty(finalData);
    } catch (error) {
      console.error("Failed to fetch property data:", error);
    } finally {
      setLoading(false);
    }
  }, [getProperty]);

  useEffect(() => {
    getPropertyData();
  }, [getPropertyData]);

  const tabs = [
    { id: "overview", label: "Overview", icon: LuInfo, show: true },
    {
      id: "exams",
      label: "Exams",
      icon: LuBookOpen,
      show: (property?.exams?.length || 0) > 0,
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: LuImage,
      show: (property?.gallery?.length || 0) > 0,
    },
    {
      id: "accomodation",
      label: "Accomodation",
      icon: LuBed,
      show: (property?.accomodation?.length || 0) > 0,
    },
    {
      id: "amenities",
      label: "Amenities",
      icon: LuSettings,
      show: !!property?.amenities,
    },
    {
      id: "hours",
      label: "Working Hours",
      icon: LuClock,
      show: (property?.working_hours?.length || 0) > 0,
    },
    {
      id: "teachers",
      label: "Teachers",
      icon: LuUsers,
      show: (property?.teachers?.length || 0) > 0,
    },
    {
      id: "faq",
      label: "FAQ",
      icon: LuCircleHelp,
      show: (property?.faqs?.length || 0) > 0,
    },
    {
      id: "reviews",
      label: "Reviews",
      icon: LuStar,
      show: true,
    },
    {
      id: "coupons",
      label: "Coupons",
      icon: LuBadgePercent,
      show: (property?.coupons?.length || 0) > 0,
    },
  ];

  const getCategoryById = (id: string) => {
    const cat = category?.find((item) => Number(item?.uniqueId) === Number(id));
    return cat?.category_name || "Unknown";
  };

  const renderTabContent = () => {
    switch (tabParam) {
      case "overview":
        return (
          property && (
            <OverviewTab
              institute={property}
              getCategoryById={getCategoryById}
            />
          )
        );
      case "exams":
        return <ExamsTab exams={property?.exams ?? []} />;
      case "gallery":
        return <GalleryTab galleries={property?.gallery ?? []} />;
      case "accomodation":
        return (
          <AccommodationTab accommodations={property?.accomodation ?? []} />
        );
      case "amenities":
        return <AmenitiesTab amenities={property?.amenities ?? {}} />;
      case "hours":
        return <WorkingHoursTab workingHours={property?.working_hours ?? []} />;
      case "teachers":
        return <TeachersTab teachers={property?.teachers ?? []} />;
      case "faq":
        return <FAQTab faqs={property?.faqs ?? []} />;
      case "reviews":
        return (
          property && (
            <ReviewsTab property={property} getProperty={getPropertyData} />
          )
        );
      case "coupons":
        return <CouponsTab coupons={property?.coupons ?? []} />;
      default:
        return (
          property && (
            <OverviewTab
              institute={property}
              getCategoryById={getCategoryById}
            />
          )
        );
    }
  };

  if (hasError) {
    notFound();
  }

  if (loading) {
    return <InstituteDetailLoader />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {property && (
        <InstituteBanner
          institute={property}
          getCategoryById={getCategoryById}
        />
      )}
      <TabNavigation tabs={tabs} />
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-4">
              {renderTabContent()}
            </div>
            <div className="container mx-auto px-4 md:px-0 pb-16">
              <div className="bg-white rounded-2xl shadow-sm mt-8 p-6">
                {property && <EnquiryForm property={property} />}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-6">
            <RelatedInstitutesDetails
              mainProperty={property}
              category={category}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
