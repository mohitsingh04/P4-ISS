import React, { useCallback, useEffect, useState } from "react";
import { MapPin, Clock, Calendar, Building } from "lucide-react";
import Link from "next/link";
import { stripHtmlAndLimit } from "../../context/CallBacks";
import { API } from "../../context/API";
import GetToken from "../../CallBacks/GetToken";
import CVModal from "./CVModal";

const JobCard = ({ job }) => {
  const token = GetToken();
  const [profile, setProfile] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [applications, setApplications] = useState([]);

  const getApplications = useCallback(async () => {
    if (profile) {
      try {
        const response = await API.get(`/apply/hiring/${profile?.uniqueId}`);
        setApplications(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [profile]);

  useEffect(() => {
    getApplications();
  }, [getApplications]);

  const getProfile = useCallback(async () => {
    try {
      const response = await API.get(`/profile/detail`);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  let hasStarted;
  const today = new Date();
  const startDateOnly = job?.start_date
    ? new Date(job?.start_date).toISOString().split("T")[0]
    : undefined;

  if (startDateOnly) {
    const startDate = new Date(startDateOnly);
    const todayDateOnly = new Date(today.toISOString().split("T")[0]);
    hasStarted = startDate <= todayDateOnly;
  } else {
    hasStarted = true;
  }

  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-5 border border-gray-100 fade-in">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:mr-4 flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden shadow-xs border border-gray-200">
                <img
                  src={
                    job?.property_logo?.[0]
                      ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${job?.property_logo?.[0]}`
                      : `https://img.freepik.com/free-vector/flat-illustration-international-yoga-day-celebration_23-2150525465.jpg?semt=ais_hybrid&w=740`
                  }
                  alt={`${job.property_name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-grow space-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <Link
                  href={`/${job?.title
                    ?.toLowerCase()
                    ?.replace(/[^a-z0-9\s-]/g, "")
                    ?.replace(/\s+/g, "-")
                    ?.replace(/-+/g, "-")}/${job?._id}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {job.title || "Job Title"}
                  </h3>
                </Link>

                <div className="flex items-center mt-2 md:mt-0">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {job.job_type || "Full Time"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 gap-y-1 gap-x-4">
                <div className="flex items-center">
                  <Building size={16} className="mr-1 text-gray-400" />
                  <span>{job.property_name || "Company Name"}</span>
                </div>

                <div className="flex items-center">
                  <MapPin size={16} className="mr-1 text-gray-400" />
                  <span>
                    {[
                      job.property_city,
                      job.property_state,
                      job.property_country,
                    ]
                      .filter(Boolean)
                      .join(", ") || "Location N/A"}
                  </span>
                </div>

                <div className="flex items-center">
                  <Clock size={16} className="mr-1 text-gray-400" />
                  <span>{job.experience || "Experience N/A"}</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm text-gray-600 line-clamp-2">
                  {stripHtmlAndLimit(job.job_description, 180) ||
                    "No description available."}
                  ...
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {job.skills?.slice(0, 4).map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
                {job.skills?.length > 4 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    +{job.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-between items-center md:items-end mt-4 md:mt-0 md:min-w-[120px]">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar size={14} className="mr-1" />
                <span>
                  {formatDate(job.start_date) || formatDate(Date.now())}
                </span>
              </div>
              {hasStarted ? (
                token ? (
                  applications?.some(
                    (item) =>
                      item.userId === 1 && item?.hiringId === job?.uniqueId
                  ) ? (
                    <button className="mt-4 w-full md:w-auto px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors">
                      Applied
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsOpen(true)}
                      className="mt-4 w-full md:w-auto px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
                    >
                      Apply Now
                    </button>
                  )
                ) : (
                  <button
                    onClick={() =>
                      (window.location.href = `${process.env.NEXT_PUBLIC_YP_URL}/auth/login`)
                    }
                    className="mt-4 w-full md:w-auto px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
                  >
                    Apply Now
                  </button>
                )
              ) : (
                <button className="mt-4 w-full md:w-auto px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors">
                  Upcoming
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <CVModal
          setIsOpen={setIsOpen}
          profile={profile}
          job={job}
          getApplications={getApplications}
        />
      )}
    </>
  );
};

export default JobCard;
