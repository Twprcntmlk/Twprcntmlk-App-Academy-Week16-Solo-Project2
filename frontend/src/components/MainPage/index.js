// frontend/src/components/MainPage/index.js
import React,{useState} from 'react';
import { NavLink } from 'react-router-dom'; //NavLink,
import { useSelector } from 'react-redux';
import { Redirect, useHistory} from 'react-router-dom'; //, Redirect
import './MainPage.css';
// import splash from './images/splash-page-img.jpg';
import middleOne from './images/Main_Page1.jpg';
import middleTwo from './images/Main_Page2.jpg';
import middleThree from './images/Main_Page3.jpg';
import middleFour from './images/Main_Page4.jpg';

import middlesubOne from './images/Main_Page_Sub1.jpg';
import middlesubTwo from './images/Main_Page_Sub2.jpg';
import middlesubThree from './images/Main_Page_Sub3.jpg';

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
              <h1 className ="Main-title_title">The Greatest of the Outdoors </h1>
              <h3 className ="Main-title_span">Wishlists curated by Airbnb.</h3>
              <h3 className ="Main-title_span2">Not sure where to go? Perfect.</h3>
            <div className="Main-button_div">
              <button onClick={direct} className="Main-button_Button"> Explore The World!</button>
              <span className="error">{error}</span>
            </div>
          </div>
        </div>

        <div className="Main-page__middle--container">
          <div className="Main-page__middle--container--title">Live anywhere</div>
          <div className="Main-page__middle">
            <div className= "Main-page__middleImage1">
              <a href="https://www.airbnb.com/s/homes?location_search=NEARBY&kg_and_tags%5B%5D=Tag:8072&room_types%5B%5D=Entire%20home%2Fapt">
                <img src={middleOne} alt="middle1"/>
              </a>
              <div> Outdoor getaways </div>
            </div>
            <div className= "Main-page__middleImage2">
              <a href="https://www.airbnb.com/s/homes?refinement_paths%5B%5D=%2Fhomes%2Fsection%2FNEARBY_LISTINGS%3A2400&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=5&property_type_id%5B%5D=6&property_type_id%5B%5D=8&property_type_id%5B%5D=10&property_type_id%5B%5D=12&property_type_id%5B%5D=15&property_type_id%5B%5D=16&property_type_id%5B%5D=17&property_type_id%5B%5D=18&property_type_id%5B%5D=19&property_type_id%5B%5D=23&property_type_id%5B%5D=24&property_type_id%5B%5D=25&property_type_id%5B%5D=28&property_type_id%5B%5D=32&property_type_id%5B%5D=34&property_type_id%5B%5D=44&property_type_id%5B%5D=50&property_type_id%5B%5D=54&property_type_id%5B%5D=57&property_type_id%5B%5D=58&property_type_id%5B%5D=61&property_type_id%5B%5D=63&property_type_id%5B%5D=64&property_type_id%5B%5D=66&property_type_id%5B%5D=67&property_type_id%5B%5D=68&property_type_id%5B%5D=69&property_type_id%5B%5D=62&property_type_id%5B%5D=51&title_type=CURATED_PROPERTY_TYPE">
              <img src={middleTwo} alt="middle2"/>
              </a>
              <div> Unique stays </div>
            </div>
            <div className= "Main-page__middleImage3">
              <a href="https://www.airbnb.com/s/homes?ne_lat=62.482674530412055&ne_lng=-45.464915985236&sw_lat=19.36412546958795&sw_lng=-102.531284014764&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=2&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE">
              <img src={middleThree} alt="middle3"/>
              </a>
              <div> Entire home </div>
            </div>
            <div className= "Main-page__middleImage4">
              <a href="https://www.airbnb.com/s/homes?ne_lat=62.482674530412055&ne_lng=-45.464915985236&sw_lat=19.36412546958795&sw_lng=-102.531284014764&room_types%5B%5D=Entire%20home%2Fapt&amenities%5B%5D=12&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE">
              <img src={middleFour} alt="middle4"/>
              </a>
              <div> Pets Allowed </div>
            </div>
          </div>
        </div>

        <div className="Main-page__middle_sub--container">
          <div className="Main-page__middle_sub--container--title">
            <div>Discover Experiences</div>
            <span>Unique activities with local experts—in person or online.</span>
          </div>
          <div className="Main-page__middle_sub">
            <div>
              <a href="https://www.airbnb.com/s/experiences?location_search=NEARBY&refinement_paths%5B%5D=%2Fexperiences%2FKG%2FTag%3A8072&search_type=section_navigation">
                <img src={middlesubOne} alt="middle1"/>
              </a>
              <div> Outdoor collection </div>
              <span>Experiences that immerse you in nature.</span>
            </div>
            <div>
              <a href="https://www.airbnb.com/s/experiences/online">
              <img src={middlesubTwo} alt="middle2"/>
              </a>
              <div> Online Experiences </div>
              <span>Live, interactive activities led by Hosts.</span>
            </div>
            <div>
              <a href="https://www.airbnb.com/s/experiences?location_search=NEARBY">
              <img src={middlesubThree} alt="middle3"/>
              </a>
              <div> Experiences </div>
              <span>Local things to do, wherever you are.</span>
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
