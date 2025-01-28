import React from 'react';

const FilterBar = ({ activeFilter, onFilterChange }) => {
  const filters = ['All', 'Emotional', 'Humorous', 'Creative', 'Surprise Me'];

  return (
    <div className="bg-white mt-2 p-4">
      <div className="flex gap-2 overflow-x-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === activeFilter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
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