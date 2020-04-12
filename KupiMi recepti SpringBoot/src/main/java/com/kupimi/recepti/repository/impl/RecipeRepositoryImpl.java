package com.kupimi.recepti.repository.impl;

import com.kupimi.recepti.model.Recipe;
import com.kupimi.recepti.repository.RecipeRepository;
import com.kupimi.recepti.repository.jpa.RecipeJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class RecipeRepositoryImpl implements RecipeRepository {

    private final RecipeJpaRepository repository;
    @Autowired
    public RecipeRepositoryImpl(RecipeJpaRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Recipe> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Recipe> findById(String id) {
        return this.repository.findById(id);
    }

    @Override
    public void deleteById(String id) {
        this.repository.deleteById(id);
    }

    @Override
    public Recipe save(Recipe recipe) {
        return this.repository.save(recipe);
    }

}
