import React, { useEffect, useState } from 'react';
import '../Assets/Register.css';
import { getData, postData } from '../JSON/DB';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      setData(res.data);
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword || !username) {
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
          postData(username, email, password);
          alert('Successfully Registered');
          navigate('/Log');
          return;
        }
      }
    }
  };

  const navigateToLogin = () => {
    navigate('/Log');
  };

  return (
    <div className="register-page-container">
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
      <div className="register-page-image"></div>
    </div>
  );
};

export default RegisterPage;
