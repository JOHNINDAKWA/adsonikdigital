import React from "react";
import "./BrandingDesignSection.css";
import DesignShowcaseImage from "../../../assets/images/designs.jpg"; // Replace with your image path
import { FaPaintBrush, FaVectorSquare, FaPenNib, FaPalette, FaLayerGroup } from "react-icons/fa";

const BrandingDesignSection = () => {
  return (
    <section className="branding-section">
      <div className="branding-container">
        {/* Text Side */}
        <div className="branding-text">
          <h2 className="branding-heading">
            Creative <span>Branding & Design</span> That Leaves a Mark
          </h2>
          <p className="branding-description">
            We help brands express themselves through powerful visual identity. Whether you're launching or rebranding,
            our design team brings your vision to life with stunning clarity and consistency across all platforms.
          </p>

          <ul className="branding-list">

            <div className="">
            <li><FaPaintBrush className="branding-icon" /> Logo Design</li>
            <li><FaLayerGroup className="branding-icon" /> Brand Identity</li>
            <li><FaPalette className="branding-icon" /> Graphic Design</li>
            </div>

            <div className="">
            <li><FaVectorSquare className="branding-icon" /> UI/UX Design</li>
            <li><FaPenNib className="branding-icon" /> Print Design</li>
            </div>
          </ul>

          <button className="btn-service-page">Explore Branding Services</button>
        </div>

        {/* Image Side */}
        <div className="branding-image">
          <img src={DesignShowcaseImage} alt="Branding and Design Showcase" />
        </div>
      </div>
    </section>
  );
};

export default BrandingDesignSection;
