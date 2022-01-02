// frontend/src/components/SignupFormPage/index.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { FaRegWindowClose } from "react-icons/fa";
import './SignUpForm.css';
import { Input } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
function SignupFormPage({setShowModal}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
      setErrors([]);
    if (password === confirmPassword) {
      setErrors([]);
      setShowModal(false)
      return dispatch(sessionActions.signup({ email, username, firstName, lastName, password,}))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });

    }
    history.push("/")
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const close = ()=> {

    history.push("/")
  }

  return (
    <div className="form-holder_container">
        <div className="form-holder-modals-title">SignUp</div>
        <button id="CloseIcon1" onClick={()=>{window.location.reload(false)}}>
          <CloseIcon/>
        </button>
        <div className='form-errors'>
          {errors.map((error, idx) => <div  key={idx}>{error}</div>)}
        </div>
        <form className='form-signin'onSubmit={handleSubmit}>

          <label className='form-inputs-modals'>
            <Input  type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
            <div id="form-inputs-modals__title">Email</div>
          </label>
          <label className='form-inputs-modals'>

            <Input  type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>
            <div id="form-inputs-modals__title">Username</div>
            {/* <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            /> */}
          </label>

          <label className='form-inputs-modals'>

            <Input  type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required/>
            <div id="form-inputs-modals__title">First Name</div>
            {/* <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            /> */}
          </label>

          <label className='form-inputs-modals'>

            <Input  type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required/>
            <div id="form-inputs-modals__title">Last Name</div>
            {/* <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            /> */}
          </label>



          <label className='form-inputs-modals'>

            <Input  type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
            <div id="form-inputs-modals__title">Password</div>
            {/* <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /> */}
          </label>

          <label className='form-inputs-modals'>

            <Input  type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required/>
            <div id="form-inputs-modals__title">Confirm Password</div>
            {/* <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            /> */}
          </label>
          <button className='form-button-signup' type="submit">Confirm</button>
        </form>
      </div>



  );
}

export default SignupFormPage;
