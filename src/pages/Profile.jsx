import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Pencil, Plus } from "lucide-react";
import { currentUser } from "../data/dummyData";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header Card */}
      <div className="bg-white rounded-lg shadow mb-4 overflow-hidden">
        {/* Cover Image */}
        <div className="h-32 bg-gradient-to-r from-primary-500 to-primary-700"></div>

        {/* Profile Info */}
        <div className="px-6 pb-6">
          <div className="flex justify-between items-start -mt-16 mb-4">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-4xl border-4 border-white">
              {currentUser.avatar}
            </div>
            <Link
              to="/profile/edit"
              className="mt-20 px-4 py-2 border border-primary-500 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors flex items-center gap-2"
            >
              <Pencil className="w-4 h-4" />
              Edit profile
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {currentUser.name}
          </h1>
          <p className="text-lg text-gray-700 mb-2">{currentUser.title}</p>
          <p className="text-sm text-gray-600 flex items-center gap-1 mb-3">
            <MapPin className="w-4 h-4" />
            {currentUser.location}
          </p>
          <p className="text-sm text-primary-600 font-semibold mb-4">
            {currentUser.connections} connections
          </p>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors">
              Open to
            </button>
            <button className="px-4 py-2 border border-gray-700 text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Add profile section
            </button>
            <button className="px-4 py-2 border border-gray-700 text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              More
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg shadow mb-4 p-6">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-semibold text-gray-900">About</h2>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Pencil className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <p className="text-gray-700 leading-relaxed">{currentUser.bio}</p>
      </div>

      {/* Experience Section */}
      <div className="bg-white rounded-lg shadow mb-4 p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        {currentUser.experience.map((exp) => (
          <div key={exp.id} className="flex gap-3 mb-4 last:mb-0">
            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
              🏢
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-sm text-gray-700">{exp.company}</p>
              <p className="text-sm text-gray-600">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-sm text-gray-600">{exp.location}</p>
              <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="bg-white rounded-lg shadow mb-4 p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Education</h2>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        {currentUser.education.map((edu) => (
          <div key={edu.id} className="flex gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
              🎓
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{edu.school}</h3>
              <p className="text-sm text-gray-700">{edu.degree}</p>
              <p className="text-sm text-gray-600">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {currentUser.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;