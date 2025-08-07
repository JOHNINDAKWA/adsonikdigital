import React from "react";
import "./DigitalMarketingHighlights.css";
import { FaBullhorn, FaSearchDollar, FaLaptopCode, FaChartPie } from "react-icons/fa";

import StrategyImage from "../../../assets/images/digital-marketting.jpg";
import PPCImage from "../../../assets/images/stats3.jpg";
import SEOImage from "../../../assets/images/stats5.jpg";
import WebDesignImage from "../../../assets/images/website-design2.jpg";
import { Link } from "react-router-dom";


const DigitalMarketingHighlights = () => {
  return (
    <section className="dm-highlights-section">

        
      {/* Digital Marketing Strategy */}
      <div className="dm-highlight reverse">
             <div className="dm-highlight-image">
          <img src={StrategyImage} alt="Digital Marketing Strategy" />
        </div>
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaChartPie className="dm-icon" />
            Data-Driven Digital Strategy
          </h4>
          <h2 className="dm-title">Strategic Campaigns That Deliver Measurable Growth</h2>
          <p className="dm-description">
            We craft comprehensive digital marketing strategies that blend creativity with analytics. 
            Our team ensures every campaign is aligned with your business objectives, driving conversions 
            and sustainable ROI across channels.
          </p>
          <Link to="/services/digital-strategy" className="btn-service-page">
            Learn More
          </Link>
        </div>
   
      </div>

      {/* PPC Campaigns */}
      <div className="dm-highlight">
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaBullhorn className="dm-icon" />
            Certified PPC Experts
          </h4>
          <h2 className="dm-title">Maximize ROI with Scalable PPC Campaigns</h2>
          <p className="dm-description">
            Our PPC specialists craft campaigns that drive performance across Google, Meta, and more.
            We focus on converting clicks into customers with laser-targeted ads and transparent reporting.
          </p>
          <div className="dm-badge-row">
            <span className="dm-badge google">Google Partner</span>
            <span className="dm-badge meta">Meta Partner</span>
            <span className="dm-badge select">Adsonic Certified</span>
          </div>
          <Link to="/services/ppc" className="btn-service-page">
            Learn More
          </Link>
        </div>
        <div className="dm-highlight-image">
          <img src={PPCImage} alt="PPC Dashboard" />
        </div>
      </div>

      {/* SEO */}
      <div className="dm-highlight reverse">
        <div className="dm-highlight-image">
          <img src={SEOImage} alt="SEO Analytics" />
        </div>
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaSearchDollar className="dm-icon" />
            Proven Organic SEO
          </h4>
          <h2 className="dm-title">Boost Search Visibility & Organic Reach</h2>
          <p className="dm-description">
            We implement advanced SEO strategies that push your website to the top of search results.
            From on-page optimization to backlink strategies, we ensure long-term visibility.
          </p>
          <p className="dm-stat">
            <strong className="highlight">200%+</strong> average increase in traffic within 6 months
          </p>
          <Link to="/services/seo" className="btn-service-page">
            Learn More
          </Link>
        </div>
      </div>

      {/* Web Design */}
      <div className="dm-highlight">
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaLaptopCode className="dm-icon" />
            Result-Oriented Web Design
          </h4>
          <h2 className="dm-title">Create Websites That Convert</h2>
          <p className="dm-description">
            Your website is your digital storefront. We design stunning, fast, and mobile-first websites
            that capture attention and convert visitors into loyal clients.
          </p>
          <p className="dm-stat">
            <strong className="highlight">900+</strong> successful websites delivered by our team
          </p>
          <Link to="/services/web-design" className="btn-service-page">
            Learn More
          </Link>
        </div>
        <div className="dm-highlight-image">
          <img src={WebDesignImage} alt="Website Designs" />
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingHighlights;
