import React from "react";
import { Link } from "react-router-dom";
import "./OtherServices.css";

// All services and their images
import webImg from "../../../assets/images/services/web.jpg";
import seoImg from "../../../assets/images/services/seo.jpg";
import marketingImg from "../../../assets/images/services/digita.jpg";
import photoImg from "../../../assets/images/services/photography-banner.jpg";
import videoImg from "../../../assets/images/services/videography.jpg";
import brandImg from "../../../assets/images/services/logo-design.jpg";

const ALL_SERVICES = [
  { key: "webdev", title: "Web & App Development", image: webImg, link: "/services/webdev" },
  { key: "seo", title: "SEO", image: seoImg, link: "/services/seo" },
  { key: "digitalmarketing", title: "Digital Marketing", image: marketingImg, link: "/services/digitalmarketing" },
  { key: "photography", title: "Photography", image: photoImg, link: "/services/photography" },
  { key: "videography", title: "Videography", image: videoImg, link: "/services/videography" },
  { key: "branding", title: "Branding & Design", image: brandImg, link: "/services/branding" },
];

const OtherServices = ({ excludeKey }) => {
  // Filter out the current service
  const filtered = ALL_SERVICES.filter(s => s.key !== excludeKey);

  // Shuffle and pick first 3
  const randomThree = [...filtered].sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <section className="other-services">
      <div className="container">
        <h2 className="os-title">Other Similar Services</h2>
        <div className="os-grid">
          {randomThree.map(s => (
            <Link to={s.link} key={s.key} className="os-card" style={{ backgroundImage: `url(${s.image})` }}>
              <div className="os-overlay">
                <h3>{s.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="os-btn-wrapper">
          <Link to="/services" className="os-btn">All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
