import React, { useState, useMemo } from "react";
import { Search, Bookmark, MapPin } from "lucide-react";
import JobCard from "../components/common/JobCard";
import { jobs as initialJobs } from "../data/dummyData";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);

  const toggleSaveJob = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchesTitle = searchQuery
        ? job.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesLocation = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;
      return matchesTitle && matchesLocation;
    });
  }, [searchQuery, location]);

  const savedJobObjects = initialJobs.filter((job) => savedJobs.includes(job.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-4">Search filters</h3>

            {/* Job Title Search */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job title
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. React Developer"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
              </div>
            </div>

            {/* Location Search */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Lahore"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
              </div>
            </div>

            {/* Job Type Filter (dummy UI only) */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Job type</h4>
              <div className="space-y-2">
                {["Full-time", "Part-time", "Contract", "Internship"].map(
                  (type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input type="checkbox" className="rounded text-primary-500" />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Experience Level (dummy UI only) */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Experience level
              </h4>
              <div className="space-y-2">
                {[
                  "Entry level",
                  "Mid-Senior level",
                  "Director",
                  "Executive",
                ].map((level) => (
                  <label
                    key={level}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input type="checkbox" className="rounded text-primary-500" />
                    <span className="text-sm text-gray-700">{level}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Saved Jobs */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-2 mb-3">
              <Bookmark className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">My jobs</h3>
            </div>
            {savedJobs.length === 0 ? (
              <p className="text-sm text-gray-600">
                You have not saved any jobs yet.
              </p>
            ) : (
              <div className="space-y-2">
                {savedJobObjects.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between text-sm text-gray-700"
                  >
                    <span className="truncate">{job.title}</span>
                    <button
                      className="text-xs text-primary-600 hover:underline"
                      onClick={() => toggleSaveJob(job.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                Recommended for you
              </h2>
              <p className="text-sm text-gray-600">
                Based on your profile and search history
              </p>
            </div>
            <div className="p-4">
              {filteredJobs.length === 0 ? (
                <p className="text-sm text-gray-600">
                  No jobs match your current filters.
                </p>
              ) : (
                filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={{
                      ...job,
                      saved: savedJobs.includes(job.id),
                    }}
                    onToggleSave={() => toggleSaveJob(job.id)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;