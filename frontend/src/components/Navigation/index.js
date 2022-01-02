// frontend/src/components/Navigation/index.js
import React,{ useState, useEffect,useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';

import ProfileButton from './ProfileButton';
import LoginInFormModal from '../LoginSignUpFormModal/index.js';
import SignUpFormModal from '../LoginSignUpFormModal/SignUpModal';
import { Redirect, useHistory} from 'react-router-dom'; //, Redirect
import './Navigation.css';
import AirBNBlogo from './images/Airbnb-logo.png';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [visbility, setVisbility] = useState(false)
  const history = useHistory()
  const anchorRef = useRef(null);




  // function LinkTab(props) {
  //   return (
  //     <Tab
  //       component="a"
  //       onClick={(event) => {
  //         event.preventDefault();
  //       }}
  //       {...props}
  //     />
  //   );
  // }

  // const toSignUp = () => {
  //   <NavLink to="/signup">
  //   </NavLink>
  // }
  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <div className='Nav'>
  //       <LoginInFormModal />
  //       <SignUpFormModal />
  //     </div>
  //   );
  // }

  // const toSignUp = (e) => {
  //   e.preventDefault()
  //   history.push(`/signup`)
  // }
  // const toLogin = (e) => {
  //   e.preventDefault()
  //   history.push(`/login`)
  // }


  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 2){
      window.location.href="https://www.airbnb.com/s/experiences/online"
    }

  };


  // ////////////////

  const openMenu = () => {
    if (!visbility) return;
    // setShowMenu(true);
    setVisbility(true);
    document.addEventListener("click", closeMenu)
  };
  const closeMenu = () => {
    if (visbility) return;
    setVisbility(false)
    return () => document.removeEventListener("click", closeMenu);
  };

  useEffect(() => {
    if (!setVisbility){
      openMenu()
    } else{
      closeMenu()
    }


    //
  }, [visbility]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  const goToProfile = (e) => {
    e.preventDefault()
    history.push(`/users/${sessionUser.id}`)
  }

  return (
    <header>
      <div className="headerLeft">
        <div className="nav-logo">
          <NavLink  exact to="/">
            <img src={AirBNBlogo} alt="splash1"/>
          </NavLink>
        </div>
      </div>

      <div className="headerMiddle">
        <div className="header__input">
          <input type="text" placeholder=""/>
          <SearchIcon />
        </div>
      </div>

      <div className="headerRight">
        <div className="headerRight_component_host">
          <div>Become a Host</div>
        </div>

        <div className="headerRight_component">
          <LanguageIcon fontSize="Large"/>
        </div>

        <div className="nav-dropdown">
          <ProfileButton visbility={visbility} setVisbility={setVisbility}/>
          <div className="nav-dropdown_menu" style={{visibility: visbility ? 'visible' : 'hidden' }}>
            <Paper>
              {/* <ClickAwayListener> */}
                <MenuList id="menu-list-grow">
                  {sessionUser ? <MenuItem ><b>User: &nbsp;</b> {sessionUser.username}</MenuItem> : null}
                  {sessionUser ? <MenuItem ><b>E-mail: &nbsp;</b> {sessionUser.email}</MenuItem> : null}
                  {sessionUser ?  null : <LoginInFormModal/> }
                  {sessionUser ?  null : <SignUpFormModal/> }
                  {/* {sessionUser ? null : <MenuItem onClick={toLogin}>Login</MenuItem>}
                  {sessionUser ? null : <MenuItem onClick={toSignUp}>SignUp</MenuItem>} */}
                  {sessionUser ? <MenuItem onClick={goToProfile}>Profile </MenuItem>  : null}
                  {sessionUser ? <MenuItem onClick={logout}>Logout</MenuItem>  : null}
                </MenuList>
              {/* </ClickAwayListener> */}
            </Paper>
          </div>
        </div>


      </div>




        {/* <div className="nav-tab">

          <Box>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Places to Stay" />
              <Tab label="Experiences"/>
              <Tab label="Online Experiences"  />
            </Tabs>
          </Box>
        </div> */}




   </header>

  );
}

export default Navigation;
