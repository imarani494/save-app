import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptcha = ({ onVerify }) => {
  const [verified, setVerified] = useState(false);

  
  const handleVerify = (value) => {
    if (value) {
      setVerified(true);
      onVerify(true); 
    }
  };

  return (
    <div className="recaptcha-container">
      <ReCAPTCHA
        sitekey="6LcOe4sqAAAAAMtgpNIcCSFPuFrkVQ6qPrLsYNBC"  
        onChange={handleVerify}  
      />
    </div>
  );
};

export default ReCaptcha;
