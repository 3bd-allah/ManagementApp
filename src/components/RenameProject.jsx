import { useState, use } from 'react'
import { ProjectsContext } from '../store/Projects-context';
import { useNavigate } from 'react-router';


const RenameProject = ({onClose, pId, pTitle}) => {
  const [ newTitle, setNewTitle] = useState(pTitle);
  const { renameProject } = use(ProjectsContext);
  const navigate = useNavigate();

  const renameProjectHandler =()=>{
    renameProject(pId, newTitle);
    onClose();
    navigate(`/project/${pId}`)
  }
  return (
    <div>
        <div className="bg-stone-50 p-6 border-b border-stone-200">
            <h2 className="text-xl font-semibold text-stone-800">
              Rename Project
            </h2>
            <p className="text-sm text-stone-500 mt-1">
              Enter a new name for your project below.
            </p>
          </div>
          <div className="p-6 bg-white">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Project Title
              </label>
              <input
                type="text"
                defaultValue={pTitle}
                onChange={e => setNewTitle(e.target.value)}
                className="w-full px-4 py-2 border-2 border-stone-200 rounded-md focus:border-stone-800 focus:outline-none transition-colors text-stone-700"
              />
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={renameProjectHandler}
                disabled={newTitle.trim() === "" || newTitle === pTitle}
                className="disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed px-6 py-2 text-sm font-medium bg-stone-800 text-white rounded-md hover:bg-stone-700 active:bg-stone-900 transition-all shadow-sm"
              >
                Save Changes
              </button>
            </div>
          </div>
    </div>
  )
}

export default RenameProject