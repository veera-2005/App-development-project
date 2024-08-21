import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { getData, postData } from '../JSON/DB';
import { useNavigate } from 'react-router-dom';
import '../Assets/Register.css';
import axios from 'axios';

// List of Indian states
const IndianStates = [
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Chhattisgarh', label: 'Chhattisgarh' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Manipur', label: 'Manipur' },
    { value: 'Meghalaya', label: 'Meghalaya' },
    { value: 'Mizoram', label: 'Mizoram' },
    { value: 'Nagaland', label: 'Nagaland' },
    { value: 'Odisha', label: 'Odisha' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Sikkim', label: 'Sikkim' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Tripura', label: 'Tripura' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'West Bengal', label: 'West Bengal' },
    // Add more states as needed
];

// List of countries
const Countries = [
    { value: 'India', label: 'India' },
    { value: 'United States', label: 'United States' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' },
    // Add more countries as needed
];

// List of roles
const Roles = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Manager', label: 'Manager' },
    { value: 'User', label: 'Normal User' },
];

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [role, setRole] = useState('');
    const [languages, setLanguages] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleNameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);

    // const handleLanguageChange = (e) => {
    //     const value = e.target.value;
    //     setLanguages((prev) =>
    //         prev.includes(value) ? prev.filter((lang) => lang !== value) : [...prev, value]
    //     );
    // };

    // const handleStateChange = (selectedOption) => {
    //     setState(selectedOption ? selectedOption.value : '');
    // };

    // const handleCountryChange = (selectedOption) => {
    //     setCountry(selectedOption ? selectedOption.value : '');
    // };

    const handleRoleChange = (selectedOption) => {
        setRole(selectedOption ? selectedOption.value : '');
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getData();
            setData(res.data);
        };
        fetchData();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword || !username || !gender) {
            alert("Please fill out all fields");
            return;
        } else if (confirmPassword !== password) {
            alert("Password and confirm password do not match");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Invalid email address.');
            return;
        } else if (email && password && username && confirmPassword) {
            const un = data ? data.findIndex(({ uname }) => uname === username) : -1;
            if (un !== -1) {
                alert('Username already exists');
                return;
            } else {
                const emails = data.map(item => item.nemail);
                if (emails.includes(email)) {
                    alert('Email already exists');
                    return;
                } else {
                    postData(username, email, password, role, gender);
                    alert('Successfully Registered');
                    navigate('/Log');
                    return;
                }
            }
        }
    };

    const navigateToLogin = () => navigate('/Log');

    return (
        <div className="register-page-container">
            <div className='Registerimage'>

            </div>
            <div className="register-page-form">
                <h2 className="register-page-title">Register</h2>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <input
                            type="text"
                            value={username}
                            onChange={handleNameChange}
                            placeholder="Username"
                            className="form-username"
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Email"
                            className="form-input"
                            style={{ marginTop: '30px' }}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Password"
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder="Confirm Password"
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <div>
                            <input
                                type="radio"
                                value="Male"
                                checked={gender === "Male"}
                                onChange={handleGenderChange}
                            />
                            Male
                            <input
                                type="radio"
                                value="Female"
                                checked={gender === "Female"}
                                onChange={handleGenderChange}
                                style={{ marginLeft: '20px' }}
                            />
                            Female
                            <input
                                type="radio"
                                value="Others"
                                checked={gender === "Others"}
                                onChange={handleGenderChange}
                                style={{ marginLeft: '20px' }}
                            />
                            Others
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Role:</label>
                        <Select
                            value={Roles.find(option => option.value === role)}
                            onChange={handleRoleChange}
                            options={Roles}
                            className="form-select"
                            placeholder="Select Role"
                        />
                    </div>
                    
                    <button type="submit" className="register-page-submit-button">
                        Register
                    </button>
                </form>
                <div className="register-page-login-prompt">
                    <h4>
                        If you already have an account?{' '}
                        <button className="register-page-login-button" onClick={navigateToLogin}>
                            Login
                        </button>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
