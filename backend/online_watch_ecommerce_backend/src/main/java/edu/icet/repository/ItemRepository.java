package edu.icet.repository;

import edu.icet.entity.ListedItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<ListedItem,Integer> {

//    @Query("select u from ListedItem u where u.itemCode = :code")
//    ListedItem findByItemCode(@Param("code")String code);

    @Query(value = "select * from listed_item where item_code = :code", nativeQuery = true)
    ListedItem findByItemCode(@Param("code")String code);
}
