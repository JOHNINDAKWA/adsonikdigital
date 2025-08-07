import React from "react";
import "./AboutUs.css";
import Video from "../../../assets/images/Placeholder Video.mp4";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      {/* Vertical Dot and Line (absolute to section) */}
      <div className="about-us-vertical">
        <div className="vertical-dot"></div>
        <div className="vertical-line"></div>
      </div>

      {/* Background video */}
      <video
        className="about-us-background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="about-us-overlay"></div>

      {/* Content */}
      <div className="about-us-content container">
        <div className="about-us-layout">
          <div className="about-us-text">
            <p className="about-us-tagline">Empowering Our Clients</p>
            <h2 className="about-us-heading">
              Trusted by Growing Brands <br />
              to Deliver <span>Digital Excellence</span>
            </h2>
            <p className="about-us-description">
              At Adsonic, we take pride in delivering results-driven solutions
              to businesses across the globe. Our team of passionate
              professionals leverages strategic insight and technical excellence
              to meet your unique digital needs. From robust web development and
              data-driven marketing to enterprise SEO and custom CRM solutions —
              we turn ideas into impact.
            </p>

            <div className="about-us-stats">
              <div className="stat-item">
                <span className="stat-number">1865</span>
                <span className="stat-label">Websites Launched</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">29</span>
                <span className="stat-label">Marketing Experts</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">204533</span>
                <span className="stat-label">Hours of Dedicated Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
