// frontend/src/components/LoginFormModal/index.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginFormModal.css';
import Button from '@mui/material/Button';

function LoginInFormModal() {
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

  return (
    <div>
      {/* <button className="LoginButton" onClick={() => setShowModal(true)}>Log In</button> */}
      <Button variant="text" size="large" onClick={() => setShowModal(true)}>Log In</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  );
}

export default LoginInFormModal;
