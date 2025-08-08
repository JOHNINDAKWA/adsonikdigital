import React from "react";
import { Link } from "react-router-dom";
import "./DigitalMarketting.css";

/* Swap with your real assets */
import heroBg from "../../../assets/images/services/world-dots.jpg";
import automationImg from "../../../assets/images/services/digital-automation.webp";
import ppcImg from "../../../assets/images/services/digital-ppc.jpg";
import socialImg from "../../../assets/images/services/digital-social.jpg";
import emailImg from "../../../assets/images/services/digital-email.jpg";
import brandImg from "../../../assets/images/services/digital-branding.jpg";
import croImg from "../../../assets/images/services/digital-conversion.jpg";
import OtherServices from "../OtherServices/OtherServices";

const CAPABILITIES = [
  {
    title: "Marketing & Sales Automation",
    body:
      "Build always-on pipelines that nurture leads, trigger follow-ups, and sync data. Automations reduce manual work and lift conversions across the funnel.",
    image: automationImg,
    bullets: [
      "Lead scoring & lifecycle journeys",
      "CRM workflows & webhooks",
      "Playbooks for handoffs & SLAs",
    ],
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    body:
      "High-intent campaigns tuned for ROI. From keyword strategy to creative testing and bid automation, we scale spend only when it’s profitable.",
    image: ppcImg,
    bullets: [
      "Google & YouTube Ads (Search/PMAX)",
      "Meta/LinkedIn audience testing",
      "Creative & landing page experiments",
    ],
  },
  {
    title: "Social Media Marketing",
    body:
      "Build community and demand with platform-native content. We plan calendars, produce assets, and report what actually moves the numbers.",
    image: socialImg,
    bullets: [
      "Channel strategy & content pillars",
      "Short-form video & carousels",
      "Engagement & growth systems",
    ],
  },
  {
    title: "Email Marketing & Lifecycle",
    body:
      "Send the right message at the right time. Segmentation, automation, and copy frameworks that increase retention and LTV.",
    image: emailImg,
    bullets: [
      "Welcome, nurture & win-back flows",
      "Segmentation & deliverability",
      "Campaign calendars & templates",
    ],
  },
  {
    title: "Brand Strategy & Conversion Rate Optimization",
    body:
      "Clarify your story and remove friction in the journey. We align messaging, design, and UX so more visitors become customers.",
    image: brandImg,
    bullets: [
      "Positioning & messaging systems",
      "UX audits & hypothesis backlog",
      "A/B testing & analytics feedback",
    ],
  },
  {
    title: "CRO Programs at Scale",
    body:
      "Continuous experimentation across ads, landing pages, and funnels. Instrumentation makes wins repeatable—not lucky.",
    image: croImg,
    bullets: [
      "North-star metrics & guardrails",
      "Experiment design & velocity",
      "Dashboarding & weekly reviews",
    ],
  },
];

const DigitalMarketting = () => {
  return (
    <>
    <section className="dm-page">
      {/* ===== HERO ===== */}
      <div className="dm-hero" style={{ "--heroBg": `url(${heroBg})` }}>
        <div className="container dm-hero-inner">
          <div className="dm-hero-copy">
            <h1>
              Digital Marketing that <span>Acquires</span> & Retains
            </h1>
            <p>
              Full-funnel growth—automation, PPC, social, email, brand, and CRO.
              Creative meets data so every channel contributes to revenue.
            </p>
            <div className="dm-divider" />
          </div>

          <div className="dm-hero-card">
            <div className="card-group">
              <h4>Top Focus</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "54%" }} />
              </div>
              <div className="bar-meta">
                <strong>54%</strong> Paid + Lifecycle Programs
              </div>
            </div>

            <div className="card-group">
              <h4>Top Outcome</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "71%" }} />
              </div>
              <div className="bar-meta">
                <strong>71%</strong> Lift in MQL→SQL Rate
              </div>
            </div>

            <div className="card-cta">
              <div className="stat">
                <div className="n">+38%</div>
                <div className="kicker">Avg. ROAS Improvement</div>
              </div>
              <Link to="/contact" className="btn-cta">Plan My Growth</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CAPABILITIES ===== */}
      <div className="container dm-capabilities">
        {CAPABILITIES.map((c, i) => (
          <article key={c.title} className={`dm-row ${i % 2 === 1 ? "reverse" : ""}`}>
            <div className="dm-media">
              <img src={c.image} alt={c.title} />
            </div>
            <div className="dm-copy">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              {c.bullets?.length ? (
                <ul className="dm-bullets">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
              <Link className="dm-link" to="/contact">
                Let’s map your funnel →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
      <OtherServices excludeKey="digitalmarketting"/>
    </>
  );
};

export default DigitalMarketting;
