import React, {useState} from 'react'
import { validateEmail } from '../../utils/helpers';
import emailjs from "emailjs-com";

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);

        emailjs.sendForm( 
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setSubmitMessage('EMAIL SEND!')
        }, function(error) {
            console.log('FAILED...', error);
            setErrorMessage('FAILED...');
        });

        setFormState({
            name: '',
            email: '',
            message: '',
        });
    }
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor="name"> Full Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                {/*  email input */}
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange}/>
                </div>
                {/* error message */}
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                {submitMessage && (
                <div>
                    <p >{submitMessage}</p>
                </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
    
export default ContactForm;