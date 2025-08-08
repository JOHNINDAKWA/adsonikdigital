import React from "react";
import "./AboutUs.css";
import Video from "../../../assets/images/Placeholder Video.mp4";

import Marquee from "react-fast-marquee";

// ⚠️ Update these imports to your actual logo paths
import logoFastech from "../../../assets/images/Partners/partner1.jpg";
import logoItconsult from "../../../assets/images/Partners/partner2.png";
import logoJohn from "../../../assets/images/Partners/partner3.jpg";
import logoMaggies from "../../../assets/images/Partners/partner4.jpg";
import logoPhotography from "../../../assets/images/Partners/partner5.jpg";
import logoRealEstate from "../../../assets/images/Partners/partner6.jpg";


const PARTNERS = [
  {
    name: "Fastech Internet",
    logo: logoFastech,
    blurb: "Regional ISP & connectivity services.",
  },
  {
    name: "IT Consult",
    logo: logoItconsult,
    blurb: "Technology consulting & support.",
  },
  {
    name: "John Personal",
    logo: logoJohn,
    blurb: "Personal brand & content hub.",
  },
  {
    name: "Maggie’s Spa",
    logo: logoMaggies,
    blurb: "Wellness & beauty spa services.",
  },
  {
    name: "Photo Studio",
    logo: logoPhotography,
    blurb: "Commercial photography & creative.",
  },
  {
    name: "Real Estate Pro",
    logo: logoRealEstate,
    blurb: "Property listings & advisory.",
  },
];

const CLIENTS = [
  {
    name: "Fastech Internet",
    logo: logoFastech,
    blurb: "Campaigns & performance SEO.",
  },
  {
    name: "IT Consult",
    logo: logoItconsult,
    blurb: "Website + lead-gen funnels.",
  },
  { name: "John Personal", logo: logoJohn, blurb: "Brand site & newsletter." },
  {
    name: "Maggie’s Spa",
    logo: logoMaggies,
    blurb: "Bookings & retention flows.",
  },
  {
    name: "Photo Studio",
    logo: logoPhotography,
    blurb: "Portfolio & social growth.",
  },
  {
    name: "Real Estate Pro",
    logo: logoRealEstate,
    blurb: "Listings + paid acquisition.",
  },
];

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
              data-driven marketing to enterprise SEO and custom CRM solutions..,
              we turn ideas into impact.
            </p>

            <div className="about-us-stats">
              <div className="stat-item">
                <span className="stat-number">400+</span>
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


             {/* Partners & Clients (inside AboutUs, below stats) */}
          <div className="about-us-logos">
            {/* <div className="logos-row">
              <h3 className="logos-title">Our Partners</h3>
              <Marquee
                speed={30}
                pauseOnHover
                gradient={false}
                className="logos-marquee"
              >
                <div className="logos-track">
                  {PARTNERS.map((it) => (
                    <div
                      className="logo-card"
                      key={`p-${it.name}`}
                      aria-label={it.name}
                    >
                      <img src={it.logo} alt={`${it.name} logo`} />
                      <div className="logo-overlay">
                        <div className="overlay-content">
                          <strong>{it.name}</strong>
                          <span>{it.blurb}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div> */}

            <div className="logos-row">
              <h3 className="logos-title">They Trust Us</h3>
              <Marquee
                speed={30}
                pauseOnHover
                gradient={false}
                direction="right"
                className="logos-marquee"
              >
                <div className="logos-track">
                  {CLIENTS.map((it) => (
                    <div
                      className="logo-card"
                      key={`c-${it.name}`}
                      aria-label={it.name}
                    >
                      <img src={it.logo} alt={`${it.name} logo`} />
                      <div className="logo-overlay">
                        <div className="overlay-content">
                          <strong>{it.name}</strong>
                          <span>{it.blurb}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>

          </div>

         
        </div>

        
      </div>
    </section>
  );
};

export default AboutUs;
