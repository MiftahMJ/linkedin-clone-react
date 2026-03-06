import React, { useState } from "react";
import { Search, MoreHorizontal, Send, Paperclip, Smile, Image } from "lucide-react";
import { messages } from "../data/dummyData";

const Messaging = () => {
  const [selectedChat, setSelectedChat] = useState(messages[0]);
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim()) {
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  return (
    <div className="h-[calc(100vh-56px)] bg-gray-50">
      <div className="max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-12 h-full">
          {/* Conversations List */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-white border-r border-gray-300 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Messaging</h2>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search messages"
                  className="w-full pl-10 pr-4 py-2 bg-[#edf3f8] rounded border-none outline-none text-sm"
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => setSelectedChat(msg)}
                  className={`flex gap-3 p-4 cursor-pointer hover:bg-gray-100 transition-colors ${
                    selectedChat?.id === msg.id ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {msg.user.avatar}
                    </div>
                    {msg.user.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm truncate">
                        {msg.user.name}
                      </h3>
                      <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                        {msg.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{msg.lastMessage}</p>
                    {msg.unread > 0 && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-primary-600 text-white text-xs rounded-full">
                        {msg.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 bg-white flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {selectedChat.user.avatar}
                      </div>
                      {selectedChat.user.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{selectedChat.user.name}</h3>
                      <p className="text-xs text-gray-500">
                        {selectedChat.user.online ? "Active now" : "Offline"}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  <div className="flex justify-start">
                    <div className="max-w-xs">
                      <div className="bg-gray-200 rounded-2xl px-4 py-2">
                        <p className="text-sm text-gray-900">Hi! How are you doing?</p>
                      </div>
                      <span className="text-xs text-gray-500 mt-1 block">2h ago</span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-xs">
                      <div className="bg-primary-600 rounded-2xl px-4 py-2">
                        <p className="text-sm text-white">I'm doing great! Thanks for asking.</p>
                      </div>
                      <span className="text-xs text-gray-500 mt-1 block text-right">1h ago</span>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-xs">
                      <div className="bg-gray-200 rounded-2xl px-4 py-2">
                        <p className="text-sm text-gray-900">{selectedChat.lastMessage}</p>
                      </div>
                      <span className="text-xs text-gray-500 mt-1 block">{selectedChat.timestamp}</span>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-300">
                  <div className="flex items-end gap-2">
                    <div className="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                      <textarea
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Write a message..."
                        rows="1"
                        className="w-full px-4 py-2 resize-none outline-none text-sm"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage(e);
                          }
                        }}
                      />
                      <div className="flex items-center gap-2 px-3 pb-2">
                        <button type="button" className="p-1 hover:bg-gray-100 rounded">
                          <Paperclip className="w-5 h-5 text-gray-600" />
                        </button>
                        <button type="button" className="p-1 hover:bg-gray-100 rounded">
                          <Image className="w-5 h-5 text-gray-600" />
                        </button>
                        <button type="button" className="p-1 hover:bg-gray-100 rounded">
                          <Smile className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={!messageText.trim()}
                      className={`p-3 rounded-full transition-colors ${
                        messageText.trim()
                          ? "bg-primary-600 text-white hover:bg-primary-700"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <p>Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;