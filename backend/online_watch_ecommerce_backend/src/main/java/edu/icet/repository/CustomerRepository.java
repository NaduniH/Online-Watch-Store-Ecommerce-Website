package edu.icet.repository;

import edu.icet.entity.CustomerEntity;
import edu.icet.entity.ListedItemDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerEntity,Integer> {
}
