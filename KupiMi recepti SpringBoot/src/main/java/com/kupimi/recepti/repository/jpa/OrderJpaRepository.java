package com.kupimi.recepti.repository.jpa;

import com.kupimi.recepti.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderJpaRepository extends JpaRepository<Order, String> {
    int countByClientAddressContains(String town);

    @Query(value = "SELECT SUM(o.price) FROM Order o WHERE o.date LIKE CONCAT('%', :year , '%')",
            nativeQuery = true)
    int sumByYear(@Param("year") String year);
}
