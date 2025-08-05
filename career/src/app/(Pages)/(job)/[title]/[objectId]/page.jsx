"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  Briefcase,
  ArrowLeft,
  Building,
  CheckCircle,
  IndianRupee,
  Euro,
} from "lucide-react";
import { API } from "../../../../../context/API";
import GetToken from "../../../../../CallBacks/GetToken";
import CVModal from "../../../../..//components/home/CVModal";

export default function JobDetailPage() {
  const { objectId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [job, setJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [profile, setProfile] = useState();
  const token = GetToken();
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

  const getJobs = useCallback(async () => {
    try {
      const [hiringResponse, propertyResponse, locationResponse] =
        await Promise.all([
          API.get(`/hiring`),
          API.get(`/property`),
          API.get(`/locations`),
        ]);

      const hiringData = hiringResponse.data;
      const propertyData = propertyResponse.data;
      const locationData = locationResponse.data;

      const propertyMap = propertyData.reduce((acc, property) => {
        acc[property.uniqueId] = property;
        return acc;
      }, {});

      const locationMap = locationData.reduce((acc, location) => {
        acc[location.property_id] = location;
        return acc;
      }, {});

      const enrichedHiringData = await hiringData.map((hiring) => ({
        ...hiring,
        property_name: propertyMap[hiring.property_id]?.property_name || null,
        property_address:
          locationMap[hiring.property_id]?.property_address || null,
        property_city: locationMap[hiring.property_id]?.property_city || null,
        property_state: locationMap[hiring.property_id]?.property_state || null,
        property_country:
          locationMap[hiring.property_id]?.property_country || null,
        property_logo: propertyMap[hiring.property_id]?.property_logo || null,
      }));

      setJobs(enrichedHiringData.filter((item) => item.status === "Active"));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const [relatedJobs, setRelatedJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  useEffect(() => {
    const foundJob = jobs.find((j) => j._id === objectId);
    if (foundJob) {
      setJob(foundJob);
      if (foundJob.job_type) {
        const related = jobs
          .filter(
            (j) =>
              j._id !== objectId &&
              (j.job_type === foundJob.job_type ||
                j.skills?.some((skill) => foundJob.skills?.includes(skill)))
          )
          .slice(0, 3);
        setRelatedJobs(related);
      }
    }
    window.scrollTo(0, 0);
  }, [objectId, jobs]);

  let hasExpiredJob;
  const today = new Date();
  const endDateOnly = job?.end_date
    ? new Date(job.end_date).toISOString().split("T")[0]
    : undefined;

  if (endDateOnly) {
    const endDate = new Date(endDateOnly);
    const todayDateOnly = new Date(today.toISOString().split("T")[0]);
    hasExpiredJob = endDate <= todayDateOnly;
  } else {
    hasExpiredJob = true;
  }

  let hasStarted;
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

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
        <div className="mb-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-purple-600 hover:text-purple-700 flex items-center font-medium transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to jobs
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            {/* Job Header */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <div className="sm:flex sm:items-start sm:justify-between">
                <div className="flex items-start">
                  {job?.property_logo?.[0] && (
                    <div className="mr-6 flex-shrink-0">
                      <img
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${job?.property_logo?.[0]}`}
                        alt={`${job.property_name} logo`}
                        className="h-20 w-20 rounded-lg shadow-sm object-cover border border-gray-100"
                      />
                    </div>
                  )}
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h1>
                    <div className="flex items-center text-gray-700 mb-4">
                      <Building size={18} className="mr-2 text-gray-400" />
                      <span className="font-medium">{job.property_name}</span>
                    </div>
                    {job.property_address && (
                      <div className="flex items-start text-gray-600">
                        <MapPin
                          size={18}
                          className="mr-2 mt-0.5 text-gray-400 flex-shrink-0"
                        />
                        <span>
                          {job.property_address}, {job.property_city},{" "}
                          {job.property_state}, {job.property_country}{" "}
                          {job.property_pincode}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {job.job_type && (
                  <div className="bg-indigo-50 px-4 py-3 rounded-lg">
                    <div className="text-xs text-indigo-600 font-medium mb-1">
                      Job Type
                    </div>
                    <div className="flex items-center text-gray-900">
                      <Briefcase size={16} className="mr-2 text-indigo-500" />
                      <span className="font-medium">{job.job_type}</span>
                    </div>
                  </div>
                )}

                {job.experience && (
                  <div className="bg-green-50 px-4 py-3 rounded-lg">
                    <div className="text-xs text-green-600 font-medium mb-1">
                      Experience
                    </div>
                    <div className="flex items-center text-gray-900">
                      <Clock size={16} className="mr-2 text-green-500" />
                      <span className="font-medium">{job.experience}</span>
                    </div>
                  </div>
                )}

                {job.salary && job.salary[0] && (
                  <div className="bg-red-50 px-4 py-3 rounded-lg">
                    <div className="text-xs text-red-600 font-medium mb-1">
                      Salary
                    </div>
                    <div className="space-y-1">
                      {job.salary[0]?.DOLLAR && (
                        <div className="flex items-center text-gray-900">
                          <DollarSign size={16} className="mr-2 text-red-500" />
                          <span className="font-medium">
                            {job.salary[0].DOLLAR}
                          </span>
                        </div>
                      )}
                      {job.salary[0]?.INR && (
                        <div className="flex items-center text-gray-900">
                          <IndianRupee
                            size={16}
                            className="mr-2 text-red-500"
                          />
                          <span className="font-medium">
                            {job.salary[0].INR}
                          </span>
                        </div>
                      )}
                      {job.salary[0]?.EURO && (
                        <div className="flex items-center text-gray-900">
                          <Euro size={16} className="mr-2 text-red-500" />
                          <span className="font-medium">
                            {job.salary[0].EURO}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {job.end_date && (
                  <div className="bg-emerald-50 px-4 py-3 rounded-lg">
                    <div className="text-xs text-emerald-600 font-medium mb-1">
                      Application Deadline
                    </div>
                    <div className="flex items-center text-gray-900">
                      <Calendar size={16} className="mr-2 text-emerald-500" />
                      <span className="font-medium">
                        {new Date(job.end_date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                About the Role
              </h2>
              <div
                className="prose max-w-none text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: job.job_description }}
              />
            </div>

            {/* Job Requirements */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Requirements
              </h2>

              {job.skills && job.skills.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Skills & Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-purple-50 text-purple-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {job.qualification && job.qualification.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Qualifications
                  </h3>
                  <ul className="space-y-3">
                    {job.qualification.map((qualification) => (
                      <li key={qualification} className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-gray-600">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1 mt-6 lg:mt-0">
            {/* Apply Now Card */}

            {!hasExpiredJob && (
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6 sticky top-20">
                {hasStarted ? (
                  token ? (
                    applications?.some(
                      (item) =>
                        item.userId === 1 && item?.hiringId === job?.uniqueId
                    ) ? (
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mb-4">
                        Applied
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsOpen(true)}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mb-4"
                      >
                        Apply Now
                      </button>
                    )
                  ) : (
                    <button
                      onClick={() =>
                        (window.location.href = `${process.env.NEXT_PUBLIC_YP_URL}/auth/login`)
                      }
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mb-4"
                    >
                      Apply Now
                    </button>
                  )
                ) : (
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mb-4">
                    Upcoming
                  </button>
                )}
                <p className="text-center text-sm text-gray-500">
                  Be an early applicant
                </p>
              </div>
            )}

            {relatedJobs.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Similar Jobs
                </h2>

                <div className="space-y-4">
                  {relatedJobs.map((relatedJob, index) => (
                    <Link
                      key={index}
                      href={`/${relatedJob?.title}/${relatedJob?._id}`}
                      className="block p-4 rounded-lg border border-gray-100 hover:border-purple-100 hover:bg-purple-50/30 transition-all"
                    >
                      <h3 className="font-medium text-gray-900 hover:text-purple-600 mb-2">
                        {relatedJob.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {relatedJob.property_name}
                      </p>
                      <div className="flex flex-wrap text-xs text-gray-500 gap-3">
                        {relatedJob.property_city && (
                          <div className="flex items-center">
                            <MapPin size={12} className="mr-1" />
                            <span>{relatedJob.property_city}</span>
                          </div>
                        )}
                        {relatedJob.job_type && (
                          <div className="flex items-center">
                            <Briefcase size={12} className="mr-1" />
                            <span>{relatedJob.job_type}</span>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
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
    </div>
  );
}
