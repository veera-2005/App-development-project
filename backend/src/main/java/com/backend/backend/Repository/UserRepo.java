// package com.backend.backend.Repository;
// import java.util.List;

// import org.springframework.data.jpa.repository.JpaRepository;

// import com.backend.backend.Model.Confrimation;
// import com.backend.backend.Model.User;



// public interface UserRepo extends JpaRepository<User,Integer> {
//     User findByUsername(String username);
//     List<Confrimation> findByUser_Id(int userId);
// }
package com.backend.backend.Repository;

import com.backend.backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepo extends JpaRepository<User, Integer> {
    @Query("SELECT u FROM User u WHERE u.name = :username")
    User findByUsername(String username);
}
