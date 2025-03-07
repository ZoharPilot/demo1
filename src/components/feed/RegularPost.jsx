import { ChevronRight, Download, Heart, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../../data/users';
import { useUser } from '../../hooks/useUser';
import ImageModal from '../shared/ImageModal';

const getUserByName = (name) => {
  return Object.values(users).find(user => user.name === name) || null;
};

const RegularPost = ({ post }) => {
  const userId = post.userId || (getUserByName(post.user?.name)?.id ?? null);
  const { user, loading, error } = useUser(userId);

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalData, setModalData] = useState(null);

  if (!userId) return <p className="text-red-500">⚠ No user found for this post!</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-white mt-2 p-4">
      <div className="mb-1">
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

        <p className="text-gray-700 mb-4">{post.request}</p>

        <div className="overflow-x-auto pb-6 flex items-center gap-6 px-4 pt-4">
          <div className="flex-none relative cursor-pointer" 
            onClick={() => {
              setSelectedImage(`${import.meta.env.BASE_URL}images/Feeds/r/1.png`);
              setModalData({ editor: user.name, tool: "Original", likesCount: user.likesCount, commentsCount: user.commentsCount });
            }}>
            <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
              Original
            </div>
            <img src={`${import.meta.env.BASE_URL}images/Feeds/r/1.png`} 
                 alt="Original request" 
                 className="w-64 h-48 object-cover rounded-lg shadow-md" />
            <div className="p-0 flex flex-col">
              <p className="text-sm font-medium">
                <Link to={`/user-profile/${user.id}`} className="text-blue-600 hover:underline">
                  {user.name}
                </Link>
              </p>
              <p className="text-xs text-gray-500">Source</p>
              <div className="flex items-center gap-3 text-gray-600 mt-1">
                <Heart size={16} />
                <span className="text-sm">{user.likesCount}</span>
                <MessageCircle size={16} />
                <span className="text-sm">{user.commentsCount}</span>
              </div>
            </div>
          </div>

          {post.edits.map((edit, index) => {
            const editorUser = users[edit.editorId];
            return (
              <div key={index} className="flex-none relative cursor-pointer" 
                onClick={() => {
                  setSelectedImage(`${import.meta.env.BASE_URL}images/Feeds/r/${index + 2}.png`);
                  setModalData(edit);
                }}>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 border-2 border-white shadow-lg">
                  {index + 1}
                </div>
                <img src={`${import.meta.env.BASE_URL}images/Feeds/r/${index + 2}.png`} 
                    alt={`${editorUser?.name || "Unknown Editor"}'s edit`} 
                    className="w-64 h-48 object-cover rounded-lg shadow-md" />
                <div className="p-0 flex flex-col">
                  <p className="text-sm font-medium">
                    <Link to={`/user-profile/${editorUser?.id}`} className="text-blue-600 hover:underline">
                      {editorUser?.name || "Unknown Editor"}
                    </Link>
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
            );
          })}

          <div className="flex items-center justify-center h-full">
            <ChevronRight size={28} className="text-gray-500" />
          </div>
          <div className="ml-6 flex flex-col items-center text-center">
            <p className="text-gray-700 font-semibold mb-2">Create Your Own Version</p>
            <a
              href={`${import.meta.env.BASE_URL}images/Feeds/r/1.png`}
              download
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              <Download size={40} /> 
            </a>
          </div>
        </div>
      </div>
      <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} image={selectedImage} data={modalData} />
    </div>
  );
};

export default RegularPost;
