package edu.icet.controller;

import edu.icet.dto.Customer;
import edu.icet.dto.Item;
import edu.icet.service.CustomerService;
import edu.icet.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/customer")
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping("/add")
    public ResponseEntity<String> addItem (@RequestBody Customer customer){
        try {

            customerService.addCustomer(customer);
            return ResponseEntity.ok("Customer added successfully");
        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.badRequest().body("Error adding Customer: " + e.getMessage());
        }
    }
}
