import React from "react";
import Masonry from "react-masonry-css";
import "./AboutIntro.css";

import Img2 from "../../../assets/images/about1.jpg";
import Img3 from "../../../assets/images/about3.jpg";
import Img4 from "../../../assets/images/about5.jpg";

/**
 * We want 6 items total, alternating:
 * 1 text, 2 img, 3 text, 4 img, 5 text, 6 img
 */
const blocks = [
  {
    type: "text",
    title: <> <span>Who We Are</span> </>,
    body:
      "Adsonic is more than a digital agency — we’re a team of creators, strategists and developers dedicated to helping businesses grow. From bold brand identities to scalable websites and targeted campaigns, we build digital assets that convert.",
  },
  { type: "img", src: Img2, alt: "about-1" },

  {
    type: "text",
    title: (
      <>
        <span>Adsonic</span> crafts impactful <br /> digital experiences
      </>
    ),
    body:
      "We’re results-driven. From innovative web design and data-backed SEO to brand systems that resonate, we help you tell a clearer story, reach the right audience, and grow faster online.",
  },
  { type: "img", src: Img3, alt: "about-2" },

  {
    type: "text",
    title: (
      <>
        <span>Content That Performs</span>
      </>
    ),
    body:
      "We also produce high-quality photography and videography—product shoots, brand films, and social content engineered for engagement. Creative that looks great and moves the metrics.",
  },
  { type: "img", src: Img4, alt: "about-3" },
];

const AboutIntro = () => {
  return (
    <section className="about-intro-wrapper">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="/">Home</a> <span>/</span>{" "}
        <span className="active">About Us</span>
      </div>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={{ default: 3, 1200: 3, 1024: 2, 768: 2, 480: 1 }}
        className="about-masonry-grid"
        columnClassName="about-masonry-column"
      >
        {blocks.map((block, i) =>
          block.type === "text" ? (
            <div className="about-intro-text-card" key={`t-${i}`}>
              <h2>{block.title}</h2>
              <p>{block.body}</p>
            </div>
          ) : (
            <img
              key={`i-${i}`}
              src={block.src}
              alt={block.alt}
              className="about-masonry-img"
            />
          )
        )}
      </Masonry>
    </section>
  );
};

export default AboutIntro;
