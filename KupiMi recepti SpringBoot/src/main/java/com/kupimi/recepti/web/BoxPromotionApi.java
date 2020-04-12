package com.kupimi.recepti.web;

import com.kupimi.recepti.model.BoxPromotion;
import com.kupimi.recepti.service.BoxPromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/api/boxes", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class BoxPromotionApi {

    private final BoxPromotionService boxPromotionService;
    @Autowired
    public BoxPromotionApi(BoxPromotionService boxPromotionService) {
        this.boxPromotionService = boxPromotionService;
    }

    @GetMapping
    public List<BoxPromotion> getAllBoxPromotions() {
        return boxPromotionService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<BoxPromotion> getBoxPromotion(@PathVariable String id){
        return this.boxPromotionService.getBoxPromotion(id);
    }

    @PostMapping("/add")
    public ResponseEntity createBoxPromotion(@RequestBody BoxPromotion boxPromotion) throws Exception {
        this.boxPromotionService.createBoxPromotion(boxPromotion);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PatchMapping("/update-box-promotion/{id}")
    public ResponseEntity updateBoxPromotion(@RequestBody BoxPromotion boxPromotion) throws Exception {
        this.boxPromotionService.updateBoxPromotion(boxPromotion);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBoxPromotion(@PathVariable String id) {
        boxPromotionService.deleteBoxPromotion(id);
    }

}
