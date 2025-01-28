import { Bell, Home, Plus, User } from 'lucide-react';
import React from 'react';

const Navigation = ({ onUploadClick }) => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="flex justify-around items-center py-3">
        <button className="text-blue-600">
          <Home size={24} />
        </button>
        
        <button
          className="bg-blue-600 text-white p-3 rounded-full -mt-6 shadow-lg"
          onClick={onUploadClick}
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
  );
};

export default Navigation;