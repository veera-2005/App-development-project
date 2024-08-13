package com.backend.backend.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.backend.Model.Manager;
import com.backend.backend.Repository.ManagerRepo;


@Service
public class ManagerService {
    @Autowired
    ManagerRepo managerRepo;

     public Manager manager(Manager M)
     {
        return managerRepo.save(M);
     }

     public Optional<Manager> getManagerbyid(int id)
     {
        return managerRepo.findById(id);
     }
}
