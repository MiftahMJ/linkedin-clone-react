import React, { useState } from "react";
import { UserPlus, UserCheck } from "lucide-react";

const ConnectionCard = ({ connection }) => {
  const [isConnected, setIsConnected] = useState(connection.connected || false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-100 last:border-0">
      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
        {connection.avatar}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 text-sm hover:text-primary-600 cursor-pointer transition-colors">
          {connection.name}
        </h4>
        <p className="text-xs text-gray-600 line-clamp-2 mb-1">
          {connection.title}
        </p>
        {connection.mutualConnections > 0 && (
          <p className="text-xs text-gray-500 mb-2">
            {connection.mutualConnections} mutual connections
          </p>
        )}
        <button
          onClick={handleConnect}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-1 ${isConnected
            ? "border border-gray-600 text-gray-700 hover:bg-gray-100"
            : "border border-primary-500 text-primary-600 hover:bg-primary-50"
            }`}
        >
          {isConnected ? (
            <>
              <UserCheck className="w-4 h-4" />
              Connected
            </>
          ) : (
            <>
              <UserPlus className="w-4 h-4" />
              Connect
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ConnectionCard;