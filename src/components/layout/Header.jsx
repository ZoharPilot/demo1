import { User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
  
      <header className="fixed top-0 w-full bg-gray-100 shadow-md z-10">
  <div className="flex justify-between items-center px-6 py-4 whitespace-nowrap">
    <div className="w-1/3"></div> {/* רווח לשמירה על איזון */}
    <h1 className="text-xl font-semibold text-gray-800 tracking-wide w-1/3 text-center overflow-hidden truncate">
    Let's Reframe
    </h1>
    <div className="w-1/3 flex justify-end">
      <Link to="/user-profile" className="p-2 rounded-full hover:bg-gray-200 transition-all duration-300">
        <User size={28} className="text-gray-700" />
      </Link>
    </div>
  </div>
</header>

  );
};

export default Header;