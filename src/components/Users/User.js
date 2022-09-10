import React from 'react';
import classes from './User.module.css';


const User = (props) => {
    const{id, email, first_name, last_name, avatar}= props.person;
    return (
        <article key={id} className={classes.user} >
            <img src={avatar} alt={first_name} />
            <div>
                <h4>NAME: {first_name}</h4>
                <h4>SURNAME:{last_name}</h4>
                <h5>MAİL:{email}</h5>
            </div>
        </article>)
}

export default User