import React from 'react';
import Section from './ResumeSectionWrapper';
import Title from './Title';
import SkillItem from './SkillItem';

// const SkillType = () => {};

export function SkillsSection(props) {
  const { skills } = props;
  const { front_end, back_end, general } = skills;
  return (
    <Section id='skills'>
      <Title text='Tech Skills' />
      {/* map the skill list to each component */}
      <div className='flex flex-wrap mt-4 justify-start'>
        {front_end.slice(0, 10).map((skill) => (
          <SkillItem key={'key-' + skill}>{skill}</SkillItem>
        ))}
        {back_end.slice(0, 7).map((skill) => (
          <SkillItem key={'key-' + skill}>{skill}</SkillItem>
        ))}
        {general.slice(0, 6).map((skill) => (
          <SkillItem key={'key-' + skill}>{skill}</SkillItem>
        ))}
      </div>
    </Section>
  );
}
