package com.backend.backend.Controller;
import com.backend.backend.Model.Booking;
import com.backend.backend.Service.BookingService;

// @CrossOrigin
// @RestController
// public class BookingController {
    
//     @Autowired
//     private BookingService bookingService;

//     @GetMapping("/Booking")
//     public List<Booking> getBookingDatas() {
//         return bookingService.getBookingDatas();
//     }

//     @GetMapping("/Booking/{id}")
//     public Optional<Booking> getBookingData(@PathVariable long id) {
//         return bookingService.getBookingById(id);
//     }

//     @PostMapping("/InsertBooking")
//     public Booking postBookingData(@RequestBody Booking data) {
//         return bookingService.postBookingData(data);
//     }

//     @PutMapping("/UpdateBooking")
//     public Booking putBookingData(@RequestBody Booking data) {
//         return bookingService.putBookingData(data);
//     }
    
//     @DeleteMapping("/DeleteBooking/{id}")
//     public void deleteBookingData(@PathVariable long id)
//     {
//         bookingService.deleteBookingData(id);
//     }
    
    

// }

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.RestController;

// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// // import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/InsertBooking")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.saveBooking(booking);
    }

    @GetMapping("/Booking")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    
    @PutMapping("/UpdateBookingStatus/{id}")
    public ResponseEntity<Booking> updateBookingStatus(@PathVariable long id, @RequestBody Booking bookingDetails) {
        Optional<Booking> optionalBooking = bookingService.getBookingById(id);

        if (!optionalBooking.isPresent()) {
            // Return a 404 Not Found response if the booking is not found
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Booking booking = optionalBooking.get();
        booking.setBookingstatus(bookingDetails.isBookingstatus());
        Booking updatedBooking = bookingService.saveBooking(booking);

        // Return the updated booking with a 200 OK response
        return new ResponseEntity<>(updatedBooking, HttpStatus.OK);
    }
    @DeleteMapping("/DeleteBooking/{id}")
    public void deleteBookingData(@PathVariable long id) {
        bookingService.deleteBookingData(id);
    }
  
}
