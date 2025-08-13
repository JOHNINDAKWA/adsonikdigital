import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ContactSuccess.css';

const ContactSuccess = () => {
  const { state } = useLocation();
  const name = state?.name?.split(' ')?.[0] || 'There';

  return (
    <section className="success-wrap">
      <div className="success-card">
        <div className="success-ribbon" />
        <div className="success-icon" aria-hidden="true">✓</div>

        <h1 className="success-title">Request received</h1>
        <p className="success-sub">
          Thanks, <strong>{name}</strong> <br /><br /> Your message is on its way to our team.
          We usually reply within <strong>1 business day</strong>. <br />A confirmation
          has been sent to your email if provided.
        </p>

        <div className="success-meta">
          <div>
            <span className="meta-label">Next steps</span>
            <span className="meta-text">We’ll review and get back to you.</span>
          </div>
          <div>
            <span className="meta-label">Need it sooner?</span>
            <span className="meta-text">Call us: +254 716 597 073</span>
          </div>
        </div>

        <div className="success-actions">
          <Link to="/" className="btn-primary">Back Home</Link>
          <Link to="/services" className="btn-ghost">View All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSuccess;
