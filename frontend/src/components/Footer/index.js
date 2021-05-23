// frontend/src/components/Footer/index.js
import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import gitHubFav from './images/github-logo.png';
import linkedInFav from './images/Linkedin-Icon.png'
import './footer.css';

function Footer(){

    return(
      <>
        <div className="footer-container">
          <h2> © AirBnBClone By: Stephen Choung</h2>

          <div className="footer-icons">
            <a href="https://github.com/Twprcntmlk" className="github_logo">
                <img src={gitHubFav} alt="logo1"/>
            </a>
            <a href="https://www.linkedin.com/in/stephen-choung-275b05172/" className="github_logo">
                <img src={linkedInFav} alt="logo2"/>
            </a>
          </div>


          <div className="footer-nav-about">
            <ul> About
              <li>How Airbnb works</li>
              <li>Newsroom</li>
              <li>Investors</li>
              <li>Airbnb Plus</li>
              <li>Airbnb Luxe</li>
            </ul>
          </div>

          <div className="footer-nav-community">
            <ul> Community
              <li>How Airbnb works</li>
              <li>Newsroom</li>
              <li>Investors</li>
              <li>Airbnb Plus</li>
              <li>Airbnb Luxe</li>
            </ul>
          </div>

          <div className="footer-nav-host">
            <ul> Host
              <li>How Airbnb works</li>
              <li>Newsroom</li>
              <li>Investors</li>
              <li>Airbnb Plus</li>
              <li>Airbnb Luxe</li>
            </ul>
          </div>

          <div className="footer-nav-support">
            <ul> Support
              <li>How Airbnb works</li>
              <li>Newsroom</li>
              <li>Investors</li>
              <li>Airbnb Plus</li>
              <li>Airbnb Luxe</li>
            </ul>
          </div>


         </div>
      </>
    )
  }
  export default Footer;
