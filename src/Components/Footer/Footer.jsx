// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Logo from "../../assets/images/logo-removebg-preview.png";

const desktopServicesData = {
  "Software Development": [
    { name: "Custom Websites", link: "/services/web-&-app-development" },
    { name: "Ecommerce Sites", link: "/services/web-&-app-development" },
    { name: "Web Apps", link: "/services/web-&-app-development" },
    { name: "Database Systems", link: "/services/web-&-app-development" },
    { name: "CRM Platforms", link: "/services/web-&-app-development" },
    { name: "WordPress Sites", link: "/services/web-&-app-development" },
  ],
  SEO: [
    { name: "Answer Engine SEO", link: "/services/seo" },
    { name: "SEO Audits", link: "/services/seo" },
    { name: "Speed Optimization", link: "/services/seo" },
    { name: "Content Strategy", link: "/services/seo" },
    { name: "Product SEO", link: "/services/seo" },
    { name: "GA4 Setup", link: "/services/seo" },
  ],
  "Digital Marketing": [
    { name: "Sales Automation", link: "/services/digital-marketing" },
    { name: "PPC Advertising", link: "/services/digital-marketing" },
    { name: "Social Media Ads", link: "/services/digital-marketing" },
    { name: "Email Campaigns", link: "/services/digital-marketing" },
    { name: "Brand Strategy", link: "/services/digital-marketing" },
    { name: "CRO Services", link: "/services/digital-marketing" },
  ],
  Photography: [
    { name: "Product Photography", link: "/services/photography" },
    { name: "Corporate Headshots", link: "/services/photography" },
    { name: "Event Photography", link: "/services/photography" },
    { name: "Commercial Photography", link: "/services/photography" },
    { name: "Real Estate Photography", link: "/services/photography" },
  ],
  Videography: [
    { name: "Promotional Videos", link: "/services/videography" },
    { name: "Explainer Videos", link: "/services/videography" },
    { name: "Corporate Videos", link: "/services/videography" },
    { name: "Animation Videos", link: "/services/videography" },
    { name: "Testimonial Videos", link: "/services/videography" },
  ],
  "Branding & Design": [
    { name: "Logo Design", link: "/services/branding-&-design" },
    { name: "Brand Identity", link: "/services/branding-&-design" },
    { name: "Graphic Design", link: "/services/branding-&-design" },
    { name: "UI/UX Design", link: "/services/branding-&-design" },
    { name: "Print Design", link: "/services/branding-&-design" },
  ],
};

const Footer = () => {
  // const mobileServicesCategories = Object.keys(desktopServicesData);

  return (
    <footer className="footer-section">
      <div className="footer-background"></div>
      <div className="footer-overlay"></div>

      <div className="footer-content container">
        <div className="footer-top">
          {/* Logo & Contact */}
          <div className="footer-info-section">
            <div className="footer-logo">
              <img src={Logo} alt="Adsonic Digital Logo" />
            </div>
            <p className="footer-tagline">Your partner in digital growth.</p>

            <div className="footer-contact-details">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ochok Street, Chokaa, Kang'undo Road, Nairobi
                </a>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <a href="mailto:info@adsonic.co.ke">info@adsonicagency.co.ke</a>
              </div>
              <div className="contact-item">
                <FaPhone />
                <a href="tel:+254702207999">+254 702 207999</a> or{" "}
                <a href="tel:+25411642176">+254 116 42176</a>
              </div>
            </div>

            <div className="footer-social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Mobile Services */}
          <div className="footer-mobile-services">
            <h4>Services</h4>
            <ul>
              {Object.keys(desktopServicesData).map((category, index) => {
                // Find the first service in that category so we can get its correct link
                const firstServiceLink = desktopServicesData[category][0].link;
                return (
                  <li key={index}>
                    <Link to={firstServiceLink}>{category}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop Services */}
          {Object.entries(desktopServicesData).map(([category, services]) => (
            <div className="footer-service-column" key={category}>
              <h4>{category}</h4>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to={service.link}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Adsonic Digital Agency. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
