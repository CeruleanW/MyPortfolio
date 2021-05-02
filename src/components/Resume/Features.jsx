import React from 'react';
import Spotlight from './Spotlight';

export default function Features(props) {
  const { features, children } = props;
  return (
    <ul className='list-disc pl-4 mt-2'>
      {Array.isArray(features) ? (
        features.map((item) => (
          <Spotlight key={item.keypoint} keypoint={item.keypoint}>
            {item.description}
          </Spotlight>
        ))
      ) : (
        <Spotlight keypoint={features.keypoint}>{features.description}</Spotlight>
      )}
      {children}
    </ul>
  );
}
