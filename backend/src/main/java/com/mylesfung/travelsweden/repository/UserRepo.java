package com.mylesfung.travelsweden.repository;

import com.mylesfung.travelsweden.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepo extends JpaRepository<User, Long> {
    // DB access methods for Users
    // UserDetails is a built-in Spring Security class for storing user login
    UserDetails findByUsername(String username);
}
