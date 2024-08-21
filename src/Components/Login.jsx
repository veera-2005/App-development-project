import React, { useState,useEffect, useContext } from 'react';
import '../Assets/Login.css';
import { getData} from '../JSON/DB';
// import RegisterPage from './Register';
import { useNavigate } from 'react-router-dom';
import { Context } from './Globedata';
import axios from 'axios';

const LoginPage = () => {
  const {LogIn} = useContext(Context);
  const [nemail, setEmail] = useState('');
  const [pass, setPassword] = useState('');
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

    if (!nemail || !pass) {
      alert('Both email and password are required.');
      return;
    }

    else if (!/\S+@\S+\.\S+/.test(nemail)) {
      alert('Invalid email address.');
      return;
    }


     else if(nemail !== 0 && pass !==0)
    {

          console.log(data);
          // eslint-disable-next-line no-self-compare
          const un = data ? data.findIndex(({email})=>email === nemail):-1;
          if(un === -1) 
          {
            alert('User does not exist.');
            return;
          }
          else
          { 
             if(data[un].password !== pass)
             {
                console.log(data[un].password);
                alert('Password is incorrect');
                return;
             }
             else
             {
               alert('Logged in successfully!');
               LogIn(data[un]);
               navigate('/Home');
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
            value={nemail}
            onChange={handleEmailChange}
            placeholder="Email"
            className="form-input"
            />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={pass}
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
