// frontend/src/components/Footer/index.js
import React from 'react';
import './footer.css';

function Footer(){
  return(
    <div className="footer-container">
      <div className="footer-container-links">
        <a href="https://github.com/Twprcntmlk" className="footer-link">Github</a>
        &nbsp;  |  &nbsp;
        <a href="https://twprcntmlk.github.io/" className="footer-link"> Portfolio</a>
        &nbsp;  |  &nbsp;
        <a href="https://www.linkedin.com/in/stephen-choung-275b05172/" className="footer-link"> Linkedin</a>
      </div>
    </div>
  )
}

export default Footer;
