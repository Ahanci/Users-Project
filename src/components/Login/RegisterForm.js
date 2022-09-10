import React from 'react';
import classes from './Form.module.css';

const RegisterForm = () => {
  return (
    <form className={classes.form} >
        <div>
          <label htmlFor='name' >Your Name</label>
          <input type='text' id='name' required />
        </div>
        <div>
          <label htmlFor='surname' >Your surname</label>
          <input type='text' id='surname' required />
        </div>
        <div>
          <label htmlFor='email' >Your E-mail Adress</label>
          <input type='email' id='email' required />
        </div>
        <div>
          <label htmlFor='picture' >Your Picture's URL </label>
          <input type='url' id='picture' required />
        </div>
        <div>
          <label htmlFor='password' >Your Password</label>
          <input type='password' id='password' required />
        </div>
        <button type='button' > REGISTER </button>
    </form>
  )
}

export default RegisterForm