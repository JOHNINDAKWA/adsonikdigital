import React from "react";
import "./AdsonicProcess.css";
import { MdOutlineLibraryAddCheck } from "react-icons/md";

const winningTactics = [
  "Leverage integrated campaigns across SEO, social, and paid media to dominate channels.",
  "Craft high-converting landing pages backed by conversion rate optimization data.",
  "Use A/B testing to refine performance and improve ROI over time.",
  "Track KPIs via real-time dashboards and actionable reporting insights.",
];

const methodologySteps = [
  {
    step: "1: Discover",
    desc: "We begin with an audit of your brand, audience, and digital footprint to align goals.",
  },
  {
    step: "2: Strategize",
    desc: "We craft data-driven strategies tailored to your goals, budget, and industry trends.",
  },
  {
    step: "3: Launch",
    desc: "Our team implements campaigns with technical precision and creative flair.",
  },
  {
    step: "4: Optimize",
    desc: "We monitor performance, refine approaches, and ensure constant improvement.",
  },
  {
    step: "5: Scale",
    desc: "Once results are strong, we expand your reach across platforms and territories.",
  },
];

const AdsonicProcess = () => {
  return (
    <section className="strategy-section">
      <div className="strategy-container">
        {/* Winning Tactics */}
        <h2 className="section-heading">Winning Tactics</h2>
        <div className="tactics-grid">
          {winningTactics.map((tactic, index) => (
            <div className="tactic-card" key={index}>
              <div className="check-icon-wrapper">
                <MdOutlineLibraryAddCheck className="custom-check-icon" />
              </div>

              <p>{tactic}</p>
            </div>
          ))}
        </div>

        {/* Our Methodology */}
        <h2 className="section-heading method-heading">Our Methodology</h2>
        <div className="methodology-wrapper">
          <div className="method-line" />
          <div className="method-steps">
            {methodologySteps.map((step, index) => (
              <div key={index} className="method-step">
                <div className="method-dot" />
                <h4>{step.step}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsonicProcess;
