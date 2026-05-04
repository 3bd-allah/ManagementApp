import { useState, useRef, useEffect } from "react";
import { MoreVertical, Edit2, Trash2 } from "lucide-react";

const ProjectActionMenu = ({ onRename, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // 1. CLICK OUTSIDE LOGIC
  // This ensures the menu closes when you click anywhere else on the screen
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative inline-block"
      ref={menuRef}
      onClick={e => {
            e.preventDefault();
            e.stopPropagation();
        }} 
    >
      {/* 2. THE TRIGGER (3 Dots) */}
      <button
        onClick={(e) => {
          setIsOpen((prev) => !prev);
        }}
        className="p-1 rounded-full hover:bg-stone-200 text-stone-500 transition-colors focus:outline-none"
      >
        <MoreVertical size={18} />
      </button>

      {/* 3. THE MENU (Conditional Rendering) */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-36 bg-white border border-stone-200 shadow-xl rounded-lg z-50 py-1 animate-in fade-in zoom-in duration-150"
        >
          <button
            onClick={(e) => {
              onRename();
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <Edit2 size={14} />
            Rename
          </button>
          {/* Subtle Separator */}
          <div className="h-[1px] bg-stone-100 my-1" />
          <button
            onClick={(e) => {
              onDelete();
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <Trash2 size={14} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectActionMenu;
