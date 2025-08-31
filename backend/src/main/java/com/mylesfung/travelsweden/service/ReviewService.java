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
    public void addReview(String username, String title, Integer rating, String desc, byte[] image) {
        // Spring Data JPA converts Review => SQL at runtime and inserts into DB
        Review r = new Review();
        r.setUsername(username);
        r.setTitle(title);
        r.setDesc(desc);
        r.setRating(rating);
        if (image != null) {
            // Handle image parsing and setting
            r.setImage(image);
        }
        reviewRepo.save(r);
    }
    public void editReview(Review rvw) {}
    public void deleteReview(Review rvw) {}
}
