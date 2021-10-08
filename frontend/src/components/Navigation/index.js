// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginInFormModal from '../LoginSignUpFormModal/index';
import SignUpFormModal from '../LoginSignUpFormModal/SignUpModal';
import { Redirect, useHistory} from 'react-router-dom'; //, Redirect
import './Navigation.css';
import AirBNBlogo from './images/Airbnb-logo.png';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [value, setValue] = React.useState(0);


  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  const toSignUp = () => {
    <NavLink to="/signup">
    </NavLink>
  }
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='Nav'>
        <LoginInFormModal />
        <SignUpFormModal />
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 2){
      window.location.href="https://www.airbnb.com/s/experiences/online"
    }

  };

  return (
    <ul className="nav-list">
      <div className="nav-logo">
        <NavLink  exact to="/">
          <img src={AirBNBlogo} alt="splash1"/>
        </NavLink>
      </div>
      <div className="nav-tab">

        <Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Places to Stay" />
            <Tab label="Experiences"/>
            <Tab label="Online Experiences"  />
          </Tabs>
        </Box>
      </div>

      <div className="nav-dropdown">
         <NavLink  exact to="/"></NavLink>
        {isLoaded && sessionLinks}
      </div>

    </ul>
  );
}

export default Navigation;
