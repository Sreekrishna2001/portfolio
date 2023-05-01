import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-wrapper">
          <p className="contact-text">
            I am available for freelance work. You can contact me via email or phone:
          </p>
          <div className="contact-info">
            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-phone"></i>
              <a href="tel:1234567890">123-456-7890</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
