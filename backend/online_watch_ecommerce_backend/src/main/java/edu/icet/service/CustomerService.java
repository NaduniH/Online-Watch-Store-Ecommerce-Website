package edu.icet.service;

import edu.icet.dto.Customer;
import java.util.Optional;


import java.util.List;

public interface CustomerService {
    void addCustomer(Customer customer);

    List<Customer> getAllCustomers();

    void UpdateCustomer(Customer customer);

    void deleteCustomer(Integer id);

    Optional<Customer> login(String email, String password);  // Updated return type
}