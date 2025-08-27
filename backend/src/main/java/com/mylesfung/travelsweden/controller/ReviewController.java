package com.mylesfung.travelsweden.controller;

import com.mylesfung.travelsweden.model.Review;
import com.mylesfung.travelsweden.repository.ReviewRepo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    private final ReviewRepo repo;
    // Constructor injection :
    //  Spring Data JPA auto-generates/injects repo implementation
    public ReviewController(ReviewRepo repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Review> getAllReviews() {
        return repo.findAll();
    }

    @PostMapping
    public void addReview(Review rvw) {
        repo.save(rvw);
    }

    @DeleteMapping
    public void deleteReview(Review rvw) {
        repo.delete(rvw);
    }

}
