package com.kupimi.recepti.service.impl;

import com.kupimi.recepti.model.Recipe;
import com.kupimi.recepti.repository.RecipeRepository;
import com.kupimi.recepti.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeServiceImpl implements RecipeService {
    @Autowired
    private final RecipeRepository recipeRepository;

    public RecipeServiceImpl(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @Override
    public List<Recipe> findAll() {
        return this.recipeRepository.findAll();
    }

    @Override
    public Recipe createRecipe(Recipe recipe) throws Exception {
        if(recipe == null){
            throw new Exception();
        }
        return this.recipeRepository.save(recipe);
    }

    @Override
    public Optional<Recipe> getRecipe(String id)  {
        return this.recipeRepository.findById(id);
    }

    @Override
    public Recipe updateRecipe(Recipe recipe) throws Exception {
        if(recipe == null){
            throw new Exception();
        }
        this.recipeRepository.findById(recipe.getId()).orElseThrow(Exception::new);
        return this.recipeRepository.save(recipe);
    }

    @Override
    public void deleteRecipe(String id) {
        this.recipeRepository.deleteById(id);
    }

}
