// About Me
// name
// photo
// description: what you’ve done and where you hope to go in your career
// Work Philosophy: A brief description of your beliefs about yourself and the industry.


// include a contact form and your social media channels.
// about this site
import React, { Component } from 'react';
import profilePhoto from './profilePhoto.JPG';

// Statement of Originality: A paragraph stating that this is your work and that it is confidential. also indicate if any parts of the portfolio should not be copied.
const statementOfOriginality = 'This portfolio is the work of Yi Yang. Please do not copy without permission. Some of the exhibits, work samples, and/or service samples are the proprietary property of the organization whose name appears on the document. Each has granted permission for this product to be used as a demonstration of my work';


export default class AboutMe extends Component {
    render() {
        return (
            <>
                <h1>About Me</h1>
                <div>
                Yi Yang is a web developer originally from Zhuhai, China, but now living in Toronto, Canada. He just graduted from York University.
                    {/* <h2>Statement of Originality</h2>
                    <p>{statementOfOriginality}</p> */}
                </div>
            </>
        )
    }
}