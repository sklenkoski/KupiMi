package com.kupimi.recepti.repository.jpa;

import com.kupimi.recepti.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserJpaRepository extends JpaRepository<User, String> {
}
