package com.mylesfung.travelsweden.controller;

import com.mylesfung.travelsweden.model.Review;
import com.mylesfung.travelsweden.repository.ReviewRepo;
import com.mylesfung.travelsweden.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor    // inject constructors automatically
@RequestMapping("/api/services/reviews")
@CrossOrigin(origins = "http://localhost:3000") // allow requests from React app
public class ReviewController {
    private final ReviewRepo reviewRepo;
    private final ReviewService reviewService;

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
            @RequestParam(required = false) MultipartFile image

    ) throws IOException {
        // @RequestBody parses JSON input, whereas
        // @RequestParam parses HTML form inputs
        reviewService.addReview(username, title, rating, description, image);
    }
    @PutMapping
    public void editReview(Review rvw) {
        reviewService.editReview(rvw);
    }
    @DeleteMapping
    public void deleteReview(@RequestBody Long id) {reviewRepo.deleteById(id);}
}
