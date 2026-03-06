import React, { useState } from "react";
import { Users, UserPlus } from "lucide-react";
import ConnectionCard from "../components/common/ConnectionCard";
import { connections, suggestedConnections } from "../data/dummyData";

const Network = () => {
  const [activeTab, setActiveTab] = useState("connections");

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar - Navigation */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold p-4 border-b border-gray-200">
              Manage my network
            </h2>
            <nav>
              <button
                onClick={() => setActiveTab("connections")}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors ${
                  activeTab === "connections" ? "bg-gray-100" : ""
                }`}
              >
                <Users className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Connections</span>
                <span className="ml-auto text-sm text-gray-500">{connections.length}</span>
              </button>
              <button
                onClick={() => setActiveTab("invitations")}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors ${
                  activeTab === "invitations" ? "bg-gray-100" : ""
                }`}
              >
                <UserPlus className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Invitations</span>
                <span className="ml-auto text-sm text-gray-500">5</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9">
          {activeTab === "connections" ? (
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  {connections.length} Connections
                </h2>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {connections.map((connection) => (
                    <div key={connection.id} className="border border-gray-200 rounded-lg p-4">
                      <ConnectionCard connection={connection} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Invitations */}
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Invitations (5)
                  </h2>
                </div>
                <div className="p-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-100 last:border-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                        IN
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Invitation {i}</h4>
                        <p className="text-sm text-gray-600">Software Engineer</p>
                        <p className="text-xs text-gray-500 mb-2">5 mutual connections</p>
                        <div className="flex gap-2">
                          <button className="px-4 py-1.5 bg-primary-600 text-white rounded-full text-sm font-semibold hover:bg-primary-700 transition-colors">
                            Accept
                          </button>
                          <button className="px-4 py-1.5 border border-gray-600 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                            Ignore
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* People you may know */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    People you may know
                  </h2>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {suggestedConnections.map((connection) => (
                      <div key={connection.id} className="border border-gray-200 rounded-lg p-4">
                        <ConnectionCard connection={connection} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Network;