// AddUserPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUserPage = () => {
    const navigate = useNavigate(); // Замена для useHistory

    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !birthdate || !gender) {
            alert('Please fill in all fields.');
            return;
        }

        console.log('Name:', name);
        console.log('Birthdate:', birthdate);
        console.log('Gender:', gender);

        navigate('/details');
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Birthdate:</label>
                    <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                </div>
                <div>
                    <label>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUserPage;
