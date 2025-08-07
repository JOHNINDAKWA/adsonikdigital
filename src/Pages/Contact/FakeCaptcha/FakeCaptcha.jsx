import React, { useState } from 'react';
import './FakeCaptcha.css';
import recaptchaImage from '../../../assets/images/Invisable-reCAPTCHA.png'; // Adjust path as needed
import { FaCheck } from 'react-icons/fa';

const FakeCaptcha = () => {
  const [clicked, setClicked] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleClick = () => {
    if (!clicked && !verified) {
      setClicked(true);
      setTimeout(() => {
        setVerified(true);
        setClicked(false);
      }, 1200); // Simulate a short loading delay
    }
  };

  return (
    <div className="fake-captcha-wrapper" onClick={handleClick}>
      {!verified ? (
        <div className="captcha-box">
          <input type="checkbox" readOnly checked={clicked} />
          {clicked ? (
            <div className="spinner"></div>
          ) : (
            <span className="checkbox-label">I'm not a robot</span>
          )}
          <img src={recaptchaImage} alt="reCAPTCHA" className="recaptcha-img" />
        </div>
      ) : (
        <div className="captcha-box verified">
          <div className="checkmark"><FaCheck /></div>
          <span className="checkbox-label">I'm not a robot</span>
        </div>
      )}
    </div>
  );
};

export default FakeCaptcha;
