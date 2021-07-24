 // frontend/src/components/Footer/index.js
import React from 'react';
import './footer.css';
import Stephen from '../MainPage/images/stephenC.jpeg';
function Footer(){
  return(
    <div className="footerContainer">
      <div className="footerLeft">
          <h1>Created By</h1>
          <div className="namesGrid">
              <p className="namesGrid__container">
                  <img className="footerImage" src={Stephen}/>
                  <a href="https://github.com/Twprcntmlk"><i className="fab fa-github-square fa-2x" /> </a>
                  <a href="https://www.linkedin.com/in/stephen-choung-275b05172/"><i className="fab fa-linkedin fa-2x" /> </a>
                  Stephen Choung
              </p>
          </div>
      </div>

      <a href="https://github.com/Twprcntmlk/CapStoneProject" className='footerRight'>
          <h1>Project Repo</h1>
          <i className="fab fa-github fa-2x" />
      </a>
    </div>
  )
}

export default Footer;
