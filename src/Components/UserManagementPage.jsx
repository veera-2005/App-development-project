
// import React, { useContext, useEffect, useState, useRef } from 'react';
// import { getData, updateData, deleteData, getEvents, updateEvent, deleteEvent, postData, postEvent } from '../JSON/DB'; // Importing user and event API functions
// import { useNavigate } from 'react-router-dom';
// import '../Assets/UserManagementPage.css';
// import { Context } from './Globedata';

// const UserManagementPage = () => {
//     const [users, setUsers] = useState([]);
//     const [events, setEvents] = useState([]);
//     const [userEditMode, setUserEditMode] = useState(null);
//     const [eventEditMode, setEventEditMode] = useState(null);
//     const [updatedUser, setUpdatedUser] = useState({});
//     const [updatedEvent, setUpdatedEvent] = useState({});
//     const [newUser, setNewUser] = useState({ name: '', email: '', role: '', gender: '', state: '', country: '', languages: '' });
//     const [newEvent, setNewEvent] = useState({ title: '', description: '', amount: '' });
//     const navigate = useNavigate();
//     const { userData, setUserData, LogOut } = useContext(Context);

//     const userSectionRef = useRef(null);
//     const eventSectionRef = useRef(null);

//     useEffect(() => {
//         fetchUsers();
//         fetchEvents();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const res = await getData();
//             setUsers(res.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     const fetchEvents = async () => {
//         try {
//             const res = await getEvents();
//             setEvents(res);
//         } catch (error) {
//             console.error('Error fetching events:', error);
//         }
//     };

//     const handleEditUser = (user) => {
//         setUserEditMode(user.id);
//         setUpdatedUser(user);
//     };

//     const handleEditEvent = (event) => {
//         setEventEditMode(event.id);
//         setUpdatedEvent(event);
//     };

//     const handleSaveUser = async (id) => {
//         try {
//             await updateData(id, updatedUser);
//             setUsers(users.map(user => (user.id === id ? updatedUser : user)));
//             setUserEditMode(null);
//             alert('User updated successfully');
//         } catch (error) {
//             console.error('Error updating user:', error);
//             alert('Failed to update user');
//         }
//     };

//     const handleSaveEvent = async (id) => {
//         try {
//             await updateEvent(id, updatedEvent);
//             setEvents(events.map(event => (event.id === id ? updatedEvent : event)));
//             setEventEditMode(null);
//             alert('Event updated successfully');
//         } catch (error) {
//             console.error('Error updating event:', error);
//             alert('Failed to update event');
//         }
//     };

//     const handleDeleteUser = async (id) => {
//                 try {
//                     await deleteData(id);
//                     setUsers(users.filter(user => user.id !== id));
//                     alert('User deleted successfully');
//                 } catch (error) {
//                     console.error('Error deleting user:', error);
//                     alert('Failed to delete user');
//                 }
//             };
        
//             const handleDeleteEvent = async (id) => {
//                 try {
//                     await deleteEvent(id);
//                     setEvents(events.filter(event => event.id !== id));
//                     alert('Event deleted successfully');
//                 } catch (error) {
//                     console.error('Error deleting event:', error);
//                     alert('Failed to delete event');
//                 }
//             };

//     const handleAddUser = async () => {
//         try {
//             await postData(newUser.name, newUser.email,  newUser.role, newUser.gender);
//             fetchUsers(); // Refresh the list of users
//             setNewUser({ name: '', email: '', role: '', gender: '', state: '', country: '', languages: '' });
//             alert('User added successfully');
//         } catch (error) {
//             console.error('Error adding user:', error);
//             alert('Failed to add user');
//         }
//     };

//     const handleAddEvent = async () => {
//         try {
//             await postEvent(newEvent.title, newEvent.description, '', newEvent.amount);
//             fetchEvents(); // Refresh the list of events
//             setNewEvent({ title: '', description: '', amount: '' });
//             alert('Event added successfully');
//         } catch (error) {
//             console.error('Error adding event:', error);
//             alert('Failed to add event');
//         }
//     };

//     const scrollToSection = (sectionRef) => {
//         sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     return (
//         <div>
//             <div className="navigation-buttons">
//                 <button onClick={() => scrollToSection(userSectionRef)} className='manage_button'>
//                     User Management
//                 </button>
//                 <button onClick={() => scrollToSection(eventSectionRef)} className='manage_button'>
//                     Event Management
//                 </button>
//                 <button onClick={() => navigate('/ProfilePage')} className='manage_button'>
//                     Back to Profile
//                 </button>
//             </div>

