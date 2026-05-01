import React, { useState } from "react";
import { Link } from "react-router";
import ProjectActionMenu from "./ProjectActionMenu";

const ProjectItem = ({ id, title, date, tasks }) => {
  return (
    <Link
      to={`/project/${id}`}
      className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-stone-400 hover:bg-stone-800/50 hover:text-stone-200 transition-colors text-sm"
    >
      <span className="truncate pr-4">{title}</span>
      {/* 3 Vertical Dots - visible on hover or if active */}
      <ProjectActionMenu projectID={id} projectTitle={title} />
    </Link>
  );
};

export default ProjectItem;
