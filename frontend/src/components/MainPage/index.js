// frontend/src/components/MainPage/index.js
import React from 'react';
import { NavLink } from 'react-router-dom'; //NavLink,
// import { useSelector } from 'react-redux';
import './MainPage.css';
import splash from './images/splash-page-img.jpg';
import Footer from "../../components/Footer";
function MainPage(){

    return(
      <div className="Main-page">
        <div className="Main-splash">
          <img src={splash} alt="splash1"/>
          <div className="Main-title">
          <h1 className ="Main-title_title">The Greatest Outdoors </h1>
          <h3 className ="Main-title_span">Wishlists curated by Airbnb.</h3>
          <div className="Main-button_div">
            <NavLink to="/listings">
                <button className="Main-button_Button"> Explore The World!</button>
            </NavLink>
          </div>
        </div>
        </div>


        <div className="Main-page_footer">
          <Footer />
        </div>

      </div>

    )
  }
  export default MainPage;
