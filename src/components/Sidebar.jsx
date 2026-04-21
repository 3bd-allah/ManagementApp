import { useRef, useState } from "react";
import { Link, useParams } from "react-router";
import Modal from "./Modal";
import NewProject from "../routes/NewProject";
import ProjectItem from "./ProjectItem";
import { use } from "react";
import { ProjectsContext } from "../store/Projects-context";
import ProjectDetails from "../routes/ProjectDetails"

const Sidebar = () => {
  const { projects } = use(ProjectsContext);
  return (
    <aside className="flex flex-col h-full bg-stone-900 text-stone-100 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8 pb-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-stone-400">
          Your Projects
        </h2>
      </div>

      <Link to={'create-project'}>
        <button className="w-full py-2.5 px-4 bg-stone-800 text-stone-400 rounded-lg hover:bg-stone-700 hover:text-stone-100 transition-colors flex items-center justify-center gap-2 text-sm font-medium"

        >
          <span>+</span>
          New Project
        </button>
      </Link>

      <nav className="flex-1 px-4 overflow-y-auto">
        <ul className="space-y-2">
          {projects.map(project => (
              <li key={project.id}>
                <ProjectItem title={project.title} description={project.description} date={project.date} />
              </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
