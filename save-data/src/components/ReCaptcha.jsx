import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

// eslint-disable-next-line react/prop-types
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
        sitekey="6Lcx24oqAAAAAN7QQKBoExgywrVPLmNXmhKmLvy-"     
        onChange={handleVerify}
      />
    </div>
  );
};

export default ReCaptcha;