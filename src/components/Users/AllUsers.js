import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import User from './User';
import classes from './User.module.css'

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [firstPage, setFirstPage] = useState(true);
    const [usersApi, setUsersApi] = useState('https://reqres.in/api/users?page=2');

    const changePageHandler = () => {
        setFirstPage((prevState) => !prevState);
        if (firstPage) {
            setUsersApi('https://reqres.in/api/users')
        } else {
            setUsersApi('https://reqres.in/api/users?page=2')
        }
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(usersApi);
            const data = await response.json();
            setUsers(data.data);
        };
        fetchUsers();
    }, [usersApi]);

    return (
        <Fragment>
            <div className={classes.contentContainer} >
                <h1 >ALL USERS SHOWN BELOW</h1>
            </div>
            <section className={classes.userContainer} >

                {users.map((user) => {
                    return (
                        <User user={user} />
                    )
                })}

            </section>
            <div className={classes.contentContainer}>
                <h3>{firstPage ? 'Page 1' : 'Page 2'}</h3>
                <button
                    type='button'
                    onClick={changePageHandler}
                >{firstPage ? 'NEXT PAGE=>' : '<=PREV PAGE'}</button>
            </div>


        </Fragment>


    )
};

export default AllUsers