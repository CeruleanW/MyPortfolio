import { HeaderSection } from '../components/Resume/sections/HeaderSection';
import React, { useRef } from 'react';
import Section from '../components/Resume/ResumeSectionWrapper';
import Title from '../components/Resume/atomics/Title';

import Content from '../components/Resume/atomics/Content';
import Language from '../components/Resume/Language';
import '../styles/pages/resume.scss';
import ReactToPrint from 'react-to-print';
import { FIRSTNAME, LASTNAME } from '../data/globals';
import { SkillsSection } from '../components/Resume/SkillsSection';
import { ExperienceSection } from '../components/Resume/sections/ExperienceSection';
import { EducationSection } from '../components/Resume/sections/EducationSection';
import { ProjectsSection } from '../components/Resume/sections/ProjectsSection';

const PDF_NAME = FIRSTNAME + LASTNAME + '_Resume';

function LanguageSection(props) {
  const { languages } = props;
  return (
    <Section id='languages'>
      <Title text='languages' />
      <div className='flex '>
        {languages.map((lang) => (
          <Language
            name={lang.name}
            level={lang.level}
            key={lang.name}
          ></Language>
        ))}
      </div>
    </Section>
  );
}

export default function Resume(props) {
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
