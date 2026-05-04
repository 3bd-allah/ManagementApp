import { useRef } from "react";
import { NavLink } from "react-router";
import ProjectActionMenu from "./ProjectActionMenu";
import Modal from "./Modal";
import RenameProject from "./RenameProject";
import ConfirmProjectDeletion from "./ConfirmProjectDeletion";


const ProjectItem = ({ id, title }) => {
  const renameModalRef = useRef();
  const deleteModalRef = useRef();

  return (
    <>
      <NavLink
        to={`/project/${id}`}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-stone-400 hover:bg-stone-800/50 hover:text-stone-200 transition-colors text-sm"
      >
        <span className="truncate pr-4">{title}</span>
        {/* 3 Vertical Dots - visible on hover or if active */}
        
        <ProjectActionMenu
          projectID={id}
          projectTitle={title}
          onRename={() => {
            renameModalRef.current.open();
          }}
          onDelete={()=>{
            deleteModalRef.current.open();
          }}
        />
      </NavLink>

      {/* RENAME MODAL */}
      <Modal
        ref={renameModalRef}
        className="rounded-lg shadow-2xl p-0 overflow-hidden border border-stone-200"
      >
        <RenameProject 
          pId={id}
          pTitle={title}
          onClose={()=> renameModalRef.current.close()}
        />
      </Modal>

      {/* DELETE MODAL */}
      <Modal
        ref={deleteModalRef}
        className="rounded-lg shadow-2xl p-0 overflow-hidden border border-stone-200"
      >
        <ConfirmProjectDeletion 
          pId={id}
          pTitle={title} 
          onClose={()=> deleteModalRef.current.close()}
        />
      </Modal>
    </>
  );
};

export default ProjectItem;
