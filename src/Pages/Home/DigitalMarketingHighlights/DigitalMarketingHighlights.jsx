import React from "react";
import "./DigitalMarketingHighlights.css";
import { FaBullhorn, FaSearchDollar, FaLaptopCode, FaChartPie, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import StrategyImage from "../../../assets/images/digital-marketting.jpg";
import WebDesignImage from "../../../assets/images/website-design2.jpg";
import SEOImage from "../../../assets/images/stats5.jpg";
import AppDevImage from "../../../assets/images/mobile.jpg";

const DigitalMarketingHighlights = () => {
  return (
    <section className="dm-highlights-section">

      {/* 1) Digital Marketing */}
      <div className="dm-highlight reverse">
        <div className="dm-highlight-image">
          <img src={StrategyImage} alt="Digital marketing strategy session" />
        </div>
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaChartPie className="dm-icon" />
            Data-Driven Digital Marketing
          </h4>
          <h2 className="dm-title">Full-Funnel Campaigns That Drive Revenue</h2>
          <p className="dm-description">
            We plan, launch, and optimize cross-channel campaigns—paid, social, email, and content—
            so your brand shows up where buyers are and converts more of them.
          </p>
          <Link to="/services/digital-marketing" className="btn-service-page">
            Learn More
          </Link>
        </div>
      </div>

      {/* 2) Web Development */}
      <div className="dm-highlight">
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaLaptopCode className="dm-icon" />
            High-Performance Web Development
          </h4>
          <h2 className="dm-title">Websites Built to Convert</h2>
          <p className="dm-description">
            Fast, accessible, and beautiful. We ship marketing sites and platforms engineered for
            Core Web Vitals, SEO, and seamless editing.
          </p>
          <p className="dm-stat">
            <strong className="highlight">900+</strong> websites launched by our team
          </p>
          <Link to="/services/web-&-app-development" className="btn-service-page">
            Learn More
          </Link>
        </div>
        <div className="dm-highlight-image">
          <img src={WebDesignImage} alt="Modern website design preview" />
        </div>
      </div>

      {/* 3) SEO */}
      <div className="dm-highlight reverse">
        <div className="dm-highlight-image">
          <img src={SEOImage} alt="SEO analytics dashboard" />
        </div>
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaSearchDollar className="dm-icon" />
            SEO & AEO Excellence
          </h4>
          <h2 className="dm-title">Rank Higher. Capture More Demand.</h2>
          <p className="dm-description">
            Technical SEO, Answer Engine Optimization, and content programs that improve visibility,
            speed, and conversions—without guesswork.
          </p>
          <p className="dm-stat">
            <strong className="highlight">200%+</strong> avg. organic traffic lift in 6 months
          </p>
          <Link to="/services/seo" className="btn-service-page">
            Learn More
          </Link>
        </div>
      </div>

      {/* 4) App Development */}
      <div className="dm-highlight">
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaMobileAlt className="dm-icon" />
            Web & Mobile App Development
          </h4>
          <h2 className="dm-title">Products Your Users Love to Use</h2>
          <p className="dm-description">
            We design and build secure, scalable apps with clean UX and API-first architecture—
            from client portals to full PWAs and mobile experiences.
          </p>
          <div className="dm-badge-row">
            <span className="dm-badge select">React / Next.js</span>
            <span className="dm-badge select">Node / APIs</span>
            <span className="dm-badge select">PWA-Ready</span>
          </div>
          {/* Anchor jumps to the apps section on your combined page */}
          <Link to="/services/web-&-app-development#mobile" className="btn-service-page">
            Learn More
          </Link>
        </div>
        <div className="dm-highlight-image">
          <img src={AppDevImage} alt="Mobile app development preview" />
        </div>
      </div>

    </section>
  );
};

export default DigitalMarketingHighlights;
