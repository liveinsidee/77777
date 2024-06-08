// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddUserPage from './AddUserPage';
import UserDetailsPage from './UserDetailsPage';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/user" element={<AddUserPage />} />
                    <Route path="/details" element={<UserDetailsPage />} />
                    {/* Добавляем маршрут по умолчанию для корневого пути */}
                    <Route path="/" element={<Navigate to="/user" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
