import React, { useEffect, useRef } from 'react';
import Section from '../components/Resume/ResumeSectionWrapper';
import Title from '../components/Resume/Title';
import ContactInfo from '../components/Resume/ContactInfo'
import ContactItem from '../components/Resume/ContactItem'
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
import Feature from '../components/Resume/Feature';
import Major from '../components/Resume/Major';
import Degree from '../components/Resume/Degree';
import SchoolName from '../components/Resume/SchoolName';
import GPA from '../components/Resume/GPA';
import LanguageName from '../components/Resume/LanguageName';
import LanguageLevel from '../components/Resume/LanguageLevel';


export default function Resume() {


  return (
    <>
      <Section id='header'>
        <h1 id='name' className='header-name'>
          {}
        </h1>
        <ContactInfo>
          <ContactItem type='phone'></ContactItem>
          <ContactItem type='email'></ContactItem>
          <ContactItem type='link' id='portfolio'></ContactItem>
          <ContactItem type='link' id='github'></ContactItem>
          <ContactItem type='address'></ContactItem>
        </ContactInfo>
      </Section>
      <Section id='summary'>
      <Title>{}</Title>
        <Content></Content>
      </Section>
      <Section id='skills'>
        {/* map the skill list to each component */}
        <SkillItem></SkillItem>
      </Section>
      <Section id='experience'>
      <Title>{}</Title>
        {/* map each job */}
        <Job id=''>
          <PositionTitle></PositionTitle>
          <CompanyName></CompanyName>
          <CompanyIntro></CompanyIntro>
          <Duration></Duration>
          <Location></Location>
          <Spotlight></Spotlight>
        </Job>
      </Section>
      <Section id='projects'>
      <Title>{}</Title>
        {/* map each project */}
        <ProjectName></ProjectName>
        <ProjectLink></ProjectLink>
        <Feature></Feature>
        <Spotlight></Spotlight>
      </Section>
      <Section id='education'>
      <Title>{}</Title>
        {/* map each degree */}
        <Major></Major>
        <Degree></Degree>
        <SchoolName></SchoolName>
        <Duration></Duration>
        <Location></Location>
        <Spotlight></Spotlight>
        <GPA></GPA>
      </Section>
      <Section id='languages'>
      <Title>{}</Title>
        {/* map each language */}
        <LanguageName></LanguageName>
        <LanguageLevel></LanguageLevel>
      </Section>
    </>
  );
}
