package edu.icet.repository;

import edu.icet.entity.ListedItemDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemDetailRepository extends JpaRepository<ListedItemDetail,Integer> {
}
