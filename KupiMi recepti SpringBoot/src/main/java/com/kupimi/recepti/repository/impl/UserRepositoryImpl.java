package com.kupimi.recepti.repository.impl;

import com.kupimi.recepti.model.User;
import com.kupimi.recepti.repository.UserRepository;
import com.kupimi.recepti.repository.jpa.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserRepositoryImpl implements UserRepository {

    private final UserJpaRepository repository;
    @Autowired
    public UserRepositoryImpl(UserJpaRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<User> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<User> findById(String id) {
        return this.repository.findById(id);
    }

    @Override
    public void deleteById(String id) {
        this.repository.deleteById(id);
    }

    @Override
    public User save(User user) {
        return this.repository.save(user);
    }
}
