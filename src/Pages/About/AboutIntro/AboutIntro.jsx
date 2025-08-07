import React from "react";
import Masonry from "react-masonry-css";
import "./AboutIntro.css";

import Img2 from "../../../assets/images/about2.jpg";
import Img3 from "../../../assets/images/about3.jpg";
import Img4 from "../../../assets/images/about4.jpg";
import Img5 from "../../../assets/images/about5.jpg";

const images = [Img2, Img3, Img4, Img5];

const AboutIntro = () => {
  return (
    <section className="about-intro-wrapper">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="/">Home</a> <span>/</span> <span className="active">About Us</span>
      </div>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={{ default: 3, 1024: 2, 768: 2, 480: 1 }}
        className="about-masonry-grid"
        columnClassName="about-masonry-column"
      >
        {/* New Text Card (Replaces First Image) */}
        <div className="about-intro-text-card">
          <h2>
            <span>Who We Are</span>
          </h2>
          <p>
            Adsonic is more than a digital agency...we’re a passionate team of
            creators, strategists, and developers dedicated to helping businesses
            grow. From bold brand identities to scalable websites and targeted campaigns,
            we build digital assets that truly convert.
          </p>
        </div>

        {/* Remaining Images */}
        {images.map((img, index) => (
          <img
            src={img}
            alt={`about-img-${index + 1}`}
            key={index}
            className="about-masonry-img"
          />
        ))}

        {/* Original Intro Text Block */}
        <div className="about-intro-text-card">
          <h2>
            <span>Adsonic</span> crafts impactful <br />
            digital experiences
          </h2>
          <p>
            We are a results-driven creative agency empowering businesses to thrive in
            the digital era. From innovative website design and data-backed SEO strategies
            to bold brand identities, we help brands tell their stories, attract the right
            audiences, and grow faster online.
          </p>
        </div>
      </Masonry>
    </section>
  );
};

export default AboutIntro;
