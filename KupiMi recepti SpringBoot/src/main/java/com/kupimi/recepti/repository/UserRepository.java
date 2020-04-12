package com.kupimi.recepti.repository;

import com.kupimi.recepti.model.User;
import com.kupimi.recepti.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


public interface UserRepository {

    List<User> findAll();

    Optional<User> findById(String id);

    void deleteById(String id);

    User save(User user);
}
