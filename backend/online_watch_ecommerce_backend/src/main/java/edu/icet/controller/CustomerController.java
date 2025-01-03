package edu.icet.controller;

import edu.icet.dto.Customer;
import edu.icet.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import java.util.Optional;


@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/customer")
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping("/addCustomer")
    public void addCustomer (@RequestBody Customer customer){
        customerService.addCustomer(customer);
    }

    @GetMapping("/getAllCustomer")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }

    @PutMapping("/updateCustomer")
    public void UpdateCustomer (@RequestBody Customer customer){
        customerService.UpdateCustomer(customer);
    }

    @DeleteMapping("/deleteCustomer/{id}")
    public void deleteCustomer(@PathVariable Integer id) {
        customerService.deleteCustomer(id);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Customer loginRequest) {
        Optional<Customer> customer = customerService.login(loginRequest.getEmail(), loginRequest.getPassword());
        if (customer.isPresent()) {
            return ResponseEntity.status(200).body("Login Successful");
        } else {
            return ResponseEntity.status(404).body("You are not a registered customer. Please register and login to place your order.");
        }
    }


}
