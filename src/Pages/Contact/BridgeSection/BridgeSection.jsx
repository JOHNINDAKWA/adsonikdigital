import React from 'react';
import './BridgeSection.css';
import showcaseImage from '../../../assets/images/contactus.jpg'; // replace with your actual image

const BridgeSection = () => {
  return (
    <section className="bridge-wrapper">
      <div className="container bridge-inner">
        <div className="bridge-image">
          <img src={showcaseImage} alt="Creative Showcase" />
        </div>
        <div className="bridge-text">
          <h2>Fueling Brands with Bold Digital Creativity</h2>
          <p>
            Our team of designers, developers, and strategists collaborate to craft exceptional digital experiences. 
            Whether it’s a website, app, or custom solution — we build it to impress and convert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BridgeSection;
