package com.kupimi.recepti.repository.jpa;

import com.kupimi.recepti.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeJpaRepository extends JpaRepository<Recipe, String> {
}
