package com.backend.backend.Service;

// import java.util.List;
import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

import com.backend.backend.Model.Booking;
import com.backend.backend.Repository.BookingRepository;


// @Service
// public class BookingService {

//     @Autowired
//     private BookingRepo bookingRepository;

//     public List<Booking> getBookingDatas() {
//         return bookingRepository.findAll();
//     }

//     public Optional<Booking> getBookingById(long id) {
//         return bookingRepository.findById(id);
//     }

//     public Booking postBookingData(Booking data) {
//         return bookingRepository.save(data);
//     }

//     public Booking putBookingData(Booking data) {
//         return bookingRepository.save(data);
//     }

//     public void deleteBookingData(long id) {
//         bookingRepository.deleteById(id);
//     }
// }


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getBookingById(long id) {
        return bookingRepository.findById(id);
    }

    public void deleteBookingData(Long id) {
        bookingRepository.deleteById(id);
    }
}
