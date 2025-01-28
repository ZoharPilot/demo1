import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';
import React from 'react';

const UploadModal = ({ isOpen, onClose, uploadedImage, setUploadedImage }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl p-6 m-4 w-full max-w-lg"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Create New Request</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          {!uploadedImage ? (
            <motion.div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => document.getElementById('file-upload').click()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Upload className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600">Click to upload an image</p>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setUploadedImage(URL.createObjectURL(e.target.files[0]));
                  }
                }}
              />
            </motion.div>
          ) : (
            <div className="relative">
              <img 
                src={uploadedImage} 
                alt="Upload preview" 
                className="w-full rounded-lg"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setUploadedImage(null)}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded-full"
              >
                <X size={20} />
              </motion.button>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe what you'd like to create..."
            />
          </div>

          <motion.button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
          >
            Submit Request
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UploadModal;