import React from "react";
import { Link } from "react-router-dom";
import "./Videography.css";

import heroBg from "../../../assets/images/services/photography.jpg"; // You’ll replace with a videography-specific banner if needed
import promoImg from "../../../assets/images/services/video-promotional.gif";
import explainerImg from "../../../assets/images/services/video-explainer.gif";
import corporateImg from "../../../assets/images/services/video-corpoate.gif";
import animationImg from "../../../assets/images/services/video-animation.gif";
import testimonialImg from "../../../assets/images/services/video-testimonial.gif";
import OtherServices from "../OtherServices/OtherServices";

const CAPABILITIES = [
  {
    title: "Promotional Videos",
    body:
      "Engaging, high-impact videos designed to introduce your brand, product, or campaign to the world with maximum visual appeal.",
    image: promoImg,
    bullets: [
      "Creative scripting & storyboarding",
      "Professional shooting & editing",
      "Music licensing & sound design",
    ],
  },
  {
    title: "Explainer Videos",
    body:
      "Clear, concise videos that simplify complex topics and make your value proposition easy to understand.",
    image: explainerImg,
    bullets: [
      "2D/3D animation options",
      "Custom graphics & icons",
      "Voice-over and captions",
    ],
  },
  {
    title: "Corporate Videos",
    body:
      "From company profiles to internal communications, we create polished corporate films that reflect your brand identity.",
    image: corporateImg,
    bullets: [
      "Executive interviews",
      "Office & on-site filming",
      "Brand-consistent editing style",
    ],
  },
  {
    title: "Animation Videos",
    body:
      "Dynamic animated videos that blend storytelling with visuals to make your message memorable.",
    image: animationImg,
    bullets: [
      "Custom characters & environments",
      "Motion graphics",
      "Animated infographics",
    ],
  },
  {
    title: "Testimonial Videos",
    body:
      "Authentic customer or client stories that build trust and drive conversions.",
    image: testimonialImg,
    bullets: [
      "On-site or remote interviews",
      "B-roll integration",
      "Cinematic editing",
    ],
  },
];

const Videography = () => {
  return (
    <>
    <section className="video-page">
      {/* ===== HERO ===== */}
      <div className="video-hero" style={{ "--heroBg": `url(${heroBg})` }}>
        <div className="container video-hero-inner">
          <div className="video-hero-copy">
            <h1>
              <span>Videography</span> That Captivates and Converts
            </h1>
            <p>
              From brand stories to product explainers, we craft compelling
              videos that inspire, inform, and influence your audience.
            </p>
            <div className="video-divider" />
          </div>

          {/* Stat Card */}
          <div className="video-hero-card">
            <div className="card-group">
              <h4>Top Category</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "48%" }} />
              </div>
              <div className="bar-meta">
                <strong>48%</strong> Promotional & Corporate Videos
              </div>
            </div>

            <div className="card-group">
              <h4>Top Usage</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "52%" }} />
              </div>
              <div className="bar-meta">
                <strong>52%</strong> Marketing & Brand Awareness
              </div>
            </div>

            <div className="card-cta">
              <div className="stat">
                <div className="n">500+</div>
                <div className="kicker">Videos Produced</div>
              </div>
              <Link to="/contact" className="btn-cta">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CAPABILITIES ===== */}
      <div className="container video-capabilities">
        {CAPABILITIES.map((c, i) => (
          <article key={c.title} className={`video-row ${i % 2 === 1 ? "reverse" : ""}`}>
            <div className="video-media">
              <img src={c.image} alt={c.title} />
            </div>
            <div className="video-copy">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              {c.bullets?.length ? (
                <ul className="video-bullets">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
              <Link className="video-link" to="/contact">
                Let’s film it →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
    <OtherServices excludeKey="videography"/>
    </>
  );
};

export default Videography;
