package com.mylesfung.travelsweden.service;

import com.mylesfung.travelsweden.model.Review;
import com.mylesfung.travelsweden.repository.ReviewRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepo reviewRepo;

    // Implement controller methods requiring validation, user checks, business rules, etc.
    public void addReview(String username, String title, Integer rating, String description, MultipartFile image) throws IOException {
        // Hibernate/Spring Data JPA converts Review => SQL at runtime and inserts into DB
        Review review = new Review();
        review.setUsername(username);
        review.setTitle(title);
        review.setDescription(description);
        review.setRating(rating);
        if (image != null && !image.isEmpty()) {
            // Save image file to local storage
            String uploadDir = "uploads/";
            String fileName = UUID.randomUUID() + "-" + image.getOriginalFilename();
            Path filePath = Paths.get(uploadDir + fileName);
            Files.createDirectories(filePath.getParent());
            Files.write(filePath, image.getBytes());
            // Add image URL to Review object
            review.setImageURL("/uploads/" + fileName);
        }
        reviewRepo.save(review);
    }

    public void editReview(Review rvw) {
        // Implement PUT Review

    }
}
