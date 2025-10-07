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
    // Simplified Title: Automation -> Auto-Pilot
    title: "Marketing on Auto-Pilot (Automation)",
    // Simplified Body with <strong> tags
    body:
      "We set up smart systems that automatically <strong>follow up with your customers</strong> and handle simple tasks. This reduces your manual work and makes sure no potential sale is missed.",
    image: automationImg,
    bullets: [
      "Automatically send follow-up messages",
      "Organize customer contacts (CRM help)",
      "Set rules for faster response times",
    ],
  },
  {
    // Simplified Title: PPC -> Paid Ads
    title: "Paid Advertising (Google & Social Ads)",
    // Simplified Body with <strong> tags
    body:
      "We run effective campaigns that show your ads only to people ready to buy. We constantly check the results to make sure your money is bringing in <strong>more profit</strong> than you spend.",
    image: ppcImg,
    bullets: [
      "Ads on Google and YouTube",
      "Ads on Facebook, Instagram, and LinkedIn",
      "Testing different pictures and messages (creatives)",
    ],
  },
  {
    // Simplified Title: Same, but simpler description
    title: "Social Media Marketing",
    // Simplified Body with <strong> tags
    body:
      "We help you build a strong online community and create posts that people love. We plan what to post, create the content, and report on what actually <strong>grows your business</strong>.",
    image: socialImg,
    bullets: [
      "Strategy for platforms (e.g., Facebook, TikTok)",
      "Making short videos and nice graphics",
      "Systems to increase likes and followers",
    ],
  },
  {
    // Simplified Title: Email -> Newsletters & Deals
    title: "Email Newsletters and Deals",
    // Simplified Body with <strong> tags
    body:
      "We send the <strong>right emails to the right people</strong> at the best time. This keeps your customers happy, encourages them to buy again, and makes sure they remember your brand.",
    image: emailImg,
    bullets: [
      "Welcome, follow-up, and 'come back' email campaigns",
      "Sending deals to specific customer groups",
      "Creating professional email templates",
    ],
  },
  {
    // Simplified Title: Brand Strategy -> Making Your Business Clear
    title: "Making Your Business Stand Out (Brand Strategy)",
    // Simplified Body with <strong> tags
    body:
      "We clarify exactly what makes your business special and fix anything confusing on your website. This ensures your message is <strong>clear</strong> and makes it <strong>easier for visitors to become customers</strong>.",
    image: brandImg,
    bullets: [
      "Finding your core business message",
      "Checking and fixing how easy your website is to use",
      "Testing messages to see what works best",
    ],
  },
  {
    // Simplified Title: CRO -> Getting More Sales from Visitors
    title: "Getting More Sales from Your Website Visitors",
    // Simplified Body with <strong> tags
    body:
      "We are always running small tests on your website and ads to find the best way to get a sale. We turn these small wins into a system that guarantees your <strong>sales keep growing</strong>.",
    image: croImg,
    bullets: [
      "Clear goals for sales growth",
      "Designing and running website experiments",
      "Simple reports on what we improved each week",
    ],
  },
];

const DigitalMarketting = () => {
  return (
    <>
    <section className="dm-page">
      {/* ===== HERO (Simplified Content with <strong> tags) ===== */}
      <div className="dm-hero" style={{ "--heroBg": `url(${heroBg})` }}>
        <div className="container dm-hero-inner">
          <div className="dm-hero-copy">
            <h1>
              Digital Marketing that <span>Finds</span> & Keeps Your <span>Customers</span>
            </h1>
            <p>
              We manage all your online growth—from <strong>social media</strong> and <strong>Google Ads</strong> to <strong>email campaigns</strong> and <strong>website improvements</strong>. We use data to make sure every activity brings in more revenue.
            </p>
            <div className="dm-divider" />
          </div>

          <div className="dm-hero-card">
            <div className="card-group">
              <h4>Our Main Focus</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "54%" }} />
              </div>
              <div className="bar-meta">
                <strong>54%</strong> Paid Ads + Customer Emails
              </div>
            </div>

            <div className="card-group">
              <h4>Top Result</h4>
              <div className="bar">
                <span className="bar-fill" style={{ "--fill": "71%" }} />
              </div>
              <div className="bar-meta">
                <strong>71%</strong> Better at turning potential buyers into real buyers
              </div>
            </div>

            <div className="card-cta">
              <div className="stat">
                <div className="n">+38%</div>
                <div className="kicker">Avg. Profit from Ads Improved</div>
              </div>
              <Link to="/contact" className="btn-cta">Plan My Growth</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CAPABILITIES (Using Corrected Array) ===== */}
      <div className="container dm-capabilities">
        {CAPABILITIES.map((c, i) => (
          <article key={c.title} className={`dm-row ${i % 2 === 1 ? "reverse" : ""}`}>
            <div className="dm-media">
              <img src={c.image} alt={c.title} />
            </div>
            <div className="dm-copy">
              <h3>{c.title}</h3>
              {/* Note: The 'body' property must be rendered safely. In JSX, embedding HTML is secure by default if coming from a variable like 'c.body'. */}
              <p dangerouslySetInnerHTML={{ __html: c.body }} /> 
              {c.bullets?.length ? (
                <ul className="dm-bullets">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
              <Link className="dm-link" to="/contact">
                Let’s start growing →
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