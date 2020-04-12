package com.kupimi.recepti.service;

import com.kupimi.recepti.model.BoxPromotion;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface BoxPromotionService {
    List<BoxPromotion> findAll();

    BoxPromotion createBoxPromotion(BoxPromotion boxPromotion) throws Exception;

    Optional<BoxPromotion> getBoxPromotion(String id);

    BoxPromotion updateBoxPromotion(BoxPromotion boxPromotion) throws Exception;

    void deleteBoxPromotion(String id);

}
