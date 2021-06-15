import PropTypes from 'prop-types';
import React from 'react';
import ProjectSection from '../components/organisms/ProjectSection';
import data from '../data/projects.json';
import styles from '../styles/pages/Projects.module.scss';

const projectData = data.projects;

export default function Projects() {
  return (
    <>
      <h1 className={`text-center text-5xl p-5 pb-0 w-full lg:mt-5 ${styles.textshadow}`}>
        Projects
      </h1>
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
