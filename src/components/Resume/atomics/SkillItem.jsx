import React from 'react';

export default function SkillItem(props) {
  return (
    <p className='skill-item'>
      {props.children}
    </p>
  );
}
