import React, { useState,useEffect } from 'react';
import '../Assets/Login.css';
import { getData} from '../JSON/DB';
// import RegisterPage from './Register';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const [data,setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async() => {
      const res = await getData();
      setData(res.data);
    }
    fetch();
  },[]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Both email and password are required.');
      return;
    }

    else if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Invalid email address.');
      return;
    }


     else if(email !== 0 && password !==0)
    {
          const un = data ? data.findIndex(({nemail})=>nemail === email):-1;
          if(un === -1) 
          {
            alert('User does not exist.');
            return;
          }
          else
          { 
             if(data[un].pass !== password)
             {
                alert('Password is incorrect');
                return;
             }
             else
             {
               alert('Logged in successfully!');
               navigate('/Navbar');
             }
          }
     }

  };
const RegisterPagehandler = () => {
  navigate('/Register');
}
  return (
    <div className='all'>
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <input
            type="text"
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
        {/* {error && <p className="error-message">{error}</p>} */}
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Login
        </button>
        <div>
          <h4>Don't have an account? <button className='last' onClick={RegisterPagehandler}>Register</button></h4>
        </div>
      </form>
    </div>
      <div className='image'>

      </div>
            </div>
  );
};

export default LoginPage;
