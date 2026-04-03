import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <img 
            src={post.user.avatar} 
            alt={post.user.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{post.user.name}</h3>
            <p className="text-xs text-gray-500">{post.user.location}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-[4/5] bg-gray-100">
        <img 
          src={post.image} 
          alt={post.caption}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLiked(!liked)}
              className={`transition-transform active:scale-125 ${liked ? 'text-instagram-pink' : 'text-gray-700 hover:text-gray-900'}`}
            >
              <Heart size={24} fill={liked ? "#E1306C" : "none"} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <MessageCircle size={24} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <Send size={24} />
            </button>
          </div>
          <button 
            onClick={() => setSaved(!saved)}
            className={`${saved ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}
          >
            <Bookmark size={24} fill={saved ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Likes */}
        <div className="mb-2">
          <p className="text-sm text-gray-800">
            Liked by <span className="font-semibold">{post.likedBy}</span> and <span className="font-semibold">{post.likes} others</span>
          </p>
        </div>

        {/* Caption */}
        <p className="text-sm text-gray-800 mb-1">
          {post.caption}
        </p>

        {/* Comments & Time */}
        <p className="text-sm text-gray-500 mb-1 cursor-pointer">
          View all {post.comments} comments
        </p>
        <p className="text-xs text-gray-400 uppercase tracking-wide">
          {post.time} ago
        </p>
      </div>
    </div>
  );
};

export default PostCard;