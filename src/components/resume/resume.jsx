import React from 'react';
import './resume.css';
import Resumé from '../../assets/resume.pdf';

function Resume() {
    return (
        <div className='resume'>
            <button className='resume_btn'><a href={Resumé} download className='btn'>Download my Resumé</a></button>
            <h2>Acquired Skills</h2>
            <div className='skills_container'>
                <div className='skills_front'>
                    <h3>Front-end Development</h3>
                    <div className='skills_content'>
                        <article className='skills_details'>
                            <h4>HTML5</h4>
                            <h4>CSS3</h4>
                            <h4>JavaScript</h4>
                            <h4>jQuery</h4>
                            <h4>Bootstrap</h4>
                            <h4>Bulma</h4>
                            <h4>React</h4>
                            <h4>Handlebars</h4>
                        </article>
                    </div>
                </div>
                <div className='skills_back'>
                    <h3>Back-end Development</h3>
                    <div className='skills_content'>
                        <article className='skills_details'>
                            <h4>Node.js</h4>
                            <h4>Express.js</h4>
                            <h4>MySQL</h4>
                            <h4>MongoDB</h4>
                            <h4>Progressive Web Apps</h4>
                            <h4>Version Control (Git)</h4>
                            <h4>Object-Oriented Programming</h4>
                            <h4>Model-View-Controller Paradigm</h4>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;