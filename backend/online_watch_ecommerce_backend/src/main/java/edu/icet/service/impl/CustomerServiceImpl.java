package edu.icet.service.impl;

import edu.icet.dto.Customer;
import edu.icet.entity.CustomerEntity;
import edu.icet.repository.CustomerRepository;
import edu.icet.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    final CustomerRepository customerRepository;
    final ModelMapper mapper;

    @Override
    public void addCustomer(Customer customer) {
        customerRepository.save(mapper.map(customer, CustomerEntity.class));
    }

    @Override
    public List<Customer> getAllCustomers() {
        List<Customer> customerList= new ArrayList<>();
        customerRepository.findAll().forEach(entity->{
            customerList.add(mapper.map(entity,Customer.class));
        });

        return customerList;
    }

    @Override
    public void UpdateCustomer(Customer customer) {
        customerRepository.save(mapper.map(customer, CustomerEntity.class));
    }

    @Override
    public void deleteCustomer(Integer id) {
        customerRepository.deleteById(id);

    }

    @Override
    public Optional<Customer> login(String email, String password) {
        List<CustomerEntity> customers = customerRepository.findByEmailAndPassword(email, password);

        if (customers.size() == 1) {
            return Optional.of(mapper.map(customers.get(0), Customer.class));
        } else {
            // No customer found or multiple customers with the same email and password
            return Optional.empty(); // Return empty to indicate user not found
        }
    }




}
