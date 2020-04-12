package com.kupimi.recepti.repository.jpa;

import com.kupimi.recepti.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderJpaRepository extends JpaRepository<Order, String> {
}
