import React from 'react';
import classes from './Form.module.css';


const LoginForm = () => {
    return (
        <form className={classes.form} >
            <div >
                <label htmlFor='email' >Your E-mail Adress</label>
                <input type='email' id='email' required />
            </div>
            <div>
                <label htmlFor='password' >Your Password</label>
                <input type='password' id='password' required />
            </div>
            <button type='button' > LOGIN </button>
        </form>
    )
}

export default LoginForm