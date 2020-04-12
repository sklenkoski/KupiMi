package com.kupimi.recepti.service.impl;

import com.kupimi.recepti.model.User;
import com.kupimi.recepti.repository.UserRepository;
import com.kupimi.recepti.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return this.userRepository.findAll();
    }

    @Override
    public User createUser(User user) throws Exception {
        if (user == null){
            throw new Exception();
        }
        return this.userRepository.save(user);
    }

    @Override
    public Optional<User> getUser(String id){
        return this.userRepository.findById(id);
    }

    @Override
    public User updateUser(User user) throws Exception {
        if (user == null){
            throw new Exception();
        }
        return this.userRepository.save(user);
    }

    @Override
    public void deleteUser(String id) {
        this.userRepository.deleteById(id);
    }
}
