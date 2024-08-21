// import axios from 'axios';

// const API_URL = 'http://localhost:1230';

// // Function to get all user data
// export const getData = async () => {
//     return await axios.get(`${API_URL}/GetAllUsers`);
// };

// // Function to post new user data
// export const postData = async (username, email, password, role, gender) => {
//     const { data: edata } = await getData();

//     const newUser = {
//         name: username,
//         email: email,
//         password: password,
//         confrimpassword: password,
//         gender: gender,
//         role: role
//     };

//     await axios.post(`${API_URL}/User/insert`, newUser);
// };


// // Function to update user data
// export const updateData = async (id, updatedUser) => {
//     await axios.put(`${API_URL}/User/Update/{id}/${id}`, updatedUser);
// };

// // Function to delete user data
// export const deleteData = async (id) => {
//     await axios.delete(`${API_URL}/UserData/${id}`);
// };

// // Function to get user data by ID
// export const getUserData = async (id) => {
//     const res = await axios.get(`${API_URL}/User/Update/{id}/${id}`);
//     return res.data;
// };

// // Function to update user password
// export const setNewUserPassword = async (id, updatedUser) => {
//     await axios.put(`${API_URL}/User/Update/{id}/${id}`, updatedUser);
// };
// --------------------------------------------------------------------------------------------------------------------------------


import axios from 'axios';

const API_URL = 'http://localhost:1230';

// User Data API Functions

// Function to get all user data
export const getData = async () => {
    return await axios.get(`${API_URL}/GetAllUsers`);
};

// Function to post new user data
export const postData = async (username, email, password, role, gender) => {
    const newUser = {
        name: username,
        email: email,
        password: password,
        confrimpassword: password,
        gender: gender,
        role: role
    };

    await axios.post(`${API_URL}/User/insert`, newUser);
};

// Function to update user data
export const updateData = async (id, updatedUser) => {
    await axios.put(`${API_URL}/User/Update/${id}`, updatedUser);
};

// Function to delete user data
export const deleteData = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/DeleteUser/${id}`);
        console.log('Delete response:', response.data);
    } catch (error) {
        console.error('Error deleting data:', error.response ? error.response.data : error.message);
    }
};

// Function to get user data by ID
export const getUserData = async (id) => {
    const res = await axios.get(`${API_URL}/User/Update/${id}`);
    return res.data;
};

// Function to update user password
export const setNewUserPassword = async (id, updatedUser) => {
    await axios.put(`${API_URL}/User/Update/${id}`, updatedUser);
};

// =================================================================

// Event Data API Functions

// Function to get all events data

export const getEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/Events`);
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  };


// Function to post new event data
export const postEvent = async (title,desc,img,amu) => {
const ND ={
    title:title,
    description  : desc,
    amount : amu
};
    await axios.post(`${API_URL}/InsertEvents`, ND);
};

// Function to update event data
export const updateEvent = async (id, updatedEvent) => {
    try {
        console.log(updateEvent);
        const response = await axios.put(`${API_URL}/UpdateEvent`, updatedEvent)
        return response.data;
    } catch (error) {
        throw error; // Propagate the error to be caught in the calling function
    }
};

// Function to get event data by ID
export const getEventById = async (id) => {
    const response = await axios.get(`${API_URL}/Events/${id}`);
    return response.data;
};


// Function to delete event data
export const deleteEvent = async (id) => {
    await axios.delete(`${API_URL}/DeleteEvent/${id}`);
};

//====================================================================================================================


// Function to post new booking data
export const postBooking = async (bookingData) => {
    try {
        const response = await axios.post(`${API_URL}/InsertBooking`, bookingData);
        console.log('Booking Data Response:', response.data);
    } catch (error) {
        console.error('Error posting booking data:', error);
    }
};

// Function to get all bookings
export const getBookings = async () => {
    try {
        const response = await axios.get(`${API_URL}/Booking`);
        return response.data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
};

// Function to get booking data by ID
export const getBookingById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/Booking/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching booking by ID:', error);
        throw error;
    }
};

// Function to update booking status
export const updateBookingStatus = async (id, updatedStatus) => {
    try {
        const bookingData = {
            bookingstatus: updatedStatus
        };
        const response = await axios.put(`${API_URL}/UpdateBookingStatus/${id}`, bookingData);
        return response.data;
    } catch (error) {
        console.error('Error updating booking status:', error);
        throw error;
    }
};

// Function to delete booking data
export const deleteBooking = async (id) => {
    try {
        await axios.delete(`${API_URL}/DeleteBooking/${id}`);
        console.log('Booking deleted successfully.');
    } catch (error) {
        console.error('Error deleting booking:', error);
        throw error;
    }
};


//================================================================

// Function to create a confirmation record


export const postconfrim = async (confrimationData) => {
    try {
      const response = await axios.post(`${API_URL}/createConfrimation`, confrimationData);
      return response.data;
    } catch (error) {
      console.error('Error creating confirmation:', error);
      throw error;
    }
  };
  

export const deleteconfrim = async (id) => {
    try {
        await axios.delete(`${API_URL}/deleteconfrimation/${id}`);
        console.log('Confirmation deleted successfully');
    } catch (error) {
        console.error('Error deleting confirmation:', error.response ? error.response.data : error.message);
        throw new Error('Failed to delete confirmation');
    }
};

// Function to get all confirmations

export const getAllConfrimations = async () => {
    try {
        const response = await axios.get(`${API_URL}/getallconfrimation`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all confirmations:', error);
        throw error;
    }
};


export const getUserConfrimations = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/getuserconfrimations`, { params: { email } });
        return response.data;
    } catch (error) {
        console.error('Error fetching user confirmations:', error);
        throw error;
    }
};


