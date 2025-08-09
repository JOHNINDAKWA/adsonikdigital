import React, { useState } from 'react';
import './ContactAccordion.css';
import bgContacts from '../../../assets/images/wall12.jpg';
import bgEmail from '../../../assets/images/wall12.jpg';
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
        <p>Call/Whatsapp: +254 11642176</p>
        <p>Call/Whatsapp: +254 716 597073</p>
        <p>WhatsApp: +18622402737</p>
      </div>
    )
  },
   {
    id: 'email',
    title: 'Email Us',
    background: bgEmail,
    content: (
      <div className="content-inner">
        <h3>Our Official Email</h3>
        <p>Email: info@adsonicagency.co.ke</p>
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
        <p>Ochok Street, Chokaa, Kang'undo Road, Nairobi</p>
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
