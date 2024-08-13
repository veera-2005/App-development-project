package com.backend.backend.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Manager {
     @Id
     @GeneratedValue(strategy = GenerationType.AUTO)
     private int id;
     private String Request;
     private String name;
     private String email;
     private String password;
     private String passwordConfirmation;
     private String Gender;
     private String Role;
     private String Country;
     private String State;
     private String Languages;
}