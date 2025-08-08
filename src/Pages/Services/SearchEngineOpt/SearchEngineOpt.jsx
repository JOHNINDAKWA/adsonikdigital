import React from "react";
import { Link } from "react-router-dom";
import "./SearchEngineOpt.css";

/* Swap these with your real assets */
import heroBg from "../../../assets/images/services/seo-banner.jpg";
import aeoImg from "../../../assets/images/services/aeo.jpg";
import auditImg from "../../../assets/images/services/seo-audit.jpg";
import speedImg from "../../../assets/images/services/page-speed.jpg";
import contentImg from "../../../assets/images/services/content.jpg";
import ga4Img from "../../../assets/images/services/gafour.jpg";
import OtherServices from "../OtherServices/OtherServices";

const CAPABILITIES = [
  {
    title: "Answer Engine Optimization (AEO)",
    body:
      "Optimize for AI/answer engines and featured results. Structure content, entities, and markup so your brand is the best short answer, across Google, Perplexity, and beyond.",
    image: aeoImg,
    bullets: [
      "Entity mapping & schema strategy",
      "Featured snippet & PAA targeting",
      "Topic authority & knowledge graph signals",
    ],
  },
  {
    title: "SEO Audit & Technical Foundations",
    body:
      "We diagnose crawl, indexation, and rendering issues, then build a prioritized roadmap. Clean architecture, no wasted crawl budget, and a site search engines love.",
    image: auditImg,
    bullets: [
      "Crawl/index audits (logs, sitemaps, robots)",
      "Information architecture & internal links",
      "Core Web Vitals & JavaScript rendering",
    ],
  },
  {
    title: "Page Speed Optimization",
    body:
      "Speed is conversion. We tune performance budgets and ship fixes that move Core Web Vitals; LCP, INP, and CLS...so pages load fast and rank better.",
    image: speedImg,
    bullets: [
      "Image strategy & critical CSS",
      "Script deferral & bundling",
      "Performance monitoring & alerts",
    ],
  },
  {
    title: "Content Marketing & On-Page SEO",
    body:
      "A publishing engine that compounds. We build topical clusters, briefs, and on-page frameworks so every article supports rankings and revenue.",
    image: contentImg,
    bullets: [
      "Keyword clustering & content briefs",
      "On-page frameworks & internal links",
      "Editorial calendar & distribution",
    ],
  },
  {
    title: "GA4 & Measurement Setup",
    body:
      "Track what matters. We configure GA4, events, and dashboards so you see channel ROI and spot opportunities faster.",
    image: ga4Img,
    bullets: [
      "GA4 & consent-safe tagging",
      "Event/goal design & funnels",
      "Looker/Datastudio dashboards",
    ],
  },
];

const SearchEngineOpt = () => {
  return (
    <>
    <section className="seo-page">
      {/* ===== HERO ===== */}
      <div className="seo-hero" style={{ "--heroBg": `url(${heroBg})` }}>
        <div className="container seo-hero-inner">
          <div className="seo-hero-copy">
            <h1>
              SEO that <span>Ranks</span> & Converts
            </h1>
            <p>
              From technical SEO and AEO to content and GA4, show up where
              buyers search, load fast, and turn traffic into revenue.
            </p>
            <div className="seo-divider" />
          </div>

          <div className="seo-hero-card">
            <div className="card-group">
              <h4>Top Focus</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "91%" }} />
              </div>
              <div className="bar-meta">
                <strong>99%</strong> Technical SEO & AEO
              </div>
            </div>

            <div className="card-group">
              <h4>Top Channel</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "82%" }} />
              </div>
              <div className="bar-meta">
                <strong>82%</strong> Organic Search Contribution
              </div>
            </div>

            <div className="card-cta">
              <div className="stat">
                <div className="n">+78%</div>
                <div className="kicker">Avg. YoY Organic Growth</div>
              </div>
              <Link to="/contact" className="btn-cta">Request SEO Audit</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CAPABILITIES ===== */}
      <div className="container seo-capabilities">
        {CAPABILITIES.map((c, i) => (
          <article key={c.title} className={`seo-row ${i % 2 === 1 ? "reverse" : ""}`}>
            <div className="seo-media">
              <img src={c.image} alt={c.title} />
            </div>
            <div className="seo-copy">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              {c.bullets?.length ? (
                <ul className="seo-bullets">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
              <Link className="seo-link" to="/contact">
                Talk to an SEO Strategist →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
      <OtherServices excludeKey="seo"/>
    </>
  );
};

export default SearchEngineOpt;
