import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header} >
        <div className={classes.logo} >ReactTask</div>
        <nav>
            <ul>
                <li>All Users</li>
                <li>
                    <button>LogOut</button>
                </li>
                <li>
                    <button>LogIn</button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;