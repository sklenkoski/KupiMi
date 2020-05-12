package com.kupimi.recepti.service;

import com.kupimi.recepti.model.Recipe;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface RecipeService {
    List<Recipe> findAll();

    List<Recipe> getRecipesByType(String type);

    Recipe createRecipe(Recipe recipe) throws Exception;

    Optional<Recipe> getRecipe(String id);

    Recipe updateRecipe(Recipe recipe) throws Exception;

    void deleteRecipe(String id);

}
