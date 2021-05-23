// frontend/src/components/MainPage/index.js
import React from 'react';
import { NavLink } from 'react-router-dom'; //NavLink,
// import { useSelector } from 'react-redux';
import './mainpage.css';
import splash from './images/splash-page-img.jpg';
function MainPage(){

    return(
      <>
        <h1>This is the main page</h1>
        <div className="splash">
            <img src={splash} alt="splash1"/>
        </div>
        <NavLink to="/listings">
            <button> Explore The World!</button>
        </NavLink>

      </>
    )
  }
  export default MainPage;
