import React, { useState } from 'react';
import ImageModal from '../shared/ImageModal';

const RegularPost = ({ post }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalData, setModalData] = useState(null);

  return (
    <div className="bg-white mt-2 p-4">
      <div className="mb-6">
        {/* User Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
            <img 
              src={`${import.meta.env.BASE_URL}images/profiles/user_003.jpg`}
              alt={post.user.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="font-medium">{post.user.name}</p>
        </div>

        {/* Request Description */}
        <p className="text-gray-700 mb-4">{post.description}</p>

        {/* Images Scroll */}
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-2">
            {/* Original Image */}
            <div className="flex-none relative cursor-pointer" 
              onClick={() => {
                setSelectedImage(`${import.meta.env.BASE_URL}images/Feeds/r/1.png`);
                setModalData({ editor: post.user.name, tool: "Original", likesCount: post.user.likesCount, commentsCount: post.user.commentsCount });
              }}>
              <img src={`${import.meta.env.BASE_URL}images/Feeds/r/1.png`} 
                   alt="Original request" 
                   className="w-64 h-48 object-cover rounded-lg shadow-md" />
            </div>

            {/* Editor's Images */}
            {post.edits.map((edit, index) => (
              <div key={index} className="flex-none relative cursor-pointer" 
                onClick={() => {
                  setSelectedImage(`${import.meta.env.BASE_URL}images/Feeds/r/${index + 2}.png`);
                  setModalData(edit);
                }}>
                <img src={`${import.meta.env.BASE_URL}images/Feeds/r/${index + 2}.png`} 
                     alt={`${edit.editor}'s edit`} 
                     className="w-64 h-48 object-cover rounded-lg shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} image={selectedImage} data={modalData} />
    </div>
  );
};

export default RegularPost;
