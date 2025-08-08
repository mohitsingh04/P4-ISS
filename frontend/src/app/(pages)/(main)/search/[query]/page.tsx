"use client";
import API from "@/contexts/API";
import { generateSlug } from "@/contexts/Callbacks";
import {
  BlogCategoryProps,
  BlogsProps,
  BlogTagProps,
  CategoryProps,
  ExamProps,
  LocationProps,
  PropertyProps,
} from "@/types/types";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState, useMemo } from "react";
import {
  LuBookOpen,
  LuBuilding,
  LuGraduationCap,
  LuSearch,
  LuX,
} from "react-icons/lu";
import BlogCard from "../search_components/BlogCard";
import ExamCard from "../search_components/ExamCard";
import PropertyCard from "../search_components/PropertyCard";
import Pagination from "../search_components/Pagination";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import SearchLoader from "@/components/Loader/Search/SearchLoader";

const ITEMS_PER_PAGE = 10;
type SearchResult =
  | (PropertyProps & { type: "property" })
  | (ExamProps & { type: "exam" })
  | (BlogsProps & { type: "blog" });

const SearchResults = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const { query } = useParams();
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [exams, setExams] = useState<ExamProps[]>([]);
  const [blogs, setBlogs] = useState<BlogsProps[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(
    []
  );
  const [filteredExams, setFilteredExams] = useState<ExamProps[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogsProps[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [finalFilteredProperties, setFinalFilteredProperties] = useState<
    PropertyProps[]
  >([]);
  const [finalFilteredExams, setFinalFilteredExams] = useState<ExamProps[]>([]);
  const [finalFilteredBlogs, setFinalFilteredBlogs] = useState<BlogsProps[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchInput, query]);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const safeQuery = Array.isArray(query) ? query[0] : query || "";
      const lowerQuery = generateSlug(safeQuery);

      const filteredProps = properties.filter(
        (prop) =>
          generateSlug(prop.property_name || "").includes(lowerQuery) ||
          (typeof prop.category === "string" &&
            generateSlug(prop.category).includes(lowerQuery)) ||
          (typeof prop.property_type === "string" &&
            generateSlug(prop.property_type).includes(lowerQuery)) ||
          generateSlug(prop.property_city || "").includes(lowerQuery) ||
          generateSlug(prop.property_state || "").includes(lowerQuery) ||
          generateSlug(prop.property_country || "").includes(lowerQuery)
      );

      const filteredCrs = exams.filter(
        (exam) =>
          generateSlug(exam.exam_name || "").includes(lowerQuery) ||
          generateSlug(exam.exam_short_name || "").includes(lowerQuery)
      );

      const filteredBlgs = blogs.filter(
        (blog) =>
          generateSlug(blog.title || "").includes(lowerQuery) ||
          blog.category.some((cat) =>
            generateSlug(cat || "").includes(lowerQuery)
          ) ||
          blog.tags.some((tag) => generateSlug(tag || "").includes(lowerQuery))
      );

      setFilteredProperties(filteredProps);
      setFilteredExams(filteredCrs);
      setFilteredBlogs(filteredBlgs);
      setIsLoading(false);
    } else {
      setFilteredProperties([]);
      setFilteredExams([]);
      setFilteredBlogs([]);
      setIsLoading(false);
    }
  }, [query, properties, exams, blogs]);

  useEffect(() => {
    if (!searchInput.trim()) {
      setFinalFilteredProperties(filteredProperties);
      setFinalFilteredExams(filteredExams);
      setFinalFilteredBlogs(filteredBlogs);
      return;
    }

    const searchQuery = generateSlug(searchInput);

    const searchFilteredProps = filteredProperties.filter(
      (prop) =>
        generateSlug(prop.property_name || "").includes(searchQuery) ||
        (typeof prop.category === "string" &&
          generateSlug(prop.category).includes(searchQuery)) ||
        (typeof prop.property_type === "string" &&
          generateSlug(prop.property_type).includes(searchQuery)) ||
        generateSlug(prop.property_city || "").includes(searchQuery) ||
        generateSlug(prop.property_state || "").includes(searchQuery) ||
        generateSlug(prop.property_country || "").includes(searchQuery) ||
        generateSlug(prop.property_description || "").includes(searchQuery)
    );

    const searchFilteredExams = filteredExams.filter(
      (exam) =>
        generateSlug(exam.exam_name || "").includes(searchQuery) ||
        generateSlug(exam.exam_short_name || "").includes(searchQuery)
    );

    const searchFilteredBlogs = filteredBlogs.filter(
      (blog) =>
        generateSlug(blog.title || "").includes(searchQuery) ||
        generateSlug(blog.blog || "").includes(searchQuery) ||
        generateSlug(blog.author_name || "").includes(searchQuery) ||
        blog.category.some((cat) =>
          generateSlug(cat || "").includes(searchQuery)
        ) ||
        blog.tags.some((tag) => generateSlug(tag || "").includes(searchQuery))
    );

    setFinalFilteredProperties(searchFilteredProps);
    setFinalFilteredExams(searchFilteredExams);
    setFinalFilteredBlogs(searchFilteredBlogs);
  }, [searchInput, filteredProperties, filteredExams, filteredBlogs]);

  const getTotalResults = useCallback(() => {
    return (
      (finalFilteredProperties?.length || 0) +
      (finalFilteredExams?.length || 0) +
      (finalFilteredBlogs?.length || 0)
    );
  }, [finalFilteredBlogs, finalFilteredExams, finalFilteredProperties]);

  // Get paginated results based on active tab
  const paginatedResults = useMemo(() => {
    let allResults: SearchResult[] = [];

    if (activeTab === "all") {
      allResults = [
        ...finalFilteredProperties.map((item) => ({
          ...item,
          type: "property" as const,
        })),
        ...finalFilteredExams.map((item) => ({
          ...item,
          type: "exam" as const,
        })),
        ...finalFilteredBlogs.map((item) => ({
          ...item,
          type: "blog" as const,
        })),
      ];
    } else if (activeTab === "institutes") {
      allResults = finalFilteredProperties.map((item) => ({
        ...item,
        type: "property" as const,
      }));
    } else if (activeTab === "exams") {
      allResults = finalFilteredExams.map((item) => ({
        ...item,
        type: "exam" as const,
      }));
    } else if (activeTab === "blogs") {
      allResults = finalFilteredBlogs.map((item) => ({
        ...item,
        type: "blog" as const,
      }));
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return {
      items: allResults.slice(startIndex, endIndex),
      totalItems: allResults.length,
      totalPages: Math.ceil(allResults.length / ITEMS_PER_PAGE),
    };
  }, [
    activeTab,
    finalFilteredProperties,
    finalFilteredExams,
    finalFilteredBlogs,
    currentPage,
  ]);

  const getPropertiesAndExamWithCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const [propertyRes, locationRes, catRes, examRes] = await Promise.all([
        API.get("/property"),
        API.get("/locations"),
        API.get("/category"),
        API.get("/exam"),
      ]);

      const processedEmail = examRes.data.map((examItem: ExamProps) => {
        return {
          ...examItem,
        };
      });
      setExams(processedEmail);

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
    getPropertiesAndExamWithCategories();
    getBlogsWithCategoryAndTags();
  }, [getPropertiesAndExamWithCategories, getBlogsWithCategoryAndTags]);

  const clearSearch = () => {
    setSearchInput("");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Search" }, { label: `${query}` }]} />
      </div>
      <div className="container mx-auto max-w-7xl px-4 pb-8">
        <div className="relative flex-1 max-w-2xl mb-2">
          <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 h-5 w-5" />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search exams, properties, institutes, blogs..."
            className="w-full pl-10 pr-12 py-3 text-lg rounded-xl bg-white shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          />
          {searchInput && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-400 hover:text-indigo-600 transition"
            >
              <LuX className="h-5 w-5" />
            </button>
          )}
        </div>

        {(finalFilteredBlogs.length > 0 ||
          finalFilteredExams.length > 0 ||
          finalFilteredProperties.length > 0) && (
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-gray-700 text-lg">
                Found{" "}
                <span className="font-bold text-indigo-700">
                  {getTotalResults()}
                </span>{" "}
                results
                {paginatedResults.totalPages > 1 && (
                  <span className="text-gray-500 text-sm ml-2">
                    (Page {currentPage} of {paginatedResults.totalPages})
                  </span>
                )}
              </p>
              {searchInput && (
                <p className="text-gray-600 text-sm">
                  Filtered by: &quot;
                  <span className="font-medium">{searchInput}</span>&quot;
                </p>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {[
                {
                  key: "all",
                  label: "All",
                  icon: LuSearch,
                  count: getTotalResults(),
                },
                {
                  key: "institutes",
                  label: "Institutes",
                  icon: LuBuilding,
                  count: finalFilteredProperties.length,
                },
                {
                  key: "exams",
                  label: "Exams",
                  icon: LuGraduationCap,
                  count: finalFilteredExams.length,
                },
                {
                  key: "blogs",
                  label: "Blogs",
                  icon: LuBookOpen,
                  count: finalFilteredBlogs.length,
                },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-2 transform px-4 py-2 cursor-pointer rounded-xl text-sm shadow-sm transition-all ${
                    activeTab === tab.key
                      ? "bg-indigo-600 text-white scale-95"
                      : "bg-white text-indigo-600 hover:scale-105"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full ml-1">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {isLoading && <SearchLoader />}

        <div className="space-y-4">
          {paginatedResults.items.map((item, index) => {
            if (item.type === "property") {
              return <PropertyCard key={index} property={item} />;
            } else if (item.type === "exam") {
              return <ExamCard key={index} exam={item} />;
            } else if (item.type === "blog") {
              return <BlogCard key={index} blog={item} />;
            }
            return null;
          })}

          {/* No results */}
          {getTotalResults() === 0 && !isLoading && (
            <div className="text-center py-20">
              <div className="mb-4">
                <LuSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              </div>
              <p className="text-xl text-gray-600 font-medium">
                No results found
                {searchInput ? (
                  <>
                    {" "}
                    for &quot;<span className="font-bold">{query}</span>&quot;
                    with filter &quot;
                    <span className="font-bold">{searchInput}</span>&quot;
                  </>
                ) : (
                  <>
                    {" "}
                    for &quot;<span className="font-bold">{query}</span>&quot;
                  </>
                )}
              </p>
              <p className="text-gray-500 mt-2">
                Try searching with different keywords or clear the search
                filter.
              </p>
              {searchInput && (
                <button
                  onClick={clearSearch}
                  className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition"
                >
                  Clear Search Filter
                </button>
              )}
            </div>
          )}
        </div>

        {/* Pagination */}
        {paginatedResults.totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={paginatedResults.totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
