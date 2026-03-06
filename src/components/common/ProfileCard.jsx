import React from "react";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Cover Image */}
      <div className="h-14 bg-gradient-to-r from-primary-500 to-primary-700"></div>

      {/* Profile Info */}
      <div className="px-4 pb-4 border-b border-gray-200">
        <div className="flex flex-col items-center -mt-8">
          <Link to="/profile" className="relative group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white">
              {user.avatar}
            </div>
          </Link>
          <Link
            to="/profile"
            className="mt-2 font-semibold text-gray-900 hover:text-primary-600 text-center"
          >
            {user.name}
          </Link>
          <p className="text-sm text-gray-600 text-center line-clamp-2">
            {user.title}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
        <div className="flex justify-between text-xs mb-2">
          <span className="text-gray-600">Profile viewers</span>
          <span className="text-primary-600 font-semibold">{user.profileViews}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-600">Post impressions</span>
          <span className="text-primary-600 font-semibold">{user.postImpressions}</span>
        </div>
      </div>

      {/* My Items */}
      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Bookmark className="w-4 h-4" />
          <span>My items</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
