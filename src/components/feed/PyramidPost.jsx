import { ArrowRight, Heart, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';
import ImageModal from '../shared/ImageModal';

const PyramidPost = ({ post }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalData, setModalData] = useState(null);

  return (
    <div className="bg-white mt-2 p-4 min-h-[460px] pb-8 relative">
      <div className="mb-6">
        {/* User Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
            <img 
              src={`${import.meta.env.BASE_URL}images/profiles/user_002.jpg`}
              alt={post.user.name}
            />
          </div>
          <p className="font-medium">{post.user.name}</p>
        </div>

        {/* Request Description */}
        <p className="text-gray-700 mb-4">{post.description}</p>

        {/* Pyramid Steps */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-16 px-4 pt-4 items-stretch">
            {[
              { step: 0, isOriginal: true, editor: post.user.name, tool: "Upload", likesCount: post.user.likesCount, commentsCount: post.user.commentsCount },
              { step: 1, editor: "Lior", tool: "Midjourney", likesCount: 150, commentsCount: 20 },
              { step: 2, editor: "Maya", tool: "Photoshop", likesCount: 180, commentsCount: 25 },
              { step: 3, editor: "Yoni", tool: "Sora", likesCount: 210, commentsCount: 30, isVideo: true }
            ].map((item, index, array) => (
              <div key={item.step} className="flex-none relative min-h-[340px]">
                {item.isOriginal ? (
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Original
                  </div>
                ) : (
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 border-2 border-white shadow-lg">
                    {item.step}
                  </div>
                )}

                {/* תמונה או וידאו עם פונקציית פתיחת המודל */}
                <div 
                  className="w-64 rounded-lg overflow-hidden shadow-md bg-white flex flex-col h-full cursor-pointer"
                  onClick={() => {
                    setSelectedImage(item.isVideo 
                      ? `${import.meta.env.BASE_URL}images/Feeds/p/4.mp4` 
                      : `${import.meta.env.BASE_URL}images/Feeds/p/${String(index + 1)}.png`);
                    setModalData(item);
                  }}
                >
                  {item.isVideo ? (
                    <video 
                      src={`${import.meta.env.BASE_URL}images/Feeds/p/4.mp4`} 
                      controls 
                      className="w-[800px] aspect-[6/5] rounded-lg object-cover flex-grow"
                    />
                  ) : (
                    <img 
                      src={`${import.meta.env.BASE_URL}images/Feeds/p/${String(index + 1)}.png`} 
                      alt={`Step ${index + 1}`}
                      className="w-[800px] aspect-[6/5] rounded-lg object-cover flex-grow"
                    />
                  )}

                  <div className="p-4 flex flex-col">
                    <p className="text-sm font-medium">{item.editor}</p>
                    <p className="text-xs text-gray-500">{item.tool}</p>

                    <div className="flex items-center gap-3 text-gray-600 mt-1">
                      <Heart size={16} />
                      <span className="text-sm">{item.likesCount}</span>
                      <MessageCircle size={16} />
                      <span className="text-sm">{item.commentsCount}</span>
                    </div>
                  </div>
                </div>

                {/* Arrow between steps */}
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

      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        image={selectedImage} 
        data={modalData} 
      />
    </div>
  );
};

export default PyramidPost;
