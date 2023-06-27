import React from 'react';

function Contact() {
    return (
        <section id='contact'>
            <h2>Contact Me</h2>
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
        </section>
    );
};

export default Contact;