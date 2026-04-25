import { use } from 'react';
import { ProjectsContext } from '../store/Projects-context';
import { useLoaderData } from 'react-router';

const ProjectDetails = () => {

  const {id,title,date, description,tasks} = useLoaderData();
  console.log(tasks)
  return (
    <>
      <div>{title}</div>
      <div>{date}</div>
      <div>{description}</div>
      {tasks.length && tasks.map((task, index) => (
        <ul>
          <li key={index}>{task}</li>
        </ul>
      ))}
      <div>{tasks}</div>
    </>
  )
}

export default ProjectDetails;

export const loader=  ({params}) =>{
  // implement loader func to import project data here:
  
  const project = JSON.parse(localStorage.getItem(params.projectId))
  return project;
}