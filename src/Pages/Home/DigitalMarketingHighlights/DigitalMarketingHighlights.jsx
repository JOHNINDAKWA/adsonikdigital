import React from "react";
import "./DigitalMarketingHighlights.css";
// Added FaRobot for the AI icon
import { FaBullhorn, FaSearchDollar, FaLaptopCode, FaChartPie, FaMobileAlt, FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

// ... existing image imports
import StrategyImage from "../../../assets/images/digital-marketting.jpg";
import WebDesignImage from "../../../assets/images/website-design2.jpg";
import SEOImage from "../../../assets/images/stats5.jpg";
import AppDevImage from "../../../assets/images/travel.png";
import aipoweredImage from "../../../assets/images/neural2.jpeg"; // Your imported image

const DigitalMarketingHighlights = () => {
  return (
    <section className="dm-highlights-section">

      {/* 1) Digital Marketing (SIMPLIFIED) */}
      <div className="dm-highlight reverse">
        <div className="dm-highlight-image">
          <img src={StrategyImage} alt="Digital marketing strategy session" />
        </div>
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaChartPie className="dm-icon" />
            Grow Your Business Online (Digital Marketing)
          </h4>
          <h2 className="dm-title">We Manage Your Social Media and Online Ads</h2>
          <p className="dm-description">
            We handle all your online promotion—like posting on <strong>Facebook, Instagram</strong>, running <strong>paid ads</strong>, and sending <strong>emails</strong>. We make sure your business reaches more customers and brings in more sales.
          </p>
          <Link to="/services/digital-marketing" className="btn-service-page">
            See Our Marketing Plans
          </Link>
        </div>
      </div>

      {/* 2) Web Development (SIMPLIFIED) */}
      <div className="dm-highlight">
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaLaptopCode className="dm-icon" />
            Professional Website Building
          </h4>
          <h2 className="dm-title">A Fast, Modern Website That Sells</h2>
          <p className="dm-description">
            We build <strong>quick, easy-to-use websites</strong> for your business. Your site will look great, work on phones, and be easy for you to update later. It's designed to turn visitors into buyers.
          </p>
          <p className="dm-stat">
            <strong className="highlight">300+</strong> successful websites built
          </p>
          <Link to="/services/web-&-app-development" className="btn-service-page">
            Get a Website Quote
          </Link>
        </div>
        <div className="dm-highlight-image">
          <img src={WebDesignImage} alt="Modern website design preview" />
        </div>
      </div>

      {/* 3) SEO (SIMPLIFIED) */}
      <div className="dm-highlight reverse">
        <div className="dm-highlight-image">
          <img src={SEOImage} alt="SEO analytics dashboard" />
        </div>
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaSearchDollar className="dm-icon" />
            Appear on Google's First Page (SEO)
          </h4>
          <h2 className="dm-title">Be Found by Customers Searching Online</h2>
          <p className="dm-description">
            We help your website show up <strong>higher on Google</strong> when people search for services like yours. This brings you <strong>free customers</strong> who are already looking to buy, without paying for ads.
          </p>
          <p className="dm-stat">
            <strong className="highlight">200%+</strong> average increase in visitors from Google
          </p>
          <Link to="/services/seo" className="btn-service-page">
            Learn About Ranking High
          </Link>
        </div>
      </div>

      {/* 4) App Development (SIMPLIFIED) */}
      <div className="dm-highlight">
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaMobileAlt className="dm-icon" />
            Custom Mobile & Web App Solutions
          </h4>
          <h2 className="dm-title">Tools and Apps to Run Your Business Better</h2>
          <p className="dm-description">
            Need a tool for your staff or an app for your customers? We build <strong>secure, easy-to-use apps</strong> (for phones or web browsers) that simplify your work and offer great user experiences.
          </p>
          <div className="dm-badge-row">
            <span className="dm-badge select">Staff Portals</span>
            <span className="dm-badge select">Customer Apps</span>
            <span className="dm-badge select">Online Systems</span>
          </div>
          <Link to="/services/web-&-app-development#mobile" className="btn-service-page">
            See App Services
          </Link>
        </div>
        <div className="dm-highlight-image">
          <img src={AppDevImage} alt="Mobile app development preview" />
        </div>
      </div>
      
      {/* 5) AI SOLUTIONS (SIMPLIFIED) */}
      <div className="dm-highlight reverse">
        <div className="dm-highlight-image">
          <img src={aipoweredImage} alt="AI neural network or chatbot interface" />
        </div>
        <div className="dm-highlight-text">
          <h4 className="dm-label">
            <FaRobot className="dm-icon" />
            AI Chatbots and Smart Systems
          </h4>
          <h2 className="dm-title">Automate Your Work and Serve Clients 24/7</h2>
          <p className="dm-description">
            We use <strong>smart computer tools (AI)</strong> to build <strong>chatbots</strong> that answer customer questions instantly. We also create systems that automate boring tasks, saving you time and money.
          </p>
          <div className="dm-badge-row">
            <span className="dm-badge select">24/7 Chat Support</span>
            <span className="dm-badge select">Auto-Reply Systems</span>
            <span className="dm-badge select">Task Automation</span>
          </div>
          <Link to="/services/web-&-app-development#ai-solutions" className="btn-service-page">
            Explore AI Solutions
          </Link>
        </div>
      </div>

    </section>
  );
};

export default DigitalMarketingHighlights;