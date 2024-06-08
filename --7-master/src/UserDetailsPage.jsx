// UserDetailsPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

const UserDetailsPage = () => {
    const userData = useSelector(selectUser);

    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {userData.name}</p>
            <p>Birthday: {userData.birthday}</p>
            <p>Gender: {userData.gender}</p>
        </div>
    );
};

export default UserDetailsPage;
