// import React, { useState, useContext } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Context } from './Globedata';
// import '../Assets/BookingForm.css';

// const BookingForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { event } = location.state || {};
//   const { userData, loggedIn } = useContext(Context);

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState(userData?.email || '');
//   const [phone, setPhone] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!loggedIn) {
//       alert('Please log in to make a booking request.');
//       return;
//     }

//     if (email !== userData.email) {
//       alert('Please use your registered email.');
//       return;
//     }

//     const bookingData = { name, email, phone, event };

//     axios.post('/api/booking-requests', bookingData)
//       .then(response => {
//         alert('Booking request sent!');
//         navigate('/events'); // Navigate back to the events page
//       })
//       .catch(error => console.error('Error sending booking request:', error));
//   };

//   if (!event) {
//     return <p>No event data available.</p>;
//   }

//   return (
//     <div className="booking-form">
//       <h1>Booking Form</h1>
//       <div className="event-details">
//         <img src={event.image} alt={event.name} className="event-image" />
//         <h2>{event.title}</h2>
//         <p>{event.description}</p>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           name="name"
//           placeholder="Name" 
//           className="booking-input" 
//           value={name} onChange={(e) => setName(e.target.value)}
//           required 
//         />
//         <input 
//           type="email" 
//           name="email"
//           placeholder="Email" 
//           className="booking-input" 
//           value={email} onChange={(e) => setEmail(e.target.value)}
//           required 
//         />
//         <input 
//           type="tel" 
//           name="phone"
//           placeholder="Phone" 
//           className="booking-input" 
//           value={phone} onChange={(e) => setPhone(e.target.value)}
//           required 
//         />
//         <input 
//           type="Date" 
//           name="phone"
//           placeholder="Phone" 
//           className="booking-input" 
//           value={phone} onChange={(e) => setPhone(e.target.value)}
//           required 
//         />
//         <input 
//           type="text" 
//           name="howDidYouHear"
//           placeholder="How did you hear about us?" 
//           className="booking-input" 
//         />
//         <textarea 
//           name="eventDescription"
//           placeholder="Describe Your Event" 
//           className="booking-textarea"
//           required
//         ></textarea>
//         <textarea 
//           name="eventDescription"
//           placeholder="Event Venue" 
//           className="booking-textarea"
//           required
//         ></textarea>
//         <button type="submit">Request Now</button>
//       </form>
//       <button onClick={() => navigate('/events')}>Back</button>
//     </div>
//   );
// };

// export default BookingForm;


// ----------------------------------------------------------------

import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from './Globedata';
import { postBooking } from '../JSON/DB';
import '../Assets/BookingForm.css';
import Navbar from './Navbar';

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state || {};
  const { userData, loggedIn } = useContext(Context);

  const [name, setName] = useState(userData?.name || '');
  const [email, setEmail] = useState(userData?.email || '');
  const [phone, setPhone] = useState(userData?.mobilenumber || '');
  const [bookingDate, setBookingDate] = useState('');
  const [describeEvent, setDescribeEvent] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loggedIn) {
      alert('Please log in to make a booking request.');
      return;
    }

    if (email !== userData.email) {
      alert('Please use your registered email.');
      return;
    }

    try {
      const bookingData = {
        name,
        email,
        phone,
        bookingDate,
        describeEvent,
        address,
        event: { id: event.id },
        user: { id: userData.id },
        bookingstatus: false,
      };

      await postBooking(bookingData);
      alert('You registered for this event successfully!');
      navigate('/Event');
    } catch (error) {
      console.error('Error sending booking request:', error);
      alert('There was an error processing your request. Please try again.');
    }
  };

  if (!event) {
    return <p>No event data available.</p>;
  }

  return (
  
    <>
    <Navbar/>
    <div className="booking-form">
      <h1>Booking Form</h1>
      <div className="event-details">
        <img src={event.image} alt={event.title} className="event-image" />
        <h2>{event.title}</h2>
        <p>{event.description}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="booking-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="booking-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="booking-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          />
        <input
          type="date"
          name="bookingDate"
          className="booking-input"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          required
          />
        <textarea
          name="describeEvent"
          placeholder="Describe Your Event"
          className="booking-textarea"
          value={describeEvent}
          onChange={(e) => setDescribeEvent(e.target.value)}
          required
          ></textarea>
        <textarea
          name="address"
          placeholder="Event Venue"
          className="booking-textarea"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></textarea>
        <button type="submit" >Request Now</button>
      </form>
      <button onClick={() => navigate('/Event')}>Back</button>
    </div>

    <footer className="footer-container" style={{width:"1340px"}}>
                <div className="footer-section">
                    <h3 style={{fontSize:"64px",fontFamily:'initial',marginTop:'60px',}}>EVENT CRAFT</h3>
                  
                </div>
                <div className="footer-section">
                    <h3 >Events</h3>
                    <ul>
                        <li><a href="#sell-tickets-online">Wedding Planning</a></li>
                        <li><a href="#event-planning">Event Planning</a></li>
                        <li><a href="#sell-concert-tickets-online">Corporate Events</a></li>
                        <li><a href="#event-payment-system">Ear Piercing</a></li>
                        <li><a href="#professional-services">House Warming</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>social</h3>
                    <ul>
                    <li><a href="ContactUs">Contact Support</a></li>
                        <li><a href="About">About</a></li>
                        <li><a href="#facebook">Facebook</a></li>
                        <li><a href="#linkedin">LinkedIn</a></li>
                        <li><a href="#instagram">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 style={{}}>Connect With Us</h3>
                    <ul>
                        <li><a href="ContactUs">Contact Support</a></li>
                        <li>E-mail:123@gmail.com</li>
                        <li>Mobile Number : 6380090431</li>
                    </ul>
                </div>
                <div className="footer-bottom" style={{marginLeft:'-129px'}}>
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
          </>
  );
};

