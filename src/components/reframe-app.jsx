import { Bell, Home, Plus, User } from 'lucide-react';
import React, { useState } from 'react';
import Header, { ContributorsSection } from '../components/layout/Header';
import { edits } from '../data/edits';
import { uploads } from '../data/uploads';
import { users } from '../data/users';
// reframe-app.jsx


import PyramidPost from '../components/feed/PyramidPost';
import RegularPost from '../components/feed/RegularPost';

import StoryBanner from '../components/feed/StoryBanner';
import UploadModal from '../components/layout/UploadModal';
import FilterBar from '../components/shared/FilterBar';

const ReFrame = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPostType, setSelectedPostType] = useState('regular');

  const regularPost = uploads.find(upload => upload.id === 'upload_001');

  if (regularPost) {
    regularPost.user = users[regularPost.userId] ? {
      id: users[regularPost.userId].id,
      name: users[regularPost.userId].name || "Unknown User",
      commentsCount: regularPost.comments || 0,
      likesCount: regularPost.likes || 0
    } : { id: null, name: "Unknown User", commentsCount: 0, likesCount: 0 };

    regularPost.edits = edits
      .filter(edit => edit.originalUploadId === regularPost.id)
      .map(edit => ({
        id: edit.id,
        editorId: users[edit.editorId]?.id || "Unknown",
        editorName: users[edit.editorId]?.name || "Unknown Editor",
        tool: edit.toolsUsed.join(', '),
        commentsCount: edit.comments || 0,
        likesCount: edit.likes || 0,
        imageUrl: edit.url || "/images/default.jpg"
      }));
  }

  const pyramidPost = uploads.find(upload => upload.id === 'upload_002');

 if (pyramidPost) {
  const postUser = users[pyramidPost.userId];

  pyramidPost.user = postUser
    ? {
        id: postUser.id,
        name: postUser.name || "Unknown User",
        commentsCount: pyramidPost.comments || 0,
        likesCount: pyramidPost.likes || 0,
      }
    : {
        id: null,
        name: "Unknown User",
        commentsCount: 0,
        likesCount: 0,
      };

  pyramidPost.edits = edits
    .filter(edit => edit.originalUploadId === pyramidPost.id)
    .map((edit, index) => ({
      step: index,
      isOriginal: index === 0,
      editorId: users[edit.editorId]?.id || "Unknown",
      editorName: users[edit.editorId]?.name || "Unknown Editor",
      tool: edit.toolsUsed.join(", "),
      likesCount: edit.likes,
      commentsCount: edit.comments,
      filetype: edit.filetype,
    }));
}

 

  //console.log("🔍 Pyramid Post Object:", pyramidPost);
//console.log("🔍 Pyramid Post User:", pyramidPost?.user);
//console.log("🔍 Matching User in users:", users[pyramidPost?.userId]);

 // console.log("🔍 All Uploads Data:", uploads);
 // console.log("🔍 Pyramid Post Data:", pyramidPost);
  //console.log("🔍 Pyramid Post Edits:", pyramidPost?.edits);
  // {regularPost && <RegularPost post={regularPost} />}

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-24">
        <ContributorsSection />
        <StoryBanner />
        <FilterBar 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        {regularPost && <RegularPost post={regularPost} />}
        {pyramidPost && <PyramidPost post={pyramidPost} />}
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
          selectedPostType={selectedPostType}
          setSelectedPostType={setSelectedPostType}
        />
      )}
    </div>
  );
};

export default ReFrame;
