package com.mylesfung.travelsweden.repository;

import com.mylesfung.travelsweden.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepo extends JpaRepository<Account, Long> {
    // DB access methods for Users
    // UserDetails is a built-in Spring Security class for storing user login
    Account findByUsername(String username);
}
