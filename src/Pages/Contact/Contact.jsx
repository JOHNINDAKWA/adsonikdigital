import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import FakeCaptcha from './FakeCaptcha/FakeCaptcha';
import ContactAccordion from './ContactAccordion/ContactAccordion';
import BridgeSection from './BridgeSection/BridgeSection';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkgzenqy';

const Contact = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitting(true);

    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const name = data.get('name');

      // Post to Formspree (keeps your existing inbox flow)
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (!res.ok) {
        const json = await res.json().catch(() => null);
        const msg =
          json?.errors?.[0]?.message || 'Failed to submit. Please try again.';
        throw new Error(msg);
      }

      form.reset();
      // Navigate to pretty confirmation page
      navigate('/contact/thank-you', { state: { name } });
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-wrapper">
        <div className="container">
          <h2 className="contact-heading">
            READY TO <span className="highlight">REACH OUT?</span>
          </h2>

          <div className="contact-box">
            {/* NOTE: no action/method; we handle submission in JS */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="left">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Please enter your complete name..."
                    required
                  />
                </label>

                <label>
                  Company
                  <input
                    type="text"
                    name="company"
                    placeholder="Please enter your company name..."
                    required
                  />
                </label>

                <label>
                  Company Email
                  <input
                    type="email"
                    name="email"
                    placeholder="Please enter your company email..."
                    required
                  />
                </label>

                <label>
                  Phone <span className="optional">(optional)</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Please enter your phone number..."
                  />
                </label>
              </div>

              <div className="right">
                <label>
                  Your Message
                  <textarea
                    name="message"
                    placeholder="Please let us know how we can help..."
                    rows="3"
                    required
                  />
                </label>

                <FakeCaptcha />

                {submitError && (
                  <p className="form-error" role="alert">
                    {submitError}
                  </p>
                )}

                <p className="privacy-text">
                  By submitting this form you agree to our{' '}
                  <a href="/privacy-policy">Privacy Policy</a>
                </p>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  {submitting ? 'Sending…' : 'Submit Request'}
                </button>
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
