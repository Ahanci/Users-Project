import React, { useContext } from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const Navbar = () => {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;


    const logOutHandler = ()=>{
        authCtx.logOut();
        
    }

    return (
        <header className={classes.header} >
            <div className={classes.logo} >ReactTask</div>
            <nav>
                <ul>

                    {!isLoggedIn && (
                        <li>
                            <NavLink to='/login' >
                                <button>LogIn</button>
                            </NavLink>
                        </li>

                    )}

                    {isLoggedIn && (
                        <>
                            <li>
                                <NavLink to='/users' style={{ textDecoration: 'none' }} >All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>
                                    <button onClick={logOutHandler} >LogOut</button>
                                </NavLink>
                            </li>
                        </>
                    )}

                </ul>
            </nav>
        </header>
    )
}

export default Navbar;