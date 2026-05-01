import { useState, useRef, useEffect, use } from "react";
import { MoreVertical, Edit2, Trash2 } from "lucide-react";
import { replace, useNavigate, useParams } from "react-router";
import { ProjectsContext } from "../store/Projects-context";

const ProjectActionMenu = ({ projectID, projectTitle, onRename, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const { renameProject, removeProject } = use(ProjectsContext);
  const navigate = useNavigate();

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

  // const onDelete = () => {
  //   if (projectIDInURL.projectId === projectID) {
  //     // If the user is currently viewing the project they're trying to delete, we should navigate them away first
  //     // This prevents errors related to trying to access a project that no longer exists in localStorage
  //     navigate("/", { replace: true }); // Simple way to navigate to MainPage, which will show the "No Project Selected" state
  //   }
  //   removeProject(projectID);
  // };

  return (
    <div
      className="relative inline-block"
      ref={menuRef}
    >
      {/* 2. THE TRIGGER (3 Dots) */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
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
              e.preventDefault();
              e.stopPropagation();
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
              e.preventDefault();
              e.stopPropagation(); // Prevent the click from bubbling up to the document and immediately closing the menu
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
