import React from "react";
import "./AdsonicImpactSection.css";

import LaptopSEO from "../../../assets/images/laptop-seo.png"; // your image
import LaptopTeam from "../../../assets/images/laptop-team.png"; // your image
import DarkBgImage from "../../../assets/images/wall9.jpg"; // background image for dark section

const AdsonicImpactSection = () => {
  return (
    <section className="adsonic-impact-wrapper">
      {/* Section One - Dark Theme with background image */}
      <div
        className="impact-section dark-section"
        style={{
          backgroundImage: `url(${DarkBgImage})`,
        }}
      >
        <div className="impact-bg-overlay">
          <div className="impact-content">
            <h2>
              <span>Our team</span> blends creativity and strategy <br />
              to fuel digital growth.
            </h2>
            <p>
              A collective of seasoned designers, developers, and marketers —
              we’re committed to delivering exceptional user experiences,
              meaningful engagement, and measurable impact.
            </p>
            <button className="btn-impact primary">Meet Our Experts</button>
          </div>
          <div className="impact-image">
            <img src={LaptopTeam} alt="Adsonic team" />
          </div>
        </div>
      </div>

      {/* Section Two - Light Theme */}
      <div className="impact-section light-section">
        <div className="impact-image">
          <img src={LaptopSEO} alt="SEO performance" />
        </div>
        <div className="impact-content">
          <h2>
            <span>Our focus is on results</span>: boosting your visibility,
            leads, and conversions through cutting-edge strategies.
          </h2>
          <p>
            From technical SEO and UI/UX enhancements to data-driven marketing
            campaigns, Adsonic ensures your brand performs at its best —
            consistently.
          </p>
          <div className="impact-buttons">
            <button className="btn-impact primary">Get Started</button>
            <button className="btn-impact outline">Let’s Talk</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsonicImpactSection;
