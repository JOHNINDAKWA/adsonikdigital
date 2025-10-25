import React, { useState } from "react";
import "./Portfolio.css";

/**
 * If your assets live in /src/assets/portfolio, import them like this:
 * (Vite/CRA: avoid require(); use ES imports)
 */
import thumbFastech from "../../assets/images/videos/fastech.png";
import videoFastech from "../../assets/images/videos/fastech.mp4";

import thumbItconsult from "../../assets/images/videos/itconsult.png";
import videoItconsult from "../../assets/images/videos/itconsult.mp4";

import thumbGlobalCribs from "../../assets/images/videos/globalcribs.png";
import videoGlobalCribs from "../../assets/images/videos/globalcibs.mp4";

import thumbCoverly from "../../assets/images/videos/coverly.png";
import videoCoverly from "../../assets/images/videos/coverly.mp4";

import thumbLoosian from "../../assets/images/videos/loosian.png";
import videoLoosian from "../../assets/images/videos/loosian.mp4";

import thumbJohn from "../../assets/images/videos/john.png";
import videoJohn from "../../assets/images/videos/john.mp4";

import thumbMaggies from "../../assets/images/videos/maggies.png";
import videoMaggies from "../../assets/images/videos/maggies.mp4";

import thumbPhotography from "../../assets/images/videos/photography.png";
import videoPhotography from "../../assets/images/videos/photography.mp4";

import thumbRealEstate from "../../assets/images/videos/real-estate.png";
import videoRealEstate from "../../assets/images/videos/real-estate.mp4";

import thumbJokaJok from "../../assets/images/videos/jokajok.png";
import videoJokaJok from "../../assets/images/videos/jokajok.mp4";

