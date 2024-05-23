import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="sixn__contact__container" id="contact">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact__info">
        <div className="contact__section">
          <h2>Email Us</h2>
          <p><a href="mailto:contact@6nconsulting.com">contact@6nconsulting.com</a></p>
        </div>
        <div className="contact__section">
          <h2>Telephone</h2>
          <p><a href="tel:077498662520">077498662520</a></p>
          <h2>Socials</h2>
          <p><a href="https://www.linkedin.com/in/adam-norman-67490835/?originalSubdomain=uk" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
      <div className="sixn__footer">
        <h3>Based in the UK</h3>
        <p>Rail - Civil Engineering - Consulting</p>
        <p>&copy; 6N Consulting</p>
      </div>
    </div>
  );
}

export default Contact;