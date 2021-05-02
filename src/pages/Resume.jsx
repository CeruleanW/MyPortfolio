import React, { useEffect, useRef } from 'react';
import Section from '../components/Resume/ResumeSectionWrapper';
import Title from '../components/Resume/Title';
import ContactInfo from '../components/Resume/ContactInfo';
import ContactItem from '../components/Resume/ContactItem';
import Content from '../components/Resume/Content';
import SkillItem from '../components/Resume/SkillItem';
import Job from '../components/Resume/Job';
import PositionTitle from '../components/Resume/PositionTitle';
import CompanyName from '../components/Resume/CompanyName';
import CompanyIntro from '../components/Resume/CompanyIntro';
import Duration from '../components/Resume/Duration';
import Location from '../components/Resume/Location';
import Spotlight from '../components/Resume/Spotlight';
import ProjectName from '../components/Resume/ProjectName';
import ProjectLink from '../components/Resume/ProjectLink';
import Major from '../components/Resume/Major';
import Degree from '../components/Resume/Degree';
import SchoolName from '../components/Resume/SchoolName';
import GPA from '../components/Resume/GPA';
import Language from '../components/Resume/Language';
import Features from '../components/Resume/Features';
import '../styles/pages/resume.scss';

function HeaderSection(props) {
  const { name, phone, email, portfolio, github, address, title } = props;
  return (
    <Section id='header'>
      <h1 id='name' className='header-name'>
        {name}
      </h1>
      <p id='my-position-title' className='position-title'>
        {title}
      </p>
      <ContactInfo>
        <ContactItem type='phone' text={phone} />
        <ContactItem type='email' text={email} />
        <ContactItem type='address' text={address} />
        <ContactItem type='portfolio' id='portfolio' text={portfolio} />
        <ContactItem type='github' text={github}>
          {github}
        </ContactItem>
      </ContactInfo>
    </Section>
  );
}

function ExperienceSection(props) {
  const { experience } = props;

  return (
    <Section id='experience'>
      <Title text='Experience' />
      {experience.map((job) => {
        return (
          <Job id={job['job-title']} key={job['job-title']}>
            <PositionTitle>{job['job-title']}</PositionTitle>
            <CompanyName>{job.company['company-name']}</CompanyName>
            {job.company['company-introduction'] ? (
              <CompanyIntro>{job.company['company-introduction']}</CompanyIntro>
            ) : null}
            <Duration
              from={job.time.from}
              to={job.time.to}
              className='opacity-80'
            />
            <span className='mr-20'></span>
            <Location className='opacity-80'>
              {job.company['company-location']}
            </Location>
            <Features features={job.features}></Features>
          </Job>
        );
      })}
    </Section>
  );
}

function ProjectsSection(props) {
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

function EducationSection(props) {
  const { education } = props;

  function renderItem(education) {
    const {
      major,
      degree,
      organization,
      from,
      to,
      location,
      statements,
      gpa,
    } = education;
    const projects = education['school-projects'];

    return (
      <div className='inner-section' key={`${organization}-${major}`}>
        <h3 className='text-2xl'>
          <span className='text-2xl'>{major}</span>,{' '}
          <span className='text-2xl'>{degree}</span>
        </h3>
        <SchoolName>{organization}</SchoolName>
        <Duration {...{ from, to }} />
        <span className='mr-20'></span>
        <Location>{location}</Location>
        {!!statements ? <Features features={statements} /> : null}
        {!!projects
          ? <Features features={projects.features}/>
          : null}
        {/* {!!gpa ? <GPA>{gpa}</GPA> : null} */}
      </div>
    );
  }

  return (
    <Section id='education'>
      <Title text='education' />
      {Array.isArray(education)
        ? education.map((item) => {
            return renderItem(item);
          })
        : renderItem(education)}
    </Section>
  );
}

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

function SkillsSection(props) {
  const { skills } = props;
  return (
    <Section id='skills'>
      <Title text='Tech Skills' />
      {/* map the skill list to each component */}
      <div className='flex flex-wrap mt-4 justify-start'>
        {skills.map((skill) => (
          <SkillItem key={'key-' + skill}>{skill}</SkillItem>
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

  return (
    <article className='max-w-screen-lg m-auto pt-20'>
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
      <LanguageSection languages={languages} />
    </article>
  );
}
