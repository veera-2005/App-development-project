
import React, { useEffect, useState } from 'react';
import { deleteBooking, deleteconfrim, getBookings, postconfrim, updateBookingStatus } from '../JSON/DB';
import '../Assets/RequestPage.css';
import Navbar from './Navbar';

const RequestPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getBookings();
        setBookings(response);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);


//   const handleAccept = async (id) => {
//     try {
//         // Find the booking details from the state
//         const booking = bookings.find(b => b.id === id);
//         if (!booking) {
//             throw new Error('Booking not found');
//         }

//         // Create confirmation data
//         const confrimationData = {
//             name: booking.name,
//             email: booking.email,
//             phone: booking.phone,
//             bookingDate: booking.bookingDate,
//             describeEvent: booking.describeEvent,
//             address: booking.address,
//             bookingstatus: true,
//             Paymentstatus: false, // Set according to your requirement
//             event: {
//                 id: booking.event.id
//             },
//             user: {
//                 id: booking.user.id
//             },
//         };

//         // Create confirmation record
//         await postconfrim(confrimationData);

//         // Update booking status
//         // await updateBookingStatus(id, true);

//         // Update the bookings state to reflect changes
//         setBookings(prevBookings =>
//             prevBookings.map(booking =>
//                 booking.id === id ? { ...booking, bookingstatus: true } : booking
//             )
//         );

//         // Optionally, you could show a success message or feedback to the user
//         console.log('Booking accepted and confirmation created successfully.');
//         alert('Booking accepted and confirmedsuccessfully');
//     } catch (error) {
//         console.error('Error handling accept:', error);
//         alert('Failed to accept booking. Please try again.');
//     }
// };

const handleAccept = async (booking_id) => {
  try {
    // Find the booking details from the state
    const booking = bookings.find(b => b.booking_id === booking_id);
    if (!booking) {
      throw new Error('Booking not found');
    }
    
    // Create confirmation data
    const confrimationData = {
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      bookingDate: booking.bookingDate,
      describeEvent: booking.describeEvent,
      address: booking.address,
      bookingstatus: booking.bookingstatus = true,
      Paymentstatus: false,
      event: {
        ...booking.event
      },
      user: {
        ...booking.user
      }
    };
    
    // Update the bookings state to reflect changes
    setBookings(prevBookings =>
      prevBookings.map(b =>
        b.booking_id === booking_id ? { ...b, bookingstatus: true } : b
      )
    );
    // Create confirmation record
    await postconfrim(confrimationData);
    console.log(confrimationData);
    console.log(confrimationData.bookingstatus);
    
    // Success message
    console.log('Booking accepted and confirmation created successfully.');
    alert('Booking accepted and confirmation created successfully.');
  } catch (error) {
    console.error('Error handling accept:', error);
    alert('Failed to accept booking. Please try again.');
  }
};



const handleReject = async (booking_id) => {
  try {
    await deleteBooking(booking_id);
    setBookings(prevBookings => prevBookings.filter(booking => booking.booking_id !== booking_id));

    console.log('Booking rejected and deleted successfully.');
    alert('Booking rejected and deleted successfully');

  } catch (error) {
    console.error('Error handling reject:', error);
    alert('Failed to reject booking. Please try again.');
  }
}


  return (
    <>
    <Navbar/>
    <div style={{backgroundColor:'#333',marginTop:'-30px',paddingLeft:'30px',borderRadius:'0px',border:'1px solid white'}}>
      <h1 style={{fontFamily:'initial',fontSize:'40px',color:'orange',marginLeft:'600px'}}>Request Page</h1>
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <div key={booking.id} className="booking-request">
            <h2>Event : {booking.event.title}</h2>
            <p>Name: {booking.name}</p>
            <p>Email: {booking.email}</p>
            <p>Phone: {booking.phone}</p>
            <p>Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
            <p>Event Description: {booking.describeEvent}</p>
            <p>Address: {booking.address}</p>
            
            {(booking.bookingstatus)?null
            :<><button onClick={() => {handleAccept(booking.booking_id)}}>Accept</button>
            <button onClick={() => handleReject(booking.booking_id)}>Reject</button></>}
          </div>
        ))
      ) : (
        <h1>No booking requests available.</h1>
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

export default RequestPage;

//------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { deleteBooking, postconfrim, getBookings, updateBookingStatus } from '../JSON/DB';

// const RequestPage = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await getBookings();
//         setBookings(response);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };
//     fetchBookings();
//   }, []);

//   const handleAccept = async (id) => {
//     try {
//       // Find the booking details from the state
//       const booking = bookings.find(b => b.id === id);
//       if (!booking) {
//         throw new Error('Booking not found');
//       }

//       // Create confirmation data
//       const confrimationData = {
//         name: booking.name,
//         email: booking.email,
//         phone: booking.phone,
//         bookingDate: booking.bookingDate,
//         describeEvent: booking.describeEvent,
//         address: booking.address,
//         bookingstatus: true,
//         Paymentstatus: false, // Set according to your requirement
//         event: {
//           id: booking.event.id
//         },
//         user: {
//           id: booking.user.id
//         },
//       };

//       // Create confirmation record
//       await postconfrim(confrimationData);

//       // Update booking status
//       await updateBookingStatus(id, true);

//       // Update the bookings state to reflect changes
//       setBookings(prevBookings =>
//         prevBookings.map(b =>
//           b.id === id ? { ...b, bookingstatus: true } : b
//         )
//       );

//       // Optionally, you could show a success message or feedback to the user
//       console.log('Booking accepted and confirmation created successfully.');
//       alert('Booking accepted and confirmation created successfully.');
//     } catch (error) {
//       console.error('Error handling accept:', error);
//       alert('Failed to accept booking. Please try again.');
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       // Delete the booking
//       await deleteBooking(id);

//       // Remove the booking from the state
//       setBookings(prevBookings =>
//         prevBookings.filter(booking => booking.id !== id)
//       );

//       // Optionally, you could show a success message or feedback to the user
//       console.log('Booking rejected and deleted successfully.');
//       alert('Booking rejected and deleted successfully.');
//     } catch (error) {
//       console.error('Error handling reject:', error);
//       alert('Failed to reject booking. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Request Page</h1>
//       {bookings.length > 0 ? (
//         bookings.map((booking) => (
//           <div key={booking.id} className="booking-request">
//             <h2>{booking.event.title}</h2>
//             <p>Name: {booking.name}</p>
//             <p>Email: {booking.email}</p>
//             <p>Phone: {booking.phone}</p>
//             <p>Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
//             <p>Event Description: {booking.describeEvent}</p>
//             <p>Address: {booking.address}</p>
//             {booking.bookingstatus ? (
//               <p>Status: Confirmed</p>
//             ) : (
//               <div>
//                 <button onClick={() => handleAccept(booking.id)}>Accept</button>
//                 <button onClick={() => handleReject(booking.id)}>Reject</button>
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No booking requests available.</p>
//       )}
//     </div>
//   );
// };

// export default RequestPage;
