import { useState, use, useRef } from "react";
import { ProjectsContext } from "../../store/Projects-context";
import ProjectItem from "../ProjectItem";
import { Link } from "react-router";
import SearchIcon from "./SearchIcon";

const SearchableList = () => {
  const { projects } = use(ProjectsContext);
  const searchTimerRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProjects = projects.filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase().trim()));

  const handleSearch = (event) => {
    // implementing debounce to avoid too many re-renders while user is typing
    if(searchTimerRef.current){
        clearTimeout(searchTimerRef.current);
    }
    searchTimerRef.current = setTimeout(()=>{
        searchTimerRef.current = null;
        setSearchTerm(event.target.value);
    },[500])
  };

  return (
    <div className="w-full">
        <div className="w-full items-center gap-2">
            <input
                className="w-full p-4 bg-stone-800 text-stone-400 rounded-md placeholder:text-stone-500 border border-stone-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="search"
                placeholder="Enter Project Title...."
                onChange={handleSearch}
            />
        </div>
        <br />
        <div>
            {searchTerm && 
                <p>{filteredProjects.length} projects found for '{searchTerm}'</p>
            }
        </div>
        {projects.length === 0 && (
            <div className="text-center m-5">
                <p>No projects found</p>
                <Link to={'/create-project'} className="text-blue-500 hover:underline">Go Create One</Link>
            </div>
        )}
        <ul className="space-y-2">
            {!searchTerm && <p>Recent</p>}
            {filteredProjects.map(project => (
                <li key={project.projectID}>
                    <ProjectItem className="text-lg font-semibold" title={project.title} id={project.projectID}/>
                </li>
            ))}
        </ul>
    </div>

  );
};

export default SearchableList;
