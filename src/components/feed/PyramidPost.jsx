import { Heart, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../../data/users';
import ImageModal from '../shared/ImageModal';

// פונקציה לנרמול שמות
const normalizeName = (name) => {
  if (!name || typeof name !== "string") return ""; // ✅ מונע קריסה במקרה של undefined
  return name.replace(/\./g, '').trim().toLowerCase();
};

// פונקציה למציאת משתמש לפי שם
const getUserByName = (name) => {
  return Object.values(users).find(user => normalizeName(user.name) === normalizeName(name)) || null;
};

const PyramidPost = ({ post }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalData, setModalData] = useState(null);

  // מציאת מבקש הבקשה (עם בדיקה שהוא קיים)
  const postUser = post.userName ? getUserByName(post.userName) : null;

  console.log("🔍 post.userName:", post.userName);
  console.log("🔍 Found user:", postUser);

  return (
    <div className="bg-white mt-2 p-4 min-h-[460px] pb-8 relative">
      <div className="mb-6">
        {/* ✅ שחזור פרטי מבקש הבקשה */}
        {postUser ? (
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
              <img 
                src={`${import.meta.env.BASE_URL}images/profiles/${postUser.id}.jpg`}
                alt={postUser.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <Link to={`/user-profile/${postUser.id}`} className="font-medium text-blue-600 hover:underline">
              {postUser.name}
            </Link>
          </div>
        ) : (
          <p className="font-medium text-red-500">⚠ No user provided</p>
        )}

        {/* Request Description */}
        <p className="text-gray-700 mb-4">{post.description}</p>

        {/* Pyramid Steps */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-16 px-4 pt-4 items-stretch">
            {post.edits.map((edit, index, array) => {
              const editorUser = getUserByName(edit.editor);
              return (
                <div key={index} className="flex-none relative min-h-[340px]">
                  {edit.isOriginal ? (
                    <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                      Original
                    </div>
                  ) : (
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 border-2 border-white shadow-lg">
                      {index + 1}
                    </div>
                  )}

                  {/* Image or Video */}
                  <div 
                    className="w-64 rounded-lg overflow-hidden shadow-md bg-white flex flex-col h-full cursor-pointer"
                    onClick={() => {
                      setSelectedImage(edit.isVideo 
                        ? `${import.meta.env.BASE_URL}images/Feeds/p/4.mp4` 
                        : `${import.meta.env.BASE_URL}images/Feeds/p/${String(index + 1)}.png`);
                      setModalData(edit);
                    }}
                  >
                    {edit.isVideo ? (
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
                      <p className="text-sm font-medium">
                        {editorUser ? (
                          <Link to={`/user-profile/${editorUser.id}`} className="text-blue-600 hover:underline">
                            {editorUser.name}
                          </Link>
                        ) : edit.editor}
                      </p>
                      <p className="text-xs text-gray-500">{edit.tool}</p>

                      <div className="flex items-center gap-3 text-gray-600 mt-1">
                        <Heart size={16} />
                        <span className="text-sm">{edit.likesCount}</span>
                        <MessageCircle size={16} />
                        <span className="text-sm">{edit.commentsCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
