import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ImageModal from '../components/shared/ImageModal';

const UserProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="pt-6 px-4 pb-4 bg-white shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
            <img src={`${import.meta.env.BASE_URL}images/profiles/user_003.jpg`} className="w-full h-full object-cover rounded-full" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Sarah Bennett</h1>
        </div>
        <Link to="/" className="p-2 rounded-full hover:bg-gray-200">
          <FaHome size={24} className="text-gray-900" />
        </Link>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        {/* Community Contribution */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">User's Contributions</h2>
          <p className="text-gray-700">This user has edited 20 images and 10 videos using AI tools such as MidJourney (10), Photoshop (5), and GPT (5).</p>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Achievements</h2>
          <p className="text-gray-700">Total likes received: 100</p>
          <p className="text-gray-700">200 users have commented on their work</p>
        </div>

        {/* Gallery Feed */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Work</h2>
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 cursor-pointer"
              onClick={() => handleImageClick(`${import.meta.env.BASE_URL}images/Feeds/r/${String(item )}.png`)}
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/Feeds/r/${String(item )}.png`}
                alt={`Gallery item ${item}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-800">Edited by Sarah Bennett using Photoshop</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart size={20} className="text-gray-600" />
                      <span className="text-sm text-gray-600">24</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={20} className="text-gray-600" />
                      <span className="text-sm text-gray-600">12</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <Share2 size={20} />
                    <span className="text-sm font-medium">Share</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      
      {/* Image Modal */}
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        image={selectedImage} 
        data={{ editor: 'Sarah Bennett', tool: 'Photoshop', likesCount: 24, commentsCount: 12 }}
      />
    </div>
  );
};

export default UserProfile;
