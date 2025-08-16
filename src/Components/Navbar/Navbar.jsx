import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { IoChevronDown, IoClose } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

// Logo + service images (your paths)
import LOGO from "../../assets/images/logo-removebg-preview.png";
import webImg from "../../assets/images/services/web.jpg";
import marketingImg from "../../assets/images/services/digital-ppc.jpg";
import brandingImg from "../../assets/images/services/branding.jpg";

const Navbar = () => {
  // States
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopServicesMenuOpen, setIsDesktopServicesMenuOpen] = useState(false);

  // Two different sidebars
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesMenuRef = useRef(null);

  // Detect desktop
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Outside click for desktop mega menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(e.target)) {
        setIsDesktopServicesMenuOpen(false);
      }
    };
    if (isDesktopServicesMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDesktopServicesMenuOpen]);

  // Sticky + shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll if any sidebar open
  useEffect(() => {
    const anyOpen = isDesktopSidebarOpen || isMobileSidebarOpen;
    if (anyOpen) document.documentElement.classList.add("sidebar-active");
    else document.documentElement.classList.remove("sidebar-active");
    return () => document.documentElement.classList.remove("sidebar-active");
  }, [isDesktopSidebarOpen, isMobileSidebarOpen]);

  // Click hamburger => open the appropriate sidebar
  const handleHamburger = () => {
    setIsDesktopServicesMenuOpen(false);
    setIsMobileServicesOpen(false);
    if (isDesktop) {
      setIsDesktopSidebarOpen(true);
    } else {
      setIsMobileSidebarOpen(true);
    }
  };

  const closeAll = () => {
    setIsDesktopSidebarOpen(false);
    setIsMobileSidebarOpen(false);
    setIsDesktopServicesMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleLinkClick = () => closeAll();

  // Desktop mega menu data (kept)
  const desktopServicesData = {
    "Web & App Development": [
      "Custom Design & Development",
      "Ecommerce Design & Development",
      "Software Design & Development",
      "Database Design & Development Services",
      "CRM Design & Development",
      "WordPress Website Development",
    ],
    SEO: [
      "Answer Engine Optimization (AEO)",
      "SEO Audit Services",
      "Page Speed Optimization",
      "Content Marketing",
      "Product Optimization Services",
      "Google Analytics 4 Setup Service",
    ],
    "Digital Marketing": [
      "Marketing and Sales Automation",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Email Marketing Services",
      "Brand Strategy Services",
      "Conversion Rate Optimization",
    ],
    Photography: [
      "Product Photography",
      "Corporate Headshots",
      "Event Photography",
      "Commercial Photography",
      "Real Estate Photography",
    ],
    Videography: [
      "Promotional Videos",
      "Explainer Videos",
      "Corporate Videos",
      "Animation Videos",
      "Testimonial Videos",
    ],
    "Branding & Design": ["Logo Design", "Brand Identity", "Graphic Design", "UI/UX Design", "Print Design"],
  };

  const mobileServices = [
    { name: "Software Development", link: "/services/web-&-app-development" },
    { name: "SEO", link: "/services/seo" },
    { name: "Digital Marketing", link: "/services/digital-marketing" },
    { name: "Branding & Design", link: "/services/branding-&-design" },
    { name: "Photography", link: "/services/photography" },
    { name: "Videography", link: "/services/videography" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={LOGO} alt="Adsonic Digital Agency Logo" />
          </Link>
        </div>

        <div className="navbar-right-section">
          <ul className="navbar-links-desktop">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>

            <li className="navbar-services-dropdown" ref={servicesMenuRef}>
              <button onClick={() => setIsDesktopServicesMenuOpen((v) => !v)}>
                Services
                <IoChevronDown className={`dropdown-arrow ${isDesktopServicesMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`mega-menu ${isDesktopServicesMenuOpen ? "open" : ""}`}>
                {Object.entries(desktopServicesData).map(([mainService, subs]) => (
                  <div key={mainService} className="mega-menu-section">
                    <h3>
                      <Link
                        to={`/services/${mainService.toLowerCase().replace(/\s/g, "-")}`}
                        onClick={handleLinkClick}
                      >
                        {mainService}
                      </Link>
                    </h3>
                    <ul>
                      {subs.map((s, i) => (
                        <li key={i}>
                          <Link
                            to={`/services/${mainService.toLowerCase().replace(/\s/g, "-")}`}
                            onClick={handleLinkClick}
                          >
                            {s}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>

            <li>
              <Link to="/portfolio" onClick={handleLinkClick}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger (opens different sidebars depending on screen size) */}
          <div className="hamburger-icon" onClick={handleHamburger} aria-label="Toggle menu">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>
      </div>

      {/* Overlay (click to close) */}
      {(isDesktopSidebarOpen || isMobileSidebarOpen) && (
        <button className="nav-overlay" aria-label="Close menu overlay" onClick={closeAll} />
      )}

      {/* ================= DESKTOP INFO SIDEBAR ================= */}
      <aside className={`desktop-info-sidebar ${isDesktopSidebarOpen ? "open" : ""}`} aria-hidden={!isDesktopSidebarOpen}>
        <div className="side-header">
          <button className="icon-btn close" onClick={closeAll} aria-label="Close desktop panel">
            <IoClose />
          </button>
        </div>

        <div className="side-body">
          <div className="side-brand">
            <img src={LOGO} alt="Logo" />
          </div>

          <p className="side-desc">
            We provide specialized winterization services to safeguard your pool during the off-season, and when spring
            arrives, we handle the thorough opening process.
          </p>

          <div className="side-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>

          <h3 className="side-title">Featured Services</h3>

          <Link to="/services/web-&-app-development" className="feature-card" onClick={handleLinkClick}>
            <img src={webImg} alt="Web & App Development" />
            <div className="feature-info">
              <h4>Web & App Development</h4>
              <p>Custom apps, e-commerce, full-stack solutions.</p>
            </div>
          </Link>

          <Link to="/services/digital-marketing" className="feature-card" onClick={handleLinkClick}>
            <img src={marketingImg} alt="Digital Marketing" />
            <div className="feature-info">
              <h4>Digital Marketing</h4>
              <p>PPC, social, email — strategies that convert.</p>
            </div>
          </Link>
          

          <Link to="/services/branding-&-design" className="feature-card" onClick={handleLinkClick}>
            <img src={brandingImg} alt="Branding & Design" />
            <div className="feature-info">
              <h4>Branding & Design</h4>
              <p>Logo, identity, and premium UI/UX.</p>
            </div>
          </Link>
        </div>

        <div className="side-contact">
          <h3>Contact Us</h3>
          <div className="contact-row"><span><FiMapPin /></span><p>Ochok Street, Chokaa, Kang'undo Road, Nairobi</p></div>
          <div className="contact-row"><span><FiPhone /></span><p>+ (254) 70220-7999<br />+(254) 716 597073</p></div>
          <div className="contact-row"><span><FiMail /></span><p>info@adsonicagency.co.ke</p></div>
        </div>
      </aside>

      {/* ================= MOBILE NAV SIDEBAR ================= */}
      <aside className={`mobile-nav-sidebar ${isMobileSidebarOpen ? "open" : ""}`} aria-hidden={!isMobileSidebarOpen}>
        <div className="mobile-head">
          <img src={LOGO} alt="Logo" />
          <button className="icon-btn ghost" onClick={closeAll} aria-label="Close mobile nav">
            <IoClose />
          </button>
        </div>

        <ul className="mobile-menu">
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li>
            <button className={`mobile-accordion ${isMobileServicesOpen ? "active" : ""}`}
                    onClick={() => setIsMobileServicesOpen((v) => !v)}>
              Services <IoChevronDown className={`chev ${isMobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <ul className={`mobile-sub ${isMobileServicesOpen ? "open" : ""}`}>
              {mobileServices.map((s) => (
                <li key={s.name}><Link to={s.link} onClick={handleLinkClick}>{s.name}</Link></li>
              ))}
            </ul>
          </li>
          <li><Link to="/portfolio" onClick={handleLinkClick}>Portfolio</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>

        <div className="mobile-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
