import React from 'react';
import Section from '../../components/Resume/ResumeSectionWrapper';
import Title from '../../components/Resume/atomics/Title';
import Language from '../../components/Resume/Language';

export function LanguageSection({ languages }) {
  return (
    <Section id='languages'>
      <Title text='languages' />
      <div className='flex '>
        {languages.map((lang) => (
          <Language
            name={lang.name}
            level={lang.level}
            key={lang.name} />
        ))}
      </div>
    </Section>
  );
}
