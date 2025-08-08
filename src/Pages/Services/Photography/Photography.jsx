import React from "react";
import { Link } from "react-router-dom";
import "./Photography.css";

/* Replace with real assets */
import heroBg from "../../../assets/images/services/photography.jpg";
import productImg from "../../../assets/images/services/photo-product.jpg";
import headshotImg from "../../../assets/images/services/photo-headshot.jpg";
import eventImg from "../../../assets/images/services/photo-events.jpg";
import commercialImg from "../../../assets/images/services/photo-commerial.jpg";
import realEstateImg from "../../../assets/images/services/photo-estate.jpg";
import OtherServices from "../OtherServices/OtherServices";

const CAPABILITIES = [
  {
    title: "Product Photography",
    body:
      "From e-commerce to catalog shots, we capture your products in perfect lighting and detail—helping them stand out online and in print.",
    image: productImg,
    bullets: [
      "High-resolution studio setups",
      "Lifestyle and flat-lay shots",
      "Color-accurate post-processing",
    ],
  },
  {
    title: "Corporate Headshots",
    body:
      "Professional headshots that reflect your brand and personality, ideal for websites, LinkedIn profiles, and press kits.",
    image: headshotImg,
    bullets: [
      "On-location or studio sessions",
      "Natural & professional lighting",
      "Consistent styling for teams",
    ],
  },
  {
    title: "Event Photography",
    body:
      "Document your events with candid, dynamic imagery that captures the energy and key moments from start to finish.",
    image: eventImg,
    bullets: [
      "Conferences, galas, and launches",
      "Fast delivery for media release",
      "Highlight reel & social-ready edits",
    ],
  },
  {
    title: "Commercial Photography",
    body:
      "Full-scale photography for ads, campaigns, and marketing—blending creativity with technical precision.",
    image: commercialImg,
    bullets: [
      "Creative concept & mood boards",
      "On-set art direction",
      "Retouching for multiple channels",
    ],
  },
  {
    title: "Real Estate Photography",
    body:
      "Crisp, inviting property shots that showcase interiors and exteriors—perfect for listings, brochures, and virtual tours.",
    image: realEstateImg,
    bullets: [
      "Wide-angle & drone captures",
      "Daytime and twilight sessions",
      "HDR composites for rich detail",
    ],
  },
];

const Photography = () => {
  return (
    <>
    <section className="photo-page">
      {/* ===== HERO ===== */}
      <div className="photo-hero" style={{ "--heroBg": `url(${heroBg})` }}>
        <div className="container photo-hero-inner">
          <div className="photo-hero-copy">
            <h1>
              Photography That <span>Tells Your Story</span>
            </h1>
            <p>
              From products to people and events, our lens captures visuals that
              inspire, sell, and connect. Styled, shot, and edited with your
              goals in mind.
            </p>
            <div className="photo-divider" />
          </div>

          <div className="photo-hero-card">
            <div className="card-group">
              <h4>Top Category</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "42%" }} />
              </div>
              <div className="bar-meta">
                <strong>42%</strong> Product Photography
              </div>
            </div>

            <div className="card-group">
              <h4>Top Usage</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "55%" }} />
              </div>
              <div className="bar-meta">
                <strong>55%</strong> E-commerce & Marketing
              </div>
            </div>

            <div className="card-cta">
              <div className="stat">
                <div className="n">1,200+</div>
                <div className="kicker">Photos Delivered</div>
              </div>
              <Link to="/contact" className="btn-cta">
                Book a Shoot
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CAPABILITIES ===== */}
      <div className="container photo-capabilities">
        {CAPABILITIES.map((c, i) => (
          <article key={c.title} className={`photo-row ${i % 2 === 1 ? "reverse" : ""}`}>
            <div className="photo-media">
              <img src={c.image} alt={c.title} />
            </div>
            <div className="photo-copy">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              {c.bullets?.length ? (
                <ul className="photo-bullets">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
              <Link className="photo-link" to="/contact">
                Let’s capture it →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
      <OtherServices excludeKey="photography"/>
    </>
  );
};

export default Photography;
