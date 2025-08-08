import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

// Replace these with your real images (16:9 or 4:3 crops work fine)
import imgWeb from "../../assets/images/services/web.jpg";
import imgSEO from "../../assets/images/services/seo.jpg";
import imgDM from "../../assets/images/services/digital.png";
import imgPhoto from "../../assets/images/services/photography.jpg";
import imgVideo from "../../assets/images/services/videography.jpg";
import imgBrand from "../../assets/images/services/graphics.jpg";

const SERVICES = [
  {
    key: "web",
    title: "Website & App Development",
    blurb:
      "Custom sites, ecommerce, software and integrations engineered for performance.",
    image: imgWeb,
    items: [
      "Custom Design & Development",
      "Ecommerce Design & Development",
      "Software Design & Development",
      "Database Design & Development Services",
      "CRM Design & Development",
      "WordPress Website Development",
    ],
    to: "/services/web-&-app-development",
  },
  {
    key: "seo",
    title: "SEO",
    blurb:
      "From technical SEO to AEO and GA4: show up, load fast, and convert.",
    image: imgSEO,
    items: [
      "Answer Engine Optimization (AEO)",
      "SEO Audit Services",
      "Page Speed Optimization",
      "Content Marketing",
      "Product Optimization Services",
      "Google Analytics 4 Setup Service",
    ],
    to: "/services/seo",
  },
  {
    key: "marketing",
    title: "Digital Marketing",
    blurb:
      "Acquisition + retention—paid, social, email, and CRO tuned to your goals.",
    image: imgDM,
    items: [
      "Marketing and Sales Automation",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Email Marketing Services",
      "Brand Strategy Services",
      "Conversion Rate Optimization",
    ],
    to: "/services/digital-marketing",
  },
  {
    key: "photo",
    title: "Photography",
    blurb:
      "Products, people, places—content that looks great and moves the metrics.",
    image: imgPhoto,
    items: [
      "Product Photography",
      "Corporate Headshots",
      "Event Photography",
      "Commercial Photography",
      "Real Estate Photography",
    ],
    to: "/services/photography",
  },
  {
    key: "video",
    title: "Videography",
    blurb:
      "Promos, explainers, testimonials and more—crafted for every channel.",
    image: imgVideo,
    items: [
      "Promotional Videos",
      "Explainer Videos",
      "Corporate Videos",
      "Animation Videos",
      "Testimonial Videos",
    ],
    to: "/services/videography",
  },
  {
    key: "brand",
    title: "Branding & Design",
    blurb:
      "Identity systems and design that clarify who you are and why it matters.",
    image: imgBrand,
    items: [
      "Logo Design",
      "Brand Identity",
      "Graphic Design",
      "UI/UX Design",
      "Print Design",
    ],
    to: "/services/branding-design",
  },
];

const Services = () => {
  return (
    <section className="services-page">
      {/* Breadcrumb */}
      <div className="services-breadcrumb container">
        <Link to="/">Home</Link> <span>/</span> <span className="active">Services</span>
      </div>

      {/* Page intro */}
      <header className="services-header container">
        <h1>What We Do</h1>
        <p>
          Full-stack digital execution—from brand to build to growth. Explore our
          core disciplines below.
        </p>
      </header>

      {/* Cards */}
      <div className="services-grid container">
        {SERVICES.map((s) => (
          <Link key={s.key} to={s.to} className="service-card" style={{ "--bg": `url(${s.image})` }}>
            <div className="service-gradient" />
            <div className="service-content">
              <h3 className="service-title">{s.title}</h3>
              <p className="service-blurb">{s.blurb}</p>
              <div className="service-arrow" aria-hidden>→</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
