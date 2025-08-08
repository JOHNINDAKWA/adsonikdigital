// Landing.jsx
import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select"; // Import React Select
import {
  FaArrowRight,
  FaChartLine,
  FaLightbulb,
  FaAward,
  FaPlay,
} from "react-icons/fa"; // Updated icons for new bubble texts

import "./Landing.css"; // Import the custom CSS for this component
import { FaArrowRightLong } from "react-icons/fa6";

// Import the user-provided images
// Ensure these paths are correct relative to where Landing.jsx is located
import HERO_PERSON_IMAGE_URL from "../../../assets/images/man-laptop2.jpg";
import GLOBAL_HERO_IMAGE_URL from "../../../assets/images/dan-global-hero.webp";

// Placeholder image for the video thumbnail
import VIDEO_PLACEHOLDER_URL from "../../../assets/images/managed-it.png";

const Landing = () => {
  // Options for React Select dropdowns
  const serviceOptions = [
    { value: "", label: "Select Service", isDisabled: true },
    { value: "web-development", label: "Web Development" },
    { value: "seo", label: "SEO" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "photography", label: "Photography" },
    { value: "videography", label: "Videography" },
    { value: "branding-design", label: "Branding & Design" },
    { value: "consulting", label: "Consulting" },
  ];

  const industryOptions = [
    { value: "", label: "Select Industry", isDisabled: true },
    { value: "retail", label: "Retail" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance" },
    { value: "tech", label: "Tech" },
    { value: "hospitality", label: "Hospitality" },
    { value: "education", label: "Education" },
    { value: "real-estate", label: "Real Estate" },
  ];

  const budgetOptions = [
    { value: "", label: "Project Budget", isDisabled: true },
    { value: "small", label: "Small (Under $5k)" },
    { value: "medium", label: "Medium ($5k - $20k)" },
    { value: "large", label: "Large (Over $20k)" },
    { value: "enterprise", label: "Enterprise (Over $50k)" },
  ];

  // Custom styles for react-select to match your theme
   const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '48px', // Equivalent to padding: 0.8rem
      borderRadius: '8px',
      borderColor: state.isFocused ? 'var(--accent-orange)' : 'var(--border-color)',
      boxShadow: state.isFocused ? '0 0 0 2px rgba(var(--accent-orange-rgb), 0.2)' : 'none',
      '&:hover': {
        borderColor: 'var(--accent-orange)',
      },
      cursor: 'pointer',
      backgroundColor: 'var(--background-light)',
      color: 'var(--text-dark)',
      fontSize: '1rem',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? 'var(--primary-dark-blue)'
        : state.isFocused
        ? 'rgba(var(--primary-dark-blue-rgb), 0.1)'
        : 'var(--background-light)',
      color: state.isSelected ? 'var(--text-light)' : 'var(--text-dark)',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: 'var(--primary-dark-blue)',
        color: 'var(--text-light)',
        zIndex: 1000, // Ensure active option is above others
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--text-dark)',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'var(--text-dark-light)', // Lighter placeholder text
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: 'var(--border-color)',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'var(--text-dark)', // Color of the dropdown arrow
      '&:hover': {
        color: 'var(--accent-orange)',
      },
    }),menuPortal: (base) => ({
  ...base,
  zIndex: 9999, // ⬅️ Make this higher than anything in the landing page or About section
}),

  };

  return (
    <section className="landing-page-section">
      <div className="landing-page-content-container">
        {/* Left Section: Text Content */}
        {/* Left Section: Promo Card (LOOP-style) */}
<div className="promo-card">
  <p className="promo-eyebrow">It’s fast, it’s strategic, it’s</p>

  <h1 className="promo-heading">
    <span>Digital</span> Excellence
  </h1>

  <p className="promo-sub">
    Launch campaigns that convert. We design, build, and scale your brand’s
    online presence & measurable growth without the guesswork.
  </p>

  <Link to="/services" className="promo-cta">
    Start your growth plan <FaArrowRightLong />
  </Link>

  <div className="promo-badges">
    <Link to="/portfolio" className="promo-badge">
      See our work
    </Link>
    <Link to="/contact" className="promo-badge alt">
      Book a free consult
    </Link>
  </div>

  <p className="promo-footnote">
    Trusted by SMEs & startups. Transparent pricing. Results you can track.
  </p>
</div>


        {/* Video Player Element (for small screens, it will appear here) */}
        <div className="video-player-container">
          <div className="video-player-inner">
            <img
              src={VIDEO_PLACEHOLDER_URL}
              alt="Video placeholder image"
              className="video-thumbnail"
            />
            <div className="video-play-button">
              <FaPlay className="play-icon" />
            </div>
            <div className="video-text-circle-container">
              <svg viewBox="0 0 100 100" className="video-text-circle">
                <path
                  id="video-circle-path"
                  fill="none"
                  stroke="none"
                  d="M 50, 50 m -37, 0 a 37, 37 0 1, 1 74, 0 a 37, 37 0 1, 1 -74, 0"
                />
                <text className="video-circle-text">
                  <textPath href="#video-circle-path" startOffset="0%">
                    Discover Your Story • Grow Your Business • Explore Our
                    Vision •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Section: Image and Decorative Elements */}
        <div className="landing-page-image-wrapper">
          {/* Circular dotted SVG */}
          <svg
            className="dotted-circle-svg"
            width="114"
            height="114"
            viewBox="0 0 114 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="57"
              cy="57"
              r="56"
              stroke="#333333"
              strokeDasharray="3 3"
            ></circle>
            <circle
              cx="57"
              cy="57"
              r="40"
              stroke="#333333"
              strokeDasharray="3 3"
            ></circle>
            <circle cx="57" cy="17" r="2" fill="#333333"></circle>
            <circle cx="15" cy="95" r="2" fill="#333333"></circle>
            <circle cx="4" cy="40" r="2" fill="#333333"></circle>
            <circle cx="40" cy="4" r="2" fill="#333333"></circle>
            <circle cx="85" cy="106" r="2" fill="#333333"></circle>
            <circle cx="90" cy="12" r="2" fill="#333333"></circle>
            <circle cx="39" cy="93" r="2" fill="#333333"></circle>
          </svg>

          {/* Yellow "madoadoa" image */}
          <img
            src={GLOBAL_HERO_IMAGE_URL}
            alt="Decorative background elements"
            className="global-hero-decor"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/100x100/FFF0D9/FF6B00?text=Decor+Image";
            }}
          />

          {/* Main person image with pre-styled elements */}
          <img
            src={HERO_PERSON_IMAGE_URL}
            alt="Digital marketing professional working on laptop"
            className="hero-person-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/E0E0E0/333333?text=Person+Image+Not+Found";
            }}
          />

          {/* Floating elements with text, icons, and borders */}
          <div className="floating-bubble bubble-proven-results">
            <span className="bubble-icon">
              <FaChartLine />
            </span>{" "}
            Proven Results
          </div>
          <div className="floating-bubble bubble-innovative-solutions">
            <span className="bubble-icon">
              <FaLightbulb />
            </span>{" "}
            Innovative Solutions
          </div>
          <div className="floating-bubble bubble-award-winning">
            <span className="bubble-icon">
              <FaAward />
            </span>{" "}
            Award Winning
          </div>

          {/* Video Player Element for large screens */}
          <div className="video-player-container-lg">
            <div className="video-player-inner">
              <img
                src={VIDEO_PLACEHOLDER_URL}
                alt="Video placeholder image"
                className="video-thumbnail"
              />
              <div className="video-play-button">
                <FaPlay className="play-icon" />
              </div>
              <div className="video-text-circle-container">
                <svg viewBox="0 0 100 100" className="video-text-circle">
                  <path
                    id="video-circle-path-lg"
                    fill="none"
                    stroke="none"
                    d="M 50, 50 m -37, 0 a 37, 37 0 1, 1 74, 0 a 37, 37 0 1, 1 -74, 0"
                  />
                  <text className="video-circle-text">
                    <textPath href="#video-circle-path-lg" startOffset="0%">
                      Discover Your Story • Grow Your Business • Explore Our
                      Vision •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Search Bar Inspired */}
      <div className="landing-page-bottom-section">
        <h2 className="bottom-section-heading">Ready to Transform Your Online Presence?</h2>
        <p className="bottom-section-description">
          Find the perfect digital marketing solution tailored to your needs and goals.
        </p>
        <div className="bottom-section-form">
          <Select
            options={serviceOptions}
            defaultValue={serviceOptions[0]} // Set default placeholder
            styles={customSelectStyles}
            classNamePrefix="react-select" 
            menuPortalTarget={document.body}
            aria-label="Select Service"
          />
          <Select
            options={industryOptions}
            defaultValue={industryOptions[0]}
            styles={customSelectStyles}
            classNamePrefix="react-select"
            menuPortalTarget={document.body}
            aria-label="Select Industry"
          />
          <Select
            options={budgetOptions}
            defaultValue={budgetOptions[0]}
            styles={customSelectStyles}
            classNamePrefix="react-select"
            menuPortalTarget={document.body}
            aria-label="Project Budget"
          />
          <Link to="/contact" className="button find-agency-button">
            GET STARTED
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
