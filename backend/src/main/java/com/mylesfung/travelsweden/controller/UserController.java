package com.mylesfung.travelsweden.controller;

import com.mylesfung.travelsweden.model.User;
import org.springframework.web.bind.annotation.*;
import com.mylesfung.travelsweden.repository.UserRepo;
import com.mylesfung.travelsweden.service.UserService;

import java.util.Optional;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserRepo userRepo;
    private final UserService userService;
    public record NewAccountRequest(String username, String password) {}

    private UserController(UserRepo userRepo, UserService userService) {
        this.userRepo = userRepo;
        this.userService = userService;
    }

    // Return uid for future queries in React local storage
    @PostMapping("/create-account")
    public Long createAccount(@RequestBody NewAccountRequest req) {
        return userService.createAccount(req.username, req.password);
    }
    @PostMapping("/sign-in")
    public void signIn(
            @RequestParam String username,
            @RequestParam String password)
    {
        userService.signIn(username, password);
    }
    @GetMapping("/my-account")
    public Optional<User> myAccount(@RequestBody Long uid) {
        return userRepo.findById(uid);
    }
    @PutMapping("/my-account")
    public Long editAccount(
            @RequestBody Long uid,
            @RequestBody NewAccountRequest req
    ) {
        return userService.editAccount(uid, req.username, req.password);
    }
    @DeleteMapping("/my-account")
    public void deleteAccount(@RequestBody Long uid) {
        userRepo.delete(userRepo.getById(uid));
    }
}
