import React, { useState } from 'react';
import './contact.css';
import { validateEmail, checkBlank } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email address');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`);
                } else {
                    setErrorMessage('');
                }
            }
        };

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    function handleBlank(e) {
        if (e.target.name === 'name' || e.target.name === 'message') {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        };

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

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
                        onBlur={handleBlank}
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter you email address'
                        onBlur={handleChange}
                        required
                    />
                    <textarea 
                        name='message'
                        rows='8'
                        placeholder='Enter your message here'
                        onBlur={handleBlank}
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