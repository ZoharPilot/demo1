import { motion } from 'framer-motion';
import { Heart, Mail, MessageCircle, Share2 } from 'lucide-react';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import ImageModal from '../components/shared/ImageModal';
import { useUser } from "../hooks/useUser";

const UserProfile = () => {
  const { userId } = useParams(); 
  const { user, loading, error } = useUser(userId);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error.message}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="pt-6 px-4 pb-4 bg-white shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
            <img src={`${import.meta.env.BASE_URL}images/profiles/${user.id}.jpg`} className="w-full h-full object-cover rounded-full" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
        </div>
        <Link to="/" className="p-2 rounded-full hover:bg-gray-200">
          <FaHome size={24} className="text-gray-900" />
        </Link>
      </header>

      <main className="px-6 py-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">User's Contributions</h2>
          <p className="text-gray-700">
            This user has edited {user.contributions.imagesEdited} images and {user.contributions.videosEdited} videos using AI tools such as:
          </p>
          <ul className="text-gray-700 list-disc pl-6 mt-2">
            {Object.entries(user.contributions.toolsUsed).map(([tool, count]) => (
              <li key={tool}>{tool}: {count} edits</li>
            ))}
          </ul>
        </div>
        
        <div className="text-center mb-6 flex justify-center gap-6">
          <Link to="#" className="text-blue-600 hover:underline flex items-center gap-1">
            <Mail size={16} /> Contact {user.name}
          </Link>
          <Link to="#" className="text-blue-600 hover:underline flex items-center gap-1">
            <Share2 size={16} /> Share Profile
          </Link>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Work</h2>
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 cursor-pointer"
              onClick={() => handleImageClick(`${import.meta.env.BASE_URL}images/Feeds/r/${String(item)}.png`)}
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/Feeds/r/${String(item)}.png`}
                alt={`Gallery item ${item}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-800">Edited by {user.name} using Photoshop</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart size={20} className="text-gray-600" />
                      <span className="text-sm text-gray-600">{user.likesCount}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={20} className="text-gray-600" />
                      <span className="text-sm text-gray-600">{user.commentsCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        image={selectedImage} 
        data={{ editor: user.name, tool: 'Photoshop', likesCount: user.likesCount, commentsCount: user.commentsCount }}
      />
    </div>
  );
};

export default UserProfile;
