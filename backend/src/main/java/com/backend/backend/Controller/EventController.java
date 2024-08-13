package com.backend.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.Model.Event;
import com.backend.backend.Service.EventService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@CrossOrigin
public class EventController {
    

    @Autowired
    private EventService eveservice;

    @PostMapping("/InsertEvents")
    public Event postEvent(@RequestBody Event data) {
        return eveservice.postEvent(data);
    }
    
    @GetMapping("/Events")
    public List<Event> getEvents() {
        return eveservice.getEvents();
    }

    @GetMapping("/Events/{id}")
    public Optional<Event> getEventById(@PathVariable long id) {
        return eveservice.getEventById(id);
    }


    @PutMapping("/UpdateEvent")
    public Event updateEvent(@RequestBody Event data) {
        return eveservice.updateEvent(data);
    }

    @DeleteMapping("/DeleteEvent/{id}")
    public void deleteEvent(@PathVariable long id) {
        eveservice.deleteEvent(id);
    }
    
    
}
