package com.kupimi.recepti.service.impl;

import com.kupimi.recepti.model.BoxPromotion;
import com.kupimi.recepti.model.Order;
import com.kupimi.recepti.model.Recipe;
import com.kupimi.recepti.repository.BoxPromotionRepository;
import com.kupimi.recepti.repository.OrderRepository;
import com.kupimi.recepti.repository.RecipeRepository;
import com.kupimi.recepti.repository.UserRepository;
import com.kupimi.recepti.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private final OrderRepository orderRepository;
    @Autowired
    private final BoxPromotionRepository boxPromotionRepository;
    @Autowired
    private final RecipeRepository recipeRepository;
    @Autowired
    private final UserRepository userRepository;

    public OrderServiceImpl(OrderRepository orderRepository, BoxPromotionRepository boxPromotionRepository, RecipeRepository recipeRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.boxPromotionRepository = boxPromotionRepository;
        this.recipeRepository = recipeRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<Order> findAll() {
        return this.orderRepository.findAll();
    }

    @Override
    public Order createOrder(Order order) throws Exception {
        if (order == null){
            throw new Exception();
        }
        for (Recipe r : order.recipes) {
            recipeRepository.findById(r.getId()).orElseThrow(Exception::new);
        }
        for (BoxPromotion b : order.boxPromotions) {
            recipeRepository.findById(b.getId()).orElseThrow(Exception::new);
        }

        return this.orderRepository.save(order);
    }

    @Override
    public Optional<Order> getOrder(String id)  {
        return this.orderRepository.findById(id);
    }

    @Override
    public void deleteOrder(String id) {
        this.orderRepository.deleteById(id);
    }

    @Override
    public int countByTown(String town) {
        return this.orderRepository.countByTown(town);
    }

    @Override
    public int sumPriceByYear(String year) {
        return this.orderRepository.sumPriceByYear(year);
    }
}
