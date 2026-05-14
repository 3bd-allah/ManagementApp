import { Link2 } from "lucide-react";
import { Link, useParams, useRouteLoaderData } from "react-router";
import { useLoaderData } from "react-router";


const ProjectDetailsError = ()=>{
    return (
        <div>
            <h3>Error!</h3>
            <p>This project doesn't exist any more....</p><br />
            <Link to={'/create-project'} className="flex gap-3 underline text-blue-600 hover:text-blue-800 transition-colors">
                <Link2 />Go Create New One
            </Link>
        </div>

    )
}

export default ProjectDetailsError;