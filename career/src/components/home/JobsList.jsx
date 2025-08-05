import React, { useState } from "react";
import JobCard from "./JobCard";
import {
  Briefcase as BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Loading from "../Loading/Loading";

const JobsList = ({ jobs, filters, isLoading = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const filtepurpleJobs = jobs.filter((job) => {
    if (
      filters.search &&
      !job.title?.toLowerCase().includes(filters.search.toLowerCase()) &&
      !job.property_name?.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    if (
      filters.location &&
      !job.property_city
        ?.toLowerCase()
        .includes(filters.location.toLowerCase()) &&
      !job.property_country
        ?.toLowerCase()
        .includes(filters.location.toLowerCase()) &&
      !job.property_state
        ?.toLowerCase()
        .includes(filters.location.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.experience.length > 0 &&
      !filters.experience.some((exp) => job.experience === exp)
    ) {
      return false;
    }

    if (
      filters.jobType.length > 0 &&
      !filters.jobType.some((type) => job.job_type === type)
    ) {
      return false;
    }

    if (
      filters.city.length > 0 &&
      !filters.city.some(
        (loc) => job.city?.includes(loc) || job.property_city === loc
      )
    ) {
      return false;
    }
    if (
      filters.state.length > 0 &&
      !filters.state.some(
        (loc) => job.state?.includes(loc) || job.property_state === loc
      )
    ) {
      return false;
    }
    if (
      filters.country.length > 0 &&
      !filters.country.some(
        (loc) => job.country?.includes(loc) || job.property_country === loc
      )
    ) {
      return false;
    }

    if (
      filters.category.length > 0 &&
      !filters.category.some((cat) => job.category === cat)
    ) {
      return false;
    }

    if (
      filters.skills.length > 0 &&
      !filters.skills.some((skill) => job.skills?.includes(skill))
    ) {
      return false;
    }
    if (
      filters.qualifications.length > 0 &&
      !filters.qualifications.some((skill) =>
        job.qualification?.includes(skill)
      )
    ) {
      return false;
    }

    return true;
  });

  // Pagination calculations
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filtepurpleJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filtepurpleJobs.length / jobsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (filtepurpleJobs.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 h-96 flex flex-col items-center justify-center py-16 px-4 text-center">
        <BriefcaseBusiness className="w-16 h-16 text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No jobs found
        </h3>
        <p className="text-gray-500 max-w-md mb-6">
          We couldn't find any jobs matching your current filters. Try adjusting
          your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4 mb-4">
        <h2 className="text-lg font-medium text-gray-900">
          {filtepurpleJobs.length}{" "}
          {filtepurpleJobs.length === 1 ? "job" : "jobs"} found
        </h2>
        <p className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      <div className="space-y-4">
        {currentJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50"
            } border border-gray-300 transition-colors`}
          >
            <ChevronLeft size={20} />
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            const isCurrentPage = pageNumber === currentPage;
            const isNearCurrent = Math.abs(pageNumber - currentPage) <= 1;
            const isEndPage = pageNumber === 1 || pageNumber === totalPages;

            if (isNearCurrent || isEndPage) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  className={`px-4 py-2 rounded-md ${
                    isCurrentPage
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  } border border-gray-300 transition-colors`}
                >
                  {pageNumber}
                </button>
              );
            } else if (
              (pageNumber === currentPage - 2 && currentPage > 3) ||
              (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
            ) {
              return <span key={pageNumber}>...</span>;
            }
            return null;
          })}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50"
            } border border-gray-300 transition-colors`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
      {/* <CVModal /> */}
    </div>
  );
};

export default JobsList;
