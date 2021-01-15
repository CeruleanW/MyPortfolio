import PropTypes from "prop-types";
import React, { useState } from "react";
import ProjectSection from "./ProjectSection";
import data from '../../data/projects.json';

// Structure:
// - title
// - function
// - explanations of projects to illustrate how you handle problems

const projectData = data.projects;

export default function Projects(props) {

  return (
    <div>
      {projectData.map((project, index) => {
        const isRightNarrow = index % 2 !== 0; 
        
        return (
          <ProjectSection
            key={"project-" + index}
            isRightNarrow={isRightNarrow}
            {...project}
          ></ProjectSection>
        );
      })}
    </div>
  );
}
