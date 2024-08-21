import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/EventPage.css';
import weddingImage from '../Assets/pexels-dk121-3865895.jpg';
import diwali from '../Assets/diwali.avif'
import nava from '../Assets/navarathiri.avif'
import cor from '../Assets/corporate-party.avif'
import ear from '../Assets/ear pricing image.jpg'
import house from '../Assets/house warming.jpg'
import foodfest from '../Assets/food.avif'
import music from '../Assets/music.avif'
import { Context } from './Globedata';
import { deleteEvent, getEvents, postEvent } from '../JSON/DB';
import Navbar from './Navbar';

// const initialEvents = [
//   {
//     id: 1,
//     name: 'Diwali Celebration',
//     description: 'Diwali, also known as Deepavali, is the Hindu festival of lights that signifies the victory of light over darkness and good over evil. It is celebrated with great enthusiasm and joy across India and in various parts of the world. The festival typically includes lighting lamps, bursting fireworks, preparing sweets, and exchanging gifts. The Diwali Celebration event aims to bring together families and friends to enjoy the traditional rituals and festivities associated with this auspicious occasion. Join us for an evening filled with vibrant colors, cultural performances, and delectable Indian delicacies as we celebrate the spirit of Diwali.',
//     image: diwali,
//     amount : 500000
//   },
//   {
//     id: 3,
//     name: 'Navratri Garba Night',
//     description: 'Navratri is a nine-night Hindu festival dedicated to the worship of the goddess Durga. It is celebrated with energetic dance forms like Garba and Dandiya, where participants perform intricate dance moves in a rhythmic pattern. The Navratri Garba Night is a special event where you can immerse yourself in traditional music and dance, wearing vibrant outfits and celebrating with fellow enthusiasts. This event offers a chance to experience the rich cultural heritage of India through lively dance performances, festive decorations, and traditional cuisine. Join us for a night of high-spirited Garba and Dandiya! ',
//     image: nava,
//     amount : 500000
//   },
//   {
//     id: 4,
//     name: 'Wedding Ceremony',
//     description: 'A wedding ceremony is a beautiful and sacred event that marks the union of two individuals in marriage. It involves a series of traditional rituals and customs, which vary across different cultures and religions. Our Wedding Ceremony event provides a platform to celebrate this joyous occasion with elegance and grandeur. From the exchange of vows and rings to the celebration with family and friends, this event captures the essence of love, commitment, and togetherness. Enjoy a memorable experience with exquisite decorations, delicious food, and heartfelt moments as we celebrate the union of two hearts.',
//     image: weddingImage,
//     amount : 500000
//   },
//   {
//     id: 5,
//     name: 'Corporate Event',
//     description: 'Corporate events are organized to achieve business objectives, enhance professional relationships, and promote organizational culture. These events can include conferences, seminars, workshops, product launches, and team-building activities. Our Corporate Event provides a platform for businesses to network, share knowledge, and showcase their products or services. With a focus on professionalism and efficiency, this event is designed to facilitate meaningful interactions and foster collaboration among industry professionals. Join us for a well-organized and impactful corporate event that meets your business needs and objectives.',
//     image: cor,
//     amount : 500000
//   },
//   {
//     id: 6,
//     name: 'Ear Piercing Ceremony',
//     description: 'An ear piercing ceremony is a traditional event where individuals undergo the ear piercing process, which holds cultural and spiritual significance in many communities. This event is often conducted as a rite of passage for children or adults, accompanied by family rituals and blessings. Our Ear Piercing Ceremony provides a respectful and hygienic environment for this important cultural practice. With attention to detail and adherence to safety protocols, we ensure a positive experience for all participants. Celebrate this milestone with us and create cherished memories as we honor this timeless tradition.',
//     image: ear,
//     amount : 500000
//   },
//   {
//     id: 7,
//     name: 'House Warming Party',
//     description: 'A house warming party is a celebration held when someone moves into a new home. It is an opportunity to welcome friends and family into the new space, showcase the home’s decor, and enjoy good food and company. Our House Warming Party event focuses on creating a warm and inviting atmosphere for guests to mingle and celebrate. With carefully planned activities, decorations, and a menu that caters to all tastes, this event aims to make your house warming experience memorable and enjoyable. Join us to celebrate new beginnings and make lasting connections.',
//     image: house,
//     amount : 500000
//   },
//   {
//     id: 8,
//     name: 'Music Concert',
//     description: 'A music concert is a live performance event where artists showcase their musical talents in front of an audience. It can feature various genres, including classical, rock, jazz, and pop. Our Music Concert event provides an opportunity to enjoy live music performances, experience the magic of live entertainment, and connect with fellow music enthusiasts. With a lineup of talented musicians and a well-curated program, this concert promises an unforgettable experience filled with energy and emotion. Come and immerse yourself in the world of music at this exceptional event.',
//     image: music,
//     amount : 500000
//   },
//   {
//     id: 9,
//     name: 'Food Festival',
//     description: 'A food festival is a celebration of diverse culinary delights, featuring a variety of dishes from different cuisines. It offers a unique opportunity to taste and enjoy a wide range of foods in one place. Our Food Festival event is designed to bring together food lovers and provide them with an enjoyable culinary experience. From gourmet street food to exquisite fine dining, this festival caters to all tastes and preferences. Explore food stalls, enjoy live cooking demonstrations, and participate in tasting sessions at this vibrant and flavorful event.',
//     image: foodfest,
//     amount : 500000
//   }
// ];

  

