import React from 'react'
import Button from './Button'
import { useForm, ValidationError } from '@formspree/react'

import '../scss/components/_contact.scss';

function Contact() {

  const [state, handleSubmit] = useForm("mldrebpe");
  if (state.succeeded) {
    return <p>Gracias por tu mensaje!</p>;
  }

  return (
    <section id="contact" className="contact-section">
    <h2>Contact</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/mldrebpe" method="POST">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <Button label="Send Message" type="submit" className="send-button" disabled={state.submitting} />
        </form>
      </div>
    </section>
  );
}

export default Contact
