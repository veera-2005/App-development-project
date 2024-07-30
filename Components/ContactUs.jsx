import React from 'react';
import '../Assets/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-form">
        <h1>CONTACT US</h1>
        <p>Fill out the form below and we will be in contact shortly.</p>
        <form>
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <input type="tel" placeholder="Phone" className="form-input" />
          <input type="text" placeholder="How did you hear about us?" className="form-input" />
          <textarea placeholder="Describe Your Event" className="form-textarea"></textarea>
          <button type="submit" className="form-button">SEND</button>
        </form>
      </div>
      <div className="contact-us-info">
        <blockquote>
          <p style={{fontFamily:'initial',fontSize:'40px'}}>Great events don't just happen, they are carefully planned and passionately executed.</p>
          <footer>-Unknown</footer>
        </blockquote>
        <p>Full-service event planning & styling throughout the Bay Area, Wine Country and other exclusive destinations.</p>
        <p> Area Office: 123-123-123</p>
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
  );
};

export default ContactUs;
