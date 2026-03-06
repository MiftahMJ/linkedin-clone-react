import React, { useState } from "react";
import { Settings, MoreHorizontal } from "lucide-react";
import { notifications as initialNotifications } from "../data/dummyData";

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("all");

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "connection":
        return "👥";
      case "like":
        return "👍";
      case "comment":
        return "💬";
      case "job":
        return "💼";
      default:
        return "🔔";
    }
  };

  const filteredNotifications =
    filter === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 px-4 border-b border-gray-200">
          <button
            onClick={() => setFilter("all")}
            className={`py-3 px-2 text-sm font-semibold transition-colors relative ${
              filter === "all" ? "text-gray-900" : "text-gray-600"
            }`}
          >
            All
            {filter === "all" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#01754f]" />
            )}
          </button>
          <button
            onClick={() => setFilter("unread")}
            className={`py-3 px-2 text-sm font-semibold transition-colors relative ${
              filter === "unread" ? "text-gray-900" : "text-gray-600"
            }`}
          >
            Unread
            {filter === "unread" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#01754f]" />
            )}
          </button>
        </div>

        {/* Notifications List */}
        <div>
          {filteredNotifications.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No notifications to display
            </div>
          ) : (
            filteredNotifications.map((notif) => (
              <div
                key={notif.id}
                onClick={() => markAsRead(notif.id)}
                className={`flex gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 ${
                  !notif.read ? "bg-blue-50" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  {notif.user ? (
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {notif.user.avatar}
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                      {getNotificationIcon(notif.type)}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    {notif.user && (
                      <span className="font-semibold">{notif.user.name} </span>
                    )}
                    {notif.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{notif.timestamp}</p>
                </div>
                {!notif.read && (
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </div>
                )}
                <button className="flex-shrink-0 p-1 hover:bg-gray-200 rounded-full">
                  <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;