package com.mylesfung.travelsweden.repository;

import com.mylesfung.travelsweden.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository layer interacts directly with DB

public interface ReviewRepo extends JpaRepository<Review, Long> {
    // Spring Data JPA generates CRUD methods at runtime:
    // save(), findAll(), findById(), deleteById(), ...
}
