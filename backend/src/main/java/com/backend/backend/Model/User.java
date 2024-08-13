package com.backend.backend.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private int id;
     private String name;
     private String email;
     private String password;
     private String confrimpassword;
     private String gender;
     private String role;
     private String dob;
     private String mobilenumber;
     private String state;
     private String country;
     private String languages;
}


// ------------------------------------------------------------------------------------------------



// package com.event.event.Model;

// import java.util.List;

// import jakarta.persistence.*;

// @Entity
// public class UserModel {
//         @Id
//         @GeneratedValue(strategy=GenerationType.IDENTITY)
//         private int id;

//         @Column(unique = true)
//         private String userName;

//         @Column(unique = true,nullable = false)
//         private String userEmail;

//         private String userPassword;
//         private String userPhonenumber;
//         private String userRole;


//         public int getId() {
//                 return id;
//         }


//         public void setId(int id) {
//                 this.id = id;
//         }


//         public String getUserName() {
//                 return userName;
//         }


//         public void setUserName(String userName) {
//                 this.userName = userName;
//         }


//         public String getUserEmail() {
//                 return userEmail;
//         }


//         public void setUserEmail(String userEmail) {
//                 this.userEmail = userEmail;
//         }


//         public String getUserPassword() {
//                 return userPassword;
//         }


//         public void setUserPassword(String userPassword) {
//                 this.userPassword = userPassword;
//         }


//         public String getUserPhonenumber() {
//                 return userPhonenumber;
//         }


//         public void setUserPhonenumber(String userPhonenumber) {
//                 this.userPhonenumber = userPhonenumber;
//         }


//         public String getUserRole() {
//                 return userRole;
//         }


//         public void setUserRole(String userRole) {
//                 this.userRole = userRole;
//         }


       
// }
