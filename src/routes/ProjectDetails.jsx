import { use, useEffect, useState } from "react";
import { ProjectsContext } from "../store/Projects-context";
import { useLoaderData, useNavigate } from "react-router";

const ProjectDetails = () => {
  const { projectID, title, date, description, projectTasks } = useLoaderData();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { removeProject, addTask, removeTask } = use(ProjectsContext);
  const navigate = useNavigate();

  
  
  useEffect(()=>{
    function loadTasks(){
      setTasks(prevTasks => projectTasks ? projectTasks : []);
    }
    loadTasks();
  },[projectID])
  

  function handleAddTask(e){
    e.preventDefault();
    if(task.trim().length >=3){
      const newTask = {
        taskId: Math.random(),
        title:task
      }
      setTasks(prevTasks =>[newTask, ...prevTasks] )
      addTask(projectID, newTask);
      setErrorMessage("");
      setTask("");
    }else{
      setErrorMessage("Task must be at least 3 characters long.")
    }
  }

  function onDeleteTask(tId){
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.taskId != tId)
    })
    removeTask(projectID, tId);
  }
  
  return (
    <div className="w-[35rem] mt-16 px-8">
      {/* 1. HEADER SECTION */}
      <header className="pb-4 mb-4 border-b-2 border-stone-300 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <p className="text-stone-400 font-medium italic">{date}</p>
        </div>
        <button
          onClick={() => {
            removeProject(projectID);
            navigate("/", { replace: true });
          }}
          className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-semibold"
        >
          Delete
        </button>
      </header>

      {/* 2. DESCRIPTION */}
      <p className="text-stone-600 whitespace-pre-wrap leading-relaxed mb-10">
        {description}
      </p>

      <hr className="border-stone-300 mb-8" />

      {/* 3. TASKS SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

        {/* Inline Task Form */}
        <form>
          <div className="flex items-center gap-4 mb-8">
            <input
              type="text"
              className="w-64 px-2 py-1 rounded-sm bg-stone-200 border-b-2 border-stone-300 focus:outline-none focus:border-stone-600"
              placeholder="New task..."
              required
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="text-stone-700 hover:text-stone-950 font-medium transition-colors"
              type="submit"
              onClick={handleAddTask}
              >
              Add Task
            </button>
          </div>
          <p className="text-red-700">{errorMessage}</p>
        </form>

        {/* Task List */}
        {tasks.length === 0 && (
          <p className="text-stone-400 italic">
            This project does not have any tasks yet.
          </p>
        )}

        <ul className="p-4 mt-8 rounded-md bg-stone-100 space-y-4">
          {tasks.map((task) => (
            <li
              key={task.taskId}
              className="flex justify-between items-center group"
            >
              <span className="text-stone-800">{task.title}</span>
              <button
                onClick={() => onDeleteTask(task.taskId)}
                className="text-red-400"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectDetails;

export const loader = ({ params }) => {
  // implement loader func to import project data here:
  const project = JSON.parse(localStorage.getItem(params.projectId));
  console.log(project)
  return project;
};
