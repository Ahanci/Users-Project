import React, { useState } from 'react';
import classes from './UserForm.module.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const UserForm = () => {
  const [newUser, setNewUser] = useState(true);

  const switchLoginHandler= ()=>{
    setNewUser((prevState)=> !prevState )
  }

  return (
    <div className={classes.container} >
      <h1>{newUser? "REGISTER FORM": "LOGIN FORM"}</h1>
      {newUser? (<RegisterForm/>)  : (<LoginForm/> )}
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