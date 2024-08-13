// package com.backend.backend.Service;

// // import java.lang.foreign.Linker.Option;
// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.backend.backend.Model.Confrimation;
// import com.backend.backend.Model.User;
// import com.backend.backend.Repository.ConfrimRepo;
// import com.backend.backend.Repository.UserRepo;


// @Service
// public class UserService {
//      @Autowired
//      UserRepo userrepo;
//      @Autowired
//      ConfrimRepo confrimrepo;

//      public  User user(User U)
//      {
//         return userrepo.save(U);
//      }
     
//       public List<User> getall()
//       {
//          return userrepo.findAll();
//       }

//       public Optional<User> getbyid(int id)
//       {
//          return userrepo.findById(id);
//       }

//       public User updateuser(User user)
//       {
//          return userrepo.save(user);
//       }
//        public void deleteuser(int id)
//       {
//          userrepo.deleteById(id);
//       }

//       public User getUserByUsername(String username) {
//          return userrepo.findByUsername(username);

//      }

//      public List<Confrimation> getConfrimationsByUserId(int userId) 
//       {
//             return userrepo.findByUser_Id(userId); // Use 'Id' if the field is 'id' in the User entity
//       }
// }


package com.backend.backend.Service;

import com.backend.backend.Model.Confrimation;
import com.backend.backend.Model.User;
import com.backend.backend.Repository.ConfrimRepo;
import com.backend.backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    
    @Autowired
    UserRepo userrepo;
    
    @Autowired
    ConfrimRepo confrimrepo;

    public User user(User U) {
        return userrepo.save(U);
    }

    public List<User> getall() {
        return userrepo.findAll();
    }

    public Optional<User> getbyid(int id) {
        return userrepo.findById(id);
    }

    public User updateuser(User user) {
        return userrepo.save(user);
    }

    public void deleteuser(int id) {
        userrepo.deleteById(id);
    }

    public User getUserByUsername(String username) {
        return userrepo.findByUsername(username);
    }

    public List<Confrimation> getConfrimationsByUserId(int userId) {
      return confrimrepo.findByUserId(userId);
  }

}



// package com.event.event.Service;

// import org.springframework.security.core.userdetails.User;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.event.*;
// import com.event.event.Model.UserModel;
// import com.event.event.Repository.UserRepo;
// import com.event.*;

// @Service
// public class UserService implements UserDetailsService {

//     @Autowired
//     private UserRepo userRepo;

//     @Override
//     public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//     UserModel user = userRepo.findByUserEmail(email);
//     if (user == null) {
//         throw new UsernameNotFoundException("User not found with email: " + email);
//     }
//     return User.withUsername(user.getUserEmail())
//                .password(user.getUserPassword())
//                .roles(user.getUserRole())
//                .build();
//     }

// }