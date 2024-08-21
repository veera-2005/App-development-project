import React, { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';
import SelectMUI from './SelectMUI';
import { useNavigate } from 'react-router-dom';
import '../Assets/Payment.css'; // Ensure you have this CSS file for styles
import Navbar from './Navbar';

function Payment() {
  const [cardno, setCardno] = useState("");
  const [cardname, setCardname] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [ccv, setCcv] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to validate the form

  const validateForm = () => {
    if (cardno.includes('#')) {
      setError("Please enter a valid card number");
      return false;
    }
    if (!cardname.match(/^[a-zA-Z\s]+$/)) {
      setError("Please enter a valid card name");
      return false;
    }
    
    // Ensure month and year are strings before calling trim()
    const monthString = String(month).trim();
    const yearString = String(year).trim();
    
    if (monthString === "" || monthString === "Select Month") { // Adjust the placeholder value as needed
      setError("Please select month");
      return false;
    }
    if (yearString === "" || yearString === "Select Year") { // Adjust the placeholder value as needed
      setError("Please select year");
      return false;
    }
    if (ccv === "") {
      setError("Please enter CCV");
      return false;
    }
    
    setError("");
    return true;
  }
  
  const handlePayForm = (event) => {
    // event.preventDefault();

    if (validateForm()) {
      alert("Your payment is completed successfully");
      // You can add further code here to handle the payment process
      // For example, you might want to send payment data to a backend API
    }
  };

  return (
    <>
      <Navbar />
      <div className="payment-total">
      <div className="payment-image">
        
        </div>
        <form className="payment-form" onSubmit={handlePayForm} style={{ marginBottom: '30px' }}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            id="card-number"
            label="Card Number"
            variant="outlined"
            onChange={(e) => setCardno(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            id="card-holder"
            label="Card Holder"
            variant="outlined"
            onChange={(e) => setCardname(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <div className="card-year">
            <SelectMUI dat={month} func={setMonth} attribute={"Month"} required />
            <SelectMUI dat={year} func={setYear} attribute={"Year"} required />
            <TextField
              id="ccv"
              label="CCV"
              variant="outlined"
              value={ccv}
              onChange={(e) => setCcv(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </div>
          <Button id="pay-button" type="submit" variant="contained" color="primary">
            Pay
          </Button>
        </form>
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
}

export default Payment;
