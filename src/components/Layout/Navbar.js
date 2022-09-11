import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className={classes.header} >
            <div className={classes.logo} >ReactTask</div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/users' style={{textDecoration: 'none'}} >All Users</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>
                            <button>LogOut</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' >
                            <button>LogIn</button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;