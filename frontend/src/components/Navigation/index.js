// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import AirBNBlogo from './images/Airbnb-logo.png';
function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">
          <button className='signUpButton'>Sign Up</button>
        </NavLink>

      </>
    );
  }

  return (
    <ul className="nav-list">
      <div className="nav-logo">
        <NavLink  exact to="/">
          <img src={AirBNBlogo} alt="splash1"/>
        </NavLink>
      </div>
      <div className="nav-dropdown">
         <NavLink  exact to="/"></NavLink>
        {isLoaded && sessionLinks}
      </div>
    </ul>
  );
}

export default Navigation;
