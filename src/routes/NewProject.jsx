import { useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { use } from 'react';
import { ProjectsContext } from "../store/Projects-context";

const NewProject = () => {

  const navigate = useNavigate();
  const { addProject } = use(ProjectsContext)

  const newProjectSchema=  Yup.object({
    title:Yup.string().min(3,"Title must be greater than 3.").max(50,"Title should be less than 50").required("Title is required !"),
    description:Yup.string().required("Description is required !").min(5,"Too short!").max(100,"Too long!"),
    date:Yup.date().required("Date is required!")
  })

  
  const handleSubmit = async({title, description, date},{resetForm})=>{

    const newProject = {
        projectID: crypto.randomUUID(),
        title,
        description,
        date,
        projectTasks:[]
      }
    console.log(newProject)
    addProject(newProject);
    resetForm();
    navigate(`/project/${newProject.projectID}`);
  }

  return (
    <Formik
      initialValues={{
        title:'',
        description:'',
        date:''
       }
      }
      validationSchema={newProjectSchema}
      onSubmit={handleSubmit}
      
    >
      {({isSubmitting})=>(

        <Form className="space-y-5  bg-white w-full  p-8 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200" >
          <h2 className="text-2xl font-bold text-stone-800 mb-6">New Project</h2>
          {/* TITLE INPUT */}
          <div>
            <label htmlFor="title" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Project Title
            </label>
            <Field
              id="title"
              name="title"
              type="text"
              placeholder="e.g. Website Redesign"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all text-stone-800"
            />
            <ErrorMessage name="title" component={"p"} className="mt-2 text-[10px] font-bold uppercase tracking-widest text-red-500/90 animate-in fade-in"/>
          </div>

          {/* DESCRIPTION INPUT */}
          <div>
            <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Description
            </label>
            <Field
              as="textarea"
              id="description"
              name="description"
              rows="3"
              placeholder="What is this project about?"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all text-stone-800 resize-none"
            />
            <ErrorMessage name="description" component="p" className="mt-1.5 text-[10px] font-bold uppercase tracking-widest text-red-500/90"/>
          </div>

          {/* DUE DATE INPUT */}
          <div>
            <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Due Date
            </label>
            <Field
              id="date"
              name="date"
              type="date"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all text-stone-800"
            />
            <ErrorMessage name="date" component={"p"} className="mt-2 text-[10px] font-bold uppercase tracking-widest text-red-500/90 animate-in fade-in"/>
          </div>

          {/* 3. BUTTONS: Simple & Aligned */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={()=>navigate(-1)}
              className="px-6 py-2.5 text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-stone-900 text-stone-100 text-sm font-bold rounded-xl hover:bg-stone-800 active:scale-95 transition-all shadow-md"
              disabled={isSubmitting}
            >
              Save Project
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewProject;
