// import React, { useState } from "react";
// import { Image, Video, Calendar, FileText } from "lucide-react";
// import PostCard from "../components/common/PostCard";
// import ProfileCard from "../components/common/ProfileCard";
// import ConnectionCard from "../components/common/ConnectionCard";
// import CreatePostModal from "../components/common/CreatePostModal";
// import { currentUser, posts as initialPosts, suggestedConnections } from "../data/dummyData";

// const Home = () => {
//   const [posts, setPosts] = useState(initialPosts);
//   const [showCreatePost, setShowCreatePost] = useState(false);
//   const [activeTab, setActiveTab] = useState("feed");

//   const handleCreatePost = (content) => {
//     const newPost = {
//       id: posts.length + 1,
//       author: {
//         id: currentUser.id,
//         name: currentUser.name,
//         title: currentUser.title,
//         avatar: currentUser.avatar
//       },
//       content,
//       image: null,
//       timestamp: "Just now",
//       likes: 0,
//       comments: 0,
//       shares: 0,
//       liked: false
//     };
//     setPosts([newPost, ...posts]);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//         {/* Left Sidebar */}
//         <div className="lg:col-span-3 hidden lg:block">
//           <ProfileCard user={currentUser} />
//         </div>

//         {/* Main Feed */}
//         <div className="lg:col-span-6">
//           {/* Create Post */}
//           <div className="bg-white rounded-lg shadow mb-4 p-4">
//             <div className="flex gap-3 mb-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-linkedin-blue to-linkedin-blue-dark rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
//                 {currentUser.avatar}
//               </div>
//               <button
//                 onClick={() => setShowCreatePost(true)}
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-full text-left text-gray-600 hover:bg-gray-100 transition-colors font-medium"
//               >
//                 Start a post
//               </button>
//             </div>

//             <div className="flex items-center justify-around pt-2">
//               <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded transition-colors">
//                 <Image className="w-5 h-5 text-[#378fe9]" />
//                 <span className="text-sm font-semibold text-gray-600">Photo</span>
//               </button>
//               <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded transition-colors">
//                 <Video className="w-5 h-5 text-[#5f9b41]" />
//                 <span className="text-sm font-semibold text-gray-600">Video</span>
//               </button>
//               <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded transition-colors">
//                 <Calendar className="w-5 h-5 text-[#c37d16]" />
//                 <span className="text-sm font-semibold text-gray-600">Event</span>
//               </button>
//               <button className="hidden sm:flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded transition-colors">
//                 <FileText className="w-5 h-5 text-[#e06847]" />
//                 <span className="text-sm font-semibold text-gray-600">Write article</span>
//               </button>
//             </div>
//           </div>

//           {/* Feed Tabs */}
//           <div className="mb-4">
//             <div className="flex gap-1 border-b border-gray-300">
//               <button
//                 onClick={() => setActiveTab("feed")}
//                 className={`px-4 py-3 text-sm font-semibold transition-colors relative ${
//                   activeTab === "feed"
//                     ? "text-gray-900"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 Feed
//                 {activeTab === "feed" && (
//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#01754f]" />
//                 )}
//               </button>
//               <button
//                 onClick={() => setActiveTab("following")}
//                 className={`px-4 py-3 text-sm font-semibold transition-colors relative ${
//                   activeTab === "following"
//                     ? "text-gray-900"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 Following
//                 {activeTab === "following" && (
//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#01754f]" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Posts */}
//           {posts.map((post) => (
//             <PostCard key={post.id} post={post} />
//           ))}
//         </div>

//         {/* Right Sidebar */}
//         <div className="lg:col-span-3 hidden lg:block">
//           <div className="bg-white rounded-lg shadow p-4 sticky top-20">
//             <h3 className="font-semibold text-gray-900 mb-4">
//               Add to your feed
//             </h3>
//             {suggestedConnections.map((connection) => (
//               <ConnectionCard key={connection.id} connection={connection} />
//             ))}
//             <button className="text-sm text-gray-600 hover:text-linkedin-blue font-semibold mt-2">
//               View all recommendations →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Create Post Modal */}
//       <CreatePostModal
//         isOpen={showCreatePost}
//         onClose={() => setShowCreatePost(false)}
//         onPost={handleCreatePost}
//       />
//     </div>
//   );
// };

