import React,{ useContext,useState } from 'react';
import '../Assets/Navbar.css'
import Home from './Home';
import Contact from './ContactUs';
import About from './About';
import LoginPage from './Login';
import { useNavigate } from 'react-router-dom';
import { Context } from './Globedata';
import ProfilePage from './ProfilePage';
function Navbar() {
    const [data,setData] = useState('Home');
    const navigate=useNavigate();
    const{loggedIn,LogOut,isAdmin} = useContext(Context);
    const handlehome = (event) =>
    {
        event.preventDefault();
        setData('Home');
    }
    const handleabout = (event) =>
        {
         event.preventDefault();
        setData('About');
    }
    const handlecontact = (event) =>
        {
         event.preventDefault();
        setData('Contact');
    }
    const handleLogin = (event) =>
        {
         event.preventDefault();
         navigate('/Log');
    }
    const handleprofile = (event) =>
    {
         event.preventDefault();
         setData('ProfilePage');
         navigate('/Pro');
    }
    const handleUser = (event) =>
    {
         event.preventDefault();
         setData('AdminUser');
         navigate('/Admin');
    }
  
  return (
    <div>

    <div className='flexx'>
    <div className='high'>
        <h1 className='logo'>Vanmam</h1>
        <button className='button' onClick={handlehome}>Home</button>
        <button className='button' onClick={handleabout}>About us</button>
        {(isAdmin)?'':<button className='button' onClick={handlecontact} >Contact us</button>}
        {(loggedIn)?'':<button className='button' onClick={handleLogin} >Login</button>}
       {(loggedIn)? <button className='button' onClick={handleprofile} >Profile</button>:''}
       {(isAdmin)? <button className='button' onClick={handleUser} >UserManagement</button>:''}
    </div>

    <div className='box'>
        {(data==='Home'?<Home></Home>:null)}
        {(data==='About'?<About></About>:null)}
        {(data==='Contact'?<Contact></Contact>:null)}
        {(data==='profilePage'?<ProfilePage></ProfilePage>:null)}
    </div>
 </div>
 
 <footer className="footer-container">
  <div className="footer-section">
    <h3>Use Eventbrite</h3>
    <ul>
      <li><a href="Navbar">Create Events</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#event-marketing-platform">Event Marketing Platform</a></li>
      <li><a href="#mobile-ticket-app">Eventbrite Mobile Ticket App</a></li>
      <li><a href="#check-in-app">Eventbrite Check-In App</a></li>
      <li><a href="#app-marketplace">Eventbrite App Marketplace</a></li>
      <li><a href="#registration-software">Event Registration Software</a></li>
      <li><a href="#community-guidelines">Community Guidelines</a></li>
      <li><a href="#faqs">FAQs</a></li>
      <li><a href="#sitemap">Sitemap</a></li>
    </ul>
  </div>
  <div className="footer-section">
    <h3>Plan Events</h3>
    <ul>
      <li><a href="#sell-tickets-online">Sell Tickets Online</a></li>
      <li><a href="#event-planning">Event Planning</a></li>
      <li><a href="#sell-concert-tickets-online">Sell Concert Tickets Online</a></li>
      <li><a href="#event-payment-system">Event Payment System</a></li>
      <li><a href="#professional-services">Solutions for Professional Services</a></li>
      <li><a href="#management-software">Event Management Software</a></li>
      <li><a href="#halloween-party-planning">Halloween Party Planning</a></li>
      <li><a href="#virtual-events-platform">Virtual Events Platform</a></li>
      <li><a href="#qr-codes-check-in">QR Codes for Event Check-In</a></li>
      <li><a href="#post-your-event-online">Post your event online</a></li>
    </ul>
  </div>
  <div className="footer-section">
    <h3>Find Events</h3>
    <ul>
      <li><a href="#new-orleans-food-drink">New Orleans Food & Drink Events</a></li>
      <li><a href="#san-francisco-holiday">San Francisco Holiday Events</a></li>
      <li><a href="#tulum-music">Tulum Music Events</a></li>
      <li><a href="#denver-hobby">Denver Hobby Events</a></li>
      <li><a href="#atlanta-pop-music">Atlanta Pop Music Events</a></li>
      <li><a href="#new-york">New York Events</a></li>
      <li><a href="#chicago">Chicago Events</a></li>
      <li><a href="#dallas-today">Events in Dallas Today</a></li>
      <li><a href="#los-angeles">Los Angeles Events</a></li>
      <li><a href="#washington">Washington Events</a></li>
    </ul>
  </div>
  <div className="footer-section">
    <h3>Connect With Us</h3>
    <ul>
      <li><a href="ContactUs">Contact Support</a></li>
      <li><a href="About">About</a></li>
      <li><a href="#x">X</a></li>
      <li><a href="#facebook">Facebook</a></li>
      <li><a href="#linkedin">LinkedIn</a></li>
      <li><a href="#instagram">Instagram</a></li>
    </ul>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Eventbrite</p>
    <p>
      <a href="About">About</a> &bull; <a href="#blog">Blog</a> &bull; <a href="ContactUs">Help</a> &bull;
      <a href="#careers">Careers</a> &bull; <a href="#press">Press</a> &bull; <a href="#impact">Impact</a> &bull;
      <a href="#investors">Investors</a> &bull; <a href="#security">Security</a> &bull; <a href="#developers">Developers</a> &bull; 
      <a href="#status">Status</a> &bull; <a href="#terms">Terms</a> &bull; <a href="#privacy">Privacy</a> &bull; 
      <a href="#accessibility">Accessibility</a> &bull; <a href="#cookies">Cookies</a>
    </p>
    <p><a href="#manage-cookie-preferences">Manage Cookie Preferences</a></p>
  </div>
</footer>

    </div>
  )
}

export default Navbar