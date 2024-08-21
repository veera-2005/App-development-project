// // import React, { useEffect, useState } from 'react';
// // import { getConfrimationById } from '../JSON/DB'; // Ensure this function is defined

// // const ConfrimationPage = () => {
// //     const [confrimations, setConfrimations] = useState([]);

// //     useEffect(() => {
// //         const fetchConfrimations = async () => {
// //             try {
// //                 const response = await getConfrimationById();
// //                 setConfrimations(response);
// //             } catch (error) {
// //                 console.error('Error fetching confirmations:', error);
// //             }
// //         };
// //         fetchConfrimations();
// //     }, []);

// //     return (
// //         <div>
// //             <h1>Confirmation Page</h1>
// //             {confrimations.length > 0 ? (
// //                 confrimations.map((confrimation) => (
// //                     <div key={confrimation.confrimId} className="confrimation-item">
// //                         <h2>Event: {confrimation.event.title}</h2>
// //                         <p>Name: {confrimation.name}</p>
// //                         <p>Email: {confrimation.email}</p>
// //                         <p>Phone: {confrimation.phone}</p>
// //                         <p>Booking Date: {new Date(confrimation.bookingDate).toLocaleDateString()}</p>
// //                         <p>Description: {confrimation.describeEvent}</p>
// //                         <p>Address: {confrimation.address}</p>
// //                         <p>Booking Status: {confrimation.bookingstatus ? 'Confirmed' : 'Pending'}</p>
// //                         <p>Payment Status: {confrimation.Paymentstatus ? 'Paid' : 'Unpaid'}</p>
// //                     </div>
// //                 ))
// //             ) : (
// //                 <p>No confirmations available.</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default ConfrimationPage;
// // ===----------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { getAllConfrimations } from '../JSON/DB'; // Ensure this function is defined

// const ConfrimationPage = () => {
//     const [confrimations, setConfrimations] = useState([]);

//     useEffect(() => {
//         const fetchConfrimations = async () => {
//             try {
//                 const response = await getAllConfrimations(); // Fetch all confirmations
//                 setConfrimations(response);
//             } catch (error) {
//                 console.error('Error fetching confirmations:', error);
//             }
//         };
//         fetchConfrimations();
//     }, []);

//     return (
//         <div>
//             <h1>Confirmation Page</h1>
//             {confrimations.length > 0 ? (
//                 confrimations.map((confrimation) => (
//                     <div key={confrimation.confrimId} className="confrimation-item">
//                         <h2>Event: {confrimation.event.title}</h2>
//                         <p>Name: {confrimation.name}</p>
//                         <p>Email: {confrimation.email}</p>
//                         <p>Phone: {confrimation.phone}</p>
//                         <p>Booking Date: {new Date(confrimation.bookingDate).toLocaleDateString()}</p>
//                         <p>Description: {confrimation.describeEvent}</p>
//                         <p>Address: {confrimation.address}</p>
//                         <p>Booking Status: {confrimation.bookingstatus ? 'Confirmed' : 'Pending'}</p>
//                         <p>Payment Status: {confrimation.Paymentstatus ? 'Paid' : 'Unpaid'}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No confirmations available.</p>
//             )}
//         </div>
//     );
// };

// export default ConfrimationPage;

// ----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Context } from './Globedata'; // Update with the correct path
import { getUserConfrimations } from '../JSON/DB'; // Ensure this function is defined
import { useNavigate, useNavigation } from 'react-router-dom';
import '../Assets/Confirmation.css';
import Navbar from './Navbar';



const ConfrimationPage = () => {
    const navigate = useNavigate();
    const { userData } = useContext(Context); // Use context to get user data
    const [confrimations, setConfrimations] = useState([]);

    const navigateToPayment = () => {
        navigate('/Payment');
    };
    
    useEffect(() => {
        const fetchConfrimations = async () => {
            if (userData && userData.email) {
                try {
                    const response = await getUserConfrimations(userData.email); // Fetch user confirmations by email
                    setConfrimations(response);
                    console.log(response);
                } catch (error) {
                    console.error('Error fetching confirmations:', error);
                }
            }
        };
        
        fetchConfrimations();
    }, [userData]);
    
    
    
    return (
        <>
        <Navbar/>
        <div>
      <h1 style={{fontFamily:'initial',fontSize:'40px',color:'orange',marginLeft:'578px'}}>Confrimation Page</h1>
            {confrimations.length > 0 ? (
                confrimations.map((confrimation) => (
                    <div key={confrimation.confrimId} className="confrimation-item">
                        <h2>Event: {confrimation.event.title}</h2>
                        <p>Name: {confrimation.name}</p>
                        <p>Email: {confrimation.email}</p>
                        <p>Phone: {confrimation.phone}</p>
                        <p>Booking Date:{confrimation.bookingDate}</p>
                        <p>Description: {confrimation.describeEvent}</p>
                        <p>Address: {confrimation.address}</p>
                        <p>Booking Status: {confrimation.bookingstatus ? 'Confirmed' : 'Pending'}</p>
                        <button onClick={navigateToPayment}>Payment</button>
                    </div>
                ))
            ) : (
                <h1 style={{marginTop:"50px"}}>No confirmations available.</h1>
            )}
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

export default ConfrimationPage;
