import React from 'react';
import profilePic from '../../assets/IMG_1875.jpeg';
import './about.css';

function About() {
    return (
        <section id="about">
            <div className='about'>
                <h1>About Jeff</h1>
                <div className='me'>
                <img src={profilePic} alt="Profile" className='about_image' />
                </div>
                <p>I graduated from Saginaw Valley State University in 2004 with a B.S. in Athletic Training. I then went on to be accepted into the physical therapy program at Oakland University and completed my Doctorate of Physical Therapy in 2009. Both during and post-COVID pandemic I became dissatisfied with the healthcare industry as a whole and sought out a career that was more in-tune with my current interests and more suited to my strengths. My passions include learning, traveling, being outdoors in nature, and experiencing different cultures.</p>
            </div>
        </section>
    );
};

export default About;