package com.kupimi.recepti.repository.impl;

import com.kupimi.recepti.model.Order;
import com.kupimi.recepti.repository.OrderRepository;
import com.kupimi.recepti.repository.jpa.OrderJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class OrderRepositoryImpl implements OrderRepository {

    private final OrderJpaRepository repository;
    @Autowired
    public OrderRepositoryImpl(OrderJpaRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Order> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Order> findById(String id) {
        return this.repository.findById(id);
    }

    @Override
    public void deleteById(String id) {
        this.repository.deleteById(id);
    }

    @Override
    public Order save(Order order) {
        return this.repository.save(order);
    }

    @Override
    public int countByTown(String town) {
        return this.repository.countByClientAddressContains(town);
    }

    @Override
    public int sumPriceByYear(String year) {
        return repository.sumByYear(year);
    }
}
