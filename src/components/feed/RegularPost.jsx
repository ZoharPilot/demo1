import { Heart } from 'lucide-react';
import React from 'react';

const RegularPost = ({ post }) => {
  return (
    <div className="bg-white mt-2 p-4">
      <div className="mb-6">
        {/* User Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
            <img 
                src={`./images/profiles/user_003.jpg`}
              alt={post.user}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="font-medium">{post.user}</p>
        </div>

        {/* Request Description */}
        <p className="text-gray-700 mb-4">{post.description}</p>

        {/* Images Scroll */}
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-2">
            {/* Original Image */}
            <div className="flex-none relative">
              <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                Original
              </div>
              <div className="w-64 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={`/images/Feeds/r/1.png`}
                  alt="Original request"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm font-medium">{post.user}</p>
                  <p className="text-xs text-gray-500">Original Request</p>
                  <div className="flex items-center gap-1 text-gray-600 mt-1">
                    <Heart size={14} />
                    <span className="text-sm">100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Editor's Images */}
            {post.edits.map((edit, index) => (
              <div key={index} className="flex-none relative">
                <div className="w-64 rounded-lg overflow-hidden shadow-md">
                  <img 
                   src={`/images/Feeds/r/${String(index + 2)}.png`}
                    alt={`${edit.editor}'s edit`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm font-medium">{edit.editor}</p>
                    <p className="text-xs text-gray-500">{edit.tool}</p>
                    <div className="flex items-center gap-1 text-gray-600 mt-1">
                      <Heart size={14} />
                      <span className="text-sm">{100 + (index + 1) * 10}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularPost;