import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './UserForm.module.css';

const UserForm = () => {
  const [newUser, setNewUser] = useState(true);
  const emailInput = useRef();
  const passwordInput = useRef();
  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const switchLoginHandler = () => {
    setNewUser((prevState) => !prevState);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredMail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;

    if (newUser) {

      const registerUser = async () => {

        let response = await fetch('https://reqres.in/api/register',
          {
            method: 'POST',
            body: JSON.stringify({
              "email": "michael.lawson@reqres.in",
              "password": "pistol"
            }),
            headers: {
              'Content-Type': 'application/json'
            },

          });

        let data = await response;

        if (response.ok) {
          return response.json().then((data) => {
            authCtx.login(data.token);
            navigate('/');
          })
        }
        else {
          return response.json().then((data) => {
            let errorMessage = 'REGISTERING FAILED';
            throw new Error(errorMessage);
          }).catch((err) => {
            alert(err.message);
          });
        }

      }
      registerUser();

    } else {
      const userLogin = async () => {
        let response = await fetch('https://reqres.in/api/login',
          {
            method: 'POST',
            body: JSON.stringify({
              "email": "eve.holt@reqres.in",
              "password": "cityslicka"
            }),
            headers: {
              'Content-Type': 'application/json'
            },

          });
        let data = await response;

        if (response.ok) {
          return response.json().then((data) => {
            authCtx.login(data.token);
            navigate('/');
          })
        } else {
          return response.json().then((data) => {
            console.log(data)
          })
        }

      }
      userLogin();
    }
  }

  return (
    <div className={classes.container} >
      <h1>{newUser ? "REGISTER FORM" : "LOGIN FORM"}</h1>
      <form className={classes.form} onSubmit={submitHandler} >
        <div>
          <label htmlFor='email' >Your E-mail Adress</label>
          <input type='email' id='email' required minLength='6' ref={emailInput} />
        </div>
        <div>
          <label htmlFor='password' >Your Password</label>
          <input type='password' id='password' minLength='6' required ref={passwordInput} />
        </div>
        <button type='submit' >
          {newUser ? 'REGISTER' : 'LOGIN'}</button>
      </form>
      <button
        type='button'
        onClick={switchLoginHandler}
      >
        {!newUser ? 'create new account' : 'login if you have an existing account'}
      </button>

    </div>
  )
}

export default UserForm;