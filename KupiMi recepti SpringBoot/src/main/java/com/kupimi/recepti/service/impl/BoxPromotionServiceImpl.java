package com.kupimi.recepti.service.impl;

import com.kupimi.recepti.model.BoxPromotion;
import com.kupimi.recepti.model.Recipe;
import com.kupimi.recepti.repository.BoxPromotionRepository;
import com.kupimi.recepti.repository.RecipeRepository;
import com.kupimi.recepti.service.BoxPromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoxPromotionServiceImpl implements BoxPromotionService {
    @Autowired
    private final BoxPromotionRepository boxPromotionRepository;
    @Autowired
    private final RecipeRepository recipeRepository;

    public BoxPromotionServiceImpl(BoxPromotionRepository boxPromotionRepository, RecipeRepository recipeRepository) {
        this.boxPromotionRepository = boxPromotionRepository;
        this.recipeRepository = recipeRepository;
    }

    @Override
    public List<BoxPromotion> findAll() {
        return this.boxPromotionRepository.findAll();
    }

    @Override
    public BoxPromotion createBoxPromotion(BoxPromotion boxPromotion) throws Exception {
        if (boxPromotion == null){
            throw new Exception();
        }
        for (Recipe r : boxPromotion.recipes) {
            recipeRepository.findById(r.getId()).orElseThrow(Exception::new);
        }
        return this.boxPromotionRepository.save(boxPromotion);
    }

    @Override
    public Optional<BoxPromotion> getBoxPromotion(String id) {
        return this.boxPromotionRepository.findById(id);
    }

    @Override
    public BoxPromotion updateBoxPromotion(BoxPromotion boxPromotion) throws Exception {
        if (boxPromotion == null){
            throw new Exception();
        }
        for (Recipe r : boxPromotion.recipes) {
            recipeRepository.findById(r.getId()).orElseThrow(Exception::new);
        }
        this.boxPromotionRepository.findById(boxPromotion.getId()).orElseThrow(Exception::new);
        return this.boxPromotionRepository.save(boxPromotion);
    }

    @Override
    public void deleteBoxPromotion(String id) {
        this.boxPromotionRepository.deleteById(id);
    }
}
