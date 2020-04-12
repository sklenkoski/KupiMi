package com.kupimi.recepti.web;

import com.kupimi.recepti.model.User;
import com.kupimi.recepti.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/api/users", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class UserApi {

    private final UserService userService;
    @Autowired
    public UserApi(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<User> getUser(@PathVariable String id){
        return this.userService.getUser(id);
    }

    @PostMapping("/add")
    public ResponseEntity createUser(@RequestBody User user) throws Exception {
        this.userService.createUser(user);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PatchMapping("/update")
    public ResponseEntity updateUser(@RequestBody User user) throws Exception {
        this.userService.updateUser(user);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
    }
}
