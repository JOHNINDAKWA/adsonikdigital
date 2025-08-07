import React from 'react';
import './Contact.css';
import FakeCaptcha from './FakeCaptcha/FakeCaptcha';
import ContactAccordion from './ContactAccordion/ContactAccordion';
import BridgeSection from './BridgeSection/BridgeSection';




const Contact = () => {
  return (
    <>
    <section className="contact-wrapper">
      <div className="container">
        <h2 className="contact-heading">
          READY TO <span className="highlight">REACH OUT?</span>
        </h2>

        <div className="contact-box">
          <form className="contact-form">
            <div className="left">
              <label>
                Name
                <input type="text" placeholder="Please enter your complete name..." required />
              </label>

              <label>
                Company
                <input type="text" placeholder="Please enter your company name..." required />
              </label>

              <label>
                Company Email
                <input type="email" placeholder="Please enter your company email..." required />
              </label>

              <label>
                Phone <span className="optional">(optional)</span>
                <input type="tel" placeholder="Please enter your phone number..." />
              </label>
            </div>

            <div className="right">
              <label>
                Your Message
                <textarea placeholder="Please let us know how we can help..." rows="3" required></textarea>
              </label>

              <FakeCaptcha />


              <p className="privacy-text">
                By submitting this form you agree to our <a href="/privacy-policy">Privacy Policy</a>
              </p>

              <button type="submit" className="submit-btn">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <ContactAccordion />
    <BridgeSection />
    </>
  );
};

export default Contact;
