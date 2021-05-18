import React from 'react';
import Section from './ResumeSectionWrapper';
import Title from './Title';
import SkillItem from './SkillItem';

export function SkillsSection(props) {
  const { skills } = props;
  const {front_end, back_end, general, additional} = skills;
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
