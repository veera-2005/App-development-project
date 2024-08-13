// package com.backend.backend.Controller;

// import com.backend.backend.Model.Confrimation;
// import com.backend.backend.Service.ConfrimService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.web.server.ResponseStatusException;

// import java.util.List;

// @RestController
// @CrossOrigin
// public class ConfrimController {

//     @Autowired
//     private ConfrimService confrimService;

//     @PostMapping("/createconfrimation")
//     public Confrimation createConfrimation(@RequestBody Confrimation confrimation) {
//         try {
//             return confrimService.saveConfrimation(confrimation);
//         } catch (Exception e) {
//             e.printStackTrace();
//             throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to create confirmation", e);
//         }
//     }


//      @GetMapping("/getallconfrimation")
//     public List<Confrimation> getAllConfrimations() {
//         return confrimService.getAllConfrimations();
//     }

//     @GetMapping("/getconfrimation/{id}")
//     public Confrimation getConfrimationById(@PathVariable Long id) {
//         return confrimService.getConfrimationById(id);
//     }

//     @PutMapping("/updateconfrimation/{id}")
//     public Confrimation updateConfrimation(@PathVariable Long id, @RequestBody Confrimation confrimation) {
//         confrimation.setConfrimId(id); // Ensure the ID is set
//         return confrimService.saveConfrimation(confrimation);
//     }

//     @DeleteMapping("/deleteconfrimation/{id}")
//     public void deleteConfrimation(@PathVariable Long id) {
//         confrimService.deleteConfrimation(id);
//     }
// }
// -----------------------------------------------------------

package com.backend.backend.Controller;

import com.backend.backend.Model.Confrimation;
import com.backend.backend.Model.User;
import com.backend.backend.Service.ConfrimService;
import com.backend.backend.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin
public class ConfrimController {

    @Autowired
    private ConfrimService confrimService;


    @Autowired
    private UserService userService;

    @PostMapping("/createConfrimation")
    public ResponseEntity<Confrimation> createConfirmation(@RequestBody Confrimation confirmation) {
        System.out.println("Received Confirmation Data: " + confirmation);
        Confrimation savedConfirmation = confrimService.createConfirmation(confirmation);
        return ResponseEntity.ok(savedConfirmation);
    }
    

   @GetMapping("/getuserconfrimations")
public ResponseEntity<List<Confrimation>> getUserConfrimations(@RequestParam String email) {
    List<Confrimation> confrimations = confrimService.findByUserEmail(email);
    return ResponseEntity.ok(confrimations);
}
    

    @GetMapping("/getallconfrimation")
    public List<Confrimation> getAllConfrimations() {
        return confrimService.getAllConfrimations();
    }

    @GetMapping("/getconfrimation/{id}")
    public Confrimation getConfrimationById(@PathVariable Long id) {
        return confrimService.getConfrimationById(id);
    }

    @PutMapping("/updateconfrimation/{id}")
    public Confrimation updateConfrimation(@PathVariable Long id, @RequestBody Confrimation confrimation) {
        confrimation.setConfrimId(id); // Ensure the ID is set
        return confrimService.saveConfrimation(confrimation);
    }

    @DeleteMapping("/deleteconfrimation/{id}")
    public void deleteConfrimation(@PathVariable Long id) {
        confrimService.deleteConfrimation(id);
    }
}
