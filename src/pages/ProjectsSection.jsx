import React from 'react';
import Section from '../components/Resume/ResumeSectionWrapper';
import Title from '../components/Resume/Title';
import ProjectName from '../components/Resume/ProjectName';
import ProjectLink from '../components/Resume/ProjectLink';
import Features from '../components/Resume/Features';

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
