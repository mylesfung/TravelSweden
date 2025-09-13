package com.mylesfung.travelsweden.controller;

import com.mylesfung.travelsweden.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mylesfung.travelsweden.repository.UserRepo;
import com.mylesfung.travelsweden.service.UserService;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/services/account")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserRepo userRepo;
    private final UserService userService;

    @GetMapping
    public Optional<User> myAccount(@RequestBody Long uid) {
        return userRepo.findById(uid);
    }
    // Return uid for future queries in React local storage
    @PostMapping
    public ResponseEntity<String> createAccount(
            @RequestParam String username,
            @RequestParam String password
    ) {
        return userService.createAccount(username, password);
    }
    @PutMapping
    public ResponseEntity<String> editAccount(
            @RequestParam Long uid,
            @RequestParam String username,
            @RequestParam String password
    ) {
        return userService.editAccount(uid, username, password);
    }
    @DeleteMapping
    public ResponseEntity<String> deleteAccount(@RequestBody Long uid) {
        userRepo.delete(userRepo.getById(uid));
        return ResponseEntity.ok("Account deleted");
    }
}
