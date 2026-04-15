import { Link, useParams } from "react-router";

// Dummy data - in a real app, this comes from your State or API
const projects = [
  { id: "1", title: "React Dashboard" },
  { id: "2", title: "Mobile App" },
];

const Sidebar = ({ title, isActive, onClick }) => {
  return (
    <aside className="flex flex-col h-full bg-stone-900 text-stone-100 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8 pb-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-stone-400">
          Your Projects
        </h2>
      </div>
      <button className="w-full py-2.5 px-4 bg-stone-800 text-stone-400 rounded-lg hover:bg-stone-700 hover:text-stone-100 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
        <span>+</span>
        New Project
      </button>
      <br></br>
      <nav className="flex-1 px-4 overflow-y-auto">
        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project.id}>
              {/* <Link
                to={`/project/${project.id}`}
                className={`block px-4 py-3 rounded-md transition-all `}
                    // ${
                    //   id === project.id 
                    //     ? 'bg-stone-800 text-yellow-500 font-bold' 
                    //     : 'hover:bg-stone-800 text-stone-300'
                    // }
              >
              </Link> */}
              {project.title}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
