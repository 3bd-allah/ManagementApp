import { use } from 'react';
import { ProjectsContext } from '../store/Projects-context';

const ProjectDetails = ({ id, title, date, tasks }) => {
  const { projects } = use(ProjectsContext);
  const project = projects.filter(p => p.id === id )
  console.log(project)
  return (
    <div>ProjectDetails</div>
  )
}

export default ProjectDetails;

export const loader=  () =>{
  // implement loader func to import project data here:
}