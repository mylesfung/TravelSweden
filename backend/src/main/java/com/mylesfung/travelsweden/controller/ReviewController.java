package com.mylesfung.travelsweden.controller;

import com.mylesfung.travelsweden.model.Review;
import com.mylesfung.travelsweden.repository.ReviewRepo;
import com.mylesfung.travelsweden.service.ReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "http://localhost:3000") // allow requests from React app
public class ReviewController {
    private final ReviewRepo reviewRepo;
    private final ReviewService reviewService;
    // Constructor injections :
    //  Spring Data JPA auto-generates repo and service implementation
    public ReviewController(ReviewRepo reviewRepo, ReviewService reviewService) {
        this.reviewRepo = reviewRepo;
        this.reviewService = reviewService;
    }

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewRepo.findAll();
    }
    @PostMapping
    public void addReview(
            @RequestParam String username,
            @RequestParam String title,
            @RequestParam Integer rating,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) byte[] image

    ) {
        //System.out.println("Description: " + description);
        // @RequestBody parses JSON input, whereas
        // @RequestParam parses HTML form inputs
        reviewService.addReview(username, title, rating, description, image);
    }
    @PutMapping
    public void editReview(Review rvw) {
        reviewService.editReview(rvw);
    }
    @DeleteMapping
    public void deleteReview(Review rvw) {
        reviewService.deleteReview(rvw);
    }

}
