"use client";
import { useCallback, useEffect, useState } from "react";
import BrowseByLocation from "./_main_components/BrowseByLocation";
import Category from "./_main_components/Category";
import FeaturedBlogs from "./_main_components/FeaturedBlogs";
import FeaturedCourses from "./_main_components/FeaturedCourses";
import FeaturedFaq from "./_main_components/FeaturedFaqs";
import FeaturedProperty from "./_main_components/FeaturedProperty";
import Hero from "./_main_components/Hero";

import "swiper/css";
import "swiper/css/navigation";
import API from "@/contexts/API";
import {
  CategoryProps,
  CourseProps,
  LocationProps,
  PropertyProps,
  RankProps,
  ReviewProps,
  SimpleLocationProps,
} from "@/types/types";
import SearchModal from "@/components/searchModal/SearchModal";
import HomeLoading from "@/components/Loader/Home/HomeLoading";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [unqieLocations, setUnqieLocations] = useState<SimpleLocationProps[]>(
    []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [loading, setLoading] = useState(true);

  const getRanksAndProperty = useCallback(async () => {
    setLoading(true);
    try {
      const [rankRes, propertyRes, locationRes, courseRes, reviewRes, catRes] =
        await Promise.all([
          API.get("/ranks"),
          API.get("/property"),
          API.get("/locations"),
          API.get("/property-course"),
          API.get("/review"),
          API.get(`/category`),
        ]);

      setCategories(catRes.data);

      const merged = propertyRes.data.map((propertyItem: PropertyProps) => {
        const matchingRank = rankRes.data.find(
          (rankItem: RankProps) =>
            rankItem.property_id === propertyItem.uniqueId
        );

        const matchingLocation = locationRes.data.find(
          (locationItem: LocationProps) =>
            Number(locationItem.property_id) === propertyItem.uniqueId
        );

        const { ...cleanLocation } = matchingLocation || {};

        const matchingReviews = reviewRes.data.filter(
          (reviewItem: ReviewProps) =>
            Number(reviewItem.property_id) === propertyItem.uniqueId
        );
        const matchingCourse = courseRes.data.filter(
          (courseItem: CourseProps) =>
            Number(courseItem.property_id) === propertyItem.uniqueId
        );
        const uniqueLocations = [
          ...new Set(
            locationRes.data
              .map((loc: LocationProps) => {
                return JSON.stringify({
                  city: loc.property_city?.trim(),
                  state: loc.property_state?.trim(),
                  country: loc.property_country?.trim(),
                });
              })
              .filter(Boolean)
          ),
        ].map((item) => JSON.parse(item as string) as SimpleLocationProps);

        setUnqieLocations(uniqueLocations);

        return {
          ...propertyItem,
          rank: matchingRank?.rank || null,
          lastRank: matchingRank?.lastRank || null,
          overallScore: matchingRank?.overallScore || null,
          ...cleanLocation,
          reviews: matchingReviews,
          course: { courses: matchingCourse },
        };
      });

      setProperties(merged);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getRanksAndProperty();
  }, [getRanksAndProperty]);
  return (
    <>
      {!loading ? (
        <>
          <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          <Hero modalOpen={() => setIsOpen(true)} />
          <Category />
          <FeaturedProperty properties={properties} categorise={categories} />
          <FeaturedCourses />
          <BrowseByLocation
            unqieLocations={unqieLocations}
            properties={properties}
          />
          <FeaturedBlogs />
          <FeaturedFaq />
        </>
      ) : (
        <HomeLoading />
      )}
    </>
  );
}
