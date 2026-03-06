import React, { useState } from "react";
import { X, Image, Video, Calendar, FileText, Smile } from "lucide-react";

const CreatePostModal = ({ isOpen, onClose, onPost }) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onPost(content);
      setContent("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create a post</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
              YN
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Your Name</h3>
              <button className="text-sm text-gray-600 flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded-full">
                Anyone <span className="text-xs">▼</span>
              </button>
            </div>
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What do you want to talk about?"
            className="w-full h-48 p-4 border-none outline-none resize-none text-gray-800 text-sm"
            autoFocus
          />

          {/* Media Options */}
          <div className="flex gap-2 mt-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Add a photo">
              <Image className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Add a video">
              <Video className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Create an event">
              <Calendar className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Write an article">
              <FileText className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-auto" title="Add emoji">
              <Smile className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!content.trim()}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              content.trim()
                ? "bg-primary-600 text-white hover:bg-primary-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;