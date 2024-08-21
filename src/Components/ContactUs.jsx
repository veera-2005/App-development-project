import React, { useState } from 'react';
import '../Assets/ContactUs.css';
import { postData } from '../JSON/DB'; 
import Navbar from './Navbar';





const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    howDidYouHear: '',
    eventDescription: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming "Role" and other fields need to be included
    const newUser = {
      username: form.name,
      email: form.email,
      password: 'defaultPassword', // or prompt user for a password
      role: 'user', // Adjust role as needed
      gender: '', // Add gender field if applicable
      state: '', // Add state field if applicable
      country: '', // Add country field if applicable
      languages: [] // Add languages field if applicable
    };

    try {
      // Send form data via API
      await postData(
        newUser.username,
        newUser.email,
        newUser.password,
        newUser.role,
        newUser.gender,
        newUser.state,
        newUser.country,
        newUser.languages
      );

  
      setStatus('Email sent successfully!');
      setForm({
        name: '',
        email: '',
        phone: '',
        howDidYouHear: '',
        eventDescription: ''
      });
    } catch (error) {
      console.error('Error posting data or sending email:', error); // Log the error details
      setStatus('Failed to send email or post data. Please try again.');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="contact-us-container">
      <div className="contact-us-form">
        <h1>CONTACT US</h1>
        <p>Fill out the form below and we will be in contact shortly.</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            value={form.name} 
            onChange={handleChange}
            placeholder="Name" 
            className="form-input" 
            required 
            />
          <input 
            type="email" 
            name="email"
            value={form.email} 
            onChange={handleChange}
            placeholder="Email" 
            className="form-input" 
            required 
          />
          <input 
            type="tel" 
            name="phone"
            value={form.phone} 
            onChange={handleChange}
            placeholder="Phone" 
            className="form-input" 
            required 
            />
          <input 
            type="text" 
            name="howDidYouHear"
            value={form.howDidYouHear} 
            onChange={handleChange}
            placeholder="How did you hear about us?" 
            className="form-input" 
          />
          <textarea 
            name="eventDescription"
            value={form.eventDescription} 
            onChange={handleChange}
            placeholder="Describe Your Event" 
            className="form-textarea"
            required
            ></textarea>
          <button type="submit" className="form-button">SEND</button>
        </form>
        {status && <p className="form-status">{status}</p>}
      </div>
      <div className="contact-us-info">
        <blockquote>
          <p style={{fontFamily:'initial',fontSize:'40px'}}>Great events don't just happen, they are carefully planned and passionately executed.</p>
          <footer>-Unknown</footer>
        </blockquote>
        <p>Full-service event planning & styling throughout the Bay Area, Wine Country and other exclusive destinations.</p>
        <p>Area Office: 123-123-123</p>
        <p>Country Office: 123-123-123</p>
        <p>Email: info@vanmamevents.com</p>
        <div className="social-icons">
          <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
          <a href="#pintrest"><i className="fab fa-pinterest-p"></i></a>
          <a href="#insta"><i className="fab fa-instagram"></i></a>
        </div>
        <address>
          vanmam Events, LLC<br />
          1055 Broadway, E4
        </address>
      </div>
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

export default ContactUs;
// ----------------------------------------------------------------

// export default function Contact() {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "a9224858-e06e-4785-875c-2d0980cd1148");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };
// }
//   return (
//     <div>
//        <div className="contact-us-container">
         
//        <div className="contact-us-form">
//         <h1>CONTACT US</h1>
//       <p>Fill out the form below and we will be in contact shortly.</p>
//       <form onSubmit={onSubmit}>
//                 <input 
//                       type="text" 
//                       name="name"
//                       // value={form.name} 
//                       // onChange={handleChange}
//                       placeholder="Name" 
//                       className="form-input" 
//                       required 
//                       />
//                     <input 
//                       type="email" 
//                       name="email"
//                       // value={form.email} 
//                       // onChange={handleChange}
//                       placeholder="Email" 
//                       className="form-input" 
//                       required 
//                       />
//                     <input 
//                       type="tel" 
//                       name="phone"
//                       // value={form.phone} 
//                       // onChange={handleChange}
//                       placeholder="Phone" 
//                       className="form-input" 
//                       required 
//                       />
//                     <input 
//                       type="text" 
//                       name="howDidYouHear"
//                       // value={form.howDidYouHear} 
//                       // onChange={handleChange}
//                       placeholder="How did you hear about us?" 
//                       className="form-input" 
//                       />
//                     <textarea 
//                       name="eventDescription"
//                       // value={form.eventDescription} 
//                       // onChange={handleChange}
//                       placeholder="Describe Your Event" 
//                       className="form-textarea"
//                       required
//                       ></textarea>
//                     <button type="submit" className="form-button">SEND</button>
//       </form>
//       </div>
//     </div>
//   );

//   }

