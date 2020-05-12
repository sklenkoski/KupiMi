package com.kupimi.recepti.repository.jpa;

import com.kupimi.recepti.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeJpaRepository extends JpaRepository<Recipe, String> {
    List<Recipe> findByType(String type);
}
