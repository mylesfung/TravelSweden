package com.mylesfung.travelsweden.repository;

import com.mylesfung.travelsweden.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// Repository layer interacts directly with DB
// This repo manages 'Review' objects with PK-type 'Long'
public interface ReviewRepo extends JpaRepository<Review, Long> {
    // Spring Data JPA generates CRUD methods at runtime:
    // save(), findAll(), findById(), deleteById(), ...
    // JPA also extrapolates meaning from the provided method name
    List<Review> findAllByUsername(String username);
}
