package com.mylesfung.travelsweden.controller;

import com.mylesfung.travelsweden.model.Review;
import com.mylesfung.travelsweden.repository.ReviewRepo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    // DB Connection object
    private final ReviewRepo reviewRepo;
    // Constructor injection :
    //  Spring Data JPA auto-generates/injects repo implementation
    public ReviewController(ReviewRepo reviewRepo) {
        this.reviewRepo = reviewRepo;
    }

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewRepo.findAll();
    }

    @PostMapping
    public void addReview(Review rvw) {
        reviewRepo.save(rvw);
    }
    @PutMapping
    public void editReview(Review rvw) {
        // edit review

    }

    @DeleteMapping
    public void deleteReview(Review rvw) {
        reviewRepo.delete(rvw);
    }

}
