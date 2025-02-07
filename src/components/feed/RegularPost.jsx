import { Heart, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../../data/users';
import { useUser } from '../../hooks/useUser';
import ImageModal from '../shared/ImageModal';

// פונקציה למציאת משתמש לפי שם
const getUserByName = (name) => {
  return Object.values(users).find(user => user.name === name) || null;
};

const RegularPost = ({ post }) => {
  // אם `userId` חסר, נמצא אותו לפי השם
  const userId = post.userId || (getUserByName(post.user?.name)?.id ?? null);
  const { user, loading, error } = useUser(userId);

  console.log("🔍 post data:", post);
  console.log("🔍 post.user.name:", post.user?.name);
  console.log("🔍 userId used:", userId);
  console.log("🔍 Found user:", getUserByName(post.user?.name));

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalData, setModalData] = useState(null);

  if (!userId) return <p className="text-red-500">⚠ No user found for this post!</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-white mt-2 p-4">
      <div className="mb-6">
        {/* User Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
            <img 
              src={`${import.meta.env.BASE_URL}images/profiles/${user.id}.jpg`}
              alt={user.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <Link to={`/user-profile/${user.id}`} className="font-medium text-blue-600 hover:underline">
            {user.name}
          </Link>
        </div>

        {/* Request Description */}
        <p className="text-gray-700 mb-4">{post.description}</p>

        {/* Images Scroll */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-16 px-4 pt-4 items-stretch">
            {/* Original Image */}
            <div className="flex-none relative cursor-pointer" 
              onClick={() => {
                setSelectedImage(`${import.meta.env.BASE_URL}images/Feeds/r/1.png`);
                setModalData({ editor: user.name, tool: "Original", likesCount: user.likesCount, commentsCount: user.commentsCount });
              }}>
              
              {/* Original Badge */}
              <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                Original
              </div>

              <img src={`${import.meta.env.BASE_URL}images/Feeds/r/1.png`} 
                   alt="Original request" 
                   className="w-64 h-48 object-cover rounded-lg shadow-md" />
              <div className="p-4 flex flex-col">
                <p className="text-sm font-medium">
                  <Link to={`/user-profile/${user.id}`} className="text-blue-600 hover:underline">
                    {user.name}
                  </Link>
                </p>
                <p className="text-xs text-gray-500">Original</p>

                <div className="flex items-center gap-3 text-gray-600 mt-1">
                  <Heart size={16} />
                  <span className="text-sm">{user.likesCount}</span>
                  <MessageCircle size={16} />
                  <span className="text-sm">{user.commentsCount}</span>
                </div>
              </div>
            </div>

            {/* Editor's Images */}
            {post.edits.map((edit, index) => {
              const editorUser = getUserByName(edit.editor);
              return (
                <div key={index} className="flex-none relative cursor-pointer" 
                  onClick={() => {
                    setSelectedImage(`${import.meta.env.BASE_URL}images/Feeds/r/${index + 2}.png`);
                    setModalData(edit);
                  }}>
                  
                  {/* Edit Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 border-2 border-white shadow-lg">
                    {index + 1}
                  </div>

                  <img src={`${import.meta.env.BASE_URL}images/Feeds/r/${index + 2}.png`} 
                      alt={`${editorUser ? editorUser.name : edit.editor}'s edit`} 
                      className="w-64 h-48 object-cover rounded-lg shadow-md" />
                  <div className="p-4 flex flex-col">
                    {editorUser ? (
                      <p className="text-sm font-medium">
                        <Link to={`/user-profile/${editorUser.id}`} className="text-blue-600 hover:underline">
                          {editorUser.name}
                        </Link>
                      </p>
                    ) : (
                      <p className="text-sm font-medium">{edit.editor}</p>
                    )}
                    <p className="text-xs text-gray-500">{edit.tool}</p>

                    <div className="flex items-center gap-3 text-gray-600 mt-1">
                      <Heart size={16} />
                      <span className="text-sm">{edit.likesCount}</span>
                      <MessageCircle size={16} />
                      <span className="text-sm">{edit.commentsCount}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} image={selectedImage} data={modalData} />
    </div>
  );
};

export default RegularPost;
