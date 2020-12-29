import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ProjectThumbnail from './ProjectThumbnail';

// be as captivating as possible
// Structure:
// - title
// - function
// - explanations of projects to illustrate how you handle problems

export default function Projects() {
    const projectData = [{}, {}, {}];

    return (
        <div>
            {projectData.map((project, index) => {
                return <ProjectThumbnail key={'project-' + index} {...project}></ProjectThumbnail>
            })}
        </div>
    );
}