// export default Home;
import React, { useState } from "react";
import { Image, Video, Calendar, FileText, TrendingUp } from "lucide-react";
import PostCard from "../components/common/PostCard";
import ProfileCard from "../components/common/ProfileCard";
import ConnectionCard from "../components/common/ConnectionCard";
import CreatePostModal from "../components/common/CreatePostModal";
import AIChatbot from "../components/common/AIChatbot";
import { currentUser, posts as initialPosts, suggestedConnections } from "../data/dummyData";

const Home = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [activeTab, setActiveTab] = useState("feed");

  const handleCreatePost = (content) => {
    const newPost = {
      id: posts.length + 1,
      author: {
        id: currentUser.id,
        name: currentUser.name,
        title: currentUser.title,
        avatar: currentUser.avatar
      },
      content,
      image: null,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      shares: 0,
      liked: false
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 hidden lg:block">
          <ProfileCard user={currentUser} />

          {/* Trending Topics */}
          <div className="bg-white rounded-2xl shadow-soft p-4 mt-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-primary-600" />
              <h3 className="font-semibold text-gray-900">Trending</h3>
            </div>
            <div className="space-y-3">
              {["#WebDevelopment", "#AI", "#CareerGrowth"].map((tag, idx) => (
                <button key={idx} className="block w-full text-left hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <p className="text-sm font-semibold text-primary-600">{tag}</p>
                  <p className="text-xs text-gray-500">{Math.floor(Math.random() * 10)}K posts</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-6">
          {/* Create Post */}
          <div className="bg-white rounded-2xl shadow-soft mb-4 p-5">
            <div className="flex gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-semibold flex-shrink-0">
                {currentUser.avatar}
              </div>
              <button
                onClick={() => setShowCreatePost(true)}
                className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-xl text-left text-gray-500 hover:border-primary-300 hover:bg-gray-50 transition-all font-medium"
              >
                Share your thoughts...
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button className="flex items-center justify-center gap-2 px-3 py-2.5 hover:bg-primary-50 rounded-xl transition-all">
                <Image className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-gray-700">Photo</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-3 py-2.5 hover:bg-secondary-50 rounded-xl transition-all">
                <Video className="w-5 h-5 text-secondary-600" />
                <span className="text-sm font-semibold text-gray-700">Video</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-3 py-2.5 hover:bg-accent-50 rounded-xl transition-all">
                <Calendar className="w-5 h-5 text-accent-600" />
                <span className="text-sm font-semibold text-gray-700">Event</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-3 py-2.5 hover:bg-gray-100 rounded-xl transition-all">
                <FileText className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Article</span>
              </button>
            </div>
          </div>

          {/* Feed Tabs */}
          <div className="mb-4 bg-white rounded-2xl shadow-soft p-1">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab("feed")}
                className={`flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${activeTab === "feed"
                  ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
                  : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                For You
              </button>
              <button
                onClick={() => setActiveTab("following")}
                className={`flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${activeTab === "following"
                  ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
                  : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                Following
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 hidden lg:block">
          <div className="bg-white rounded-2xl shadow-soft p-5 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">
              Suggested Connections
            </h3>
            {suggestedConnections.map((connection) => (
              <ConnectionCard key={connection.id} connection={connection} />
            ))}
            <button className="text-sm text-primary-600 hover:text-primary-700 font-semibold mt-3 w-full text-center py-2 hover:bg-primary-50 rounded-lg transition-all">
              View all →
            </button>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={showCreatePost}
        onClose={() => setShowCreatePost(false)}
        onPost={handleCreatePost}
      />

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default Home;