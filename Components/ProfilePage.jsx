import React, { useContext, useState, useEffect } from 'react';
import { Context } from './Globedata';
import axios from 'axios';
import '../Assets/ProfilePage.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const ProfilePage = () => {
    const { userData, setUserData, LogOut } = useContext(Context);
    const [editMode, setEditMode] = useState(false);
    const [updatedUserData, setUpdatedUserData] = useState(userData);
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setUpdatedUserData(userData);
    }, [userData]);

    const handlePasswordChange = async () => {
        if (newPassword.trim() === '') {
            alert('Password cannot be empty');
            return;
        }

        try {
            const updatedUser = { ...updatedUserData, password: newPassword };
            const response = await axios.put(`http://localhost:1230/User/Update/${userData.id}`, updatedUser);
            console.log('Password update response:', response.data);
            setUserData(updatedUser);
            localStorage.setItem('userData', JSON.stringify(updatedUser));
            alert('Password updated successfully');
            setNewPassword(''); // Clear the input field after successful update
        } catch (error) {
            console.error('Error updating password:', error);
            alert('Failed to update password');
        }
    };

    const handleSaveChanges = async () => {
        try {
            const response = await axios.put(`http://localhost:1230/User/Update/${userData.id}`, updatedUserData);
            console.log('Profile update response:', response.data);
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
            setEditMode(false);
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
        }
    };

    return (
        <>
        <Navbar/>
        <div className="profile-container">
            <div className="profile-card">
                <h1 className="profile-title">Profile</h1>
                <div className="profile-header">
                    <div className="profile-image">
                        <span className="profile-initial">{userData.name.charAt(0)}</span>
                    </div>
                    <div className="profile-info">
                        <h2>{userData.name}</h2>
                        <p>{userData.email}</p>
                    </div>
                    {editMode ? (
                        <>
                            <button className="edit-button" onClick={() => setEditMode(false)}>
                                Cancel
                            </button>
                            <button className="save-button" onClick={handleSaveChanges}>
                                Save
                            </button>
                        </>
                    ) : (
                        <button className="edit-button" onClick={() => setEditMode(true)}>
                            Edit
                        </button>
                    )}
                </div>
                <div className="profile-details">
                    {editMode ? (
                        <>
                            <p><strong>Full Name:</strong> <input type="text" value={updatedUserData.name} onChange={(e) => setUpdatedUserData({ ...updatedUserData, name: e.target.value })} /></p>
                            <p><strong>Role:</strong> <input type="text" value={updatedUserData.role} onChange={(e) => setUpdatedUserData({ ...updatedUserData, role: e.target.value })} /></p>
                            <p><strong>Password:</strong> <input type="text" value={updatedUserData.password} onChange={(e) => setUpdatedUserData({ ...updatedUserData, password: e.target.value })} /></p>
                            <p><strong>Gender:</strong> <input type="text" value={updatedUserData.gender} onChange={(e) => setUpdatedUserData({ ...updatedUserData, gender: e.target.value })} /></p>
                            <p><strong>State:</strong> <input type="text" value={updatedUserData.state} onChange={(e) => setUpdatedUserData({ ...updatedUserData, state: e.target.value })} /></p>
                            <p><strong>Country/Region:</strong> <input type="text" value={updatedUserData.country} onChange={(e) => setUpdatedUserData({ ...updatedUserData, country: e.target.value })} /></p>
                            <p><strong>Date-Of-Birth:</strong> <input type="Date" value={updatedUserData.dob} onChange={(e) => setUpdatedUserData({ ...updatedUserData, dob: e.target.value })} /></p>
                            <p><strong>Mobile Number:</strong> <input type="text" value={updatedUserData.mobilenumber} onChange={(e) => setUpdatedUserData({ ...updatedUserData, mobilenumber: e.target.value })} /></p>
                            <p><strong>Language:</strong> <input type="text" value={updatedUserData.languages} onChange={(e) => setUpdatedUserData({ ...updatedUserData, languages: e.target.value })} /></p>
                            {/* <div className="profile-edit">
                                <h2>Edit Password</h2>
                                <input 
                                    type="password" 
                                    placeholder="New Password" 
                                    value={newPassword} 
                                    onChange={(e) => setNewPassword(e.target.value)} 
                                />
                                <button onClick={handlePasswordChange}>Save Password</button>
                            </div> */}
                        </>
                    ) : (
                        <>
                            <p><strong>Full Name:</strong> {userData.name}</p>
                            <p><strong>Role:</strong> {userData.role}</p>
                            <p><strong>Password:</strong> {userData.password}</p>
                            <p><strong>Gender:</strong> {userData.gender}</p>
                            <p><strong>State:</strong> {userData.state}</p>
                            <p><strong>Country/Region:</strong> {userData.country}</p>
                            <p><strong>Date-Of-Birth:</strong> {userData.dob}</p>
                            <p><strong>Mobile Number:</strong> {userData.mobilenumber}</p>
                            <p><strong>Language:</strong> {userData.languages}</p>
                        </>
                    )}
                </div>
                <button className="logout-button" onClick={() => { LogOut(); navigate('/Home'); }}>Logout</button>
            </div>
        </div>
                    </>
    );
};

export default ProfilePage;
