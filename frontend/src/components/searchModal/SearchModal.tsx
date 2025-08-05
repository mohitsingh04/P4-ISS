"use client";
import { useState, useEffect, useCallback } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import PropertyCard from "./searchModalComponents/PropertyCard";
import CourseCard from "./searchModalComponents/CourseCard";
import BlogCard from "./searchModalComponents/BlogCard";
import {
  BlogCategoryProps,
  BlogsProps,
  BlogTagProps,
  CategoryProps,
  CourseProps,
  LocationProps,
  PropertyProps,
} from "@/types/types";
import API from "@/contexts/API";
import { useRouter } from "next/navigation";
import { generateSlug } from "@/contexts/Callbacks";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [blogs, setBlogs] = useState<BlogsProps[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(
    []
  );
  const [filteredCourses, setFilteredCourses] = useState<CourseProps[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogsProps[]>([]);

  const getPropertiesAndCourseWithCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const [propertyRes, locationRes, catRes, courseRes] = await Promise.all([
        API.get("/property"),
        API.get("/locations"),
        API.get("/category"),
        API.get("/course"),
      ]);

      const processedCourses = courseRes.data.map((courseItem: CourseProps) => {
        const findCategoryNameById = (id: string | number) => {
          const found = catRes.data.find(
            (cat: CategoryProps) => String(cat.uniqueId) === String(id)
          );
          return found?.category_name || null;
        };

        return {
          ...courseItem,
          course_level:
            findCategoryNameById(courseItem.course_level) ||
            courseItem.course_level,
          certification_type:
            findCategoryNameById(courseItem.certification_type) ||
            courseItem.certification_type,
        };
      });
      setCourses(processedCourses);

      const processedProperties = propertyRes.data.map(
        (propertyItem: PropertyProps) => {
          const matchingLocation = locationRes.data.find(
            (locationItem: LocationProps) =>
              Number(locationItem.property_id) === propertyItem.uniqueId
          );

          const findCategoryNameById = (id: string | number) => {
            const found = catRes.data.find(
              (cat: CategoryProps) => String(cat.uniqueId) === String(id)
            );
            return found?.category_name || null;
          };

          return {
            ...propertyItem,
            ...matchingLocation,
            category:
              findCategoryNameById(propertyItem.category) ||
              propertyItem.category,
            property_type:
              findCategoryNameById(propertyItem.property_type) ||
              propertyItem.property_type,
          };
        }
      );
      setProperties(processedProperties);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  const getBlogsWithCategoryAndTags = useCallback(async () => {
    try {
      setIsLoading(true);
      const [blogRes, blogCategoryRes, blogTagRes] = await Promise.all([
        API.get<BlogsProps[]>("/blog"),
        API.get<BlogCategoryProps[]>("/blog/category/all"),
        API.get<BlogTagProps[]>("/blog/tag/all"),
      ]);

      const categoryMap: Record<number, string> = {};
      blogCategoryRes.data.forEach((cat) => {
        categoryMap[cat.uniqueId] = cat.blog_category;
      });

      const tagMap: Record<number, string> = {};
      blogTagRes.data.forEach((tag) => {
        tagMap[tag.uniqueId] = tag.blog_tag;
      });

      const updatedBlogs: BlogsProps[] = blogRes.data.map((blog) => {
        return {
          ...blog,
          category: blog.category.map((catId) => {
            const id = typeof catId === "string" ? Number(catId) : catId;
            return categoryMap[id] || String(catId);
          }),
          tags: blog.tags.map((tagId) => {
            const id = typeof tagId === "string" ? Number(tagId) : tagId;
            return tagMap[id] || String(tagId);
          }),
        };
      });

      setBlogs(updatedBlogs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPropertiesAndCourseWithCategories();
    getBlogsWithCategoryAndTags();
  }, [getPropertiesAndCourseWithCategories, getBlogsWithCategoryAndTags]);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let query = e.target.value.replace(/\s+/g, " ");
      if (query.startsWith(" ")) query = query.trim();
      setQuery(query);

      if (query.length >= 3) {
        setIsLoading(true);
        const lowerQuery = query.toLowerCase();

        const filteredProps = properties.filter(
          (prop) =>
            prop.property_name?.toLowerCase().includes(lowerQuery) ||
            (typeof prop.category === "string" &&
              prop.category.toLowerCase().includes(lowerQuery)) ||
            (typeof prop.property_type === "string" &&
              prop.property_type.toLowerCase().includes(lowerQuery)) ||
            prop.property_city?.toLowerCase().includes(lowerQuery) ||
            prop.property_state?.toLowerCase().includes(lowerQuery) ||
            prop.property_country?.toLowerCase().includes(lowerQuery)
        );

        const filteredCrs = courses.filter(
          (course) =>
            course.course_type?.toLowerCase().includes(lowerQuery) ||
            (typeof course.course_level === "string" &&
              course.course_level.toLowerCase().includes(lowerQuery)) ||
            course.course_name?.toLowerCase().includes(lowerQuery) ||
            course.course_short_name?.toLowerCase().includes(lowerQuery) ||
            (typeof course.certification_type === "string" &&
              course.certification_type.toLowerCase().includes(lowerQuery))
        );

        const filteredBlgs = blogs.filter(
          (blog) =>
            blog.title?.toLowerCase().includes(lowerQuery) ||
            blog.category.some((cat) =>
              cat?.toLowerCase().includes(lowerQuery)
            ) ||
            blog.tags.some((tag) => tag?.toLowerCase().includes(lowerQuery))
        );

        setFilteredProperties(filteredProps);
        setFilteredCourses(filteredCrs);
        setFilteredBlogs(filteredBlgs);
        setIsLoading(false);
      } else {
        setFilteredProperties([]);
        setFilteredCourses([]);
        setFilteredBlogs([]);
        setIsLoading(false);
      }
    },
    [properties, courses, blogs]
  );

  const handleStoreSearch = useCallback(async () => {
    try {
      const payload = { search: query };
      const response = await API.post("/search", payload);
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && query.length >= 3) {
        router.push(`/search/${generateSlug(query)}`);
        handleStoreSearch();
        onClose();
      }
    },
    [onClose, router, query, handleStoreSearch]
  );
  const handleSearchButton = useCallback(() => {
    if (query.length >= 3) {
      router.push(`/search/${generateSlug(query)}`);
      handleStoreSearch();
      onClose();
    }
  }, [onClose, router, query, handleStoreSearch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white text-purple-900 flex flex-col">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 py-4 bg-white shadow-xs sticky top-0 z-50">
        <div className="relative">
          <LuSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search properties, courses, blogs, institutes..."
            value={query}
            onKeyDown={handleKeyDown}
            onChange={handleSearch}
            className="w-full pl-12 pr-10 py-4 text-lg border-2 border-purple-300 rounded-xl shadow-xs focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            autoFocus
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2">
            <button
              onClick={handleSearchButton}
              className="text-purple-600 hover:bg-purple-100 p-2 cursor-pointer rounded-full"
            >
              <LuSearch className="h-4 w-4" />
            </button>
            <button
              onClick={onClose}
              className="text-purple-600 hover:bg-purple-100 p-2 cursor-pointer rounded-full"
            >
              <LuX className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 w-full max-w-screen-2xl mx-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Search Input */}

        {/* Loader */}
        {isLoading && (
          <div className="text-center py-10">
            <div className="animate-spin h-8 w-8 border-2 border-purple-600 border-t-transparent rounded-full mx-auto" />
            <p className="mt-4 text-purple-500">
              Searching for your results...
            </p>
          </div>
        )}

        {!isLoading && query.length >= 3 && (
          <>
            {filteredProperties.length === 0 &&
            filteredCourses.length === 0 &&
            filteredBlogs.length === 0 ? (
              <p className="text-center text-purple-600 mt-10">
                No results found matching your search. Please try a different
                keyword.
              </p>
            ) : (
              <div className="grid gap-6">
                {filteredProperties.map((prop, index) => (
                  <PropertyCard
                    key={index}
                    property={prop}
                    handleStoreSearch={handleStoreSearch}
                    onClose={onClose}
                  />
                ))}
                {filteredCourses.map((course, index) => (
                  <CourseCard
                    key={index}
                    course={course}
                    handleStoreSearch={handleStoreSearch}
                    onClose={onClose}
                  />
                ))}
                {filteredBlogs.map((blog, index) => (
                  <BlogCard
                    key={index}
                    blog={blog}
                    handleStoreSearch={handleStoreSearch}
                    onClose={onClose}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {query?.length < 3 && (
          <p className="text-center text-purple-600 mt-10">
            Type at least 3 characters to search
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
