import React from "react";
import { Link } from "react-router-dom";
import "./WebAppDev.css";

/* Swap these with your real images */
import heroBg from "../../../assets/images/web-banner3.jpg"; // faint map bg (optional)
import buildImg from "../../../assets/images/custom-web.jpg"; // custom web dev image
import ecommerceImg from "../../../assets/images/ecommerce.jpg";
import customAppImg from "../../../assets/images/mobile.jpg";
import databaseImg from "../../../assets/images/database.jpg";
import cmsImg from "../../../assets/images/cms.jpg";
import neuralImg from "../../../assets/images/neural.jpg";
import OtherServices from "../OtherServices/OtherServices";

const CAPABILITIES = [
  {
    title: "Custom Website Design & Development",
    body: "We craft fast, accessible websites tailored to your brand and your goals. From information sites to conversion-focused landing pages—every component is engineered for speed, SEO, and scalability.",
    image: buildImg,
    bullets: [
      "Design systems & component libraries",
      "Performance budgets & Core Web Vitals",
      "Accessibility (WCAG) baked in",
    ],
  },
  {
    title: "Ecommerce Design & Development",
    body: "From product discovery to checkout, we optimize each step to increase AOV and conversion. Flexible product schemas, clean integrations, and analytics you can trust.",
    image: ecommerceImg,
    bullets: [
      "Shopify / Woo / Headless storefronts",
      "Payment, shipping & tax integrations",
      "A/B testing & CRO programs",
    ],
  },
  {
    title: "Custom Web & Mobile Apps",
    body: "We design and build apps that feel effortless; secure auth, clean APIs, and smooth UI patterns. From portals to progressive web apps, we ship production-ready software.",
    image: customAppImg,
    bullets: [
      "React / Next.js / Node",
      "PWA & offline-first patterns",
      "API-first architecture",
    ],
    id: "mobile",
  },
  {
    title: "Database Design & Integrations",
    body: "Reliable data models and sensible integrations ensure everything talks to everything...without spaghetti. Migrations, syncing, and observability handled.",
    image: databaseImg,
    bullets: [
      "Relational & NoSQL data models",
      "ETL pipelines & webhooks",
      "Monitoring & error budgets",
    ],
  },
  {
    title: "CMS, CRM & WordPress",
    body: "Give your team superpowers with the right tools. We implement and harden CMS/CRM stacks, then train your team so publishing is fast and painless.",
    image: cmsImg,
    bullets: [
      "WordPress, headless CMS (Sanity/Strapi)",
      "CRM (HubSpot/Zoho) workflows",
      "Authoring UX & roles/permissions",
    ],
  },
  {
  title: "AI-Powered Solutions & Automation", 
  body: "Integrate powerful Artificial Intelligence and Machine Learning models to automate processes, personalize user experiences, and gain deep business insights. We build custom AI features and fully integrated AI-first systems.",
  image: neuralImg,
  bullets: [
    "AI Chatbots & Conversational UIs (e.g., custom GPT-powered systems)",
    "ML for Predictive Analytics and Recommendation Engines",
    "Automated Content Generation (AI-assisted CMS workflows)",
    "Integration with major AI APIs (OpenAI, Google, etc.)",
  ],
  id: "ai-solutions", // Add an ID for easy linking/navigation
}

];

const WebAppDev = () => {
  return (
    <>
    <section className="wad-page">
      {/* ===== HERO ===== */}
      <div className="wad-hero" style={{ "--heroBg": `url(${heroBg})` }}>
        <div className="container wad-hero-inner">
          <div className="wad-hero-copy">
            <h1>
              Best <span>Website & App</span> Development for Ambitious Brands
            </h1>
            <p>
              We plan, design, and ship high-performance websites and apps—from
              marketing sites to complex platforms. Clean code. Clear results.
            </p>
            <div className="wad-divider" />
          </div>

          {/* right card */}
          <div className="wad-hero-card">
            <div className="card-group">
              <h4>Top Services</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "78%" }} />
              </div>
              <div className="bar-meta">
                <strong>78%</strong> Custom Web & App Development
              </div>
            </div>

            <div className="card-group">
              <h4>Top Industries</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "33%" }} />
              </div>
              <div className="bar-meta">
                <strong>33%</strong> E-Commerce & SaaS Platforms
              </div>
            </div>

            <div className="card-cta">
              <div className="stat">
                <div className="n">250+</div>
                <div className="kicker">Projects Delivered</div>
              </div>
              <Link to="/contact" className="btn-cta">
                Get a Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CAPABILITIES ===== */}
      <div className="container wad-capabilities">
        {CAPABILITIES.map((c, i) => (
          <article
            key={c.title}
            className={`cap-row ${i % 2 === 1 ? "reverse" : ""}`}
            id={c.id}
          >
            <div className="cap-media">
              <img src={c.image} alt={c.title} />
            </div>
            <div className="cap-copy">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              {c.bullets?.length ? (
                <ul className="cap-bullets">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
              <Link className="cap-link" to="/contact">
                Let’s build this →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>

    <OtherServices excludeKey="webdev"/>
    </>
  );
};

export default WebAppDev;
