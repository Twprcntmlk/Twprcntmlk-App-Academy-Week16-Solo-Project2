// frontend/src/components/LoginFormModal/index.js
import React, { useState, useEffect, useRef } from 'react';

import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
// import LoginForm from './LoginForm';
// import './LoginFormModal.css';
import SignupFormPage from './SignUpForm';
import Button from '@mui/material/Button';
import MenuItem from '@material-ui/core/MenuItem';

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [userState, setUserState] = useState("");
  const sessionUser = useSelector((state) => state.session.user);

    //   // <div>
    //   {/* <button className="LoginButton" onClick={() => setShowModal(true)}>Log In</button> */}
    //   {/* <Button variant="text" size="large" onClick={() => setShowModal(true)}>SignUp</Button> */}
    // {/* </div> */}
  return (
    <MenuItem onClick={() => setShowModal(true)}>SignUp
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupFormPage setShowModal={setShowModal} />
        </Modal>)}
    </MenuItem>


  );
}

export default SignUpFormModal;
