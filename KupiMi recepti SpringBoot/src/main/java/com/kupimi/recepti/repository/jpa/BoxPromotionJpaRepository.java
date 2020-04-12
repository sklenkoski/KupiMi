package com.kupimi.recepti.repository.jpa;

import com.kupimi.recepti.model.BoxPromotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoxPromotionJpaRepository extends JpaRepository<BoxPromotion,String> {
}