/** Reusable grid */
const ProjectGrid = ({ projects, onOpen }) => {
  if (!projects?.length) {
    return (
      <div className="empty-state">
        <h3>Coming Soon</h3>
        <p>
          We’re preparing polished previews for this category. Check back
          shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="portfolio-grid">
      {projects.map((p) => (
        <article
          key={p.id}
          className="card"
          onClick={() => onOpen(p)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onOpen(p)}
        >
          <div className="thumb-wrap">
            <img src={p.thumbnail} alt={`${p.title} preview`} />
            <div className="thumb-overlay">
              <div className="play-icon" aria-hidden>
                ▶
              </div>
              <div className="overlay-gradient" />
            </div>
          </div>

          <div className="card-body">
            <h3 className="card-title">{p.title}</h3>
            <p className="card-desc">{p.description}</p>
            <div className="card-actions">
              <a
                className="btn btn-ghost"
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                See Live Project
              </a>
              <a
                className="btn btn-ghost"
                rel="noreferrer"
                onClick={() => onOpen(p)}
              >
                View More
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

/** Define all projects once */
const ALL_PROJECTS = {
  photography: {
    id: "photography",
    title: "Photography Studio",
    description: "Minimal, image-first portfolio with galleries.",
    thumbnail: thumbPhotography,
    video: videoPhotography,
    liveUrl: "https://madeinuxstudio.com/",
    moreUrl: "#",
  },
  globalcribs: {
    id: "globalcribs",
    title: "Global Cribs",
    description:
      "Secure student housing with student, agent, and admin dashboards, complete with escrow payments, safe refunds, and seamless booking flows.",
    thumbnail: thumbGlobalCribs,
    video: videoGlobalCribs,
    liveUrl: "https://globalcribs.org/",
    moreUrl: "#",
  },
  fastech: {
    id: "fastech",
    title: "Fastech Internet",
    description: "Modern ISP site with plans, coverage, and lead capture.",
    thumbnail: thumbFastech,
    video: videoFastech,
    liveUrl: "https://fastechsolutions.co.ke/",
    moreUrl: "#",
  },
    jokajok: {
    id: "jokajok",
    title: "Jokajok African Luxury",
    description: "Ecommerce site for African-inspired fashion and accessories.",
    thumbnail: thumbJokaJok,
    video: videoJokaJok,
    liveUrl: "https://jokajok.com/",
    moreUrl: "#",
  },
  itconsult: {
    id: "itconsult",
    title: "IT Consult",
    description: "Consulting website with service pages and case studies.",
    thumbnail: thumbItconsult,
    video: videoItconsult,
    liveUrl: "https://itconsult.africa/",
    moreUrl: "#",
  },
  maggies: {
    id: "maggies",
    title: "Maggie’s Pregnancy and Postpartum Spa",
    description:
      "Serene spa site with booking flow and a full admin dashboard.",
    thumbnail: thumbMaggies,
    video: videoMaggies,
    liveUrl: "https://maggiespregnancyspa.co.ke/",
    moreUrl: "#",
  },
  coverly: {
    id: "coverly",
    title: "Coverly",
    description: "Generate resume and cover letter online using AI.",
    thumbnail: thumbCoverly,
    video: videoCoverly,
    liveUrl: "https://coverly-xi.vercel.app/",
    moreUrl: "#",
  },
  loosian: {
    id: "loosian",
    title: "Loosian Grocers & Exporters",
    description:
      "Pretty website showing Loosian Kenya’s trusted source for certified produce.",
    thumbnail: thumbLoosian,
    video: videoLoosian,
    liveUrl: "https://loosian-exports.vercel.app/",
    moreUrl: "#",
  },
  john: {
    id: "john",
    title: "John’s Personal Site",
    description:
      "Personal brand site with blog and portfolio highlights. Employers love it!",
    thumbnail: thumbJohn,
    video: videoJohn,
    liveUrl: "https://johhnindakwa.vercel.app/",
    moreUrl: "#",
  },
  realestate: {
    id: "realestate",
    title: "Real Estate",
    description: "Listings with filters, maps, and neighborhood insights.",
    thumbnail: thumbRealEstate,
    video: videoRealEstate,
    liveUrl: "https://johnindakwa.github.io/realtorswebsite/",
    moreUrl: "#",
  },
};

/** Sidebar categories */
const CATEGORIES = [
  { key: "websites", label: "Website Showcase" },
  { key: "web-applications", label: "Web Applications" },
  { key: "mobile-applications", label: "Mobile Applications" },
  { key: "logos", label: "Logo Designs" },
  { key: "cards", label: "Business Card Designs" },
  { key: "posters", label: "Poster Designs" },
  { key: "social", label: "Social Media Graphics" },
  { key: "banners", label: "Web Banners" },
  { key: "dashboards", label: "Dashboards & Admin" },
];

/** Map projects per category */
const PROJECTS_BY_CATEGORY = {
  websites: [
    ALL_PROJECTS.photography,
    ALL_PROJECTS.globalcribs,
    ALL_PROJECTS.fastech,
    ALL_PROJECTS.itconsult,
    ALL_PROJECTS.maggies,
    ALL_PROJECTS.coverly,
    ALL_PROJECTS.loosian,
    ALL_PROJECTS.john,
    ALL_PROJECTS.jokajok,
    ALL_PROJECTS.realestate,
  ],
  "web-applications": [ALL_PROJECTS.globalcribs, ALL_PROJECTS.coverly, ALL_PROJECTS.jokajok],
  "mobile-applications": [], // add later
  logos: [],
  cards: [],
  posters: [],
  social: [],
  banners: [],
  dashboards: [
    ALL_PROJECTS.globalcribs,
    ALL_PROJECTS.coverly,
    ALL_PROJECTS.maggies,
    ALL_PROJECTS.jokajok,
  ],
};

const Portfolio = () => {
  const [activeCat, setActiveCat] = useState("websites");
  const [active, setActive] = useState(null);
  const [autoPlayKey, setAutoPlayKey] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const openLightbox = (project) => {
    setActive(project);
    setAutoPlayKey((k) => k + 1);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActive(null);
    document.body.style.overflow = "";
  };

  return (
    <section className="portfolio">
      <div className="container2">
        <header className="portfolio-header">
          <h1 className="portfolio-title">Our Projects</h1>
          <p className="portfolio-sub">
            Explore selected projects across websites, applications, and brand
            design. Hover any card to preview; click to open a lightbox video.
          </p>
        </header>

        <div className="portfolio-two-col">
          <main className="portfolio-content">
            <ProjectGrid
              projects={PROJECTS_BY_CATEGORY[activeCat]}
              onOpen={openLightbox}
            />
          </main>

          <aside className="side-menu glass">
            <h3 className="side-title">Project Categories</h3>
            <button
              className="side-toggle"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="portfolio-categories"
            >
              Browse Categories
              <span className={`chev ${menuOpen ? "up" : "down"}`} />
            </button>

            <ul
              id="portfolio-categories"
              className={`side-list glass-list ${menuOpen ? "open" : ""}`}
            >
              {CATEGORIES.map((c) => (
                <li key={c.key}>
                  <button
                    className={`side-item glass-item ${
                      activeCat === c.key ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveCat(c.key);
                      setMenuOpen(false);
                    }}
                  >
                    <span>{c.label}</span>
                    <span className="arrow">➹</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      {active && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>

            <div className="lightbox-media">
              <video
                key={autoPlayKey}
                src={active.video}
                autoPlay
                loop
                playsInline
              />
            </div>

            <div className="lightbox-info">
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <div className="lightbox-actions">
                <a
                  className="btn btn-ghost"
                  href={active.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  See Live Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
