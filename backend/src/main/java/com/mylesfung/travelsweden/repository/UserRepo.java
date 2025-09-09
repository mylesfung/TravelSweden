package com.mylesfung.travelsweden.repository;

import com.mylesfung.travelsweden.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
    // DB access methods for Users
}
