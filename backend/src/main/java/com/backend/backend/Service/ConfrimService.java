// package com.backend.backend.Service;

// import com.backend.backend.Model.Confrimation;
// import com.backend.backend.Repository.ConfrimRepo;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class ConfrimService {

//     @Autowired
//     private ConfrimRepo confrimRepo;


//     public List<Confrimation> getAllConfrimations() {
//         return confrimRepo.findAll();
//     }

//     public Confrimation getConfrimationById(Long id) {
//         return confrimRepo.findById(id).orElse(null);
//     }

//     public Confrimation saveConfrimation(Confrimation confrimation) {
//         try {
//             return confrimRepo.save(confrimation);
//         } catch (Exception e) {
//             e.printStackTrace();
//             throw new RuntimeException("Failed to save confirmation", e);
//         }
//     }

//     public void deleteConfrimation(Long id) {
//         confrimRepo.deleteById(id);
//     }
// }

// ----------------------------------------------------------------
package com.backend.backend.Service;

import com.backend.backend.Model.Confrimation;
import com.backend.backend.Repository.ConfrimRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConfrimService {

    @Autowired
    private ConfrimRepo confrimRepo;

    public List<Confrimation> getAllConfrimations() {
        return confrimRepo.findAll();
    }

    public Confrimation getConfrimationById(Long id) {
        return confrimRepo.findById(id).orElse(null);
    }

    public List<Confrimation> getConfrimationsByUserId(int userId) {
        return confrimRepo.findByUserId(userId);
    }

    public List<Confrimation> findByUserEmail(String email) {
        return confrimRepo.findByUserEmail(email);
    }
    


    public Confrimation saveConfrimation(Confrimation confrimation) {
        try {
            return confrimRepo.save(confrimation);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to save confirmation", e);
        }
    }

    public Confrimation createConfirmation(Confrimation confirmation) {
        // Save the confirmation object to the database
        return confrimRepo.save(confirmation);
    }

    public void deleteConfrimation(Long id) {
        confrimRepo.deleteById(id);
    }
}
