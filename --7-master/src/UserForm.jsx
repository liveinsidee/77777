// UserForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './userSlice';

const UserForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        birthday: '',
        gender: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setUser(formData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                placeholder="Birthday"
            />
            <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
