package com.mylesfung.travelsweden.repository;

import com.mylesfung.travelsweden.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewsRepo extends JpaRepository<Review, Long> {


}
