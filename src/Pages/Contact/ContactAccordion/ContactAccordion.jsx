import React, { useState } from 'react';
import './ContactAccordion.css';
import bgContacts from '../../../assets/images/wall12.jpg';
import bgLocation from '../../../assets/images/wall13.jpg';
import bgSocial from '../../../assets/images/wall9.jpg';

const data = [
  {
    id: 'phone',
    title: 'Phone Numbers',
    background: bgContacts,
    content: (
      <div className="content-inner">
        <h3>Get in Touch</h3>
        <p>Support: +254702207999</p>
        <p>Admin: +254702207999</p>
        <p>WhatsApp: +254702207999</p>
      </div>
    )
  },
  {
    id: 'location',
    title: 'Our Location',
    background: bgLocation,
    content: (
      <div className="content-inner">
        <h3>Visit Us</h3>
        <p>Level 40, Meru 2 Corporate Tower</p>
        <p>No 3, Jalan Bangsar, KL Nairobi City</p>
        <p>Kuala Lumpur, 59200, Konza City</p>
      </div>
    )
  },
  {
    id: 'social',
    title: 'Social Media',
    background: bgSocial,
    content: (
      <div className="content-inner">
        <h3>Connect With Us</h3>
        <p><a href="https://facebook.com" target="_blank">Facebook</a></p>
        <p><a href="https://twitter.com" target="_blank">Twitter</a></p>
        <p><a href="https://instagram.com" target="_blank">Instagram</a></p>
        <p><a href="https://linkedin.com" target="_blank">LinkedIn</a></p>
      </div>
    )
  }
];

const ContactAccordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="accordion-section">
      <div className="container">
        <h2 className="accordion-title">
          Explore our <span className="highlight">Contact Details</span>
        </h2>

        <div className="accordion-list">
          {data.map((item) => (
            <div key={item.id} className={`accordion-item ${openItem === item.id ? 'open' : ''}`}>
              <button className="accordion-header" onClick={() => handleToggle(item.id)}>
                {item.title}
                <span className="icon">{openItem === item.id ? '−' : '+'}</span>
              </button>

              {openItem === item.id && (
                <div
                  className="accordion-body"
                  style={{
                    backgroundImage: `url(${item.background})`
                  }}
                >
                  <div className="overlay" />
                  {item.content}
                  <button className="close-btn" onClick={() => setOpenItem(null)}>✕</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactAccordion;