export default BookingForm;


// ------------------------------------------------------------------------------------------------

// import React, { useState, useContext } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Context } from './Globedata';
// import '../Assets/BookingForm.css';

// const BookingForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { event } = location.state || {};
//   const { userData, loggedIn } = useContext(Context);

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState(userData?.email || '');
//   const [phone, setPhone] = useState('');
//   const [bookingDate, setBookingDate] = useState('');
//   const [describeEvent, setDescribeEvent] = useState('');
//   const [address, setAddress] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!loggedIn) {
//       alert('Please log in to make a booking request.');
//       return;
//     }

//     if (email !== userData.email) {
//       alert('Please use your registered email.');
//       return;
//     }

//     const bookingData = { 
//       name, 
//       email, 
//       phone, 
//       bookingDate, 
//       describeEvent, 
//       address, 
//       bookingstatus: false,
//       Paymentstatus: false,
//       event: { id: event?.id } 
//     };

//     try {
//       // Make API request
//       const response = await axios.post('/InsertBooking', bookingData);
//       // Show success alert
//       alert('You registered for this event successfully!');
      
//       console.log('API Response:', response.data);
//       // Navigate to payment page
//       navigate('/payment');
//     } catch (error) {
//       console.error('Error sending booking request:', error);
//       alert('There was an error processing your request. Please try again.');
//     }
//   };

//   if (!event) {
//     return <p>No event data available.</p>;
//   }

//   return (
//     <div className="booking-form">
//       <h1>Booking Form</h1>
//       <div className="event-details">
//         <img src={event.image} alt={event.title} className="event-image" />
//         <h2>{event.title}</h2>
//         <p>{event.description}</p>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           name="name"
//           placeholder="Name" 
//           className="booking-input" 
//           value={name} onChange={(e) => setName(e.target.value)}
//           required 
//         />
//         <input 
//           type="email" 
//           name="email"
//           placeholder="Email" 
//           className="booking-input" 
//           value={email} onChange={(e) => setEmail(e.target.value)}
//           required 
//         />
//         <input 
//           type="tel" 
//           name="phone"
//           placeholder="Phone" 
//           className="booking-input" 
//           value={phone} onChange={(e) => setPhone(e.target.value)}
//           required 
//         />
//         <input 
//           type="date" 
//           name="bookingDate"
//           placeholder="Booking Date" 
//           className="booking-input" 
//           value={bookingDate} onChange={(e) => setBookingDate(e.target.value)}
//           required 
//         />
//         <textarea 
//           name="describeEvent"
//           placeholder="Describe Your Event" 
//           className="booking-textarea"
//           value={describeEvent} onChange={(e) => setDescribeEvent(e.target.value)}
//           required
//         ></textarea>
//         <textarea 
//           name="address"
//           placeholder="Event Venue" 
//           className="booking-textarea"
//           value={address} onChange={(e) => setAddress(e.target.value)}
//           required
//         ></textarea>
//         <button type="submit">Request Now</button>
//       </form>
//       <button onClick={() => navigate('/events')}>Back</button>
//     </div>
//   );
// };

// export default BookingForm;