//             <div ref={userSectionRef} className="table-container">
//                 <h1>User Management</h1>
//                 <button onClick={() => setUserEditMode('add')} className='manage_button'>Add User</button>
//                 <table className="user-table">
//                     <thead>
//                         <tr>
//                             <th>Full Name</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                             <th>Gender</th>
//                             <th>State</th>
//                             <th>Country</th>
//                             <th>Language</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map(user => (
//                             <tr key={user.id}>
//                                 <td>
//                                     {userEditMode === user.id ? (
//                                         <input
//                                             type="text"
//                                             value={updatedUser.name}
//                                             onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
//                                         />
//                                     ) : (
//                                         user.name
//                                     )}
//                                 </td>
//                                 <td>
//                                     {userEditMode === user.id ? (
//                                         <input
//                                             type="text"
//                                             value={updatedUser.email}
//                                             onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
//                                         />
//                                     ) : (
//                                         user.email
//                                     )}
//                                 </td>
//                                 <td>
//                                     {userEditMode === user.id ? (
//                                         <input
//                                             type="text"
//                                             value={updatedUser.role}
//                                             onChange={(e) => setUpdatedUser({ ...updatedUser, role: e.target.value })}
//                                         />
//                                     ) : (
//                                         user.role
//                                     )}
//                                 </td>
//                                 <td>
//                                     {userEditMode === user.id ? (
//                                         <input
//                                             type="text"
//                                             value={updatedUser.gender}
//                                             onChange={(e) => setUpdatedUser({ ...updatedUser, gender: e.target.value })}
//                                         />
//                                     ) : (
//                                         user.gender
//                                     )}
//                                 </td>
//                                 <td>
//                                     {userEditMode === user.id ? (
//                                         <input
//                                             type="text"
//                                             value={updatedUser.state}
//                                             onChange={(e) => setUpdatedUser({ ...updatedUser, state: e.target.value })}
//                                         />
//                                     ) : (
//                                         user.state
//                                     )}
//                                 </td>
//                                 <td>
//                                     {userEditMode === user.id ? (
//                                         <input
//                                             type="text"
//                                             value={updatedUser.country}
//                                             onChange={(e) => setUpdatedUser({ ...updatedUser, country: e.target.value })}
//                                         />
//                                     ) : (
//                                         user.country
//                                     )}
//                                 </td>
//                                 <td>
//                                     {userEditMode === user.id ? (
//                                         <input
//                                             type="text"
//                                             value={updatedUser.languages}
//                                             onChange={(e) => setUpdatedUser({ ...updatedUser, languages: e.target.value })}
//                                         />
//                                     ) : (
//                                         user.languages
//                                     )}
//                                 </td>
//                                 <td>
//                                     {userEditMode === user.id ? (
//                                         <>
//                                             <button onClick={() => handleSaveUser(user.id)} className='manage_button'>Save</button>
//                                             <button onClick={() => setUserEditMode(null)} className='manage_button'>Cancel</button>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <button onClick={() => handleEditUser(user)} className='manage_button'>Edit</button>
//                                             <button onClick={() => handleDeleteUser(user.id)} className='manage_button'>Delete</button>
//                                         </>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                         {userEditMode === 'add' && (
//                             <tr>
//                                 <td><input type="text" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} placeholder="Full Name" /></td>
//                                 <td><input type="text" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} placeholder="Email" /></td>
//                                 <td><input type="text" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} placeholder="Role" /></td>
//                                 <td><input type="text" value={newUser.gender} onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })} placeholder="Gender" /></td>
//                                 <td><input type="text" value={newUser.state} onChange={(e) => setNewUser({ ...newUser, state: e.target.value })} placeholder="State" /></td>
//                                 <td><input type="text" value={newUser.country} onChange={(e) => setNewUser({ ...newUser, country: e.target.value })} placeholder="Country" /></td>
//                                 <td><input type="text" value={newUser.languages} onChange={(e) => setNewUser({ ...newUser, languages: e.target.value })} placeholder="Languages" /></td>
//                                 <td>
//                                     <button onClick={handleAddUser} className='manage_button'>Add</button>
//                                     <button onClick={() => setUserEditMode(null)} className='manage_button'>Cancel</button>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>

