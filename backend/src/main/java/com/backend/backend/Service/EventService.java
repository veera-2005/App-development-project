package com.backend.backend.Service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.backend.Model.Event;
import com.backend.backend.Repository.EventsRepo;


@Service
public class EventService {
    
    @Autowired
    private EventsRepo everepo;

    public List<Event> getEvents(){
        return everepo.findAll();
    }

    public Optional<Event> getEventById(long id){
        return everepo.findById(id);
    }

    public Event postEvent(Event data)
    {
        return everepo.save(data);
    }

    public Event updateEvent(Event data)
    {
        return everepo.save(data);
    }

    public void deleteEvent(long id)
    {
        everepo.deleteById(id);
    }


}