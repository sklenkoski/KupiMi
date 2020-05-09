package com.kupimi.recepti.web;

import com.kupimi.recepti.model.Recipe;
import com.kupimi.recepti.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/api/recipes", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class RecipeApi {

    private final RecipeService recipeService;
    @Autowired
    public RecipeApi(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.findAll();
    }

    @GetMapping("/type/{type}")
    public List<Recipe> getRecipesByType(@PathVariable String type) {
        return recipeService.getRecipesByType(type);
    }

    @GetMapping("/{id}")
    public Optional<Recipe> getRecipe(@PathVariable String id){
        return this.recipeService.getRecipe(id);
    }

    @PostMapping("/add")
    public ResponseEntity createRecipe(@RequestBody Recipe recipe) throws Exception {
        this.recipeService.createRecipe(recipe);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PatchMapping("/update-recipe/{id}")
    public ResponseEntity updateRecipe(@RequestBody Recipe recipe) throws Exception {
        this.recipeService.updateRecipe(recipe);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteRecipe(@PathVariable String id) {
        recipeService.deleteRecipe(id);
    }
}
