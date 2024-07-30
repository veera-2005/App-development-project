// src/App.js
import React from 'react';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import About from './Components/About';
import ProfilePage from './Components/ProfilePage';
import AdminUsers from './Components/AdminUsers';

const App = () => {
  return (
    <Routes>
      <Route path='/'  exact element={<Navbar/>}></Route>
      <Route path='/Log' element={<Login/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Navbar' element={<Navbar/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Pro' element={<ProfilePage/>}></Route>
      <Route path='/Admin' element={<AdminUsers/>}></Route>
    </Routes>
    
  );
};

export default App;
