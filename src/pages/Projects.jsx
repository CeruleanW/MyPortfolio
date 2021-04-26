import PropTypes from "prop-types";
import React from "react";
import ProjectSection from "../components/ProjectSection";
import data from '../data/projects.json';
import styles from '../styles/Projects.module.scss';


const projectData = data.projects;

export default function Projects() {
  return (
    <>
      <h1 className='text-center text-5xl p-5 pb-0 lg:mt-5'><span className={styles.textshadow}>Projects</span></h1>
      {projectData.map((project, index) => {
        const isRightNarrow = index % 2 !== 0; 
        return (
          <ProjectSection
            key={project.id}
            isRightNarrow={isRightNarrow}
            index={index}
            className={styles.section}
            {...project}
          ></ProjectSection>
        );
      })}
    </>
  );
}
