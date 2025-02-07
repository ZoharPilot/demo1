import { Bell, Home, Plus, User } from 'lucide-react';
import React, { useState } from 'react';
// reframe-app.jsx

import PyramidPost from '../components/feed/PyramidPost';
import RegularPost from '../components/feed/RegularPost';
import StoryBanner from '../components/feed/StoryBanner';
import Header from '../components/layout/Header';
import UploadModal from '../components/layout/UploadModal';
import FilterBar from '../components/shared/FilterBar';

const ReFrame = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

 const regularPost = {
    id: 1,
    userId: "user_003", // ✅ הוספנו userId כדי לחבר לנתוני המשתמשים
    user: {
      name: "Sarah B.",
      commentsCount: 12,
      likesCount: 45
    },
    description: "I need your help. Can someone help me get abs or a fit body? Thanks to everyone who can assist.",
    edits: [
      { editor: "Alex Martinez", tool: "Midjourney", commentsCount: 5, likesCount: 20 },
      { editor: "Maya Cohen", tool: "Photoshop", commentsCount: 8, likesCount: 30 }
    ]
};


  const pyramidPost = {
    id: 2,
    userId: "user_002", // ✅ הוספת userId כדי להקל על זיהוי המשתמש
    userName: "Michael Chen", // ✅ עכשיו PyramidPost.jsx יוכל למצוא את המשתמש
    user: {
      name: "Michael Chen",
      commentsCount: 20,
      likesCount: 60
    },
    description: "Hey champs! A friend just got engaged, but she's disappointed she wasn't wearing white... Can you change the green to white? Thanks! 😊",
    edits: [
      { step: 0, isOriginal: true, editor: "Emily R.", tool: "Upload", likesCount: 10, commentsCount: 2, isVideo: false },
      { step: 1, editor: "Lior", tool: "Midjourney", likesCount: 50, commentsCount: 10, isVideo: false },
      { step: 2, editor: "Maya", tool: "Photoshop", likesCount: 80, commentsCount: 15, isVideo: false },
      { step: 3, editor: "Yoni", tool: "Sora", likesCount: 110, commentsCount: 20, isVideo: true }  
    ]
};


  console.log("🔍 ReFrame is passing `pyramidPost`:", pyramidPost); // בדיקת הנתונים במסוף

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-24">
        <StoryBanner />
        <FilterBar 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      <RegularPost post={regularPost} />
        <PyramidPost post={pyramidPost} />
          
      </main>

      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
        <div className="flex justify-around items-center py-3">
          <button className="text-blue-600">
            <Home size={24} />
          </button>
          
          <button 
            className="bg-blue-600 text-white p-3 rounded-full -mt-6 shadow-lg"
            onClick={() => setShowUploadModal(true)}
          >
            <Plus size={24} />
          </button>
          
          <div className="relative">
            <button className="text-gray-600">
              <Bell size={24} />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                7
              </div>
            </button>
          </div>
          
          <button className="text-gray-600">
            <User size={24} />
          </button>
        </div>
      </nav>

      {showUploadModal && (
        <UploadModal
          isOpen={showUploadModal}
          onClose={() => setShowUploadModal(false)}
        />
      )}
    </div>
  );
};

export default ReFrame;
