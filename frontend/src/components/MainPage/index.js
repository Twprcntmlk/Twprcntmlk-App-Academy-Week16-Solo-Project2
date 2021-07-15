// frontend/src/components/MainPage/index.js
import React,{useState} from 'react';
import { NavLink } from 'react-router-dom'; //NavLink,
import { useSelector } from 'react-redux';
import { Redirect, useHistory} from 'react-router-dom'; //, Redirect
import './MainPage.css';
import splash from './images/splash-page-img.jpg';
import middle from './images/Main-Page-Middle1.jpg';
import Footer from "../../components/Footer";
function MainPage(){
  let history = useHistory();
  let [error, setError]=useState("");
  const sessionUser = useSelector((state) => state.session.user);

  const direct = () =>{
    if (!sessionUser){
      setError("Please Log In")
      setTimeout(() =>{setError("")},1000)
      return Redirect("/");
  } else{
    return history.push("/listings");
  }
  }

    return(
      <div className="Main-page">
        <div className="Main-splash">
          {/* <img src={splash} alt="splash1"/> */}
            <div className="Main-title">
              <h1 className ="Main-title_title">The Greatest Outdoors </h1>
              <h3 className ="Main-title_span">Wishlists curated by Airbnb.</h3>
            <div className="Main-button_div">
              <button onClick={direct} className="Main-button_Button"> Explore The World!</button>
              <span className="error">{error}</span>
            </div>
          </div>
        </div>

        <div className="Main-page__middle">
          {/* <img src={middle} alt="splash1"/> */}
        </div>

        <div className="Main-page_footer">
          <Footer />
        </div>

      </div>

    )
  }
  export default MainPage;
