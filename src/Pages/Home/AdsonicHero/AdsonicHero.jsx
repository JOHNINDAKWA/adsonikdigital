import React from "react";
import Marquee from "react-fast-marquee";
import { FaBullhorn } from "react-icons/fa";
import "./AdsonicHero.css";

import HERO_BG from "../../../assets/images/wall5.jpg"; // Background image path
import Testimonial1 from "../../../assets/images/testimonial1.jpg";
import Testimonial2 from "../../../assets/images/testimonial2.jpg";
import Testimonial3 from "../../../assets/images/testimonial3.jpg";
import Testimonial4 from "../../../assets/images/testimonial4.jpg";
import Testimonial5 from "../../../assets/images/testimonial5.jpg";

const testimonials = [
  {
    image: Testimonial1,
    name: "Alfred M.",
    title: "Founder, Retail Brand",
    feedback:
      "Adsonic completely revamped our digital marketing strategy, delivering measurable growth in both traffic and conversions. Their team is proactive, creative, and always focused on delivering exceptional results for our business.",
  },
  {
    image: Testimonial2,
    name: "Erica G.",
    title: "CEO, HealthTech Firm",
    feedback:
      "Working with Adsonic has been a game-changer. Their targeted ad campaigns and SEO strategies helped us connect with the right audience, boosting our online presence significantly within just a few months.",
  },
  {
    image: Testimonial3,
    name: "Debbie A.",
    title: "Marketing Lead, Finance Sector",
    feedback:
      "Adsonic's team doesn’t just run ads; they build data-driven campaigns that generate real business growth. Their dedication and expertise have made a huge impact on our digital visibility and lead generation.",
  },
  {
    image: Testimonial4,
    name: "Michael S.",
    title: "Co-founder, EduTech",
    feedback:
      "Our brand's visibility and engagement soared after partnering with Adsonic. Their team crafted brilliant content strategies and delivered designs that resonated perfectly with our core audience.",
  },
  {
    image: Testimonial5,
    name: "John A.",
    title: "Marketing Manager, AUF Tech",
    feedback:
      "The Adsonic team has been instrumental in driving our online growth. From SEO optimization to high-performing ad creatives, they consistently deliver results that exceed expectations.",
  },
  {
    image: Testimonial3,
    name: "Wanjiru K.",
    title: "Co-founder, Startup Incubator",
    feedback:
      "Adsonic is not just an agency; they are a true partner in growth. Their strategic approach to marketing and attention to detail helped us achieve remarkable results within a short period.",
  },
];


const AdsonicHero = () => {
  return (
    <section
      className="adsonic-hero-section"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <div className="adsonic-hero-overlay">
        <div className="adsonic-hero-content">
          <h2 className="hero-subheading">
            When it comes to elevating your brand’s presence…
          </h2>
          <h1 className="hero-heading">
            <span>Digital Innovation</span> is the Key to Market Leadership
          </h1>
          <p className="hero-description">
            Partner with Adsonic Digital Agency to craft impactful strategies
            that drive growth, increase visibility, and generate real results.
          </p>
          <button className="hero-cta-button">Contact Sales</button>
        </div>

        <div className="ai-specialization-box">
          <FaBullhorn className="ai-special-icon" />
          <p>
            We specialize in <span>AI-Driven Digital Campaigns</span> using
            ChatGPT, Claude, Gemini, and other AI-powered tools.
          </p>
          <button className="ai-cta-button">Ask us how we do it!</button>
        </div>

        <div className="adsonic-testimonials-marquee">
          <Marquee
            gradient={false}
            speed={30}
            pauseOnHover={true}
            className="testimonial-marquee"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="title-section">
                  <img src={testimonial.image} alt="" className="testimonial-image"/>
                  <div className="">
                    <h4>{testimonial.name}</h4>
                    <p className="testimonial-title">{testimonial.title}</p>
                  </div>
                </div>
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default AdsonicHero;
