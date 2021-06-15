import React from 'react';
import Section from '../ResumeSectionWrapper';
import Title from '../Title';
import Job from '../Job';
import PositionTitle from '../PositionTitle';
import CompanyName from '../CompanyName';
import CompanyIntro from '../CompanyIntro';
import Duration from '../Duration';
import Location from '../Location';
import Features from '../Features';

export function ExperienceSection(props) {
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
              className='opacity-80' />
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
