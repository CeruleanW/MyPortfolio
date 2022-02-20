import React, { useRef } from 'react';
import { HeaderSection } from '../../components/Resume/sections/HeaderSection';
import Section from '../../components/Resume/ResumeSectionWrapper';
import Title from '../../components/Resume/atomics/Title';
import Content from '../../components/Resume/atomics/Content';
import '../../styles/pages/resume.scss';
import ReactToPrint from 'react-to-print';
import { FIRSTNAME, LASTNAME } from '../../data/globals';
import { SkillsSection } from '../../components/Resume/sections/SkillsSection';
import { ExperienceSection } from '../../components/Resume/sections/ExperienceSection';
import { EducationSection } from '../../components/Resume/sections/EducationSection';
import { ProjectsSection } from '../../components/Resume/sections/ProjectsSection';
import { LanguageSection } from './LanguageSection';

const PDF_NAME = FIRSTNAME + LASTNAME + '_Resume';

export function MainResume(props) {
  const fullName = props['full-name'];
  const phone = props['phone-numer'];
  const address = props.location;
  const { email, title, skills, experience, education, languages } = props;
  const { github, portfolio } = props.links;
  const summaryContent = props.summary.version.short;
  const projects = props['side-projects'];

  const pdfDOM = useRef(null);

  return (
    <>
      <div className='h-16'></div>
      <article
        className='max-w-screen-lg m-auto resume-container px-4'
        ref={pdfDOM}
      >
        <HeaderSection
          name={fullName}
          {...{ phone, address, email, github, portfolio, title }}
        />
        <Section id='summary'>
          <Title text='Summary' />
          <Content>{summaryContent}</Content>
        </Section>
        <SkillsSection skills={skills} />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <EducationSection education={education} />
        <LanguageSection languages={languages} />{' '}
      </article>

      <div className='flex justify-center mt-16'>
        <ReactToPrint
          trigger={() => (
            <button className='m-auto print-button button -blue'>Print</button>
          )}
          content={() => pdfDOM.current}
          documentTitle={PDF_NAME}
        />
      </div>
    </>
  );
}
