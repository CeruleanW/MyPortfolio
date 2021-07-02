import React from 'react';
import Section from '../ResumeSectionWrapper';
import Title from '../atomics/Title';
import ProjectName from '../atomics/ProjectName';
import ProjectLink from '../atomics/ProjectLink';
import Features from '../Features';

export function ProjectsSection(props) {
  // Content for the project section
  return (
    <Section id='projects'>
      <Title text='Side projects' />
      {props.projects.map((project) => {
        const { features, repo, demo, title } = project;
        return (
          <div key={title} className='inner-section'>
            <ProjectName text={title} />
            <ProjectLink link={demo} />
            <Features features={features}></Features>
          </div>
        );
      })}
    </Section>
  );
}
