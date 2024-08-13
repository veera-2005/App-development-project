// src/App.js
import React, { useContext } from 'react';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import ProfilePage from './Components/ProfilePage';
import UserManagementPage from './Components/UserManagementPage';
import RequestPage from './Components/RequestPage';
import EventsPage from './Components/EventsPage';
import { Context } from '../src/Components/Globedata'; // Adjust path as needed
import { Route, Routes, Navigate } from 'react-router-dom';
import BookingForm from './Components/BookingForm';
import Payment from './Components/Payment';
import PaymentDone from './Components/PaymentDone';
import ConfrimationPage from './Components/ConfrimationPage';
import ContactUs from './Components/ContactUs';

const App = () => {
  const { loggedIn, isAdmin, isManager } = useContext(Context);

  const ProtectedRoute = ({ element: Component, allowedRoles }) => {
    if (!loggedIn) {
      return <Navigate to='/Log' />;
    }
    if (!allowedRoles.some(role => (role === 'admin' && isAdmin) || (role === 'manager' && isManager))) {
      return <Navigate to='/Navbar' />;
    }
    return <Component />;
  };

  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/Log' element={<Login />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/About' element={<About />} />
      <Route path='/Pro' element={<ProfilePage />} />
      <Route 
        path='/Admin' 
        element={<ProtectedRoute element={UserManagementPage} allowedRoles={['admin', 'manager']} />} 
      />
     
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route 
        path="/UserManagementPage" 
        element={<ProtectedRoute element={UserManagementPage} allowedRoles={['admin', 'manager']} />} 
      />
      <Route path="/booking" element={<BookingForm />} />
      <Route path="/Event" element={<EventsPage />} />
      <Route path='/Payment' element={<Payment />} />
      <Route path='/PaymentDone' element={<PaymentDone />} />
      <Route path='/confrim' element={<ConfrimationPage />} />
      <Route path='/Contact' element={<ContactUs />} />
      <Route path='/Request' element={<RequestPage />} />
    </Routes>
  );
};

export default App;
