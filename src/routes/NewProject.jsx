import { useActionState } from "react";

const NewProject = ({onClose}) => {
  const handleSubmit = (prevState, formData)=>{
    console.log(formData)
  }

  const [formSate, formAction, pending]= useActionState(handleSubmit,{ errors: null })
  return (
        <form action={formAction} className="space-y-5  bg-white w-full  p-8 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200" >
          <h2 className="text-2xl font-bold text-stone-800 mb-6">New Project</h2>
          {/* TITLE INPUT */}
          <div>
            <label htmlFor="title" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Project Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="e.g. Website Redesign"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all text-stone-800"
            />
          </div>

          {/* DESCRIPTION INPUT */}
          <div>
            <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              placeholder="What is this project about?"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all text-stone-800 resize-none"
            />
          </div>

          {/* DUE DATE INPUT */}
          <div>
            <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Due Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all text-stone-800"
            />
          </div>

          {/* 3. BUTTONS: Simple & Aligned */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-stone-900 text-stone-100 text-sm font-bold rounded-xl hover:bg-stone-800 active:scale-95 transition-all shadow-md"
            >
              Save Project
            </button>
          </div>
        </form>
  );
};

export default NewProject;
