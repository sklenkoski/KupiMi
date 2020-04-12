package com.kupimi.recepti.service;

import com.kupimi.recepti.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface UserService {
    List<User> findAll();

    User createUser(User user) throws Exception;

    Optional<User> getUser(String id);

    User updateUser(User user) throws Exception;

    void deleteUser(String id);

}
