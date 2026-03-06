import React from "react";
import { Bookmark } from "lucide-react";

const JobCard = ({ job, onToggleSave }) => {
  const isSaved = job.saved;

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-600 font-semibold flex-shrink-0">
            {job.logo}
          </div>
          <div>
            <h3 className="font-semibold text-primary-600 hover:underline">
              {job.title}
            </h3>
            <p className="text-sm text-gray-700">{job.company}</p>
            <p className="text-sm text-gray-600">{job.location}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave && onToggleSave();
          }}
          className={`text-gray-600 hover:text-primary-600 ${
            isSaved ? "text-primary-600" : ""
          }`}
        >
          <Bookmark className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {job.description}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{job.postedDate}</span>
        <span>{job.applicants} applicants</span>
      </div>
    </div>
  );
};

export default JobCard;