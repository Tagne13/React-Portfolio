import React from 'react';
import './footer.css';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

function Footer () {
    return (
        <footer id='footer'>
            <div>
                <h5>Made by Jeff Montagne PT, DPT, ATC</h5>
                <p>&copy; 2023</p>
            </div>
            <div className='footer_links'>
                <a href='https://www.facebook.com/jeff.montagne.7' target='_blank'><AiOutlineFacebook/></a>
                <a href='https://github.com/Tagne13' target='_blank'><FiGithub/></a>
                <a href='https://linkedin.com/in/jeff-montagne-1b5544281' target='_blank'><FiLinkedin/></a>
            </div>
        </footer>
    )
}

export default Footer;