//             <div ref={eventSectionRef} className="table-container">
//                 {/* <button onClick={() => navigate('/ProfilePage')} className='manage_button'>Back to Profile</button> */}
//                 <h1>Event Management</h1>
//                 <button onClick={() => setEventEditMode('add')} className='manage_button'>Add Event</button>
//                 <table className="event-table">
//                     <thead>
//                         <tr>
//                             <th>Title</th>
//                             <th>Description</th>
//                             <th>Amount</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {events.map(event => (
//                             <tr key={event.id}>
//                                 <td>
//                                     {eventEditMode === event.id ? (
//                                         <input
//                                             type="text"
//                                             value={updatedEvent.title}
//                                             onChange={(e) => setUpdatedEvent({ ...updatedEvent, title: e.target.value })}
//                                             required
//                                         />
//                                     ) : (
//                                         event.title
//                                     )}
//                                 </td>
//                                 <td>
//                                     {eventEditMode === event.id ? (
//                                         <textarea
//                                             value={updatedEvent.description}
//                                             onChange={(e) => setUpdatedEvent({ ...updatedEvent, description: e.target.value })}
//                                             required
//                                         />
//                                     ) : (
//                                         event.description
//                                     )}
//                                 </td>
//                                 <td>
//                                     {eventEditMode === event.id ? (
//                                         <input
//                                             type="text"
//                                             value={updatedEvent.amount}
//                                             onChange={(e) => setUpdatedEvent({ ...updatedEvent, amount: e.target.value })}
//                                             required
//                                         />
//                                     ) : (
//                                         event.amount
//                                     )}
//                                 </td>
//                                 <td>
//                                     {eventEditMode === event.id ? (
//                                         <>
//                                             <button onClick={() => handleSaveEvent(event.id)} className='manage_button'>Save</button>
//                                             <button onClick={() => setEventEditMode(null)} className='manage_button'>Cancel</button>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <button onClick={() => handleEditEvent(event)} className='manage_button'>Edit</button>
//                                             <button onClick={() => handleDeleteEvent(event.id)} className='manage_button'>Delete</button>
//                                         </>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                         {eventEditMode === 'add' && (
//                             <tr>
//                                 <td><input type="text" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} placeholder="Title" /></td>
//                                 <td><textarea value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} placeholder="Description" /></td>
//                                 <td><input type="text" value={newEvent.amount} onChange={(e) => setNewEvent({ ...newEvent, amount: e.target.value })} placeholder="Amount" /></td>
//                                 <td>
//                                     <button onClick={handleAddEvent} className='manage_button'>Add</button>
//                                     <button onClick={() => setEventEditMode(null)} className='manage_button'>Cancel</button>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UserManagementPage;
//--------------------------------------------------------------------------------------------------------------------------------

import React, { useContext, useEffect, useState, useRef } from 'react';
import { getData, updateData, deleteData, getEvents, updateEvent, deleteEvent, postData, postEvent } from '../JSON/DB'; // Importing user and event API functions
import { useNavigate } from 'react-router-dom';
import '../Assets/UserManagementPage.css';
import { Context } from './Globedata';
import Navbar from './Navbar';

