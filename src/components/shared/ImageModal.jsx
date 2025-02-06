import { Heart, MessageCircle, X } from 'lucide-react';
import React, { useState } from 'react';

const ImageModal = ({ isOpen, onClose, image, data }) => {
  if (!isOpen || !image || !data) return null;

  const [expandedComments, setExpandedComments] = useState({});
  const [replyTexts, setReplyTexts] = useState({});
  const [showReplyBox, setShowReplyBox] = useState({});

  const toggleReplies = (index) => {
    setExpandedComments((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleReplyBox = (index) => {
    setShowReplyBox((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleReplyChange = (index, value) => {
    setReplyTexts((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const comments = [
    {
      text: "Wow, this is amazing!",
      author: `User${Math.floor(Math.random() * 100)}`,
      likes: Math.floor(Math.random() * 20),
      replies: [
        { text: "I agree!", author: "UserA", likes: 2 },
        { text: "Totally breathtaking!", author: "UserB", likes: 3 }
      ]
    },
    {
      text: "Great edit, I love the colors!",
      author: `User${Math.floor(Math.random() * 100)}`,
      likes: Math.floor(Math.random() * 20),
      replies: [
        { text: "Looks fantastic!", author: "UserC", likes: 5 },
        { text: "So vibrant!", author: "UserD", likes: 3 }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white max-w-3xl w-full p-6 rounded-lg relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
          <X size={24} />
        </button>

        {/* Image or Video */}
        <div className="flex justify-center mb-4">
          {image.endsWith('.mp4') ? (
            <video src={image} controls className="w-full rounded-lg">
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={image} alt="Selected" className="w-full rounded-lg" />
          )}
        </div>

        {/* Image Details */}
        <div className="text-center mb-4">
          <p className="font-bold text-lg">{data.editor}</p>
          <p className="text-sm text-gray-500">{data.tool}</p>
          <div className="flex justify-center gap-3 text-gray-600 mt-2">
            <div className="flex items-center gap-1">
              <Heart size={16} />
              <span className="text-sm">{data.likesCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} />
              <span className="text-sm">{data.commentsCount}</span>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-gray-100 p-4 rounded-lg max-h-60 overflow-y-auto">
          <h3 className="text-sm font-bold mb-2">Comments:</h3>
          {comments.map((comment, index) => (
            <div key={index} className="mb-2 p-3 bg-white border border-gray-200 rounded-lg">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">{comment.author}</p>
                <div className="flex items-center gap-2">
                  <Heart size={14} />
                  <span className="text-xs">{comment.likes}</span>
                  <button
                    className="text-xs text-blue-500 hover:underline"
                    onClick={() => toggleReplies(index)}
                  >
                    {expandedComments[index] ? "Hide replies" : "View more"}
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-700">{comment.text}</p>
              <button
                className="text-xs text-blue-500 hover:underline mt-1"
                onClick={() => toggleReplyBox(index)}
              >
                Reply
              </button>
              {showReplyBox[index] && (
                <input
                  type="text"
                  className="w-full mt-2 p-1 text-xs border border-gray-300 rounded"
                  placeholder="Reply..."
                  value={replyTexts[index] || ""}
                  onChange={(e) => handleReplyChange(index, e.target.value)}
                />
              )}
              {expandedComments[index] && comment.replies.length > 0 && (
                <div className="ml-4 mt-2 border-l border-gray-300 pl-2">
                  {comment.replies.map((reply, rIndex) => (
                    <div key={rIndex} className="mb-1 p-2 bg-gray-50 rounded-lg">
                      <div className="flex justify-between">
                        <p className="text-xs font-semibold">{reply.author}</p>
                        <div className="flex items-center gap-2">
                          <Heart size={12} />
                          <span className="text-xs">{reply.likes}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">{reply.text}</p>
                      <button
                        className="text-xs text-blue-500 hover:underline mt-1"
                        onClick={() => toggleReplyBox(`${index}-${rIndex}`)}
                      >
                        Reply
                      </button>
                      {showReplyBox[`${index}-${rIndex}`] && (
                        <input
                          type="text"
                          className="w-full mt-2 p-1 text-xs border border-gray-300 rounded"
                          placeholder="Reply..."
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
