// import React, { useState } from "react";
// import { ThumbsUp, MessageCircle, Repeat2, Send, MoreHorizontal } from "lucide-react";

// const PostCard = ({ post }) => {
//   const [liked, setLiked] = useState(post.liked || false);
//   const [likes, setLikes] = useState(post.likes);

//   const handleLike = () => {
//     setLiked(!liked);
//     setLikes(liked ? likes - 1 : likes + 1);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow mb-4">
//       {/* Post Header */}
//       <div className="p-4">
//         <div className="flex justify-between">
//           <div className="flex gap-3">
//             <div className="w-12 h-12 bg-gradient-to-br from-linkedin-blue to-linkedin-blue-dark rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
//               {post.author.avatar}
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-900 hover:text-linkedin-blue cursor-pointer">
//                 {post.author.name}
//               </h3>
//               <p className="text-sm text-gray-600">{post.author.title}</p>
//               <p className="text-xs text-gray-500 flex items-center gap-1">
//                 {post.timestamp} • <span className="text-base">🌐</span>
//               </p>
//             </div>
//           </div>
//           <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
//             <MoreHorizontal className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>

//         {/* Post Content */}
//         <div className="mt-3">
//           <p className="text-gray-800 leading-relaxed whitespace-pre-line">
//             {post.content}
//           </p>
//         </div>

//         {/* Post Image (if exists) */}
//         {post.image && (
//           <img
//             src={post.image}
//             alt="Post content"
//             className="mt-4 rounded-lg w-full object-cover"
//           />
//         )}
//       </div>

//       {/* Engagement Stats */}
//       <div className="px-4 py-2 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600">
//         <button className="hover:text-linkedin-blue hover:underline">
//           {likes} {likes === 1 ? 'like' : 'likes'}
//         </button>
//         <div className="flex gap-3">
//           <button className="hover:text-linkedin-blue hover:underline">
//             {post.comments} {post.comments === 1 ? 'comment' : 'comments'}
//           </button>
//           <button className="hover:text-linkedin-blue hover:underline">
//             {post.shares} {post.shares === 1 ? 'share' : 'shares'}
//           </button>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="px-2 py-1 border-t border-gray-200 flex items-center">
//         <button
//           onClick={handleLike}
//           className={`flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded transition-colors flex-1 justify-center ${
//             liked ? 'text-linkedin-blue font-semibold' : 'text-gray-600'
//           }`}
//         >
//           <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
//           <span className="text-sm font-medium">Like</span>
//         </button>
//         <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded transition-colors flex-1 justify-center text-gray-600">
//           <MessageCircle className="w-5 h-5" />
//           <span className="text-sm font-medium">Comment</span>
//         </button>
//         <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded transition-colors flex-1 justify-center text-gray-600">
//           <Repeat2 className="w-5 h-5" />
//           <span className="text-sm font-medium">Repost</span>
//         </button>
//         <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded transition-colors flex-1 justify-center text-gray-600">
//           <Send className="w-5 h-5" />
//           <span className="text-sm font-medium">Send</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PostCard;
import React, { useState } from "react";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  Send,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";

// Simple dummy comments if post doesn't provide any
const defaultComments = [
  {
    id: 1,
    author: { name: "Alex Thompson", avatar: "AT", title: "Frontend Developer" },
    content: "Amazing work! Thanks for sharing these insights.",
    timestamp: "1h ago",
  },
  {
    id: 2,
    author: { name: "Jennifer Lee", avatar: "JL", title: "DevOps Engineer" },
    content: "Totally agree, this is super helpful 🚀",
    timestamp: "30m ago",
  },
];

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.liked || false);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(post.commentsList || defaultComments);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: comments.length + 1,
      author: {
        name: "You",
        avatar: "YN",
        title: "MERN Stack Developer",
      },
      content: commentText.trim(),
      timestamp: "Just now",
    };

    setComments([newComment, ...comments]);
    setCommentText("");
    if (!showComments) setShowComments(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft mb-4 hover:shadow-medium transition-shadow">
      {/* Post Header */}
      <div className="p-5">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-semibold flex-shrink-0">
              {post.author.avatar}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 hover:text-primary-600 cursor-pointer transition-colors">
                {post.author.name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-1">
                {post.author.title}
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                {post.timestamp} • <span className="text-base">🌐</span>
              </p>
            </div>
          </div>
          <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
            <MoreHorizontal className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Post Content */}
        <div className="mt-4">
          <p className="text-gray-800 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>

        {/* Post Image */}
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="mt-4 rounded-xl w-full object-cover"
          />
        )}
      </div>

      {/* Engagement Stats */}
      <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600">
        <button className="hover:text-primary-600 hover:underline transition-colors flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          {likes} {likes === 1 ? "reaction" : "reactions"}
        </button>
        <div className="flex gap-4">
          <button
            className="hover:text-primary-600 hover:underline transition-colors"
            onClick={() => setShowComments(!showComments)}
          >
            {comments.length} comments
          </button>
          <button className="hover:text-primary-600 hover:underline transition-colors">
            {post.shares} shares
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-3 py-2 border-t border-gray-100 flex items-center gap-1">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-2.5 hover:bg-gray-50 rounded-xl transition-all flex-1 justify-center ${
            liked ? "text-primary-600 font-semibold" : "text-gray-600"
          }`}
        >
          <ThumbsUp className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
          <span className="text-sm font-medium">Like</span>
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-50 rounded-xl transition-all flex-1 justify-center text-gray-600"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Comment</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-50 rounded-xl transition-all flex-1 justify-center text-gray-600">
          <Share2 className="w-5 h-5" />
          <span className="text-sm font-medium">Share</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-50 rounded-xl transition-all flex-1 justify-center text-gray-600">
          <Send className="w-5 h-5" />
          <span className="text-sm font-medium">Send</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-5 pb-4 pt-2 border-t border-gray-100 space-y-3">
          {/* Add Comment */}
          <form onSubmit={handleAddComment} className="flex items-start gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
              YN
            </div>
            <div className="flex-1">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
                rows={1}
                className="w-full px-3 py-2 border border-gray-200 rounded-2xl text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  disabled={!commentText.trim()}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                    commentText.trim()
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Post
                </button>
              </div>
            </div>
          </form>

          {/* Comment List */}
          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-xs font-semibold flex-shrink-0">
                  {comment.author.avatar}
                </div>
                <div className="flex-1 bg-gray-50 rounded-2xl px-3 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {comment.author.name}
                      </p>
                      {comment.author.title && (
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {comment.author.title}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-gray-400">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-800 whitespace-pre-line">
                    {comment.content}
                  </p>
                  <div className="mt-1 flex gap-3 text-xs text-gray-500">
                    <button className="hover:text-primary-600 font-semibold">
                      Like
                    </button>
                    <button className="hover:text-primary-600 font-semibold">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;