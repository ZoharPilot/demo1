import { ArrowRight, Heart } from 'lucide-react';
import React from 'react';

const PyramidPost = ({ post }) => {
  return (
    <div className="bg-white mt-2 p-4">
      <div className="mb-6">
        {/* User Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
            <img 
              src={`/images/profiles/user_002.jpg`}
              alt={post.user}
            />
          </div>
          <p className="font-medium">{post.user}</p>
        </div>
        <p className="text-gray-700 mb-4">{post.description}</p>
        {/* Pyramid Steps */}
        <div className="overflow-x-auto">
          <div className="flex gap-16 px-4 pt-4">
            {[
              { step: 0, isOriginal: true, title: "Original Photo", editor: post.user, tool: "Upload" },
              { step: 1, title: "Initial Painting", editor: "Lior", tool: "Midjourney" },
              { step: 2, title: "Color Enhancement", editor: "Maya", tool: "Photoshop" },
              { step: 3, title: "Final Animation", editor: "Yoni", tool: "Sora" }
            ].map((item, index, array) => (
              <div key={item.step} className="flex-none relative">
                {item.isOriginal ? (
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Original
                  </div>
                ) : (
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 border-2 border-white shadow-lg">
                    {item.step}
                  </div>
                )}

                <div className="w-64 rounded-lg overflow-hidden shadow-md bg-white mb-2">
                  {index === array.length - 1 ? (
                    <video 
                      src={`/images/Feeds/p/4.mp4`} 
                      controls 
                      className="w-[800px] aspect-[6/5] rounded-lg object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={`/images/Feeds/p/${String(index + 1)}.png`} 
                      alt={`Feed ${index + 1}`}
                      className="w-[800px] aspect-[6/5] rounded-lg object-cover"
                    />
                  )}

                 
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-blue-600">{item.editor}</span>
                      <span className="text-gray-500">{item.tool}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart size={16} className="text-gray-600" />
                      <span className="text-sm">234</span>
                    </div>
                  </div>
                </div>
                {!item.isOriginal && index < array.length - 1 && (
                  <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-20">
                    <div className="bg-blue-600 text-white rounded-full p-3 shadow-lg">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                )}
              </div>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PyramidPost;