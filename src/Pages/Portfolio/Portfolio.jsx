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

import thumbJohn from "../../assets/images/videos/john.png";
import videoJohn from "../../assets/images/videos/john.mp4";

import thumbMaggies from "../../assets/images/videos/maggies.png";
import videoMaggies from "../../assets/images/videos/maggies.mp4";

import thumbPhotography from "../../assets/images/videos/photography.png";
import videoPhotography from "../../assets/images/videos/photography.mp4";

import thumbRealEstate from "../../assets/images/videos/real-estate.png";
import videoRealEstate from "../../assets/images/videos/real-estate.mp4";

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

/** Your website projects */
const WEBSITE_PROJECTS = [
      {
    id: "photography",
    title: "Photography Studio",
    description: "Minimal, image-first portfolio with galleries.",
    thumbnail: thumbPhotography,
    video: videoPhotography,
    liveUrl: "https://madeinuxstudio.com/",
    moreUrl: "#",
  },
  {
    id: "realestate",
    title: "Real Estate",
    description: "Listings with filters, maps, and neighborhood insights.",
    thumbnail: thumbRealEstate,
    video: videoRealEstate,
    liveUrl: "https://johnindakwa.github.io/realtorswebsite/",
    moreUrl: "#",
  },
  {
    id: "fastech",
    title: "Fastech Internet",
    description: "Modern ISP site with plans, coverage, and lead capture.",
    thumbnail: thumbFastech,
    video: videoFastech,
    liveUrl: "https://fastechinternet.co.ke/",
    moreUrl: "#",
  },
  {
    id: "itconsult",
    title: "IT Consult",
    description: "Consulting website with service pages and case studies.",
    thumbnail: thumbItconsult,
    video: videoItconsult,
    liveUrl: "https://itconsult.africa/",
    moreUrl: "#",
  },
  {
    id: "john",
    title: "John’s Personal Site",
    description: "Personal brand site with blog and portfolio highlights. Employers love it!",
    thumbnail: thumbJohn,
    video: videoJohn,
    liveUrl: "https://johhnindakwa.vercel.app/",
    moreUrl: "#",
  },
  {
    id: "maggies",
    title: "Maggie’s Pregnancy and Postpartum Spa",
    description: "Serene pregnancy and postpartum spa site with packages and booking flow, complete with admin dashboard.",
    thumbnail: thumbMaggies,
    video: videoMaggies,
    liveUrl: "http://maggiespregnancyspa.co.ke/",
    moreUrl: "#",
  },

];

/** Sidebar categories (8 items) */
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

/** Map projects per category (fill more later) */
const PROJECTS_BY_CATEGORY = {
  websites: WEBSITE_PROJECTS,
  applications: [], // add when ready
  logos: [],
  cards: [],
  posters: [],
  social: [],
  banners: [],
  dashboards: [],
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
          {/* Sidebar menu styled like your reference */}

          {/* Content area */}
          <main className="portfolio-content">
            <ProjectGrid
              projects={PROJECTS_BY_CATEGORY[activeCat]}
              onOpen={openLightbox}
            />
          </main>

          <aside className="side-menu glass">
            <h3 className="side-title">Project Categories</h3>

            {/* Toggle only visible on small screens */}
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
                      setMenuOpen(false); // auto-close after choosing on mobile
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

      {/* Lightbox */}
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
                muted
                loop
                playsInline
                // controls
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
                {/* <a
                  className="btn btn-ghost"
                  href={active.moreUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
