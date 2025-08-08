import React from "react";
import { Link } from "react-router-dom";
import "./BrandingDesign.css";

import heroBg from "../../../assets/images/services/branding.jpg";
import logoImg from "../../../assets/images/services/logo-design.jpg";
import identityImg from "../../../assets/images/services/brand-identity.jpg";
import graphicImg from "../../../assets/images/services/graphic-design.jpg";
import uiuxImg from "../../../assets/images/services/uiux.jpg";
import printImg from "../../../assets/images/services/print-design.jpg";
import OtherServices from "../OtherServices/OtherServices";

const CAPABILITIES = [
  {
    title: "Logo Design",
    body:
      "Distinctive, versatile marks that scale from favicons to billboards. We explore directions, refine your favorite, and deliver a robust asset pack.",
    image: logoImg,
    bullets: [
      "Concept exploration & iterations",
      "Primary, secondary & mark-only versions",
      "Vector files + usage guide",
    ],
  },
  {
    title: "Brand Identity",
    body:
      "Cohesive visual systems—color, typography, grids, and components, so every touchpoint feels intentional and on-brand.",
    image: identityImg,
    bullets: [
      "Color systems & typography stacks",
      "Iconography & illustration style",
      "Brand guidelines & components",
    ],
  },
  {
    title: "Graphic Design",
    body:
      "Campaign assets that pop across print and digital—social sets, ads, decks, and more—delivered production-ready.",
    image: graphicImg,
    bullets: [
      "Social kits & ad creative",
      "Sales decks & one-pagers",
      "Export presets for every channel",
    ],
  },
  {
    title: "UI/UX Design",
    body:
      "Human-centered product design—from flows and wireframes to polished interfaces that are accessible and conversion-focused.",
    image: uiuxImg,
    bullets: [
      "User flows & low/high-fidelity wireframes",
      "Component libraries & design tokens",
      "Accessibility (WCAG) best practices",
    ],
  },
  {
    title: "Print Design",
    body:
      "Press-ready layouts for brochures, packaging, stationery, and large format—crafted to look sharp in the real world.",
    image: printImg,
    bullets: [
      "Bleeds, CMYK profiles & dielines",
      "Paper stock & finish recommendations",
      "Printer coordination & proofs",
    ],
  },
];

const BrandingDesign = () => {
  return (
    <> 
    <section className="brand-page">
      {/* ===== HERO ===== */}
      <div className="brand-hero" style={{ "--heroBg": `url(${heroBg})` }}>
        <div className="container brand-hero-inner">
          <div className="brand-hero-copy">
            <h1>
              Branding & Design that <span>Clarifies</span> Your Story
            </h1>
            <p>
              From logo to full identity and UI systems—we design visual brands
              that are memorable, flexible, and built to ship across every channel.
            </p>
            <div className="brand-divider" />
          </div>

          <div className="brand-hero-card">
            <div className="card-group">
              <h4>Top Deliverable</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "58%" }} />
              </div>
              <div className="bar-meta">
                <strong>58%</strong> Full Brand Identity Systems
              </div>
            </div>

            <div className="card-group">
              <h4>Top Impact</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "76%" }} />
              </div>
              <div className="bar-meta">
                <strong>76%</strong> Lift in Brand Consistency
              </div>
            </div>

            <div className="card-cta">
              <div className="stat">
                <div className="n">+300</div>
                <div className="kicker">Brand Assets Delivered</div>
              </div>
              <Link to="/contact" className="btn-cta">Start My Brand</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CAPABILITIES ===== */}
      <div className="container brand-capabilities">
        {CAPABILITIES.map((c, i) => (
          <article key={c.title} className={`brand-row ${i % 2 === 1 ? "reverse" : ""}`}>
            <div className="brand-media">
              <img src={c.image} alt={c.title} />
            </div>
            <div className="brand-copy">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              {c.bullets?.length ? (
                <ul className="brand-bullets">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
              <Link className="brand-link" to="/contact">
                Let’s design it →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
      <OtherServices excludeKey="branding"/>
    </>
  );
};

export default BrandingDesign;
