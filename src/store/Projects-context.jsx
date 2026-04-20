import { createContext, useState } from "react";

export const ProjectsContext = createContext({
    projects:[],
    addProject:(project)=>{},
    removeProject:(id)=>{},
    renameProject:(id, newTitle)=>{},
    addTask:(id, newTask)=>{}
})

export function ProjectsContextProvider({children}){

    const [projects, setProjects] = useState()

    function addProject(project){
        setProjects(prevProjects => setProjects([project, ...prevProjects]))
    }

    function removeProject(id){
        setProjects(prevProjects =>{
            return prevProjects.filter(project => project.id !== id)
        })
    }

    function renameProject (id, newTitle){
        setProjects(prevProjects => {
            return prevProjects.map(project =>{
                if(project.id === id){
                    return {...project, title: newTitle};
                }
                return project;
            })
        })
    }

    function addTask(id, newTask){
        setProjects(prevProjects =>{
            return prevProjects.map(project =>{
                if(project.id === id ){
                    project.tasks.push(newTask);
                    return {...project};
                }
                return project
            })
        }) 
    }

    const contextValue={
        projects: projects, 
        addProject,
        removeProject, 
        renameProject,
        addTask
    }
    return <ProjectsContext value={contextValue}>{children}</ProjectsContext>

}