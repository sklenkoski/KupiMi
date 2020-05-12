package com.kupimi.recepti.service;

import com.kupimi.recepti.model.Order;
import com.kupimi.recepti.model.Recipe;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface OrderService {
    List<Order> findAll();

    Order createOrder(Order order) throws Exception;

    Optional<Order> getOrder(String id);

    void deleteOrder(String id);

    int countByTown(String town);

    int sumPriceByYear(String year);
}
