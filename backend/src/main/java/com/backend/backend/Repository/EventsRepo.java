package com.backend.backend.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.backend.Model.Event;




public interface EventsRepo extends JpaRepository<Event,Long> {

}