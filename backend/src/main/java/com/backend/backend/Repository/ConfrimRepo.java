package com.backend.backend.Repository;

import com.backend.backend.Model.Confrimation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ConfrimRepo extends JpaRepository<Confrimation, Long> {

    @Query("SELECT c FROM Confrimation c WHERE c.user.id = :userId")
    List<Confrimation> findByUserId(@Param("userId") int userId);

    public List<Confrimation> findByUserEmail(String email);

}