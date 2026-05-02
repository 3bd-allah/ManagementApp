import { use } from 'react'
import { Trash2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { ProjectsContext } from '../store/Projects-context';


const ConfirmProjectDeletion = ({pId, pTitle, onClose}) => {
    const projectIDInURL = useParams();
    const { removeProject } = use(ProjectsContext);
    const navigate = useNavigate();
    

    const onConfirmDelete = () => {
      if (projectIDInURL.projectId === pId) {
        // If the user is currently viewing the project they're trying to delete, we should navigate them away first
        // This prevents errors related to trying to access a project that no longer exists in localStorage
        navigate("/", { replace: true }); // Simple way to navigate to MainPage, which will show the "No Project Selected" state
      }
      removeProject(pId);
    }
  return (
    <div className="p-6 bg-white text-center">
    {/* Warning Icon (Optional) */}
    <div className="mx-auto w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
      <Trash2 className="text-red-600" size={24} />
    </div>

    <h2 className="text-lg font-bold text-stone-900">Delete Project?</h2>
    <p className="text-stone-500 text-sm mt-2">
      This action cannot be undone. All tasks inside <strong>{pTitle}</strong> will be permanently removed.
    </p>

    <div className="flex flex-col gap-2 mt-6">
      <button
        onClick={onConfirmDelete}
        className="w-full py-2.5 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors shadow-sm"
      >
        Delete Project
      </button>
      
      <button
        onClick={onClose}
        className="w-full py-2.5 text-stone-500 font-medium hover:text-stone-800 transition-colors"
      >
        Cancel
      </button>
    </div>
  </div>
  )
}

export default ConfirmProjectDeletion