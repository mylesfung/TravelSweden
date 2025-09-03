package com.mylesfung.travelsweden.service;

import com.mylesfung.travelsweden.model.Review;
import com.mylesfung.travelsweden.repository.ReviewRepo;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    private final ReviewRepo reviewRepo;
    // Constructor injection
    private ReviewService (ReviewRepo reviewRepo) {
        this.reviewRepo = reviewRepo;
    }

    // Implement controller methods requiring validation, user checks, business rules, etc.
    public void addReview(String username, String title, Integer rating, String description, byte[] image) {
        // Hibernate/Spring Data JPA converts Review => SQL at runtime and inserts into DB
        Review r = new Review();
        r.setUsername(username);
        r.setTitle(title);
        r.setDescription(description);
        r.setRating(rating);
        // Handle image parsing and setting
        r.setImage(image);
        reviewRepo.save(r);
    }
    public void editReview(Review rvw) {
        // Logged-in users can edit reviews by ID
    }
    public void deleteReview(Review rvw) {
        // Logged-in users can delete reviews by ID
    }
}
