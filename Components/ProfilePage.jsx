import React, { useContext, useState } from 'react';
import { Context } from './Globedata';
import axios from 'axios';
import '../Assets/ProfilePage.css';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const { userData, setUserData, LogOut } = useContext(Context);
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = async () => {
        if (newPassword.trim() === '') {
            alert('Password cannot be empty');
            return;
        }

        const updatedUser = {
            ...userData,
            password: newPassword,
        };

        try {
            await axios.put(`http://localhost:3001/UserData/${userData.id}`, updatedUser);
            setUserData(updatedUser);
            localStorage.setItem('userData', JSON.stringify(updatedUser));
            alert('Password updated successfully');
            setNewPassword(''); // Clear the input field after successful update
        } catch (error) {
            console.error('Error updating password', error);
            alert('Failed to update password');
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1 className="profile-title">Profile</h1>
                <div className="profile-header">
                    <div className="profile-image">
                        <span className="profile-initial">{userData.uname.charAt(0)}</span>
                    </div>
                    <div className="profile-info">
                        <h2>{userData.uname}</h2>
                        <p>{userData.nemail}</p>
                    </div>
                    <button className="edit-button">Edit</button>
                </div>
                <div className="profile-details">
                    <p><strong>Full Name:</strong> {userData.uname}</p>
                    <p><strong>Gender:</strong> {userData.gender}</p>
                    <p><strong>State:</strong> {userData.state}</p>
                    <p><strong>Country/Region:</strong> {userData.country}</p>
                    <p><strong>Language:</strong> {userData.language}</p>
                    <p><strong>Time Zone:</strong> {userData.timezone}</p>
                </div>
                <div className="profile-edit">
                    <h2>Edit Password</h2>
                    <input 
                        type="password" 
                        placeholder="New Password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                    />
                    <button onClick={handlePasswordChange}>Save Password</button>
                </div>
                <button className="logout-button" onClick={() => { LogOut(); navigate('/Navbar'); }}>Logout</button>
            </div>
        </div>
    );
};

export default ProfilePage;
