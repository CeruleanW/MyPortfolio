import React from 'react';
import Section from '../ResumeSectionWrapper';
import Title from '../Title';
import Duration from '../Duration';
import Location from '../Location';
import SchoolName from '../SchoolName';
import Features from '../Features';

export function EducationSection(props) {
  const { education } = props;

  function renderItem(education) {
    const {
      major, degree, organization, from, to, location, statements, gpa,
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
        {!!projects ? <Features features={projects.features} /> : null}
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
