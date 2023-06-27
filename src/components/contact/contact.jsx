import React from 'react';
import './contact.css';

function Contact() {
    return (
        <section id='contact'>
            <h2>Contact Me</h2>
            
            <div className='container contact_container'>
                <div className='contact_info'>
                    <p>Jeff Montagne</p>
                    <p>921 Wealthy St SE</p>
                    <p>Grand Rapids, MI 49506</p>
                    <p>(989)529-6898</p>
                    <a href='mailto:Tagne13@gmail.com' target='_blank' className=''>
                        Tagne13@gmail.com
                    </a>
                </div>
                <form>
                    <input 
                        type='text'
                        name='name' 
                        placeholder='Enter your first and last name' 
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter you email address'
                        required
                    />
                    <textarea 
                        name='message'
                        rows='8'
                        placeholder='Enter your message here'
                        required
                    ></textarea>
                    <button type='submit' id='contact_btn' className='btn btn-primary'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;