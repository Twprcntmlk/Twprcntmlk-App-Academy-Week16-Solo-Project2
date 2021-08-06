// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Profile_button.css';

function ProfileButton({ user }) {

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  const goToProfile = (e) => {
    e.preventDefault()
    history.push(`/users/${user.id}`)
  }

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
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li >
            <button onClick={goToProfile}>Profile</button>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