const EventsPage = () => {
  const { loggedIn, isAdmin, isManager } = useContext(Context);
  const [eventsList, setEventsList] = useState();
  const [formVisible, setFormVisible] = useState(false);
  
  const [title, setTitle] = useState();
  const [discription, setdiscription] = useState();
  const [image, setimage] = useState();
  const [amount, setamount] = useState();
  
  const navigate = useNavigate();
  
  const handleeventform = () => {
    setFormVisible(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(discription);
    console.log(image);
    console.log(amount);
  }

  const handleAddEvent = async () => {
    await postEvent(title, discription, image, amount);
    setactive(!active);
  }
  
  const handleDelete = (id) => {
    deleteEvent(id);
    setactive(!active);
  };
  
  const handleBookNow = (eventData) => {
    navigate('/booking', { state: { event: eventData } });
  };
  
  const [eventdata, seteventdata] = useState([]);
  const [active, setactive] = useState(false);

  useEffect(() => {
    const FetchEvent = async () => {
      const response = await getEvents();
      console.log(response);
      await seteventdata(response || []);
    };
    FetchEvent();
  }, [active]);

  return (

    <>
    <Navbar/>
    <div className="events-page">
      {eventdata.map((eacheve, index) => (
        <div className="event-division" key={index}>
          <div className="event-image">
            {/* <img src={eacheve.image} alt={eacheve.title} /> */}
          </div>
          <div className="event-content">
            <h2 className='eventtitle'>{eacheve.title}</h2>
            <p>{eacheve.description}</p>
            <div className="event-buttons">
              {loggedIn ? (
                <button onClick={() => handleBookNow(eacheve)}>Book Now</button>
              ) : ''}
              {(isAdmin || isManager) && (
                <button onClick={() => handleDelete(eacheve.id)}>Delete</button>
              )}
            </div>
            <p style={{ color: "yellow", fontSize: "30px", marginTop: "-22px", marginLeft: "350px" }}>
              Budget : {eacheve.amount}
            </p>
          </div>
        </div>
      ))}
      {(isAdmin || isManager) && (
        <button className="add-event-button" onClick={handleeventform}>Add New Event</button>
      )}
      {formVisible && (
        <form className="event-form" onSubmit={handleSubmit}>
          <h3>Add New Event</h3>
          <input
            type="text"
            name="name"
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Event Name"
            required
            />
          <textarea
            name="description"
            onChange={(event) => setdiscription(event.target.value)}
            placeholder="Event Description"
            required
            />
          <input
            type="text"
            name="image"
            onChange={(event) => setimage(event.target.value)}
            placeholder="Event Image URL"
            />
          <input
            type="text"
            name="Budget"
            onChange={(event) => setamount(event.target.value)}
            placeholder="Event Budget"
            required
            />
          <button type="submit" onClick={() => { handleAddEvent(); handleeventform(); setFormVisible(false) }}>Add</button>
          <button type="button" onClick={() => setFormVisible(false)}>Cancel</button>
        </form>
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

export default EventsPage;

// ----------------------------------------------------------------------------------------------------------------


// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Assets/EventPage.css';
// import { Context } from './Globedata';
// import { getEvents, postEvent, deleteEvent, updateEvent } from '../JSON/DB';

// const EventsPage = () => {
//   const { loggedIn, isAdmin, isManager } = useContext(Context);
//   const [eventsList, setEventsList] = useState([]);
//   const [formVisible, setFormVisible] = useState(false);
//   const [events, setEvents] = useState([]);

//   const [newEvent, setNewEvent] = useState({
//     name: '',
//     description: '',
//     image: ''
//   });

//   const navigate = useNavigate();



//   useEffect(() => {
//     const fetchEvents = async () => {
//         try {
//             const eventsData = await getEvents();
//             setEvents(eventsData);
//         } catch (error) {
//             console.error('Error fetching events:', error);
//         }
//     };

//     fetchEvents();
// }, []);

//   const handleAddEvent = () => {
//     setFormVisible(true);
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent({
//       ...newEvent,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const addedEvent = await postEvent(newEvent);
//     setEventsList([...eventsList, addedEvent]);
//     setFormVisible(false);
//     setNewEvent({
//       name: '',
//       description: '',
//       image: ''
//     });
//   };

//   const handleDelete = async (id) => {
//     await deleteEvent(id);
//     setEventsList(eventsList.filter(event => event.id !== id));
//   };

//   const handleBookNow = (event) => {
//     navigate('/booking', { state: { event } });
//   };

//   return (
//     <div className="events-page">
//       {eventsList.map((event) => (
//         <div key={event.id} className="event-division">
//           <div className="event-image">
//             <img src={event.image} alt={event.name} />
//           </div>
//           <div className="event-content">
//             <h2 className='eventtitle'>{event.name}</h2>
//             <p>{event.description}</p>
//             <div className="event-buttons">
//               <button onClick={() => handleBookNow(event)}>Book Now</button>
//               {(isAdmin || isManager) && (
//                 <button onClick={() => handleDelete(event.id)}>Delete</button>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//       {(isAdmin || isManager) && (
//         <button className="add-event-button" onClick={handleAddEvent}>Add New Event</button>
//       )}
//       {formVisible && (
//         <form className="event-form" onSubmit={handleSubmit}>
//           <h3>Add New Event</h3>
//           <input
//             type="text"
//             name="name"
//             value={newEvent.name}
//             onChange={handleFormChange}
//             placeholder="Event Name"
//             required
//           />
//           <textarea
//             name="description"
//             value={newEvent.description}
//             onChange={handleFormChange}
//             placeholder="Event Description"
//             required
//           />
//           <input
//             type="text"
//             name="image"
//             value={newEvent.image}
//             onChange={handleFormChange}
//             placeholder="Event Image URL"
//             required
//           />
//           <button type="submit">Add</button>
//           <button type="button" onClick={() => setFormVisible(false)}>Cancel</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default EventsPage;

// --------------------------------------------------------------------------------------------------

// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Assets/EventPage.css';
// import { Context } from './Globedata';
// import { getEvents, postEvent, deleteEvent } from '../JSON/DB';

// const EventsPage = () => {
//   const { isAdmin, isManager } = useContext(Context);
//   const [eventsList, setEventsList] = useState([]);
//   const [formVisible, setFormVisible] = useState(false);
//   const [newEvent, setNewEvent] = useState({
//     name: '',
//     description: '',
//     image: ''
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const eventsData = await getEvents();
//         console.log(getEvents());
//         setEventsList(eventsData);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleAddEvent = () => {
//     setFormVisible(true);
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent({
//       ...newEvent,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const addedEvent = await postEvent(newEvent);
//       setEventsList([...eventsList, addedEvent]);
//       setFormVisible(false);
//       setNewEvent({
//         name: '',
//         description: '',
//         image: ''
//       });
//     } catch (error) {
//       console.error('Error adding event:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteEvent(id);
//       setEventsList(eventsList.filter(event => event.id !== id));
//     } catch (error) {
//       console.error('Error deleting event:', error);
//     }
//   };

//   const handleBookNow = (event) => {
//     navigate('/booking', { state: { event } });
//   };

//   return (
//     <div className="events-page">
//       {eventsList.length > 0 ? (
//         eventsList.map((event) => (
//           <div key={event.id} className="event-division">
//             <div className="event-image">
//               <img src={event.image} alt={event.name} />
//             </div>
//             <div className="event-content">
//               <h2 className='eventtitle'>{event.name}</h2>
//               <p>{event.description}</p>
//               <div className="event-buttons">
//                 <button onClick={() => handleBookNow(event)}>Book Now</button>
//                 {(isAdmin || isManager) && (
//                   <button onClick={() => handleDelete(event.id)}>Delete</button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No events available.</p>
//       )}
//       {(isAdmin || isManager) && (
//         <button className="add-event-button" onClick={handleAddEvent}>Add New Event</button>
//       )}
//       {formVisible && (
//         <form className="event-form" onSubmit={handleSubmit}>
//           <h3>Add New Event</h3>
//           <input
//             type="text"
//             name="name"
//             value={newEvent.name}
//             onChange={handleFormChange}
//             placeholder="Event Name"
//             required
//           />
//           <textarea
//             name="description"
//             value={newEvent.description}
//             onChange={handleFormChange}
//             placeholder="Event Description"
//             required
//           />
//           <input
//             type="text"
//             name="image"
//             value={newEvent.image}
//             onChange={handleFormChange}
//             placeholder="Event Image URL"
//             required
//           />
//           <button type="submit">Add</button>
//           <button type="button" onClick={() => setFormVisible(false)}>Cancel</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default EventsPage;
