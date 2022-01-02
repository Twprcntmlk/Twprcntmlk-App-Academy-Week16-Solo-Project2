// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Profile_button.css';

function ProfileButton({visbility, setVisbility}) {
  const dispatch = useDispatch();
  const history = useHistory()
  const anchorRef = React.useRef(null);

  const openMenu = () => {
    if (visbility) return;
    // setShowMenu(true);
    setVisbility(true)
  };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }
  // }

  useEffect(() => {
    if (!visbility) return;
    const closeMenu = () => {
      // setShowMenu(true);
      setVisbility(false)
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [visbility]);

  return (
    <div className="Profile-container">
      <button onClick={openMenu} className="profile-button">
        <div className="icons">
            <div id="bars">
              <i className="fas fa-bars fa-2x"></i>
            </div>
            <div id="user">
              <i className="fas fa-user-circle fa-2x" />
            </div>
        </div>
      </button>
    </div>
  );
}

export default ProfileButton;
