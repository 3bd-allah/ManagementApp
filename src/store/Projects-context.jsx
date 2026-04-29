import { createContext, useEffect, useState } from "react";

export const ProjectsContext = createContext({
  projects: [],
  addProject: (project) => {},
  removeProject: (id) => {},
  renameProject: (id, newTitle) => {},
  addTask: (id, newTask) => {},
  removeTask: (pId, tId) => {}
});

export function ProjectsContextProvider({ children }) {
  const [projects, setProjects] = useState([]);


  useEffect(()=>{

    function loadProjects(){
      // localStorage.clear()

      for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const project = JSON.parse(localStorage.getItem(key));
        console.log(project)
        setProjects(prevProjects => [project, ...prevProjects]);
      }
      
    }

    loadProjects();
    
  },[])

  function addProject(project) {
    localStorage.setItem(project.projectID, JSON.stringify(project));
    setProjects((prevProjects) => [project, ...prevProjects]);
    
  }

  function removeProject(pId) {
    localStorage.removeItem(pId)
    setProjects((prevProjects) => {
      return prevProjects.filter((project) => project.projectID !== pId);
    });
  }

  function renameProject(pId, newTitle) {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.projectID === pId) {
          return { ...project, title: newTitle };
        }
        return project;
      });
    });
  }

  async function addTask(pId, newTask) {
    let updatedProjectForStorage;
    await setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.projectID === pId) {
          const updatedProject = { ...project, projectTasks: [ newTask, ...project.projectTasks ] };
          updatedProjectForStorage = updatedProject;
          return updatedProject;
        }
        return project;
      });
    });
    
    localStorage.setItem(pId, JSON.stringify( updatedProjectForStorage))
  }

  async function removeTask(pId, tId) {
    let updatedProjectForStorage;
    await setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.projectID === pId) {
          const updatedProjectTasks = project.projectTasks.filter(task => task.taskId !== tId);

          const updatedProject = { ...project, projectTasks: updatedProjectTasks };

          updatedProjectForStorage = updatedProject;

          return updatedProject;
        }
        return project;
      });
    });
    
    localStorage.setItem(pId, JSON.stringify(updatedProjectForStorage))
  }
  const contextValue = {
    projects: projects,
    addProject,
    removeProject,
    renameProject,
    addTask,
    removeTask
  };
  return <ProjectsContext value={contextValue}>{children}</ProjectsContext>;
}
