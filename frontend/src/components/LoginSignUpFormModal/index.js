// frontend/src/components/LoginFormModal/index.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginFormModal.css';
import MenuItem from '@material-ui/core/MenuItem';


function LoginInFormModal({showMenu, setShowMenu}) {
  const [showModal, setShowModal] = useState(false);
  const [userState, setUserState] = useState("");
  const sessionUser = useSelector((state) => state.session.user);

  // useEffect(() => {
  //   if (sessionUser){
  //     setUserState("")
  //   } else{
  //     setUserState()
  //   }
  // },[userState])

  // {/* <button className="LoginButton" onClick={() => setShowModal(true)}>Log In</button> */}
  // {/* <Button variant="text" size="large" onClick={() => setShowModal(true)}>Log In</Button> */}
  return (


    <MenuItem onClick={() => setShowModal(true)}>Log In
      {showModal && (
        <Modal autoFocus onClose={() => setShowModal(false)}>
          <LoginForm/>
        </Modal>
      )}
    </MenuItem>

  );
}

export default LoginInFormModal;
