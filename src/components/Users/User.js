import React from 'react';
import classes from './User.module.css';


const User = (props) => {
    const{id, email, first_name, last_name, avatar}= props.user;
    return (
        <article key={id} className={classes.user} >
            <img src={avatar} alt={first_name} />
            <div>
                <h4>name: {first_name}</h4>
                <h4>surname:{last_name}</h4>
                <h5>mail:{email}</h5>
            </div>
        </article>)
}

export default User