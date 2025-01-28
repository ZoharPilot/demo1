import React from 'react';

const StoryBanner = () => {
  const names = ["Sarah", "John", "Emily", "Michael", "Anna", "Daniel"];

  return (
    <div className="bg-white p-4">
      <h2 className="text-lg font-semibold mb-3">Top Reframes</h2>
      <div className="flex overflow-x-auto gap-4 pb-2">
        {names.map((name, index) => (
          <div key={name} className="flex-none">
            <div className="w-20 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500">
                <div className="bg-white p-0.5 rounded-full w-full h-full">
                  <img 
                  src={`${import.meta.env.BASE_URL}images/profiles/user_${String(index + 1).padStart(3, '0')}.jpg`}
                    alt={`User ${name}`}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <p className="text-xs mt-1 text-center">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryBanner;
