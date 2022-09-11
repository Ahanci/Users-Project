import React, { useState, useRef } from 'react';
import classes from './UserForm.module.css';

const UserForm = () => {
  const [newUser, setNewUser] = useState(true);
  const emailInput = useRef();
  const passwordInput = useRef();

  const switchLoginHandler = () => {
    setNewUser((prevState) => !prevState);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredMail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;

    if (newUser) {
      fetch('https://reqres.in/api/register',
        {
          method: 'POST',
          body: JSON.stringify({
            "email": "michael.lawson@reqres.in",
            "password": "pistol"
          }),
          headers: {
            'Content-Type': 'application/json'
          },

        }
      ).then((res) => {
        if(res.ok){
          return res.json().then((data)=>{
            console.log(data.token)
          })
        } else{ return res.json().then((data)=>{
          console.log(data)
        })
        }      
        
      })

    } else {
      fetch('https://reqres.in/api/login',
        {
          method: 'POST',
          body: JSON.stringify({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }),
          headers: {
            'Content-Type': 'application/json'
          },

        }
      ).then((res) => {
        if(res.ok){
          return res.json().then((data)=>{
            console.log(data.token)
          })
        } else{ return res.json().then((data)=>{
          console.log(data)
        })
        }      
        
      })

    }
  }

  return (
    <div className={classes.container} >
      <h1>{newUser ? "REGISTER FORM" : "LOGIN FORM"}</h1>
      <form className={classes.form} onSubmit={submitHandler} >
        <div>
          <label htmlFor='email' >Your E-mail Adress</label>
          <input type='email' id='email' required  minLength='6' ref={emailInput} />
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
        {!newUser? 'create new account': 'login if you have an existing account' }
      </button> 

    </div>
  )
}

export default UserForm;