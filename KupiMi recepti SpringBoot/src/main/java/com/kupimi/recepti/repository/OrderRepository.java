package com.kupimi.recepti.repository;

import com.kupimi.recepti.model.Order;
import com.kupimi.recepti.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


public interface OrderRepository{

    List<Order> findAll();

    Optional<Order> findById(String id);

    void deleteById(String Id);

    Order save(Order order);
}
