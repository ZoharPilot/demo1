import { ChevronRight, Download, Heart, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../../data/users';
import ImageModal from '../shared/ImageModal';

const getUserById = (userId) => users[userId] || null;

const PyramidPost = ({ post }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalData, setModalData] = useState(null);

  const postUser = post.userId ? getUserById(post.userId) : null;
  const postPath = `${import.meta.env.BASE_URL}uploads/${post.userId}/${post.id}/`;

  return (
    <div className="bg-white mt-2 p-4 min-h-[460px] pb-8 relative">
      <div className="mb-6">
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

        <p className="text-gray-700 mb-4">{post.request}</p>

        <div className="overflow-x-auto pb-6 flex items-center gap-6 px-4 pt-4">
          {post.edits?.length > 0 ? (
            post.edits.map((edit, index) => {
              const editorUser = getUserById(edit.editorId);
              const fileExtension = edit.filetype === 'video' ? 'mp4' : 'png';
              const editFileName = `edit_${edit.editorId}_${edit.step + 1}.${fileExtension}`;
              const editPath = `${postPath}${editFileName}`;

              return (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <div className="flex items-center justify-center h-full">
                      <ChevronRight size={28} className="text-gray-500" />
                    </div>
                  )}
                  <div className="flex-none relative min-h-[340px]">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 border-2 border-white shadow-lg">
                      {index + 1}
                    </div>
                    <div 
                      className="w-64 rounded-lg overflow-hidden shadow-md bg-white flex flex-col h-full cursor-pointer"
                      onClick={() => {
                        setSelectedImage(editPath);
                        setModalData(edit);
                      }}
                    >
                      {edit.filetype === 'video' ? (
                        <video 
                          src={editPath} 
                          controls 
                          className="w-[800px] aspect-[6/5] rounded-lg object-cover flex-grow"
                        />
                      ) : (
                        <img 
                          src={editPath}
                          alt={`Edited by ${editorUser?.name || "Unknown Editor"}`}
                          className="w-[800px] aspect-[6/5] rounded-lg object-cover flex-grow"
                        />
                      )}
                    </div>
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
                </React.Fragment>
              );
            })
          ) : (
            <p className="text-gray-500">No edits yet. Be the first to contribute!</p>
          )}

          {/* Call to Action - Continue the Story */}
          {post.edits?.length > 0 && (
            <>
              <div className="flex items-center justify-center h-full">
                <ChevronRight size={28} className="text-gray-500" />
              </div>
              <div className="ml-6 flex flex-col items-center text-center">
                <p className="text-gray-700 font-semibold mb-2">Continue Story</p>
                <a
                  href={`${postPath}edit_${post.edits[post.edits.length - 1].editorId}_${post.edits[post.edits.length - 1].step + 1}.mp4`}
                  download
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <Download size={40} />  
                </a>
              </div>
            </>
          )}
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
