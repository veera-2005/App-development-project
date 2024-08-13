package com.backend.backend.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.backend.Model.Manager;



public interface ManagerRepo extends JpaRepository<Manager,Integer> {

}
