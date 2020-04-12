package com.kupimi.recepti.web;

import com.kupimi.recepti.model.Order;
import com.kupimi.recepti.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/api/orders", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class OrderApi {

    private final OrderService orderService;
    @Autowired
    public OrderApi(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Order> getOrder(@PathVariable String id){
        return this.orderService.getOrder(id);
    }

    @PostMapping("/add")
    public ResponseEntity createOrder(@RequestBody Order Order) throws Exception {
        this.orderService.createOrder(Order);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteOrder(@PathVariable String id) {
        orderService.deleteOrder(id);
    }
}
