package com.mylesfung.travelsweden.controller;

import com.mylesfung.travelsweden.model.Review;
import com.mylesfung.travelsweden.repository.ReviewRepo;
import com.mylesfung.travelsweden.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/service/reviews")
public class ReviewController {
    private final ReviewRepo reviewRepo;
    private final ReviewService reviewService;

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewRepo.findAll();
    }
    @GetMapping("/user")
    public List<Review> getAllReviewsByUsername(@RequestParam String username) {
        return reviewRepo.findAllByUsername(username);
    }
    @PostMapping
    public ResponseEntity<String> addReview(
            @RequestParam String username,
            @RequestParam String title,
            @RequestParam Integer rating,
            @RequestParam String description,
            @RequestParam(required = false) MultipartFile image

    ) throws IOException {
        // @RequestBody parses JSON input, whereas
        // @RequestParam parses HTML form inputs
        return reviewService.addReview(username, title, rating, description, image);
    }
    @PutMapping
    public ResponseEntity<String> editReview(
            @RequestParam Long id,
            @RequestParam String title,
            @RequestParam Integer rating,
            @RequestParam String description,
            @RequestParam(required = false) MultipartFile image
    ) throws IOException {
        return reviewService.editReview(id, title, rating, description, image);
    }
    @DeleteMapping
    public ResponseEntity<String> deleteReview(@RequestParam Long id) {
        reviewRepo.deleteById(id);
        return ResponseEntity.ok("Review deleted successfully!");
    }
}