const UserManagementPage = () => {
    const [users, setUsers] = useState([]);
    const [events, setEvents] = useState([]);
    const [userEditMode, setUserEditMode] = useState(null);
    const [eventEditMode, setEventEditMode] = useState(null);
    const [updatedUser, setUpdatedUser] = useState({});
    const [updatedEvent, setUpdatedEvent] = useState({});
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: '', gender: '', state: '', country: '', languages: '' });
    const [newEvent, setNewEvent] = useState({ title: '', description: '', amount: '' });
    const navigate = useNavigate();
    const { userData, setUserData, LogOut } = useContext(Context);

    const userSectionRef = useRef(null);
    const eventSectionRef = useRef(null);

    useEffect(() => {
        fetchUsers();
        fetchEvents();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await getData();
            setUsers(res.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchEvents = async () => {
        try {
            const res = await getEvents();
            setEvents(res);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleEditUser = (user) => {
        setUserEditMode(user.id);
        setUpdatedUser(user);
    };

    const handleEditEvent = (event) => {
        setEventEditMode(event.id);
        setUpdatedEvent(event);
    };

    const handleSaveUser = async (id) => {
        try {
            await updateData(id, updatedUser);
            setUsers(users.map(user => (user.id === id ? updatedUser : user)));
            setUserEditMode(null);
            alert('User updated successfully');
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user');
        }
    };

    const handleSaveEvent = async (id) => {
        try {
            await updateEvent(id, updatedEvent);
            setEvents(events.map(event => (event.id === id ? updatedEvent : event)));
            setEventEditMode(null);
            alert('Event updated successfully');
        } catch (error) {
            console.error('Error updating event:', error);
            alert('Failed to update event');
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteData(id);
            setUsers(users.filter(user => user.id !== id));
            alert('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Failed to delete user');
        }
    };

    const handleDeleteEvent = async (id) => {
        try {
            await deleteEvent(id);
            setEvents(events.filter(event => event.id !== id));
            alert('Event deleted successfully');
        } catch (error) {
            console.error('Error deleting event:', error);
            alert('Failed to delete event');
        }
    };

    const handleAddUser = async () => {
        if (!newUser.name || !newUser.email || !newUser.password || !newUser.role) {
            alert('Please fill in all required fields: Name, Email, Password, and Role.');
            return;
        }
        try {
            await postData(newUser.name, newUser.email, newUser.password, newUser.role, newUser.gender, newUser.state, newUser.country, newUser.languages);
            fetchUsers(); // Refresh the list of users
            setNewUser({ name: '', email: '', password: '', role: '', gender: '', state: '', country: '', languages: '' });
            setUserEditMode(null); // Hide the form
            alert('User added successfully');
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Failed to add user');
        }
    };

    const handleAddEvent = async () => {
        if (!newEvent.title || !newEvent.description || !newEvent.amount) {
            alert('Please fill in all required fields: Title, Description, and Amount.');
            return;
        }
        try {
            await postEvent(newEvent.title, newEvent.description, '', newEvent.amount);
            fetchEvents(); // Refresh the list of events
            setNewEvent({ title: '', description: '', amount: '' });
            setEventEditMode(null); // Hide the form
            alert('Event added successfully');
        } catch (error) {
            console.error('Error adding event:', error);
            alert('Failed to add event');
        }
    };

    const scrollToSection = (sectionRef) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        <Navbar/>
        <div>
            <div className="navigation-buttons">
                <button onClick={() => scrollToSection(userSectionRef)} className='manage_button'>
                    User Management
                </button>
                <button onClick={() => scrollToSection(eventSectionRef)} className='manage_button'>
                    Event Management
                </button>
                <button onClick={() => navigate('/ProfilePage')} className='manage_button'>
                    Back to Profile
                </button>
            </div>

            <div ref={userSectionRef} className="table-container">
                <h1>User Management</h1>
                <button onClick={() => setUserEditMode('add')} className='manage_button'>Add User</button>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Gender</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Language</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>
                                    {userEditMode === user.id ? (
                                        <input
                                            type="text"
                                            value={updatedUser.name}
                                            onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
                                        />
                                    ) : (
                                        user.name
                                    )}
                                </td>
                                <td>
                                    {userEditMode === user.id ? (
                                        <input
                                            type="text"
                                            value={updatedUser.email}
                                            onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
                                        />
                                    ) : (
                                        user.email
                                    )}
                                </td>
                                <td>
                                    {userEditMode === user.id ? (
                                        <input
                                        type="password"
                                            value={updatedUser.password}
                                            onChange={(e) => setUpdatedUser({ ...updatedUser, password: e.target.value })}
                                        />
                                    ) : (
                                        '*****' // Hide password field in read-only mode
                                    )}
                                </td>
                                <td>
                                    {userEditMode === user.id ? (
                                        <input
                                            type="text"
                                            value={updatedUser.role}
                                            onChange={(e) => setUpdatedUser({ ...updatedUser, role: e.target.value })}
                                            />
                                    ) : (
                                        user.role
                                    )}
                                </td>
                                <td>
                                    {userEditMode === user.id ? (
                                        <input
                                        type="text"
                                        value={updatedUser.gender}
                                        onChange={(e) => setUpdatedUser({ ...updatedUser, gender: e.target.value })}
                                        />
                                    ) : (
                                        user.gender
                                    )}
                                </td>
                                <td>
                                    {userEditMode === user.id ? (
                                        <input
                                            type="text"
                                            value={updatedUser.state}
                                            onChange={(e) => setUpdatedUser({ ...updatedUser, state: e.target.value })}
                                        />
                                    ) : (
                                        user.state
                                    )}
                                </td>
                                <td>
                                    {userEditMode === user.id ? (
                                        <input
                                            type="text"
                                            value={updatedUser.country}
                                            onChange={(e) => setUpdatedUser({ ...updatedUser, country: e.target.value })}
                                        />
                                    ) : (
                                        user.country
                                    )}
                                </td>
                                <td>
                                    {userEditMode === user.id ? (
                                        <input
                                            type="text"
                                            value={updatedUser.languages}
                                            onChange={(e) => setUpdatedUser({ ...updatedUser, languages: e.target.value })}
                                            />
                                    ) : (
                                        user.languages
                                    )}
                                </td>
                                <td>
                                    {userEditMode === user.id ? (
                                        <>
                                            <button onClick={() => handleSaveUser(user.id)} className='manage_button'>Save</button>
                                            <button onClick={() => setUserEditMode(null)} className='manage_button'>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => handleEditUser(user)} className='manage_button'>Edit</button>
                                            <button onClick={() => handleDeleteUser(user.id)} className='manage_button'>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {userEditMode === 'add' && (
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={newUser.name}
                                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={newUser.email}
                                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={newUser.password}
                                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Role"
                                        value={newUser.role}
                                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Gender"
                                        value={newUser.gender}
                                        onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="State"
                                        value={newUser.state}
                                        onChange={(e) => setNewUser({ ...newUser, state: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        value={newUser.country}
                                        onChange={(e) => setNewUser({ ...newUser, country: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Languages"
                                        value={newUser.languages}
                                        onChange={(e) => setNewUser({ ...newUser, languages: e.target.value })}
                                        />
                                </td>
                                <td>
                                    <button onClick={handleAddUser} className='manage_button'>Add User</button>
                                    <button onClick={() => setUserEditMode(null)} className='manage_button'>Cancel</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div ref={eventSectionRef} className="table-container">
                <h1>Event Management</h1>
                <button onClick={() => setEventEditMode('add')} className='manage_button'>Add Event</button>
                <table className="event-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(event => (
                            <tr key={event.id}>
                                <td>
                                    {eventEditMode === event.id ? (
                                        <input
                                            type="text"
                                            value={updatedEvent.title}
                                            onChange={(e) => setUpdatedEvent({ ...updatedEvent, title: e.target.value })}
                                            />
                                        ) : (
                                        event.title
                                    )}
                                </td>
                                <td>
                                    {eventEditMode === event.id ? (
                                        <textarea
                                            value={updatedEvent.description}
                                            onChange={(e) => setUpdatedEvent({ ...updatedEvent, description: e.target.value })}
                                            />
                                        ) : (
                                            event.description
                                        )}
                                </td>
                                <td>
                                    {eventEditMode === event.id ? (
                                        <input
                                        type="number"
                                        value={updatedEvent.amount}
                                            onChange={(e) => setUpdatedEvent({ ...updatedEvent, amount: e.target.value })}
                                        />
                                    ) : (
                                        event.amount
                                    )}
                                </td>
                                <td>
                                    {eventEditMode === event.id ? (
                                        <>
                                            <button onClick={() => handleSaveEvent(event.id)} className='manage_button'>Save</button>
                                            <button onClick={() => setEventEditMode(null)} className='manage_button'>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => handleEditEvent(event)} className='manage_button'>Edit</button>
                                            <button onClick={() => handleDeleteEvent(event.id)} className='manage_button'>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {eventEditMode === 'add' && (
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={newEvent.title}
                                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                                        />
                                </td>
                                <td>
                                    <textarea
                                        placeholder="Description"
                                        value={newEvent.description}
                                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        placeholder="Amount"
                                        value={newEvent.amount}
                                        onChange={(e) => setNewEvent({ ...newEvent, amount: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <button onClick={handleAddEvent} className='manage_button'>Add Event</button>
                                    <button onClick={() => setEventEditMode(null)} className='manage_button'>Cancel</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
                                        </>
    );
};

export default UserManagementPage;
