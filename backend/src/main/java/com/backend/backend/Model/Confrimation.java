package com.backend.backend.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Confrimation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long confrimId;

    private String name;
    private String email;
    private String phone;
    private String bookingDate;
    private String describeEvent;
    private String address;
    private boolean bookingstatus;
    private boolean Paymentstatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "event_id")
    private Event event;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;
}
