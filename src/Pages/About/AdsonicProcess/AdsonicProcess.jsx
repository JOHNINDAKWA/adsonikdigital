import React from "react";
import "./AdsonicProcess.css";
import { MdOutlineLibraryAddCheck } from "react-icons/md";

const winningTactics = [
  "Be found online: show up on Google, social media, and maps when customers search.",
  "Turn clicks into customers: simple pages, clear messages, easy calls to action.",
  "Improve what works: test headlines, images, and offers to grow results steadily.",
  "See your progress: clear reports that show calls, messages, sales, and costs.",
];

const methodologySteps = [
  {
    step: "1: Listen",
    desc: "We sit down with you to understand your business, budget, and goals...no tech talk.",
  },
  {
    step: "2: Plan",
    desc: "We map a simple plan: who we’re targeting, what we’ll say, and where we’ll show it.",
  },
  {
    step: "3: Build",
    desc: "We set up your website/pages, ads, and tracking, clean, fast, and mobile-friendly.",
  },
  {
    step: "4: Launch",
    desc: "Go live. We watch the numbers closely and make quick fixes in the first days.",
  },
  {
    step: "5: Grow",
    desc: "Every month we refine what’s working and add channels as results improve.",
  },
];

const AdsonicProcess = () => {
  return (
    <section className="strategy-section">
      <div className="strategy-container">
        {/* Winning Tactics */}
        <h2 className="section-heading">How We Help You Win</h2>
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

        {/* Our Process */}
        <h2 className="section-heading method-heading">Our Simple Process</h2>
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
