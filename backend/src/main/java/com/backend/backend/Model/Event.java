package com.backend.backend.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Event {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;
    private double amount;
}
