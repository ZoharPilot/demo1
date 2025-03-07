import React from 'react';

const FilterBar = ({ activeFilter, onFilterChange }) => {
  const filters = ['All', 'Emotional', 'Humorous', 'Creative', 'Surprise '];

  return (
    <div className="bg-white mt-2 p-2">
      <div className="flex gap-4 overflow-x-auto justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`text-sm font-medium transition-colors duration-200 px-3 py-1 rounded-lg focus:outline-none hover:text-blue-600 $ {
              filter === activeFilter ? 'text-blue-600 underline' : 'text-gray-600 hover:underline'
            }`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;