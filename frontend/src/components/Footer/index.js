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


          <div className=" footer footer-nav-about">
            <ul> About
              <li>
                <a href="https://www.airbnb.com/d/howairbnbworks">How Airbnb works</a>
              </li>
              <li>Newsroom</li>
              <li>Investors</li>
              <li>Airbnb Plus</li>
              <li>Airbnb Luxe</li>
            </ul>
          </div>

          <div className="footer footer-nav-community">
            <ul> Community
              <li>
                <a href="https://www.airbnb.com/diversity">Diversity & Belonging</a>
              </li>
              <li>Newsroom</li>
              <li>Investors</li>
              <li>Airbnb Plus</li>
              <li>Airbnb Luxe</li>
            </ul>
          </div>

          <div className="footer footer-nav-host">
            <ul> Host
              <li>
                <a href="https://www.airbnb.com/diversity">Host your Home</a>
              </li>
              <li>Host and Online Experience</li>
              <li>Host and Experience</li>
              <li>Responsible Hosting</li>
              <li>Community Center</li>
            </ul>
          </div>

          <div className="footer footer-nav-support">
            <ul> Support
              <li>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Our COVID-19 Response</a>
              </li>
              <li>Help Center</li>
              <li>Cancellation options</li>
              <li>Neighborhood Support</li>
              <li>Trust & Safety</li>
            </ul>
          </div>


         </div>
      </>
    )
  }
  export default Footer;
