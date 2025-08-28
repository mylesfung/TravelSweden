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

    // Validation, user checks, business rules applied to controller methods
    public void addReview(Review rvw) {}
    public void editReview(Review rvw) {}
    public void deleteReview(Review rvw) {}
}
