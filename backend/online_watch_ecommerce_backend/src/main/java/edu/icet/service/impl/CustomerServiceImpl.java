package edu.icet.service.impl;

import edu.icet.dto.Customer;
import edu.icet.entity.CustomerEntity;
import edu.icet.entity.ListedItem;
import edu.icet.repository.CustomerRepository;
import edu.icet.repository.ItemRepository;
import edu.icet.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    final CustomerRepository customerRepository;
    final ModelMapper mapper;

    @Override
    public void addCustomer(Customer customer) {
        CustomerEntity customerEntity = mapper.map(customer, CustomerEntity.class);
        customerRepository.save(customerEntity);
    }
}
