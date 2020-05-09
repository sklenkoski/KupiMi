package com.kupimi.recepti.repository;

import com.kupimi.recepti.model.Recipe;
import com.kupimi.recepti.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


public interface RecipeRepository{

    List<Recipe> findAll();

    List<Recipe> getRecipesByType(String type);

    Optional<Recipe> findById(String id);

    void deleteById(String id);

    Recipe save(Recipe recipe);




}
