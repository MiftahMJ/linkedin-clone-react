import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { currentUser as initialUser } from "../data/dummyData";
import { ArrowLeft, Save, X } from "lucide-react";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser);

  const handleChange = (field, value) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleArrayChange = (field, index, subField, value) => {
    setUser((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) =>
        i === index ? { ...item, [subField]: value } : item
      ),
    }));
  };

  const handleAddItem = (field, template) => {
    setUser((prev) => ({
      ...prev,
      [field]: [...prev[field], { ...template, id: prev[field].length + 1 }],
    }));
  };

  const handleRemoveItem = (field, index) => {
    setUser((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile (dummy only):", user);
    navigate("/profile");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to profile
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="px-4 py-2 border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="profile-edit-form"
            className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold hover:bg-primary-700 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save changes
          </button>
        </div>
      </div>

      <form
        id="profile-edit-form"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Basic Info */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Basic information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full name
              </label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Headline
              </label>
              <input
                type="text"
                value={user.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={user.location}
                onChange={(e) => handleChange("location", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Avatar initials
              </label>
              <input
                type="text"
                value={user.avatar}
                maxLength={3}
                onChange={(e) => handleChange("avatar", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 uppercase"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              About
            </label>
            <textarea
              value={user.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Experience</h2>
            <button
              type="button"
              onClick={() =>
                handleAddItem("experience", {
                  title: "",
                  company: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                })
              }
              className="text-sm font-semibold text-primary-600 hover:text-primary-700"
            >
              + Add experience
            </button>
          </div>

          <div className="space-y-4">
            {user.experience.map((exp, index) => (
              <div
                key={exp.id || index}
                className="border border-gray-200 rounded-lg p-4 space-y-3 relative"
              >
                <button
                  type="button"
                  onClick={() => handleRemoveItem("experience", index)}
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 text-gray-400"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={exp.title}
                      onChange={(e) =>
                        handleArrayChange(
                          "experience",
                          index,
                          "title",
                          e.target.value
                        )
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) =>
                        handleArrayChange(
                          "experience",
                          index,
                          "company",
                          e.target.value
                        )
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) =>
                        handleArrayChange(
                          "experience",
                          index,
                          "location",
                          e.target.value
                        )
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Start date
                      </label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) =>
                          handleArrayChange(
                            "experience",
                            index,
                            "startDate",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        End date
                      </label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) =>
                          handleArrayChange(
                            "experience",
                            index,
                            "endDate",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Description
                  </label>
                  <textarea
                    value={exp.description || ""}
                    onChange={(e) =>
                      handleArrayChange(
                        "experience",
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Education</h2>
            <button
              type="button"
              onClick={() =>
                handleAddItem("education", {
                  school: "",
                  degree: "",
                  startDate: "",
                  endDate: "",
                })
              }
              className="text-sm font-semibold text-primary-600 hover:text-primary-700"
            >
              + Add education
            </button>
          </div>

          <div className="space-y-4">
            {user.education.map((edu, index) => (
              <div
                key={edu.id || index}
                className="border border-gray-200 rounded-lg p-4 space-y-3 relative"
              >
                <button
                  type="button"
                  onClick={() => handleRemoveItem("education", index)}
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 text-gray-400"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      School
                    </label>
                    <input
                      type="text"
                      value={edu.school}
                      onChange={(e) =>
                        handleArrayChange(
                          "education",
                          index,
                          "school",
                          e.target.value
                        )
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Degree
                    </label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) =>
                        handleArrayChange(
                          "education",
                          index,
                          "degree",
                          e.target.value
                        )
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Start year
                      </label>
                      <input
                        type="text"
                        value={edu.startDate}
                        onChange={(e) =>
                          handleArrayChange(
                            "education",
                            index,
                            "startDate",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        End year
                      </label>
                      <input
                        type="text"
                        value={edu.endDate}
                        onChange={(e) =>
                          handleArrayChange(
                            "education",
                            index,
                            "endDate",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                {skill}
                <button
                  type="button"
                  onClick={() =>
                    setUser((prev) => ({
                      ...prev,
                      skills: prev.skills.filter((_, i) => i !== index),
                    }))
                  }
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a new skill"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  e.preventDefault();
                  const value = e.target.value.trim();
                  setUser((prev) => ({
                    ...prev,
                    skills: [...prev.skills, value],
                  }));
                  e.target.value = "";
                }
              }}
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default ProfileEdit;

