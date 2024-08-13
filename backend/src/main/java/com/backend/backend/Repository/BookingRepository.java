package com.backend.backend.Repository;

// import org.springframework.data.jpa.repository.JpaRepository;






// public interface BookingRepo extends JpaRepository<Booking,Long>{
    
// }

import com.backend.backend.Model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
