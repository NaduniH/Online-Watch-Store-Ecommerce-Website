package edu.icet.repository;

import edu.icet.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;


import java.util.Optional;


@Repository
public interface CustomerRepository extends JpaRepository<CustomerEntity,Integer> {
    List<CustomerEntity> findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
}
