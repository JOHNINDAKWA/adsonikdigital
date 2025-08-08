// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Removed useLocation as it's not directly used here
import "./Navbar.css"; // Import the custom CSS
import { useRef } from "react";

// Placeholder for your logo image. Replace with your actual logo path.
import LOGO from "../../assets/images/logo-removebg-preview.png"; // Placeholder logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopServicesMenuOpen, setIsDesktopServicesMenuOpen] =
    useState(false); // Renamed for clarity
  const [isSidebarServicesExpanded, setIsSidebarServicesExpanded] =
    useState(false); // State for main "Services" expansion in sidebar
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target)
      ) {
        setIsDesktopServicesMenuOpen(false);
      }
    };

    if (isDesktopServicesMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktopServicesMenuOpen]);

  // Effect for sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add/remove class to html to prevent scrolling when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("sidebar-active");
    } else {
      document.documentElement.classList.remove("sidebar-active");
    }
    return () => {
      document.documentElement.classList.remove("sidebar-active");
    };
  }, [isMenuOpen]);

  // Function to toggle the sidebar menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset sidebar service expansion when closing the main sidebar
    if (isMenuOpen) {
      // If menu is about to close
      setIsSidebarServicesExpanded(false);
    }
    // Ensure desktop services menu is closed when sidebar is toggled
    setIsDesktopServicesMenuOpen(false);
  };

  // Function to toggle the desktop services mega menu
  const toggleDesktopServicesMenu = () => {
    setIsDesktopServicesMenuOpen(!isDesktopServicesMenuOpen);
    // Ensure sidebar is closed if desktop menu is opened
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsSidebarServicesExpanded(false);
    }
  };

  // Function to close all menus when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDesktopServicesMenuOpen(false);
    setIsSidebarServicesExpanded(false); // Reset sidebar service expansion
  };

  // Data for the desktop services mega menu
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
    "Branding & Design": [
      "Logo Design",
      "Brand Identity",
      "Graphic Design",
      "UI/UX Design",
      "Print Design",
    ],
  };

  // Simplified data for sidebar services, matching screenshot
  const sidebarServicesCategories = [
    { name: "Strategy", link: "/services#strategy" },
    { name: "Creative", link: "/services#creative" },
    { name: "Development", link: "/services#development" },
    { name: "All Services", link: "/services" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={LOGO} alt="Adsonic Digital Agency Logo" />
          </Link>
        </div>

        {/* Right Section of Navbar (Desktop Links + Hamburger) */}
        <div className="navbar-right-section">
          {/* Desktop Navigation Links (always visible on large screens) */}
          <ul className="navbar-links-desktop">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="navbar-services-dropdown" ref={servicesMenuRef}>
              <button onClick={toggleDesktopServicesMenu}>
                Services
                <svg
                  className={`dropdown-arrow ${
                    isDesktopServicesMenuOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Services Mega Menu Dropdown */}
              <div
                className={`mega-menu ${
                  isDesktopServicesMenuOpen ? "open" : ""
                }`}
              >
                {Object.entries(desktopServicesData).map(
                  ([mainService, subServices]) => (
                    <div key={mainService} className="mega-menu-section">
                      <h3>
                        <Link
                          to={`/services/${mainService
                            .toLowerCase()
                            .replace(/\s/g, "-")}`}
                          onClick={handleLinkClick}
                        >
                          {mainService}
                        </Link>
                      </h3>

                      <ul>
                        {subServices.map((subService, index) => (
                          <li key={index}>
                            <Link
                             to={`/services/${mainService
                            .toLowerCase()
                            .replace(/\s/g, "-")}`}
                              onClick={handleLinkClick}
                            >
                              {subService}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
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

          {/* Animated Hamburger Icon (always visible) */}
          <div
            className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu (for both mobile and large screens) */}
      <div className={`sidebar-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          {/* Close button for sidebar (X icon) */}
          <button
            className="sidebar-close-button"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="sidebar-close-icon-svg"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <ul className="sidebar-menu-list">
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          {/* Case Studies link from screenshot */}
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li className="sidebar-services-main-toggle">
            <button
              onClick={() =>
                setIsSidebarServicesExpanded(!isSidebarServicesExpanded)
              }
            >
              Services
              <svg
                className={`dropdown-arrow ${
                  isSidebarServicesExpanded ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Expanded Services List in Sidebar (Strategy, Creative, Development, All Services) */}
            <ul
              className={`sidebar-expanded-services ${
                isSidebarServicesExpanded ? "open" : ""
              }`}
            >
              {sidebarServicesCategories.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} onClick={handleLinkClick}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* Solutions link from screenshot */}
          <li>
            <Link to="/portfolio" onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={handleLinkClick}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>{" "}
          {/* Moved Contact here as per screenshot */}
        </ul>
        {/* Social Icons (as seen in screenshot) */}
        <div className="sidebar-social-icons">
          <a href="#" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.588-1.333h2.412v-3.996h-3.264c-3.116 0-4.736 1.76-4.736 4.686v2.314z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.012-3.4v-2.147z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.066 1.498.07 2.491.298 3.174.594.673.298 1.147.65 1.519 1.022.372.372.724.847 1.022 1.519.297.683.525 1.676.594 3.174.054 1.266.066 1.646.066 4.85s-.012 3.584-.066 4.85c-.07 1.498-.298 2.491-.594 3.174-.298.673-.65 1.147-1.022 1.519-.372.372-.847.724-1.519 1.022-.683.297-1.676.525-3.174.594-1.266.054-1.646.066-4.85.066s-3.584-.012-4.85-.066c-1.498-.07-2.491-.298-3.174-.594-.673-.298-1.147-.65-1.519-1.022-.372-.372-.847-.724-1.022-1.519-.297-.683-.525-1.676-.594-3.174-.054-1.266-.066-1.646-.066-4.85s.012-3.584.066-4.85c.07-1.498.298-2.491.594-3.174.298-.673.65-1.147 1.022-1.519.372-.372.847-.724 1.519-1.022.683-.297 1.676-.525 3.174-.594 1.266-.054 1.646-.066 4.85-.066zm0 2.163c-3.259 0-3.667.014-4.947.072-1.543.074-2.443.341-3.233.668-.789.327-1.437.903-2.071 1.537-.634.634-1.209 1.283-1.537 2.071-.327.79-.594 1.68-.668 3.233-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.074 1.543.341 2.443.668 3.233.327.789.903 1.437 1.537 2.071.634.634 1.283 1.209 2.071 1.537.79.327 1.68.594 3.233.668 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.543-.074 2.443-.341 3.233-.668.789-.327 1.437-.903 2.071-1.537.634-.634 1.209-1.283 1.537-2.071.327-.79.594-1.68.668-3.233.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.543-.341-2.443-.668-3.233-.327-.789-.903-1.437-1.537-2.071-.634-.634-1.283-1.209-2.071-1.537-.79-.327-1.68-.594-3.233-.668-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.444.647-1.444 1.443s.647 1.443 1.444 1.443c.795 0 1.443-.647 1.443-1.443s-.648-1.443-1.443-1.443z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
