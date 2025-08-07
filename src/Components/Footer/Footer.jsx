// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Logo from '../../assets/images/logo-removebg-preview.png'; 

// The services data provided by the user
const desktopServicesData = {
  "Web Development": [
    "Custom Websites",
    "Ecommerce Sites",
    "Web Apps",
    "Database Systems",
    "CRM Platforms",
    "WordPress Sites",
  ],
  "SEO": [
    "Answer Engine SEO",
    "SEO Audits",
    "Speed Optimization",
    "Content Strategy",
    "Product SEO",
    "GA4 Setup",
  ],
  "Digital Marketing": [
    "Sales Automation",
    "PPC Advertising",
    "Social Media Ads",
    "Email Campaigns",
    "Brand Strategy",
    "CRO Services",
  ],
  "Photography": [
    "Product Photography",
    "Corporate Headshots",
    "Event Photography",
    "Commercial Photography",
    "Real Estate Photography",
  ],
  "Videography": [
    "Promotional Videos",
    "Explainer Videos",
    "Corporate Videos",
    "Animation Videos",
    "Testimonial Videos",
  ],
  "Branding & Design": [
    "Logo Design",
    "Brand Identity",
    "Graphic Design",
    "UI/UX Design",
    "Print Design",
  ]
};

const Footer = () => {
  // Get the main service categories for the mobile view
  const mobileServicesCategories = Object.keys(desktopServicesData);

  return (
    <footer className="footer-section">
      {/* Background GIF and dark overlay for text readability */}
      <div className="footer-background"></div>
      <div className="footer-overlay"></div>

      <div className="footer-content container">
        {/* Main top section with logo, contact, and services */}
        <div className="footer-top">

          {/* Logo, Contact Info, and Social Media Icons */}
          <div className="footer-info-section">
            {/* Using a simple text-based logo for a clean look */}
              <div className="footer-logo">
              <img src={Logo} alt="" />
            </div>
            <p className="footer-tagline">
              Your partner in digital growth.
            </p>

            <div className="footer-contact-details">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">123 Digital Ave, Nairobi City, 654321</a>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <a href="mailto:info@adsonic.com">info@adsonic.com</a>
              </div>
              <div className="contact-item">
                <FaPhone />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
            </div>

            <div className="footer-social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          {/* Mobile Services list (visible on small screens) */}
          <div className="footer-mobile-services">
            <h4>Services</h4>
            <ul>
              {mobileServicesCategories.map((category, index) => (
                <li key={index}><a>{category}</a></li>
              ))}
            </ul>
          </div>
          

          {/* Desktop Services Section (hidden on small screens) */}
          {Object.entries(desktopServicesData).map(([category, services]) => (
            <div className="footer-service-column" key={category}>
              <h4>{category}</h4>
              <ul>
                {services.map((service, index) => (
                  <li key={index}><a>{service}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section with copyright info */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Adsonic Digital Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
