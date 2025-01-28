import { motion } from 'framer-motion';
import { Heart, Mail, MessageCircle, Share2 } from 'lucide-react';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Simple Header with Name */}
 <header className="pt-6 px-4 pb-4 bg-white shadow-sm flex items-center justify-between">
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
      <img src={`/${import.meta.env.BASE_URL}images/profiles/user_003.jpg`} className="w-full h-full object-cover rounded-full" />
    </div>
    <h1 className="text-2xl font-bold text-gray-800">Sarah Bennett</h1>
  </div>
  
  <Link to="/" className="p-2 rounded-full hover:bg-gray-100">
    <FaHome size={24} className="text-gray-800" />
  </Link>
</header>


    


      {/* Main Content */}
      <main className="px-4 py-6">
        {/* User Stats Cards */}
        <div className="space-y-4 mb-8">
          {/* Community Contribution */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Community Contribution</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <p className="text-gray-700">You have edited 20 images</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <p className="text-gray-700">You have edited 10 videos</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 mb-2">You have used the following AI tools:</p>
                <div className="space-y-2 ml-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-600">10 with MidJourney</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-600">5 with Photoshop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-600">5 with GPT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Your Achievements</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-gray-700">Total likes received: 100</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-gray-700">200 users have commented on your work</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-gray-700">You have commented 100 times</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            <Share2 size={20} />
            Share Profile
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            <Mail size={20} />
            Contact
          </motion.button>
        </div>

        {/* Gallery Feed */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Work</h2>
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/Feeds/r/${String(item )}.png`}
           
                alt={`Gallery item ${item}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
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
                    className="flex items-center gap-1 text-blue-600"
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
    </div>
  );
};

export default UserProfile;