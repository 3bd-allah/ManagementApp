import React, { useState } from 'react'
import { Link } from 'react-router';

const ProjectItem = ({ id, title, date, tasks, isActive }) => {

  return (
    <Link to={}>
      <button
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-stone-400 hover:bg-stone-800/50 hover:text-stone-200 transition-colors text-sm"
        >
          <span className="truncate pr-4">{title}</span>

          {/* 3 Vertical Dots - visible on hover or if active */}
          <div 
            className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-md text-stone-600 hover:bg-stone-700 hover:text-stone-300 transition-colors"    
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation(); // Prevents clicking the project when clicking dots
              console.log("Open Options for:", title);
            }}
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 7a2 2 0 100-4 2 2 0 000 4zm0 7a2 2 0 100-4 2 2 0 000 4zm0 7a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>
        </button>
    </Link>
  )
}

export default ProjectItem