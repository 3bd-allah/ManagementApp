import { useRef } from "react";
import { Link, useParams } from "react-router";
import Modal from "./Modal";
import NewProject from "../routes/NewProject";
import ProjectItem from "./ProjectItem";

// Dummy data - in a real app, this comes from your State or API
const projects = [
  { id: "1", title: "React Dashboard" },
  { id: "2", title: "Mobile App" },
];

const Sidebar = (prop) => {

  const dialog = useRef();
  const form = useRef();

  const openDialog =()=>{
    dialog.current.open();
  }

  const closeDialog =()=>{
    dialog.current.close();
  }
  return (
    <aside className="flex flex-col h-full bg-stone-900 text-stone-100 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8 pb-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-stone-400">
          Your Projects
        </h2>
      </div>

      <Link >
        <button className="w-full py-2.5 px-4 bg-stone-800 text-stone-400 rounded-lg hover:bg-stone-700 hover:text-stone-100 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
          onClick={openDialog}
        >
          <span>+</span>
          New Project
        </button>
      </Link>

      <Modal ref={dialog} onReset = {()=>form.current.resetForm()} >
        <NewProject onClose={closeDialog} ref={form} />
      </Modal>
      <br/>

      <nav className="flex-1 px-4 overflow-y-auto">
        <ul className="space-y-2">
          {projects.map(project => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
            >
              <li >
                <ProjectItem title={project.title} />
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
