// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./LoginFormModal.css";
import { Input } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors){
          setErrors(data.errors);
        }

      }
    );

  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setCredential("DemoUser")
    setPassword("password")
    return dispatch(sessionActions.login({ credential:'DemoUser', password:'password' })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors){
          setErrors(data.errors);
        }
      }
    );

  };

  return (
    <>
      <div className='form-holder-modals'>
        <div >
          <div className='form-holder-modals_title'>Login</div>
          <div id="CloseIcon2">
            <button  onClick={()=>{window.location.reload(false)}}>
              <CloseIcon/>
            </button>
          </div>
        </div>


        <form className='form-signin-modals' onSubmit={handleSubmit}>

          <div className="form-errors">
            {errors.map((error, idx) => (
              <div key={idx}>{error}</div>
            ))}
          </div>
          <label className="form-inputs-modals">

            <Input  type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required/>
            <div id="form-inputs-modals__title" >Username or Email</div>
          </label>
          <label className="form-inputs-modals">
            <Input type="text"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div>Password</div>
          </label>
          <div id='button-modals'>
            <button className="form-button-modals" type="submit">Confirm</button>
            <button className="form-button-modals" type="submit" onClick={handleDemoSubmit}>Demo User</button>
          </div>
        </form>

      </div>
    </>
  );
}

export default LoginForm;
