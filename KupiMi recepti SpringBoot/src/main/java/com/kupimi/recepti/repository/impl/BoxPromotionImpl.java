package com.kupimi.recepti.repository.impl;

import com.kupimi.recepti.model.BoxPromotion;
import com.kupimi.recepti.repository.BoxPromotionRepository;
import com.kupimi.recepti.repository.jpa.BoxPromotionJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class BoxPromotionImpl implements BoxPromotionRepository {

    private final BoxPromotionJpaRepository repository;
    @Autowired
    public BoxPromotionImpl(BoxPromotionJpaRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<BoxPromotion> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<BoxPromotion> findById(String id) {

        return this.repository.findById(id);
    }

    @Override
    public void deleteById(String id) {
        this.repository.deleteById(id);
    }

    @Override
    public BoxPromotion save(BoxPromotion boxPromotion) {
        return this.repository.save(boxPromotion);
    }
}
